type NetworkInfo = EventTarget & { saveData?: boolean; effectiveType?: string };
type Scene = {
  section: HTMLElement;
  video: HTMLVideoElement;
  url?: string;
  loaded: boolean;
  failed: boolean;
  target: number;
  seekingSince: number;
};

const cinema = document.querySelector<HTMLElement>('.cinema');
if (cinema) {
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const shortViewport = matchMedia('(max-height: 600px)');
  const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
  const button = cinema.querySelector<HTMLButtonElement>('[data-motion-toggle]')!;
  const controls = cinema.querySelector<HTMLElement>('.cinema-controls')!;
  const scenes: Scene[] = Array.from(cinema.querySelectorAll<HTMLElement>('[data-scene]')).map(section => ({
    section, video: section.querySelector<HTMLVideoElement>('video')!,
    loaded: false, failed: false, target: 0, seekingSince: 0,
  }));
  let paused = false;
  let loading = false;
  let readyToLoad = false;
  let destroyed = false;
  let frame = 0;
  let request: AbortController | undefined;
  const cancelRequest = () => request?.abort('preference');
  const constrained = () => motionPreference.matches || shortViewport.matches || Boolean(connection?.saveData) || /(^|-)2g$/.test(connection?.effectiveType ?? '');
  const enabled = () => !constrained() && !paused && !document.hidden && !destroyed;
  const distance = (scene: Scene) => {
    const rect = scene.section.getBoundingClientRect();
    return rect.bottom < 0 ? -rect.bottom : rect.top > innerHeight ? rect.top - innerHeight : 0;
  };

  function showDecodedFrame(scene: Scene) {
    if (scene.loaded && scene.video.readyState >= 2 && !constrained()) scene.video.classList.add('is-ready');
  }

  function seek(scene: Scene) {
    if (!enabled() || !scene.loaded || !Number.isFinite(scene.video.duration)) return;
    // One seek in flight; scrolling replaces its destination. Recover if a browser drops seeked.
    if (scene.video.seeking && performance.now() - scene.seekingSince < 1500) return;
    if (Math.abs(scene.video.currentTime - scene.target) < .035) return;
    scene.seekingSince = performance.now();
    try { scene.video.currentTime = scene.target; } catch { /* Preserve the poster if the decoder fails. */ }
  }

  for (const scene of scenes) {
    scene.video.addEventListener('seeked', () => {
      // Some browsers suppress frame callbacks while opacity is zero. Decoded data + seeked
      // is the readiness gate; the next paint reveals it over the poster.
      requestAnimationFrame(() => showDecodedFrame(scene));
      seek(scene);
    });
    scene.video.addEventListener('error', () => {
      scene.failed = true;
      scene.video.classList.remove('is-ready');
    });
  }

  function metadata(video: HTMLVideoElement, signal: AbortSignal) {
    return new Promise<void>((resolve, reject) => {
      let timer: ReturnType<typeof setTimeout>;
      const finish = (error?: Error) => {
        clearTimeout(timer);
        video.removeEventListener('loadedmetadata', loaded);
        video.removeEventListener('error', failed);
        signal.removeEventListener('abort', aborted);
        error ? reject(error) : resolve();
      };
      const loaded = () => finish();
      const failed = () => finish(new Error('media unavailable'));
      const aborted = () => finish(new Error('media canceled'));
      video.addEventListener('loadedmetadata', loaded, { once: true });
      video.addEventListener('error', failed, { once: true });
      signal.addEventListener('abort', aborted, { once: true });
      timer = setTimeout(failed, 8000);
      video.load();
    });
  }

  async function loadNearest() {
    if (!readyToLoad || loading || !enabled()) return;
    const scene = scenes.filter(item => !item.loaded && !item.failed && distance(item) < 400)
      .sort((a, b) => distance(a) - distance(b))[0];
    if (!scene) return;
    loading = true;
    const controller = new AbortController();
    request = controller;
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const source = matchMedia('(max-width: 767px)').matches ? scene.video.dataset.mobile : scene.video.dataset.desktop;
      const response = await fetch(source!, { signal: controller.signal });
      if (!response.ok) throw new Error('media unavailable');
      const blob = await response.blob();
      if (!enabled()) throw new Error('media paused');
      scene.url = URL.createObjectURL(blob);
      scene.video.src = scene.url;
      await metadata(scene.video, controller.signal);
      scene.loaded = true;
      // Safari needs a muted decode cycle before reliable paused seeking. Bound it on blocked autoplay.
      let primeTimer: ReturnType<typeof setTimeout> | undefined;
      try {
        await Promise.race([
          scene.video.play(),
          new Promise<void>(resolve => { primeTimer = setTimeout(resolve, 1200); }),
        ]);
      } catch { /* Poster stays visible until a decoded frame arrives. */ }
      finally { clearTimeout(primeTimer); scene.video.pause(); }
      update();
    } catch {
      scene.video.classList.remove('is-ready');
      if (scene.url) URL.revokeObjectURL(scene.url);
      scene.url = undefined;
      scene.video.removeAttribute('src');
      scene.video.load();
      // Failed files cannot block later scenes. Preference changes may retry later.
      scene.failed = controller.signal.reason !== 'preference' && enabled();
    } finally {
      clearTimeout(timeout);
      if (request === controller) request = undefined;
      loading = false;
      void loadNearest();
    }
  }

  function update() {
    frame = 0;
    if (!enabled()) return;
    for (const scene of scenes) {
      const rect = scene.section.getBoundingClientRect();
      const stageHeight = scene.section.firstElementChild!.getBoundingClientRect().height;
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - stageHeight)));
      scene.section.style.setProperty('--scene-progress', String(progress));
      if (scene.loaded && distance(scene) === 0) {
        scene.target = Math.max(.001, Math.min(scene.video.duration - .05, progress * scene.video.duration));
        seek(scene);
      }
    }
    void loadNearest();
  }

  function schedule() { if (!frame) frame = requestAnimationFrame(update); }

  function preferencesChanged() {
    if (constrained()) {
      cancelRequest();
      cinema!.classList.remove('has-motion');
      controls.hidden = true;
      for (const scene of scenes) {
        scene.video.pause();
        scene.video.classList.remove('is-ready');
        scene.video.removeAttribute('src');
        scene.video.load();
        if (scene.url) URL.revokeObjectURL(scene.url);
        scene.url = undefined;
        scene.loaded = false;
        scene.failed = false;
      }
    } else {
      cinema!.classList.add('has-motion');
      controls.hidden = false;
      schedule();
    }
  }

  button.addEventListener('click', () => {
    paused = !paused;
    button.setAttribute('aria-pressed', String(paused));
    button.querySelector('span')!.textContent = paused ? button.dataset.on! : button.dataset.off!;
    if (paused) {
      cancelRequest();
      scenes.forEach(scene => scene.video.pause());
    }
    else schedule();
  });
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) scenes.forEach(scene => scene.video.pause());
    schedule();
  });
  motionPreference.addEventListener('change', preferencesChanged);
  shortViewport.addEventListener('change', preferencesChanged);
  connection?.addEventListener('change', preferencesChanged);
  preferencesChanged();

  const afterPaint = () => setTimeout(() => { readyToLoad = true; schedule(); }, 600);
  if (document.readyState === 'complete') afterPaint();
  else addEventListener('load', afterPaint, { once: true });

  addEventListener('pagehide', () => {
    destroyed = true;
    cancelRequest();
    cancelAnimationFrame(frame);
    frame = 0;
    for (const scene of scenes) {
      scene.video.pause();
      scene.video.classList.remove('is-ready');
      scene.video.removeAttribute('src');
      scene.video.load();
      if (scene.url) URL.revokeObjectURL(scene.url);
      scene.url = undefined;
      scene.loaded = false;
    }
  });
  addEventListener('pageshow', event => {
    if (event.persisted) { destroyed = false; preferencesChanged(); schedule(); }
  });
}

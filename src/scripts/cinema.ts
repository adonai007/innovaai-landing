/**
 * Cinematic chapter (components/CinematicStory.astro): scroll-scrubbed clips over their posters.
 *
 * The tall sticky layout is CSS-first (html.motion on screens taller than 37.5625em, which is 601px at the
 * default font size; html.slow-net opts out). This script adds .is-static when a constraint applies that only JS
 * sees (a preference or network change after load, copy enlarged beyond a pinned frame), loads the clips
 * nearest-first once the visitor scrolls after window load, seeks them from scroll progress, pans the portrait
 * crop, feeds the chapter bar (shown only while a stage is pinned) and owns the pause control.
 * No GSAP: Lenis scrolls the window natively, so plain scroll events keep arriving while it smooths.
 * When the page height changes after load it dispatches `layout:refresh` on window (the motion chunk answers
 * with ScrollTrigger.refresh, so the Ejemplo below re-measures).
 */
type NetworkInfo = EventTarget & { saveData?: boolean; effectiveType?: string };
type Scene = {
  section: HTMLElement;
  stage: HTMLElement;
  frame: HTMLElement;
  copy: HTMLElement;
  video: HTMLVideoElement;
  /** portrait crop: horizontal focus (%) at progress 0 and 1 */
  focus?: [number, number];
  focusX?: string;
  url?: string;
  loaded: boolean;
  failed: boolean;
  target: number;
  seekingSince: number;
};

/** Clip downloads start this far (px) before a scene enters the viewport, once the visitor scrolls. */
const LOOKAHEAD = 400;

function initCinema(cinema: HTMLElement, controls: HTMLElement, button: HTMLButtonElement, label: HTMLElement) {
  const root = document.documentElement;
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  // Keep in sync with the CSS media query that builds the tall tracks. Media query ems follow the
  // visitor's default font size, so a larger default text size switches to the static flow sooner.
  const tallViewport = matchMedia('(min-height: 37.5625em)');
  const portrait = matchMedia(cinema.dataset.portrait ?? '(max-width: 767px)');
  const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
  const scenes: Scene[] = Array.from(cinema.querySelectorAll<HTMLElement>('[data-scene]')).flatMap((section) => {
    const stage = section.querySelector<HTMLElement>('[data-scene-stage]');
    const frame = section.querySelector<HTMLElement>('[data-scene-frame]');
    const copy = section.querySelector<HTMLElement>('[data-scene-copy]');
    const video = section.querySelector<HTMLVideoElement>('video');
    const [from, to] = (section.dataset.focus ?? '').split(' ').map(Number);
    const focus: [number, number] | undefined = Number.isFinite(from) && Number.isFinite(to) ? [from, to] : undefined;
    return stage && frame && copy && video
      ? [{ section, stage, frame, copy, video, focus, loaded: false, failed: false, target: 0, seekingSince: 0 }]
      : [];
  });
  let paused = false;
  let loading: Scene | undefined;
  let readyToLoad = false;
  let engaged = false;
  let destroyed = false;
  let tooTall = false;
  let isStatic: boolean | undefined;
  let frame = 0;
  let fitFrame = 0;
  let viewportKey = '';
  let request: AbortController | undefined;
  /** A string reason marks a deliberate cancel: the scene is not marked failed and may load again later. */
  const cancelRequest = (reason: 'preference' | 'far') => request?.abort(reason);
  const constrained = () =>
    root.classList.contains('still') ||
    // set by Layout.astro on 2G at first paint: the CSS keeps the static flow for the whole visit
    root.classList.contains('slow-net') ||
    motionPreference.matches ||
    !tallViewport.matches ||
    tooTall ||
    Boolean(connection?.saveData) ||
    /(^|-)2g$/.test(connection?.effectiveType ?? '');
  const enabled = () => !constrained() && !paused && !document.hidden && !destroyed;
  const distance = (scene: Scene) => {
    const rect = scene.section.getBoundingClientRect();
    return rect.bottom < 0 ? -rect.bottom : rect.top > innerHeight ? rect.top - innerHeight : 0;
  };
  const refreshLayout = () => dispatchEvent(new Event('layout:refresh'));

  function showDecodedFrame(scene: Scene) {
    if (scene.loaded && scene.video.readyState >= 2 && !constrained()) scene.video.classList.add('is-ready');
  }

  function seek(scene: Scene) {
    if (!enabled() || !scene.loaded || !Number.isFinite(scene.video.duration)) return;
    // One seek in flight; scrolling replaces its destination. Recover if a browser drops seeked.
    if (scene.video.seeking && performance.now() - scene.seekingSince < 1500) return;
    if (Math.abs(scene.video.currentTime - scene.target) < 0.035) return;
    scene.seekingSince = performance.now();
    try {
      scene.video.currentTime = scene.target;
    } catch {
      /* Preserve the poster if the decoder fails. */
    }
  }

  function unload(scene: Scene) {
    scene.video.pause();
    scene.video.classList.remove('is-ready');
    scene.video.removeAttribute('src');
    scene.video.load();
    if (scene.url) URL.revokeObjectURL(scene.url);
    scene.url = undefined;
    scene.loaded = false;
  }

  /** Portrait crop: pan toward each scene's payoff (CSS keeps 25% for the static and no-JS layouts). */
  function setFocus(scene: Scene, progress: number | null) {
    let value = '';
    if (progress !== null && scene.focus) {
      const eased = progress * progress * (3 - 2 * progress);
      value = `${(scene.focus[0] + (scene.focus[1] - scene.focus[0]) * eased).toFixed(2)}%`;
    }
    if (value === (scene.focusX ?? '')) return;
    scene.focusX = value;
    if (value) scene.section.style.setProperty('--focus-x', value);
    else scene.section.style.removeProperty('--focus-x');
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
        if (error) reject(error);
        else resolve();
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
    // Nothing loads for a visitor who never scrolls: at progress 0 the poster is the clip's first frame.
    if (!readyToLoad || !engaged || loading || !enabled()) return;
    const scene = scenes
      .filter((item) => !item.loaded && !item.failed && distance(item) < LOOKAHEAD)
      .sort((a, b) => distance(a) - distance(b))[0];
    if (!scene) return;
    loading = scene;
    const controller = new AbortController();
    request = controller;
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const source = portrait.matches ? scene.video.dataset.mobile : scene.video.dataset.desktop;
      if (!source) throw new Error('media unavailable');
      const response = await fetch(source, { signal: controller.signal });
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
          new Promise<void>((resolve) => {
            primeTimer = setTimeout(resolve, 1200);
          }),
        ]);
      } catch {
        /* Poster stays visible until a decoded frame arrives. */
      } finally {
        clearTimeout(primeTimer);
        scene.video.pause();
      }
      update();
    } catch {
      unload(scene);
      // Failed files cannot block later scenes. Deliberate cancels (preference, scrolled away) may retry later.
      scene.failed = typeof controller.signal.reason !== 'string' && enabled();
    } finally {
      clearTimeout(timeout);
      if (request === controller) request = undefined;
      loading = undefined;
      void loadNearest();
    }
  }

  /** Progress feeds the chapter bar even while paused (the tracks stay sticky); seeking and loading need motion on. */
  function update() {
    frame = 0;
    if (destroyed || constrained()) return;
    const active = enabled();
    const panning = portrait.matches;
    let pinned = false;
    scenes.forEach((scene, index) => {
      const rect = scene.section.getBoundingClientRect();
      const stageHeight = scene.stage.getBoundingClientRect().height;
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - stageHeight)));
      if (rect.top <= 0.5 && rect.bottom >= stageHeight - 0.5) pinned = true;
      controls.style.setProperty(`--cinema-p${index}`, progress.toFixed(4));
      setFocus(scene, panning ? progress : null);
      if (active && scene.loaded && distance(scene) === 0) {
        scene.target = Math.max(0.001, Math.min(scene.video.duration - 0.05, progress * scene.video.duration));
        seek(scene);
      }
    });
    // The bar floats over the photo: show it only while a stage is pinned over its scrim, so it never sits
    // on moving copy or on the bright middle of a frame (keyboard focus keeps it visible through CSS).
    controls.classList.toggle('is-active', pinned);
    // Skipping past the chapter cancels a download that is no longer needed.
    if (loading && distance(loading) > innerHeight) cancelRequest('far');
    if (active) void loadNearest();
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(update);
  }

  /**
   * Does every scene's copy fit its pinned frame? Text enlarged beyond 100svh (text-only zoom, OS font
   * scaling) would otherwise slide under the header pill or above the viewport with no way to scroll to it.
   * Measured against the pinned layout, so .is-static comes off for a synchronous read (no paint between).
   */
  function copyOverflows() {
    const wasStatic = cinema.classList.contains('is-static');
    if (wasStatic) cinema.classList.remove('is-static');
    const over = scenes.some(({ frame: box, copy }) => {
      const style = getComputedStyle(box);
      const room = box.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
      return copy.offsetHeight > room + 1;
    });
    if (wasStatic) cinema.classList.add('is-static');
    return over;
  }

  function preferencesChanged() {
    tooTall = copyOverflows();
    const off = constrained();
    if (off !== isStatic) {
      const changed = isStatic !== undefined;
      isStatic = off;
      cinema.classList.toggle('is-static', off);
      controls.hidden = off;
      // The page below changed height: let the Ejemplo's ScrollTrigger measure again (no listener before it loads).
      // Deferred, because under reduced motion global.css gives every property a 1ms transition, so the
      // new heights only land a frame later.
      if (changed) setTimeout(refreshLayout, 150);
    }
    if (off) {
      cancelRequest('preference');
      controls.classList.remove('is-active');
      for (const scene of scenes) {
        unload(scene);
        setFocus(scene, null);
        scene.failed = false;
      }
    } else schedule();
  }

  function checkFit() {
    if (!fitFrame)
      fitFrame = requestAnimationFrame(() => {
        fitFrame = 0;
        preferencesChanged();
      });
  }

  button.addEventListener('click', () => {
    paused = !paused;
    button.toggleAttribute('data-paused', paused);
    label.textContent = (paused ? button.dataset.on : button.dataset.off) ?? '';
    if (paused) {
      cancelRequest('preference');
      scenes.forEach((scene) => scene.video.pause());
    }
    schedule();
  });
  addEventListener(
    'scroll',
    () => {
      engaged = true;
      schedule();
    },
    { passive: true },
  );
  addEventListener(
    'resize',
    () => {
      // Mobile toolbars resize the visual viewport on every scroll; only a real viewport change can affect the fit.
      const key = `${innerWidth}x${root.clientHeight}`;
      if (key !== viewportKey) {
        viewportKey = key;
        checkFit();
      }
      schedule();
    },
    { passive: true },
  );
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) scenes.forEach((scene) => scene.video.pause());
    schedule();
  });
  motionPreference.addEventListener('change', preferencesChanged);
  tallViewport.addEventListener('change', preferencesChanged);
  connection?.addEventListener('change', preferencesChanged);
  // The copy's own size changes with font loading and text-only zoom, which fire no resize.
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(checkFit);
    scenes.forEach((scene) => observer.observe(scene.copy));
  }
  viewportKey = `${innerWidth}x${root.clientHeight}`;
  preferencesChanged();

  const afterPaint = () =>
    setTimeout(() => {
      readyToLoad = true;
      // Deep links and restored scroll positions count as engagement.
      if (scrollY > 0) engaged = true;
      schedule();
    }, 600);
  if (document.readyState === 'complete') afterPaint();
  else addEventListener('load', afterPaint, { once: true });

  addEventListener('pagehide', () => {
    destroyed = true;
    cancelRequest('preference');
    cancelAnimationFrame(frame);
    frame = 0;
    scenes.forEach(unload);
  });
  addEventListener('pageshow', (event) => {
    if (event.persisted) {
      destroyed = false;
      preferencesChanged();
      schedule();
    }
  });
}

const cinema = document.querySelector<HTMLElement>('[data-cinema]');
const controls = cinema?.querySelector<HTMLElement>('[data-cinema-controls]');
const button = controls?.querySelector<HTMLButtonElement>('[data-motion-toggle]');
const label = button?.querySelector<HTMLElement>('[data-motion-label]');
if (cinema && controls && button && label) initCinema(cinema, controls, button, label);

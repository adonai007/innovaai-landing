/**
 * Intro logo reveal (imported by Intro.astro). Plays only while html.intro-play is set; the mode script in
 * Layout.astro sets it before first paint (html.motion, no URL hash, not yet played this session) and arms a
 * 4s safety timer that removes it, so the final state always shows even if this module never runs.
 *
 * Timeline (seconds): 0.2 a spark enters and traces the mark's orbit on a canvas, with curve-editor handles;
 * 1.2 the arrow snaps on; 1.25 to 1.6 the whole path shrinks into the mark's own place; 1.6 the HTML mark and
 * wordmark land (.is-landed, CSS keyframes) while the canvas draws rings and sparks; 2.2 the line and the links
 * rise (.is-done); 3.2 the canvas goes away and html.intro-play is removed. Scrolling, a key or a tap ends it.
 *
 * Also, in every mode with JS: the nav's own logo hides while the intro lockup is on screen (a hand-off).
 */
declare global {
  interface Window { __introTimer?: number }
}

const SESSION_KEY = 'innovai-intro';
const T_SPARK = 0.2, T_ARRIVE = 1.2, T_COLLAPSE = 1.25, T_LAND = 1.6, T_DONE = 2.2, T_END = 3.2;

type Pt = { x: number; y: number };
// the orbit of the mark, in the 332-unit tile, relative to the tile centre
const P0 = { x: -136, y: 58 }, P1 = { x: -112, y: 122 }, P2 = { x: 8, y: 42 }, P3 = { x: 128, y: -96 };
const STAR = { x: 8, y: -10 };
const NODES = [0.12, 0.26, 0.4, 0.54, 0.68, 0.82];

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const prog = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
const eInOut = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const eOut = (k: number) => 1 - Math.pow(1 - k, 3);
const eBack = (k: number) => 1 + 2.9 * Math.pow(k - 1, 3) + 1.9 * Math.pow(k - 1, 2);

function bez(s: number): Pt {
  const m = 1 - s, a = m * m * m, b = 3 * m * m * s, c = 3 * m * s * s, d = s * s * s;
  return { x: a * P0.x + b * P1.x + c * P2.x + d * P3.x, y: a * P0.y + b * P1.y + c * P2.y + d * P3.y };
}
function bezTan(s: number): Pt {
  const m = 1 - s;
  const x = 3 * m * m * (P1.x - P0.x) + 6 * m * s * (P2.x - P1.x) + 3 * s * s * (P3.x - P2.x);
  const y = 3 * m * m * (P1.y - P0.y) + 6 * m * s * (P2.y - P1.y) + 3 * s * s * (P3.y - P2.y);
  const l = Math.hypot(x, y) || 1;
  return { x: x / l, y: y / l };
}
function hex(a: string, b: string, k: number) {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return `rgb(${pa.map((v, i) => Math.round(lerp(v, pb[i], k))).join(',')})`;
}
const trailColor = (s: number) => (s < 0.6 ? hex('#1e6bff', '#22c3e6', s / 0.6) : hex('#22c3e6', '#3fe3a8', (s - 0.6) / 0.4));

/** spark position along the orbit: accelerates, then eases into the arrow */
function sparkU(t: number) {
  if (t < T_SPARK) return 0;
  const mid = (T_SPARK + T_ARRIVE) / 2 + 0.05;
  if (t < mid) { const p = prog(t, T_SPARK, mid); return 0.55 * p * p; }
  const p = prog(t, mid, T_ARRIVE); return 0.55 + 0.45 * (1 - (1 - p) * (1 - p));
}
function nodeTime(s: number) {
  const mid = (T_SPARK + T_ARRIVE) / 2 + 0.05;
  if (s <= 0.55) return T_SPARK + (mid - T_SPARK) * Math.sqrt(s / 0.55);
  return mid + (T_ARRIVE - mid) * (1 - Math.sqrt(1 - (s - 0.55) / 0.45));
}

function initNavHandoff(lockup: HTMLElement) {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    ([e]) => nav.classList.toggle('has-intro-logo', e.isIntersecting),
    { rootMargin: `-${nav.offsetHeight}px 0px 0px 0px` },
  );
  io.observe(lockup);
}

function initIntro() {
  const root = document.documentElement;
  const section = document.querySelector<HTMLElement>('[data-intro]');
  const canvas = section?.querySelector<HTMLCanvasElement>('[data-intro-canvas]');
  const mark = section?.querySelector<SVGSVGElement>('[data-intro-mark]');
  const lockup = section?.querySelector<HTMLElement>('[data-intro-lockup]');
  if (!section || !canvas || !mark || !lockup) return;
  initNavHandoff(lockup);

  if (!root.classList.contains('intro-play')) return;
  window.clearTimeout(window.__introTimer);
  const ctx = canvas.getContext('2d');
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    window.removeEventListener('scroll', onInput);
    window.removeEventListener('keydown', onInput);
    section.removeEventListener('pointerdown', onInput);
    canvas.hidden = true;
    section.classList.remove('is-landed', 'is-done');
    root.classList.remove('intro-play');
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* storage blocked: it may play again */ }
  };
  const onInput = () => finish();
  if (!ctx || document.hidden || window.scrollY > 4) return finish();

  window.addEventListener('scroll', onInput, { passive: true });
  window.addEventListener('keydown', onInput);
  section.addEventListener('pointerdown', onInput);

  let W = 0, H = 0, dpr = 1;
  let markC: Pt = { x: 0, y: 0 }, markS = 1;
  const measure = () => {
    const r = section.getBoundingClientRect(), m = mark.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    markC = { x: m.left - r.left + m.width / 2, y: m.top - r.top + m.height / 2 };
    markS = m.width / 332;
  };
  measure();
  window.addEventListener('resize', measure);
  canvas.hidden = false;

  const bigS = Math.max(0.6, Math.min(W / 560, H / 370));
  const bigC = { x: W * 0.5, y: H * 0.58 };

  const frame = (t: number) => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    // faint grid, gone once the logo has landed
    const gridA = Math.min(prog(t, 0, 0.3), 1 - prog(t, T_LAND, 2.4));
    if (gridA > 0) {
      ctx.save(); ctx.globalAlpha = gridA; ctx.strokeStyle = 'rgba(90,150,240,.09)'; ctx.lineWidth = 1; ctx.beginPath();
      for (let x = (W / 2) % 60; x < W; x += 60) { ctx.moveTo(Math.round(x) + 0.5, 0); ctx.lineTo(Math.round(x) + 0.5, H); }
      for (let y = (H / 2) % 60; y < H; y += 60) { ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(W, Math.round(y) + 0.5); }
      ctx.stroke(); ctx.restore();
    }

    // the orbit: big and centred, then shrinking into the mark
    const k = eInOut(prog(t, T_COLLAPSE, T_LAND));
    const C = { x: lerp(bigC.x, markC.x, k), y: lerp(bigC.y, markC.y, k) };
    const S = lerp(bigS, markS, k), wf = lerp(0.42, 1, k);
    const tr = (p: Pt) => ({ x: C.x + S * p.x, y: C.y + S * p.y });

    if (t < T_LAND) {
      const u = sparkU(t);
      if (u > 0) {
        const N = 90, n = Math.ceil(u * N), left: Pt[] = [], right: Pt[] = [], mid: { s: number; p: Pt }[] = [];
        for (let i = 0; i <= n; i++) {
          const s = Math.min(u, i / N), p = tr(bez(s)), g = bezTan(Math.min(0.999, Math.max(0.001, s)));
          const w = (2.5 + 12.5 * s) * S * wf * 0.5 * (s < 0.04 ? s / 0.04 : 1);
          left.push({ x: p.x - g.y * w, y: p.y + g.x * w }); right.push({ x: p.x + g.y * w, y: p.y - g.x * w }); mid.push({ s, p });
        }
        const a0 = tr(bez(0)), a1 = tr(bez(Math.max(u, 0.05)));
        const grad = ctx.createLinearGradient(a0.x, a0.y, a1.x, a1.y);
        for (let i = 0; i <= 6; i++) grad.addColorStop(i / 6, trailColor((u * i) / 6));
        ctx.save(); ctx.fillStyle = grad; ctx.shadowColor = 'rgba(40,170,255,.55)'; ctx.shadowBlur = 22 * wf;
        ctx.beginPath(); ctx.moveTo(left[0].x, left[0].y);
        for (const q of left) ctx.lineTo(q.x, q.y);
        for (let i = right.length - 1; i >= 0; i--) ctx.lineTo(right[i].x, right[i].y);
        ctx.closePath(); ctx.fill(); ctx.restore();

        // arrowhead
        if (t >= T_ARRIVE) {
          const kk = Math.max(0, eBack(prog(t, T_ARRIVE, T_ARRIVE + 0.18)));
          const tip0 = tr(P3), g = bezTan(1), nx = -g.y, ny = g.x, sc = S * wf * kk;
          const len = 54 * sc, half = 27 * sc;
          const tip = { x: tip0.x + g.x * len * 0.78, y: tip0.y + g.y * len * 0.78 };
          const base = { x: tip.x - g.x * len, y: tip.y - g.y * len };
          const inner = { x: base.x + g.x * 13 * sc, y: base.y + g.y * 13 * sc };
          ctx.save(); ctx.fillStyle = '#41e6b2'; ctx.shadowColor = 'rgba(63,227,168,.7)'; ctx.shadowBlur = 18 * wf;
          ctx.beginPath(); ctx.moveTo(tip.x, tip.y); ctx.lineTo(base.x + nx * half, base.y + ny * half);
          ctx.lineTo(inner.x, inner.y); ctx.lineTo(base.x - nx * half, base.y - ny * half); ctx.closePath(); ctx.fill(); ctx.restore();
        }

        // data nodes and bezier handles, while the path is still big
        const fade = 1 - prog(t, T_ARRIVE, T_COLLAPSE + 0.1);
        if (fade > 0) {
          ctx.save(); ctx.globalAlpha = fade; ctx.lineWidth = 2; ctx.strokeStyle = '#bfe9ff'; ctx.fillStyle = '#000';
          for (const s of NODES) {
            const tn = nodeTime(s); if (t < tn) continue;
            const p = tr(bez(s)), r = 5 * Math.max(0, eBack(prog(t, tn, tn + 0.14)));
            ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 7); ctx.fill(); ctx.stroke();
          }
          const handles = [
            { a: P0, h: P1, t0: 0.75 },
            { a: P3, h: { x: P3.x + (P2.x - P3.x) * 0.55, y: P3.y + (P2.y - P3.y) * 0.55 }, t0: T_ARRIVE },
          ];
          for (const hd of handles) {
            if (t < hd.t0) continue;
            const kk = Math.max(0, eBack(prog(t, hd.t0, hd.t0 + 0.18)));
            const a = tr(hd.a), hp = tr(hd.h), ex = lerp(a.x, hp.x, kk), ey = lerp(a.y, hp.y, kk);
            ctx.strokeStyle = 'rgba(170,210,255,.75)'; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(ex, ey); ctx.stroke();
            ctx.save(); ctx.translate(ex, ey); ctx.rotate(Math.PI / 4);
            ctx.strokeStyle = '#9fd4ff'; ctx.lineWidth = 2; ctx.fillRect(-6 * kk, -6 * kk, 12 * kk, 12 * kk); ctx.strokeRect(-6 * kk, -6 * kk, 12 * kk, 12 * kk);
            ctx.restore();
            ctx.fillStyle = '#eaf7ff'; ctx.fillRect(a.x - 5, a.y - 5, 10, 10); ctx.fillStyle = '#000';
          }
          ctx.restore();
        }

        // the spark: rides the orbit, then dives into the star
        let sp: Pt;
        if (t < T_COLLAPSE) sp = tr(bez(u));
        else { const q = Math.pow(prog(t, T_COLLAPSE, T_LAND), 3); sp = tr({ x: lerp(P3.x, STAR.x, q), y: lerp(P3.y, STAR.y, q) }); }
        const r = 30 * (1 + 1.2 * prog(t, 1.4, T_LAND)) * Math.min(1, prog(t, T_SPARK, T_SPARK + 0.12));
        if (r > 0) {
          ctx.save(); ctx.globalCompositeOperation = 'lighter';
          const g = ctx.createRadialGradient(sp.x, sp.y, 0, sp.x, sp.y, r);
          g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.18, 'rgba(180,245,255,.95)');
          g.addColorStop(0.45, 'rgba(40,170,255,.35)'); g.addColorStop(1, 'rgba(20,100,255,0)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(sp.x, sp.y, r, 0, 7); ctx.fill(); ctx.restore();
        }
      }
    }

    // impact: flash, rings and sparks around the star
    const d = t - T_LAND;
    if (d >= 0 && d < 1.3) {
      const cx = markC.x + STAR.x * markS, cy = markC.y + STAR.y * markS, R = Math.max(W, H);
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      const fa = 0.5 * Math.exp(-11 * d);
      if (fa > 0.01) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.35);
        g.addColorStop(0, `rgba(200,235,255,${fa})`); g.addColorStop(0.4, `rgba(40,120,255,${fa * 0.4})`); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }
      for (let i = 0; i < 3; i++) {
        const p = prog(d, i * 0.08, i * 0.08 + 1.1); if (p <= 0 || p >= 1) continue;
        ctx.strokeStyle = i === 1 ? '#3fe3a8' : '#3a9dff'; ctx.globalAlpha = Math.pow(1 - p, 2) * 0.8; ctx.lineWidth = 3 * (1 - p) + 0.6;
        ctx.beginPath(); ctx.arc(cx, cy, 30 + R * 0.32 * eOut(p), 0, 7); ctx.stroke();
      }
      const p = prog(d, 0, 0.5);
      if (p < 1) {
        ctx.lineWidth = 2.5; ctx.globalAlpha = 1 - p;
        for (let i = 0; i < 18; i++) {
          const a = (i / 18) * Math.PI * 2 + (i % 3) * 0.07, r0 = 50 * markS * 3 + R * 0.15 * eOut(p) * (0.8 + (i % 4) * 0.12), len = 40 * (1 - p);
          ctx.strokeStyle = i % 2 ? '#7fe9ff' : '#3fe3a8';
          ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0); ctx.lineTo(cx + Math.cos(a) * (r0 + len), cy + Math.sin(a) * (r0 + len)); ctx.stroke();
        }
      }
      ctx.restore();
    }
  };

  const t0 = performance.now();
  let landed = false, done = false;
  const tick = (now: number) => {
    if (finished) return;
    const t = (now - t0) / 1000;
    if (!landed && t >= T_LAND) { landed = true; section.classList.add('is-landed'); }
    if (!done && t >= T_DONE) { done = true; section.classList.add('is-done'); }
    if (t >= T_END) return finish();
    frame(t);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

initIntro();

export {};

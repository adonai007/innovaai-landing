/**
 * Ejemplo timeline (SPEC §4.2). Loaded only under html.motion (dynamic motion chunk).
 *
 * Timeline units run 0..100 over the sticky track ('top top' to 'bottom bottom').
 * - GSAP tweens drive transforms and opacity only: row entrances, the pointer, presses, ripple, log bar.
 *   Every tween is a fromTo with explicit values, so scrubbing in either direction lands on exact states.
 * - render(p) is pure: it sets every text, chip, count and data-state attribute from p alone.
 *   It runs from onUpdate and does no layout reads.
 * - Pointer targets are measured outside onUpdate (on setup and on every ScrollTrigger refreshInit).
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Chip = 'new' | 'draft' | 'approved' | 'sent';
type Point = { x: number; y: number };

const map = (p: number, a: number, b: number) => Math.min(1, Math.max(0, (p - a) / (b - a)));
const CHIP_CLASS: Record<Chip, string> = { new: 'chip-new', draft: 'chip-draft', approved: 'chip-ok', sent: 'chip-ok' };
const ROW_IN = [6, 11, 16];
/** tip of the Phosphor cursor glyph inside its 24px box */
const TIP = 3.5;

export function initExample() {
  const track = document.querySelector<HTMLElement>('[data-story="example"]');
  const win = track?.querySelector<HTMLElement>('[data-ex-window]');
  if (!track || !win) return;
  gsap.registerPlugin(ScrollTrigger);

  const one = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = win) => root.querySelector<T>(sel)!;
  const all = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = track) => [...root.querySelectorAll<T>(sel)];

  const labels = JSON.parse(win.dataset.chips ?? '{}') as Record<Chip, string>;
  const rows = (['wa', 'pdf', 'voice'] as const).map((id) => {
    const el = one(`[data-ex-row="${id}"]`);
    return { el, chip: el && one('[data-ex-chip]', el), unread: el && one('[data-ex-unread]', el), summary: el && one('[data-ex-summary]', el) };
  });
  const steps = all('[data-ex-step]');
  const dots = all('[data-ex-dot]');
  const stepsCol = one('[data-ex-steps]', track);
  const countPending = one('[data-ex-count="pending"]');
  const countApproved = one('[data-ex-count="approved"]');
  const detail = one('[data-ex-detail]');
  const prep = one('[data-ex-prep]');
  const before = one('[data-ex-before]');
  const old = one('[data-ex-old]');
  const neu = one('[data-ex-new]');
  const after = one('[data-ex-after]');
  const context = one('[data-ex-context]');
  const source = one('[data-ex-source]');
  const actions = one('[data-ex-actions]');
  const approveBtn = one('[data-ex-approve]');
  const sendBtn = one('[data-ex-send]');
  const ripple = one('[data-ex-ripple]');
  const log = one('[data-ex-log]');
  const cursor = one('[data-ex-cursor]');

  // a missing hook must never break the other motion modules: leave the static final state in place
  const required = [stepsCol, countPending, countApproved, detail, prep, before, old, neu, after, context, source, actions, approveBtn, sendBtn, ripple, log, cursor];
  if (required.some((el) => !el) || rows.some((r) => !r.el || !r.chip || !r.unread || !r.summary) || steps.length !== 4) return;

  const T = {
    before: before.textContent ?? '',
    old: old.textContent ?? '',
    neu: neu.textContent ?? '',
    after: after.textContent ?? '',
  };
  const draftLen = T.before.length + T.old.length + T.after.length;

  // ---------- pure render ----------
  const setText = (el: HTMLElement, s: string) => {
    if (el.textContent !== s) el.textContent = s;
  };
  const setFlag = (el: HTMLElement, name: string, on: boolean) => el.toggleAttribute(name, on);
  const setChip = (el: HTMLElement, c: Chip) => {
    if (el.dataset.chip === c) return;
    el.dataset.chip = c;
    el.classList.remove('chip-new', 'chip-draft', 'chip-ok');
    el.classList.add(CHIP_CLASS[c]);
    el.textContent = labels[c];
  };

  let lastP = 0;
  function render(p: number) {
    lastP = p;

    // steps, rail, dots
    const active = p < 25 ? 0 : p < 50 ? 1 : p < 72 ? 2 : 3;
    steps.forEach((li, i) => (i === active ? li.setAttribute('aria-current', 'step') : li.removeAttribute('aria-current')));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
    stepsCol.style.setProperty('--p', (p / 100).toFixed(4));

    // rows: chip, unread dot, summary, selection
    const chips: Chip[] = [
      p >= 77 ? 'sent' : p >= 67 ? 'approved' : p >= 43 ? 'draft' : 'new',
      p >= 82 ? 'approved' : p >= 46 ? 'draft' : 'new',
      p >= 86 ? 'approved' : p >= 49 ? 'draft' : 'new',
    ];
    rows.forEach((r, i) => {
      setChip(r.chip, chips[i]);
      setFlag(r.unread, 'data-off', chips[i] !== 'new');
      setFlag(r.summary, 'data-off', chips[i] === 'new');
    });
    setFlag(rows[0].el, 'data-selected', p >= 25);
    setFlag(context, 'data-off', p < 25);

    // counts
    const arrived = ROW_IN.filter((t) => p >= t).length;
    const approved = (p >= 67 ? 1 : 0) + (p >= 82 ? 1 : 0) + (p >= 86 ? 1 : 0);
    setText(countPending, String(arrived - approved));
    setText(countApproved, String(approved));

    // detail pane
    detail.dataset.state = p < 25 ? 'idle' : p < 31 ? 'preparing' : p < 43 ? 'typing' : 'ready';
    prep.style.transform = `scaleX(${map(p, 25, 31).toFixed(4)})`;

    // reply text: the draft is written as a char-count substring, then corrected
    const n = Math.round(map(p, 31, 43) * draftLen);
    const nb = T.before.length;
    const no = T.old.length;
    setText(before, T.before.slice(0, n));
    setText(old, T.old.slice(0, Math.max(0, n - nb)));
    setText(after, T.after.slice(0, Math.max(0, n - nb - no)));
    const typedNew = T.neu.slice(0, Math.round(map(p, 57, 63) * T.neu.length));
    setText(neu, typedNew);
    neu.hidden = typedNew.length === 0;
    old.hidden = p >= 63 || n <= nb;
    setFlag(old, 'data-struck', p >= 55);
    setFlag(neu, 'data-caret', p >= 57 && p < 63);

    setFlag(source, 'data-off', p < 44);
    setFlag(actions, 'data-off', p < 44);
    actions.dataset.state = p >= 77 ? 'sent' : p >= 67 ? 'send' : 'approve';
  }

  // ---------- pointer targets (layout reads happen here only, never in onUpdate) ----------
  const pos = {
    start: { x: 0, y: 0 } as Point,
    old: { x: 0, y: 0 } as Point,
    approve: { x: 0, y: 0 } as Point,
    send: { x: 0, y: 0 } as Point,
    rest: { x: 0, y: 0 } as Point,
    rippleApprove: { x: 0, y: 0 } as Point,
    rippleSend: { x: 0, y: 0 } as Point,
  };
  const measure = () => {
    const keep = lastP;
    render(56); // original draft visible with the struck phrase; approve and send buttons both lay out
    const wr = win.getBoundingClientRect();
    const s = win.offsetWidth ? wr.width / win.offsetWidth : 1;
    const rel = (r: DOMRect) => ({ x: (r.left - wr.left) / s, y: (r.top - wr.top) / s, w: r.width / s, h: r.height / s });
    const oldRect = rel(old.getClientRects()[0] ?? old.getBoundingClientRect());
    const ap = rel(approveBtn.getBoundingClientRect());
    const sd = rel(sendBtn.getBoundingClientRect());
    const ac = rel(actions.getBoundingClientRect());
    const dt = rel(detail.getBoundingClientRect());
    const tip = (x: number, y: number): Point => ({ x: x - TIP, y: y - TIP });
    pos.old = tip(oldRect.x + oldRect.w * 0.72, oldRect.y + oldRect.h * 0.9);
    pos.approve = tip(ap.x + ap.w * 0.55, ap.y + ap.h * 0.62);
    pos.send = tip(sd.x + sd.w * 0.6, sd.y + sd.h * 0.62);
    pos.rest = { x: pos.send.x - 40, y: pos.send.y + 30 };
    pos.start = tip(dt.x + dt.w * 0.82, dt.y + dt.h * 0.92);
    pos.rippleApprove = { x: ap.x + ap.w * 0.55 - ac.x - 12, y: ap.y + ap.h * 0.62 - ac.y - 12 };
    pos.rippleSend = { x: sd.x + sd.w * 0.6 - ac.x - 12, y: sd.y + sd.h * 0.62 - ac.y - 12 };
    render(keep);
  };

  // The sticky, scrubbed mode needs a viewport tall enough to hold the window and the active step
  // (a landscape phone is not). Otherwise the static final state stays in normal flow.
  const mm = gsap.matchMedia();
  mm.add({ desktop: '(min-width: 1024px) and (min-height: 560px)', mobile: '(max-width: 1023px) and (min-height: 560px)' }, (ctx) => {
    const desktop = !!ctx.conditions?.desktop;
    track.classList.add('is-ready');
    ScrollTrigger.addEventListener('refreshInit', measure);
    measure();

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: track,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (st) => render(st.progress * 100),
        onRefresh: (st) => render(st.progress * 100),
      },
    });
    tl.set({}, {}, 100); // timeline length = 100 units

    // rows arrive (0 to 16)
    rows.forEach((r, i) => tl.fromTo(r.el, { y: -12, opacity: 0 }, { y: 0, opacity: 1, duration: 3 }, ROW_IN[i]));

    // pointer: in at 50, onto the phrase it corrects, then Aprobar (67), then Enviar (77), steps aside, out at 88
    const at = (k: keyof typeof pos, axis: 'x' | 'y') => () => pos[k][axis];
    const move = { ease: 'power2.inOut', immediateRender: false } as const;
    const press = (target: HTMLElement, t: number, down: number) => {
      tl.fromTo(target, { scale: 1 }, { scale: down, duration: 0.4, immediateRender: false }, t);
      tl.fromTo(target, { scale: down }, { scale: 1, duration: 0.5, immediateRender: false }, t + 0.4);
    };
    tl.fromTo(cursor, { opacity: 0 }, { opacity: 1, duration: 2 }, 50)
      .fromTo(cursor, { x: at('start', 'x'), y: at('start', 'y') }, { x: at('old', 'x'), y: at('old', 'y'), duration: 4.6, ease: 'power2.inOut' }, 50)
      .fromTo(cursor, { x: at('old', 'x'), y: at('old', 'y') }, { x: at('approve', 'x'), y: at('approve', 'y'), duration: 3, ...move }, 63.2)
      .fromTo(cursor, { x: at('approve', 'x'), y: at('approve', 'y') }, { x: at('send', 'x'), y: at('send', 'y'), duration: 3.6, ...move }, 72.2)
      .fromTo(cursor, { x: at('send', 'x'), y: at('send', 'y') }, { x: at('rest', 'x'), y: at('rest', 'y'), duration: 4, ...move }, 78.6)
      .fromTo(cursor, { opacity: 1 }, { opacity: 0, duration: 2, immediateRender: false }, 88);
    press(cursor, 54.6, 0.86); // click into the phrase (struck at 55)
    press(cursor, 66.3, 0.86);
    press(approveBtn, 66.3, 0.96);
    press(cursor, 76.3, 0.86);
    press(sendBtn, 76.3, 0.96);

    // ripple at each button press; every fromTo starts invisible, so rewinding never leaves it on screen
    const rippleAt = (k: 'rippleApprove' | 'rippleSend', t: number) => {
      tl.fromTo(
        ripple,
        { x: at(k, 'x'), y: at(k, 'y'), scale: 0.6, opacity: 0 },
        { x: at(k, 'x'), y: at(k, 'y'), scale: 0.6, opacity: 0.9, duration: 0.2, immediateRender: false },
        t,
      );
      tl.fromTo(ripple, { scale: 0.6, opacity: 0.9 }, { scale: 2.2, opacity: 0, duration: 2.2, immediateRender: false }, t + 0.2);
    };
    rippleAt('rippleApprove', 66.7);
    rippleAt('rippleSend', 76.7);

    // log bar slides up (88 to 92); 92 to 100 holds
    tl.fromTo(log, { yPercent: 100 }, { yPercent: 0, duration: 4 }, 88);

    // desktop: the window settles in while the stage scrolls into view, so the right column is never empty.
    // Transform carries the entrance; opacity ramps over a short window only, so the white window never
    // sits half transparent (a grey slab) over night.
    if (desktop) {
      gsap.fromTo(
        win,
        { y: 48, scale: 0.97 },
        {
          y: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: track, start: 'top 85%', end: 'top 25%', scrub: true, invalidateOnRefresh: true },
        },
      );
      gsap.fromTo(
        win,
        { opacity: 0 },
        { opacity: 1, ease: 'none', scrollTrigger: { trigger: track, start: 'top 85%', end: 'top 70%', scrub: true } },
      );
    }

    // print: the final state of every part (CSS in Example.astro puts the stage back in normal flow)
    const beforePrint = () => {
      tl.progress(1);
      render(100);
    };
    const afterPrint = () => {
      const st = tl.scrollTrigger;
      const p = st ? st.progress : 0;
      tl.progress(p);
      render(p * 100);
    };
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);

    render(0);
    return () => {
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
      ScrollTrigger.removeEventListener('refreshInit', measure);
      track.classList.remove('is-ready');
      render(100);
    };
  });
}

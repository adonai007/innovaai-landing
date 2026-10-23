// src/data/types.ts: every locale data file ends with `satisfies <Type>`. Tuples enforce ES/EN parity.
export type Locale = 'es' | 'en';
export type IconName =
  | 'caret-right' | 'caret-down' | 'caret-left' | 'list' | 'x' | 'check' | 'pause' | 'play' | 'stop'
  | 'microphone' | 'list-checks' | 'magnifying-glass' | 'tray-arrow-down' | 'chat-circle-text' | 'chalkboard-teacher'
  | 'tooth' | 'clipboard-text' | 'pill' | 'receipt' | 'calendar-check' | 'calendar-plus' | 'warning' | 'sparkle'
  | 'cell-signal-full' | 'battery-full' | 'paper-plane-right'
  | 'buildings' | 'clock-counter-clockwise' | 'book-open-text' | 'user-check';

/** srHint: screen-reader text appended to external links ("se abre en una pestaña nueva"). */
export interface Link { label: string; href: string; external?: boolean; hreflang?: Locale; srHint?: string }
export interface IconCard { icon: IconName; title: string; body: string }
export interface TextCard { title: string; body: string }
/** Product lockup. `title` may contain "\n": a line break from 735px up only. */
export interface Lockup { name: string; title: string; subhead: string; meta: string }

export interface SiteData {
  lang: Locale; skipLink: string;
  /** visually hidden page h1 */
  h1: string;
  ribbon: { text: string; link: Link };
  whatsappMessage: string; whatsappHref: string; whatsappHint: string;
  cta: string; ctaShort: string; externalHint: string;
}
export interface NavigationData {
  homeLabel: string; navLabel: string; links: [Link, Link, Link, Link, Link];
  lang: { short: string; long: string; href: string; hreflang: Locale; ariaLabel: string };
  menuOpen: string; menuClose: string; menuTitle: string; linkedin: Link;
}
export interface FooterColumn { title: string; links: Link[] }
export interface FooterData {
  tagline: string; columns: [FooterColumn, FooterColumn, FooterColumn];
  /** contains the literal token {year} */ copyright: string; location: string; lang: Link;
}
export interface SeoData {
  /** ogImage: site-relative path of the locale's 1200x630 share card */
  organizationDescription: string; ogImage: string; ogImageAlt: string;
  home: { title: string; description: string; serviceName: string; serviceType: string; serviceDescription: string; audience: string };
}

export interface DentimedFeature { id: 'dictado' | 'revision' | 'cita'; label: string; title: string; body: string }
export interface DentimedData {
  lockup: Lockup; primary: Link; demo: Link;
  /** aria-label of the two-phone figure */ phonesLabel: string;
  /** alt of the dictation photo (feature card 1) */ photoAlt: string;
  features: {
    title: string;
    items: [DentimedFeature, DentimedFeature, DentimedFeature];
    security: { label: string; title: string; items: [string, string, string, string] };
    more: Link;
  };
}
export interface DictaData {
  lockup: Lockup; cta: Link;
  mock: { windowTitle: string; text: string; pillIdle: string; pillListening: string; key: string };
  features: [TextCard, TextCard, TextCard];
}

/** Film chapter: one scroll-scrubbed clip per scene (public/cinema/scene-{n}-{desktop,mobile}.{mp4,webp}). */
export interface CinemaScene { id: 'rutina' | 'voz' | 'criterio'; label: string; title: string; line: string; alt: string }
export interface CinemaData {
  label: string; title: string; leadIn: string; body: string; skip: Link; pause: string; resume: string;
  scenes: [CinemaScene, CinemaScene, CinemaScene];
}

export interface EverydayWorkData { title: string; intro: string; items: [IconCard, IconCard, IconCard, IconCard, IconCard, IconCard]; cta: string }

export interface WorkStep { number: string; title: string; body: string; deliverable: string; offerName: string }
export interface HowWeWorkData { label: string; title: string; leadIn: string; body: string; deliverableLabel: string; steps: [WorkStep, WorkStep, WorkStep] }

export interface FaqItem { question: string; answer: string }
export interface FaqData { title: string; introBefore: string; introLink: string; introAfter: string; items: [FaqItem, FaqItem, FaqItem, FaqItem, FaqItem, FaqItem, FaqItem] }

export interface ClosingData { title: string; body: string; reassurance: string; founder: string; linkedin: Link }

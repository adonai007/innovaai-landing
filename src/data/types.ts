// src/data/types.ts: every locale data file ends with `satisfies <Type>`. Tuples enforce ES/EN parity.
export type Locale = 'es' | 'en';
export type IconName =
  | 'whatsapp-logo' | 'arrow-down' | 'arrow-right' | 'arrow-up-right' | 'check' | 'check-circle' | 'checks'
  | 'plus' | 'x' | 'list' | 'microphone' | 'file-pdf' | 'file-text' | 'list-checks' | 'magnifying-glass'
  | 'tray-arrow-down' | 'chat-circle-text' | 'chalkboard-teacher' | 'flow-arrow' | 'user-check' | 'lock-key'
  | 'map-pin' | 'linkedin-logo' | 'sparkle' | 'envelope-simple' | 'cursor';

export interface Link { label: string; href: string; external?: boolean; hreflang?: Locale }
export interface SectionHead { eyebrow: string; title: string; intro?: string }
export interface LabelValue { label: string; value: string }
export interface IconCard { icon: IconName; title: string; body: string }
export interface Step { number: string; title: string; body: string }

export interface SiteData {
  lang: Locale; skipLink: string; whatsappMessage: string; whatsappHref: string;
  cta: string; ctaShort: string; demoNote: string; externalHint: string;
}
export interface NavigationData {
  homeLabel: string; navLabel: string; links: [Link, Link, Link, Link];
  lang: { short: string; long: string; href: string; hreflang: Locale; ariaLabel: string };
  menuOpen: string; menuClose: string; menuTitle: string; linkedin: Link;
}
export interface FooterColumn { title: string; links: Link[] }
export interface FooterData {
  tagline: string; columns: [FooterColumn, FooterColumn, FooterColumn];
  legal: string; /* contains the literal token {year} */ demoNote: string; colophon: string;
}
export interface SeoData {
  /** ogImage: site-relative path of the locale's 1200x630 share card */
  organizationDescription: string; ogImage: string; ogImageAlt: string;
  home: { title: string; description: string; serviceName: string; serviceType: string; serviceDescription: string; audience: string };
}

export interface HeroData {
  eyebrow: string; title: string; lead: string; ctaSecondary: Link; reassurance: string; photoAlt: string;
  draft: {
    ariaLabel: string; badge: string; statusDraft: string; statusApproved: string; title: string; source: string;
    fields: [LabelValue, LabelValue, LabelValue]; approve: string; approved: string; undo: string; approvedNote: string;
  };
}

export type InboxChip = 'new' | 'draft' | 'approved' | 'sent';
export interface InboxRow {
  id: 'wa' | 'pdf' | 'voice'; icon: 'whatsapp-logo' | 'file-pdf' | 'microphone';
  channel: string; from: string; preview: string; time: string; draftSummary: string;
}
export interface ExampleData {
  head: SectionHead; steps: [Step, Step, Step, Step]; caption: string; srSummary: string;
  inbox: {
    title: string; tabPending: string; tabApproved: string; chips: Record<InboxChip, string>;
    rows: [InboxRow, InboxRow, InboxRow]; idle: string; replyLabel: string; preparing: string;
    replyBefore: string; replyOld: string; replyNew: string; replyAfter: string; source: string;
    edit: string; approve: string; send: string; sent: string; log: string;
  };
}

export interface UseCasesData {
  head: SectionHead;
  featured: IconCard & { footnote: string; demo: { audioLabel: string; recordTitle: string; rows: [LabelValue, LabelValue, LabelValue]; chip: string } };
  items: [IconCard, IconCard, IconCard, IconCard];
  wide: IconCard;
  caption: string;
}

export interface ProductCta extends Link { srHint: string }
export interface ProductBase { name: string; eyebrow: string; tagline: string; body: string; bullets: [string, string, string, string]; meta: string; cta: ProductCta }
export interface DentimedProduct extends ProductBase { imageAlt: string; chip: { title: string; detail: string; draft: string; approved: string } }
export interface DictaProduct extends ProductBase { mock: { windowTitle: string; to: string; subject: string; text: string; pillIdle: string; pillListening: string } }
export interface ProductsData { head: SectionHead; dentimed: DentimedProduct; dicta: DictaProduct; caption: string; next: { title: string; body: string; cta: string } }

export interface WorkStep extends Step { deliverable: string; offerName: string }
export interface QueueRow { name: string; detail: string; status: string; tone: 'ok' | 'edited' | 'returned' }
export interface HowWeWorkData {
  head: SectionHead; deliverableLabel: string; steps: [WorkStep, WorkStep, WorkStep]; caption: string;
  visuals: {
    map: { title: string; rows: [string, string, string, string]; highlightIndex: 0 | 1 | 2 | 3; highlightTag: string; measureLabel: string; measure: string };
    prototype: { badge: string; title: string; fields: [LabelValue, LabelValue]; missing: LabelValue; comment: { initials: string; name: string; role: string; text: string } };
    inUse: { title: string; rows: [QueueRow, QueueRow, QueueRow, QueueRow] };
  };
}

export interface PrinciplesData { head: SectionHead; items: [IconCard, IconCard, IconCard, IconCard] }
export interface TaglineData { ariaLabel: string; lines: [string, string, string] }
export interface AudienceData { head: SectionHead; items: [string, string, string, string]; note: string }
export interface FaqItem { question: string; answer: string }
export interface FaqData { head: SectionHead; introLink: string; introEnd: string; items: [FaqItem, FaqItem, FaqItem, FaqItem, FaqItem, FaqItem, FaqItem] }
export interface ClosingData {
  eyebrow: string; title: string; body: string; reassurance: string;
  founder: { text: string }; linkedin: Link; stepsTitle: string; steps: [string, string, string];
}

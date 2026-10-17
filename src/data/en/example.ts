import type { ExampleData } from '../types';

export const example = {
  head: {
    eyebrow: "An example",
    title: "Here is how one of our tools works.",
    intro: "Every company is different, but the pattern repeats. Work comes in, AI prepares a draft and someone on your team reviews it before anything is saved or sent.",
  },
  steps: [
    { number: "01", title: "Work comes in", body: "A WhatsApp message, a PDF invoice or a voice note after a visit. Everything lands in one inbox." },
    { number: "02", title: "AI prepares a draft", body: "It reads what came in and builds the reply, the record or the report with the fields your company already uses." },
    { number: "03", title: "Your team reviews and corrects", body: "Every draft shows where it came from. The person adjusts what is needed and approves." },
    { number: "04", title: "It's saved or sent, with a record", body: "Approved work is saved or left ready for someone to send. Who approved it and when is logged." },
  ],
  caption: "Illustrative example with demo data.",
  srSummary: "Demo: an inbox receives a WhatsApp message, an invoice and a voice note. The tool prepares a draft for each one. A person corrects the reply, approves it and sends it, then approves the other two.",
  inbox: {
    title: "Operations inbox",
    tabPending: "Pending",
    tabApproved: "Approved",
    chips: { new: "New", draft: "Draft", approved: "Approved", sent: "Sent" },
    rows: [
      { id: "wa", icon: "whatsapp-logo", channel: "WhatsApp", from: "Sofía Mamani", preview: "Hi, can you deliver the 20 boxes on Friday?", time: "09:12", draftSummary: "Suggested reply ready" },
      { id: "pdf", icon: "file-pdf", channel: "PDF invoice", from: "Packaging supplier", preview: "Factura_0412.pdf", time: "09:40", draftSummary: "Record: Bs 1,240.00 · due Oct 30" },
      { id: "voice", icon: "microphone", channel: "Voice note", from: "Marco Flores", preview: "Customer visit, 1:12", time: "10:05", draftSummary: "Report: restock 3 products" },
    ],
    idle: "Each item's draft appears here.",
    replyLabel: "Suggested reply",
    preparing: "Preparing draft",
    replyBefore: "Hi Sofía, yes. We can deliver the 20 boxes on Friday ",
    replyOld: "in the morning",
    replyNew: "after 10:00",
    replyAfter: ". Shall we confirm the usual address?",
    source: "Source: Sofía's message and the delivery schedule.",
    edit: "Edit",
    approve: "Approve",
    send: "Send on WhatsApp",
    sent: "Message sent by Carla",
    log: "3 of 3 reviewed · Approved by Carla, 10:12",
  },
} satisfies ExampleData;

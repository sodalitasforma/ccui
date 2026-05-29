export const buttonExamples = [
  { label: "Primary", variant: undefined },
  { label: "Secondary", variant: "secondary" },
  { label: "Gold", variant: "gold" },
  { label: "Ghost", variant: "ghost" },
  { label: "Danger", variant: "danger" },
] as const;

export const noticeExamples = [
  { variant: "official", children: "Parish office closes at noon on First Fridays." },
  { variant: "liturgical", children: "Today is observed with violet vestments." },
  { variant: "success", children: "Registration was received." },
  { variant: "danger", children: "This schedule has been cancelled." },
] as const;

export const tableRows = [
  { office: "Chancery", status: "Open", statusVariant: "success", action: "View", actionVariant: "secondary" },
  { office: "Tribunal", status: "Appointment", statusVariant: "gold", action: "Request", actionVariant: "secondary" },
  { office: "School office", status: "Closed", statusVariant: "danger", action: "Details", actionVariant: "ghost" },
] as const;

export const accordionExamples = [
  {
    title: "What is Forma?",
    content: "Forma is a Catholic UI kit for institutional websites, documents, schedules, and public digital infrastructure.",
    defaultOpen: true,
  },
  {
    title: "Why Vatican-derived tokens?",
    content: "The Vatican site gave us institutional cues: brown, paper, gold, formal typography, restrained borders, and archival structure.",
    defaultOpen: false,
  },
] as const;

export const mediaFrameExample = {
  title: "Recent papal video",
  provider: "YouTube",
  src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  caption: "MediaFrame accepts a URL-driven embed source. Replace this with a Vatican News, YouTube, CMS, or database media URL.",
} as const;

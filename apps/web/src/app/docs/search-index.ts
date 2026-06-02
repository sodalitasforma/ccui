export type DocsSearchItem = {
  title: string;
  category: string;
  href: string;
  keywords?: readonly string[];
};

export const docsSearchItems = [
  {
    title: "Primitives",
    category: "Foundation",
    href: "/components-gallery#primitives",
    keywords: ["button", "card", "text", "heading", "grid", "stack", "cluster", "section"],
  },
  {
    title: "Button",
    category: "Primitive",
    href: "/components-gallery#button",
    keywords: ["cta", "link", "action", "primary", "secondary"],
  },
  {
    title: "DocSearch",
    category: "Primitive",
    href: "/components-gallery#docsearch",
    keywords: ["search", "documentation", "command", "palette"],
  },
  {
    title: "Components",
    category: "Core",
    href: "/components-gallery#core-components",
    keywords: ["patterns", "cards", "lists", "tables", "navigation"],
  },
  {
    title: "Catholic Components",
    category: "Church",
    href: "/components-gallery#parish-and-liturgical-components",
    keywords: ["church", "parish", "mass", "liturgy", "sacraments"],
  },
  {
    title: "MassScheduleBlock",
    category: "Catholic",
    href: "/components-gallery#massscheduleblock",
    keywords: ["mass", "schedule", "sunday", "holy day", "livestream"],
  },
  {
    title: "MassTimeRow",
    category: "Catholic",
    href: "/components-gallery#masstimerow",
    keywords: ["mass", "time", "cancelled", "moved", "livestream"],
  },
  {
    title: "LiturgicalDayCard",
    category: "Catholic",
    href: "/components-gallery#liturgicaldaycard",
    keywords: ["liturgy", "feast", "season", "calendar", "readings"],
  },
  {
    title: "FeastDayHero",
    category: "Catholic",
    href: "/components-gallery#feastdayhero",
    keywords: ["feast", "hero", "liturgical", "calendar"],
  },
  {
    title: "ChurchDocumentCard",
    category: "Magisterium",
    href: "/components-gallery#churchdocumentcard",
    keywords: ["document", "encyclical", "apostolic", "magisterium", "decree"],
  },
  {
    title: "CanonicalSourceCard",
    category: "CDCF",
    href: "/components-gallery#canonicalsourcecard",
    keywords: ["source", "authority", "canon", "citation", "semantic"],
  },
  {
    title: "ProjectCard",
    category: "CDCF",
    href: "/components-gallery#projectcard",
    keywords: ["project", "repository", "open source", "cdcf"],
  },
  {
    title: "DatasetCard",
    category: "CDCF",
    href: "/components-gallery#datasetcard",
    keywords: ["dataset", "data", "machine readable", "cdcf"],
  },
  {
    title: "ApiEndpointCard",
    category: "CDCF",
    href: "/components-gallery#apiendpointcard",
    keywords: ["api", "endpoint", "json", "developer"],
  },
  {
    title: "CDCF Manifesto",
    category: "External",
    href: "https://catholicdigitalcommons.org/about/manifesto",
    keywords: ["manifesto", "catholic digital commons foundation", "cdcf"],
  },
] as const satisfies readonly DocsSearchItem[];

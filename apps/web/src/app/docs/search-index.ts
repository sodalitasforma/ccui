export type DocsSearchItem = {
  title: string;
  category: string;
  href: string;
  description?: string;
};

export const docsSearchItems: DocsSearchItem[] = [
  {
    title: "Docs",
    category: "Documentation",
    href: "/docs#overview",
    description: "Install Catholic Commons UI and structure a project.",
  },
  {
    title: "Installation",
    category: "Docs",
    href: "/docs#overview",
    description: "Install dependencies and structure your app.",
  },
  {
    title: "Use the CLI",
    category: "Docs",
    href: "/docs#use-the-cli",
    description: "Initialize config and add component wrappers from the terminal.",
  },
  {
    title: "Existing Project",
    category: "Docs",
    href: "/docs#existing-project",
    description: "Add Catholic Commons UI to an app you already created.",
  },
  {
    title: "Next.js",
    category: "Frameworks",
    href: "/docs#next-js",
    description: "Use Catholic Commons UI in a Next.js app.",
  },
  {
    title: "Vite",
    category: "Frameworks",
    href: "/docs#vite",
    description: "Use Catholic Commons UI in a Vite React app.",
  },
  {
    title: "Astro",
    category: "Frameworks",
    href: "/docs#astro",
    description: "Use Catholic Commons UI in Astro with React islands.",
  },
  {
    title: "React Router",
    category: "Frameworks",
    href: "/docs#react-router",
    description: "Use Catholic Commons UI in React Router route modules.",
  },
  {
    title: "TanStack Start",
    category: "Frameworks",
    href: "/docs#tanstack-start",
    description: "Use Catholic Commons UI in TanStack Start.",
  },
  {
    title: "React Manual",
    category: "Frameworks",
    href: "/docs#react-manual",
    description: "Manual React setup with package imports.",
  },

  {
    title: "Components",
    category: "Registry",
    href: "/components-gallery#introduction",
    description: "Browse the Catholic Commons UI component gallery.",
  },
  {
    title: "Layout primitives",
    category: "Components",
    href: "/components-gallery#primitive-layout",
    description: "Container, Section, Stack, Cluster, and Grid.",
  },
  {
    title: "Surface primitives",
    category: "Components",
    href: "/components-gallery#primitive-surfaces",
    description: "Notice, Card, Panel, and Divider.",
  },
  {
    title: "Action and metadata primitives",
    category: "Components",
    href: "/components-gallery#primitive-actions",
    description: "Button, Badge, Tag, and Link.",
  },
  {
    title: "Form primitives",
    category: "Components",
    href: "/components-gallery#primitive-forms",
    description: "SearchInput, Select, and FilterBar.",
  },
  {
    title: "Data display primitives",
    category: "Components",
    href: "/components-gallery#primitive-data-display",
    description: "Tabs, Accordion, Table, Timeline, and EmptyState.",
  },
  {
    title: "Media and icon primitives",
    category: "Components",
    href: "/components-gallery#primitive-media",
    description: "MediaFrame and IconFrame.",
  },
  {
    title: "Parish websites",
    category: "Catholic UI",
    href: "/components-gallery#parish-websites",
    description: "Headers, schedules, announcements, bulletins, ministries, giving, contacts, staff, events, and footer components.",
  },
  {
    title: "Liturgy",
    category: "Catholic UI",
    href: "/components-gallery#liturgy",
    description: "Feast days, liturgical days, readings, seasons, and liturgical color components.",
  },
  {
    title: "Documents & authority",
    category: "Catholic UI",
    href: "/components-gallery#documents-authority",
    description: "Church documents, citations, source trails, canonical references, and authority badges.",
  },
  {
    title: "Directories",
    category: "Catholic UI",
    href: "/components-gallery#directories",
    description: "Parish, clergy, office, school, saint, and pontiff directories.",
  },
  {
    title: "Catholic data infrastructure",
    category: "Catholic UI",
    href: "/components-gallery#catholic-data-infrastructure",
    description: "Projects, APIs, datasets, repositories, ontologies, semantic records, and entity graphs.",
  },

  {
    title: "Colors",
    category: "Foundations",
    href: "/colors#overview",
    description: "Raw palette, semantic interface colors, liturgical colors, and CDCF colors.",
  },
  {
    title: "Catholic theme specimens",
    category: "Colors",
    href: "/colors#catholic-theme-specimens",
    description: "Light and dark specimens for schedules, liturgical cards, announcements, documents, and donation callouts.",
  },
  {
    title: "Primitive theme specimens",
    category: "Colors",
    href: "/colors#primitive-theme-specimens",
    description: "Light and dark specimens for panels, notices, dropdowns, filter bars, doc search, links, and tables.",
  },
  {
    title: "Theme specimens",
    category: "Colors",
    href: "/colors#theme-specimens",
    description: "Light and dark theme specimens for buttons, forms, tabs, icons, badges, and text.",
  },
  {
    title: "State tokens",
    category: "Colors",
    href: "/colors#state-tokens",
    description: "Visual specimens for selected, disabled, focus, nav, form, and dark-surface states.",
  },
  {
    title: "Semantic colors",
    category: "Colors",
    href: "/colors#semantic-colors",
    description: "Surface, text, border, link, accent, and state tokens.",
  },
  {
    title: "Raw palette",
    category: "Colors",
    href: "/colors#raw-palette",
    description: "Underlying raw color tokens.",
  },
  {
    title: "Liturgical colors",
    category: "Colors",
    href: "/colors#liturgical-colors",
    description: "Domain-specific Catholic color tokens for liturgical use.",
  },
  {
    title: "CDCF colors",
    category: "Colors",
    href: "/colors#cdcf-colors",
    description: "Catholic Digital Commons Foundation navy and gold tokens.",
  },
  {
    title: "Color usage guidance",
    category: "Colors",
    href: "/colors#usage-guidance",
    description: "Rules for using semantic, raw, liturgical, and status colors.",
  },

  {
    title: "Typography",
    category: "Foundations",
    href: "/typography#overview",
    description: "Typeface roles, heading scale, text scale, rhythm, and typography API.",
  },
  {
    title: "Typefaces",
    category: "Typography",
    href: "/typography#typefaces",
    description: "Cormorant Garamond, EB Garamond, Inter, Source Sans 3, Cinzel, and mono stacks.",
  },
  {
    title: "Type roles",
    category: "Typography",
    href: "/typography#type-roles",
    description: "Display, interface, document, inscription, and mono roles.",
  },
  {
    title: "Heading scale",
    category: "Typography",
    href: "/typography#heading-scale",
    description: "Heading families, sizes, line heights, and weights.",
  },
  {
    title: "Text scale",
    category: "Typography",
    href: "/typography#text-scale",
    description: "Text sizes for metadata, body text, and supporting prose.",
  },
  {
    title: "Text rhythm",
    category: "Typography",
    href: "/typography#text-rhythm",
    description: "Text tones, line heights, and weights.",
  },
  {
    title: "Typography API",
    category: "Typography",
    href: "/typography#typography-api",
    description: "Props exposed by Heading, Text, and Eyebrow.",
  },
  {
    title: "Typography token inventory",
    category: "Typography",
    href: "/typography#token-inventory",
    description: "Font family, scale, line-height, and weight tokens.",
  },

  {
    title: "Icons",
    category: "Icons",
    href: "/icons#overview",
    description: "Planned Catholic Commons SVG icon package.",
  },
  {
    title: "Live foundation icons",
    category: "Icons",
    href: "/icons#live-icons",
    description: "Starter interface and Catholic SVG icons available in the icons package.",
  },
  {
    title: "Icon states",
    category: "Icons",
    href: "/icons#icon-states",
    description: "Preview icon buttons in default, selected, disabled, and dark-surface states.",
  },
  {
    title: "Icon package plan",
    category: "Icons",
    href: "/icons#package-plan",
    description: "Package structure for the future icon library.",
  },
  {
    title: "Icon categories",
    category: "Icons",
    href: "/icons#categories",
    description: "Interface, Catholic, liturgy, documents, and parish icon groups.",
  },

  {
    title: "Templates",
    category: "Templates",
    href: "/templates#overview",
    description: "Reusable page patterns and templates.",
  },
];

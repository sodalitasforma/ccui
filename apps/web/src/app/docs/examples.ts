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

export const filterBarExample = {
  searchPlaceholder: "Search offices",
  selectLabel: "All offices",
  buttonLabel: "Apply filters",
} as const;

export const tabExamples = [
  { label: "News", content: "News panel: parish, diocesan, and institutional updates." },
  { label: "Calendar", content: "Calendar panel: public events, liturgies, and office closures." },
  { label: "Media", content: "Media panel: photo galleries, videos, and featured stories." },
] as const;

export const timelineExamples = [
  { title: "Reference audit", meta: "Phase 1", description: "Vatican homepage structure, colors, typography, and contrast reviewed." },
  { title: "Core primitives", meta: "Phase 2", description: "Layout, typography, actions, forms, data, and media primitives added." },
  { title: "Institutional components", meta: "Phase 3", description: "Public-facing Catholic institutional components added." },
] as const;

export const emptyStateExample = {
  title: "No bulletins found",
  description: "Try changing the year, ministry, or document type filter.",
  actionLabel: "Clear filters",
} as const;

export const institutionalHeaderExample = {
  title: "Saint Anselm Parish",
  subtitle: "A Catholic parish of the Diocese",
  primaryItems: [
    { label: "Mass Times", href: "#", current: true },
    { label: "Sacraments", href: "#" },
    { label: "Ministries", href: "#" },
    { label: "School", href: "#" },
    { label: "Give", href: "#" },
  ],
  utilityItems: [
    { label: "Bulletin", href: "#" },
    { label: "Contact", href: "#" },
  ],
  languages: [
    { label: "English", href: "#", current: true },
    { label: "Español", href: "#" },
    { label: "Latine", href: "#" },
  ],
  searchAction: "#",
} as const;

export const pageHeaderExample = {
  eyebrow: "Parish office",
  title: "Institutional page header",
  description: "A formal header for parish, diocesan, school, ministry, and foundation pages.",
  breadcrumbs: [
    { label: "Home", href: "#" },
    { label: "Parish", href: "#" },
    { label: "Office", href: "#" },
  ],
} as const;

export const announcementBannerExample = {
  badge: "Official",
  title: "Parish office closed Friday",
  description: "The office will reopen Monday morning. Sacramental emergencies should use the emergency line.",
  href: "#",
} as const;

export const directoryExample = {
  title: "Institutional directory",
  description: "Directory and directory cards.",
  cards: [
    {
      eyebrow: "Office",
      title: "Chancery Office",
      description: "Administrative office for diocesan governance and records.",
      meta: "Open Monday through Friday",
      status: "Open",
      href: "#",
    },
    {
      eyebrow: "Ministry",
      title: "Marriage Tribunal",
      description: "Canonical process support and case information.",
      meta: "By appointment",
      href: "#",
    },
  ],
} as const;

export const contactBlockExample = {
  title: "Contact",
  phone: "(555) 123-4567",
  email: "office@example.org",
  website: "https://example.org",
  addressLines: ["123 Cathedral Place", "Santa Fe, NM 87501"],
} as const;

export const officeHoursExample = {
  items: [
    { days: "Monday–Thursday", hours: "9:00 AM – 4:00 PM" },
    { days: "Friday", hours: "9:00 AM – Noon", note: "Summer hours" },
  ],
} as const;

export const locationBlockExample = {
  addressLines: ["123 Cathedral Place", "Santa Fe, NM 87501"],
  mapHref: "#",
  note: "Parking available behind the parish hall.",
} as const;

export const staffProfileExample = {
  name: "Maria Sanchez",
  position: "Parish Secretary",
  department: "Office",
  email: "maria@example.org",
  phone: "(555) 123-4567",
} as const;

export const clergyProfileExample = {
  name: "Rev. Thomas More",
  title: "Pastor",
  assignment: "Saint Anselm Parish",
  orderOrPostnominals: "Pastor",
  email: "pastor@example.org",
} as const;

export const documentListExample = {
  title: "Documents",
  description: "Document cards and resource links.",
  document: {
    title: "Parish Registration Form",
    documentType: "Form",
    authority: "Parish",
    date: "May 2026",
    fileType: "PDF",
    href: "#",
    description: "Registration form for new parishioners.",
  },
  resource: {
    title: "Safe Environment Policy",
    description: "Policy and training information.",
    meta: "External resource",
    href: "#",
    variant: "document",
  },
} as const;

export const eventListExample = {
  title: "Events",
  description: "Event cards for public calendars.",
  events: [
    {
      title: "Corpus Christi Procession",
      date: "Jun 7",
      time: "11:30 AM",
      location: "Church grounds",
      category: "Liturgical",
      description: "Procession immediately following the principal Mass.",
      href: "#",
    },
    {
      title: "Parish Council Meeting",
      date: "Jun 12",
      time: "6:00 PM",
      location: "Parish hall",
      category: "Meeting",
      href: "#",
    },
  ],
} as const;

export const institutionalFooterExample = {
  title: "Saint Anselm Parish",
  description: "A public-facing Catholic institution built with Forma.",
  links: [
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Giving", href: "#" },
  ],
} as const;

export const massScheduleExample = {
  title: "Mass Schedule",
  subtitle: "Regular parish Mass times with livestream, location, language, and exception states.",
  badge: "Mass",
  days: [
    {
      day: "Sunday",
      times: [
        {
          time: "8:00 AM",
          label: "Low Mass",
          language: "English",
          location: "Church",
        },
        {
          time: "10:30 AM",
          label: "Sung Mass",
          language: "English",
          location: "Church",
          livestreamHref: "https://www.youtube.com/",
          status: "livestream",
        },
        {
          time: "1:00 PM",
          label: "Misa en Español",
          language: "Español",
          location: "Church",
        },
      ],
    },
    {
      day: "Monday–Friday",
      times: [
        {
          time: "7:00 AM",
          label: "Daily Mass",
          location: "Chapel",
        },
        {
          time: "12:10 PM",
          label: "Noon Mass",
          location: "Church",
          status: "normal",
        },
      ],
    },
  ],
  exceptions: [
    {
      date: "Friday",
      title: "No 12:10 PM Mass",
      description: "The noon Mass is cancelled because of a diocesan clergy day.",
      severity: "warning",
    },
  ],
  source: {
    label: "Parish office",
    href: "#",
    authorityLevel: "local",
  },
} as const;

export const confessionScheduleExample = {
  title: "Confession",
  subtitle: "Regular confession times and moved-location notes.",
  days: [
    {
      day: "Saturday",
      times: [
        {
          time: "3:30 PM",
          label: "Confessions",
          location: "Church",
        },
      ],
    },
    {
      day: "Wednesday",
      times: [
        {
          time: "6:00 PM",
          label: "Confessions",
          location: "Chapel",
          status: "moved",
          note: "Moved this week",
        },
      ],
    },
  ],
  exceptions: [
    {
      title: "Confessions may end early before major liturgies",
      severity: "info",
    },
  ],
} as const;

export const adorationScheduleExample = {
  title: "Adoration",
  subtitle: "Public Eucharistic adoration times.",
  days: [
    {
      day: "Thursday",
      times: [
        {
          time: "7:30 AM – 6:00 PM",
          label: "Exposition and Adoration",
          location: "Chapel",
        },
      ],
    },
    {
      day: "First Friday",
      times: [
        {
          time: "7:30 PM – Midnight",
          label: "First Friday Adoration",
          location: "Church",
        },
      ],
    },
  ],
} as const;

export const sacramentScheduleExample = {
  title: "Baptism Preparation",
  subtitle: "Sacramental preparation schedule for families.",
  sacrament: "Baptism",
  days: [
    {
      day: "Second Saturday",
      times: [
        {
          time: "10:00 AM",
          label: "Baptism preparation class",
          location: "Parish hall",
          note: "Registration required",
        },
      ],
    },
  ],
} as const;

export const holyDayScheduleExample = {
  title: "Holy Day Schedule",
  subtitle: "Special schedule for holy days of obligation.",
  days: [
    {
      day: "Vigil",
      date: "December 7",
      times: [
        {
          time: "6:00 PM",
          label: "Vigil Mass",
          location: "Church",
        },
      ],
    },
    {
      day: "Holy Day",
      date: "December 8",
      times: [
        {
          time: "7:00 AM",
          label: "Mass",
          location: "Church",
        },
        {
          time: "12:10 PM",
          label: "Mass",
          location: "Church",
        },
        {
          time: "6:30 PM",
          label: "Solemn Mass",
          location: "Church",
          livestreamHref: "https://www.youtube.com/",
          status: "livestream",
        },
      ],
    },
  ],
  exceptions: [
    {
      title: "Parish office closed",
      description: "The office is closed for the holy day.",
      severity: "liturgical",
    },
  ],
} as const;

export const liturgicalDayExample = {
  title: "Corpus Christi",
  date: "June 7",
  season: "Ordinary Time",
  color: "white",
  rank: "Solemnity",
  description: "A solemn liturgical day with readings, rank, season, color, and source metadata.",
  readings: [
    {
      label: "First Reading",
      citation: "Genesis 14:18–20",
      book: "Genesis",
      chapter: 14,
      verses: "18–20",
      translation: "USCCB",
      source: { label: "Lectionary", href: "#" },
    },
    {
      label: "Second Reading",
      citation: "1 Corinthians 11:23–26",
      book: "1 Corinthians",
      chapter: 11,
      verses: "23–26",
      translation: "USCCB",
      source: { label: "Lectionary", href: "#" },
    },
    {
      label: "Gospel",
      citation: "Luke 9:11b–17",
      book: "Luke",
      chapter: 9,
      verses: "11b–17",
      translation: "USCCB",
      source: { label: "Lectionary", href: "#" },
    },
  ],
  source: {
    label: "Liturgical Calendar API",
    href: "#",
    authorityLevel: "calendar",
  },
} as const;

export const feastDayHeroExample = {
  title: "The Most Holy Body and Blood of Christ",
  date: "Sunday, June 7",
  season: "Ordinary Time",
  color: "white",
  rank: "Solemnity",
  description: "A hero treatment for a major feast, solemnity, or parish liturgical emphasis.",
  actionHref: "#",
  actionLabel: "View readings",
  source: {
    label: "Liturgical Calendar API",
    href: "#",
    authorityLevel: "calendar",
  },
} as const;

export const readingReferenceExample = {
  label: "Gospel",
  citation: "Luke 9:11b–17",
  book: "Luke",
  chapter: 9,
  verses: "11b–17",
  translation: "USCCB",
  source: {
    label: "Bible API",
    href: "#",
    authorityLevel: "scripture",
  },
} as const;

export const liturgicalSeasonBadgeExample = {
  season: "Ordinary Time",
  color: "green",
} as const;

export const liturgicalColorDotExample = {
  color: "violet",
  label: "Violet liturgical color",
} as const;

export const prayerCardExample = {
  title: "Prayer Before Mass",
  text: "O Lord Jesus Christ, who art about to come to me under the veil of the Eucharist, prepare my heart to receive Thee worthily.",
  tradition: "Devotional",
  language: "English",
  source: {
    label: "Catholic Semantic Canon",
    href: "#",
    authorityLevel: "devotional",
  },
} as const;

export const parishAnnouncementCardExample = {
  title: "Corpus Christi procession after the principal Mass",
  description: "The procession will begin immediately after the 10:30 AM Mass. Families and parish ministries are invited to gather near the west doors.",
  date: "June 7",
  severity: "liturgical",
  href: "#",
} as const;

export const bulletinCardExample = {
  title: "Parish Bulletin",
  date: "June 7, 2026",
  description: "Weekly bulletin with announcements, Mass intentions, ministry notes, and upcoming events.",
  href: "#",
  fileType: "PDF",
} as const;

export const ministryCardExample = {
  title: "St. Martha Hospitality Guild",
  description: "Welcomes visitors, organizes Sunday coffee, and assists with parish receptions.",
  category: "Hospitality",
  leader: "Maria Sanchez",
  meetingTime: "First Sundays",
  href: "#",
} as const;

export const donationCalloutExample = {
  title: "Support the parish restoration fund",
  description: "Help preserve the church, chapel, sacred art, and parish facilities for future generations.",
  amountLabel: "$50 funds one restoration hour",
  actionLabel: "Give now",
  actionHref: "#",
  secondaryLabel: "Learn about the project",
  secondaryHref: "#",
} as const;

export const parishContactCardExample = {
  title: "Saint Anselm Parish Office",
  phone: "(505) 555-0188",
  email: "office@saintanselm.example",
  website: "https://example.com",
  addressLines: ["123 Mission Road", "Santa Fe, NM 87501"],
  officeHours: [
    { day: "Monday–Thursday", hours: "9:00 AM – 4:00 PM" },
    { day: "Friday", hours: "9:00 AM – Noon" },
  ],
  mapHref: "#",
  locationNote: "Office entrance is on the courtyard side of the parish hall.",
} as const;

export const churchDocumentExample = {
  title: "Dilexit nos",
  subtitle: "On the Human and Divine Love of the Heart of Jesus Christ",
  citation: "Francis, Encyclical Letter Dilexit nos, 24 October 2024.",
  documentType: "encyclical",
  authority: "pope",
  authorityLabel: "Pope",
  date: "24 October 2024",
  language: "English",
  description: "A Church document header/card pattern for papal, diocesan, parish, canonical, and source-backed documents.",
  href: "#",
  source: {
    label: "Holy See",
    href: "#",
    authorityLevel: "official",
  },
} as const;

export const churchDocumentMetadataExample = {
  items: [
    { label: "Authority", value: "Pope" },
    { label: "Type", value: "Encyclical" },
    { label: "Date", value: "24 October 2024" },
    { label: "Source", value: "Holy See", href: "#" },
  ],
} as const;

export const documentAuthorityBadgeExample = {
  authority: "bishop",
  label: "Bishop",
} as const;

export const documentTypeBadgeExample = {
  documentType: "pastoral-letter",
} as const;

export const documentCitationExample = {
  label: "Citation",
  citation: "Francis, Encyclical Letter Dilexit nos, 24 October 2024.",
} as const;

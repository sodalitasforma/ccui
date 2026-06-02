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
  src: "https://www.youtube.com/embed/HBqOHEnYDxs",
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
  contactAction: { label: "Contact", href: "#" },
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

export const projectDonationCalloutExample = {
  title: "Support the parish restoration fund",
  description: "Help preserve the church, chapel, sacred art, and parish facilities for future generations.",
  amounts: ["$25", "$50", "$100"],
  selectedAmount: "$50",
  impact: "$50 funds one restoration hour.",
  primaryAction: { label: "Give now", href: "#" },
  secondaryActions: [
    { label: "Learn about the project", href: "#" },
  ],
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

export const paragraphAnchorExample = {
  id: "p-1",
  number: "1",
  children: "The Church proposes the Gospel in every age through visible signs, public teaching, sacramental life, and ordered charity.",
  href: "#p-1",
} as const;

export const footnoteListExample = {
  title: "Footnotes",
  items: [
    {
      id: "fn-1",
      marker: "1",
      text: "See the related magisterial source and local diocesan implementation notes.",
      href: "#p-1",
    },
    {
      id: "fn-2",
      marker: "2",
      text: "This example demonstrates source-backed reference display for future archive pages.",
    },
  ],
} as const;

export const relatedDocumentsExample = {
  title: "Related documents",
  documents: [
    {
      title: "Pastoral Letter on Parish Life",
      documentType: "pastoral-letter",
      authority: "bishop",
      authorityLabel: "Bishop",
      date: "2026",
      language: "English",
      relationship: "Related diocesan guidance.",
      href: "#",
      source: { label: "Diocese", href: "#", authorityLevel: "official" },
    },
    {
      title: "Parish Bulletin Archive",
      documentType: "bulletin",
      authority: "parish",
      authorityLabel: "Parish",
      date: "2026",
      language: "English",
      relationship: "Local parish implementation and notices.",
      href: "#",
      source: { label: "Parish office", href: "#", authorityLevel: "local" },
    },
  ],
} as const;

export const archiveSearchResultExample = {
  title: "Dilexit nos",
  subtitle: "On the Human and Divine Love of the Heart of Jesus Christ",
  documentType: "encyclical",
  authority: "pope",
  authorityLabel: "Pope",
  date: "24 October 2024",
  language: "English",
  excerpt: "Search result excerpt showing why this document matched the query.",
  href: "#",
  source: { label: "Holy See", href: "#", authorityLevel: "official" },
} as const;

export const downloadLinkExample = {
  label: "Download official PDF",
  href: "#",
  fileType: "PDF",
  fileSize: "428 KB",
  description: "Official document download.",
} as const;

export const fileTypeIconExample = {
  fileType: "PDF",
} as const;

export const sourceCardExample = {
  title: "Holy See source record",
  description: "Canonical source entry for an official Church document.",
  authority: "holy-see",
  authorityLabel: "Holy See",
  sourceType: "Official source",
  href: "#",
  citation: "Holy See, official document source record.",
} as const;

export const citationTrailExample = {
  title: "Citation trail",
  items: [
    {
      label: "Official source",
      citation: "Holy See, official document record.",
      href: "#",
      authority: "holy-see",
    },
    {
      label: "Local implementation",
      citation: "Diocesan pastoral application and parish notice.",
      href: "#",
      authority: "diocese",
    },
  ],
} as const;

export const canonicalReferenceExample = {
  label: "Canonical reference",
  value: "CIC can. 528 §2",
  system: "Canon Law",
  href: "#",
  description: "A stable canonical reference that can later map to structured Catholic datasets.",
} as const;

export const officialNoticeCardExample = {
  title: "Official diocesan notice",
  description: "A formal notice for diocesan, parish, school, or ministry communication.",
  date: "June 7, 2026",
  authority: "diocese",
  authorityLabel: "Diocese",
  documentType: "notification",
  href: "#",
} as const;

export const prayerBlockExample = {
  title: "Prayer after Communion",
  text: "May Thy Body, O Lord, which I have received, and Thy Blood which I have drunk, cleave unto my inmost parts.",
  language: "English",
  source: {
    label: "Catholic Semantic Canon",
    href: "#",
    authorityLevel: "devotional",
  },
} as const;

export const biblePassageCardExample = {
  reference: "John 6:51",
  text: "I am the living bread which came down from heaven.",
  translation: "Douay-Rheims",
  book: "John",
  chapter: 6,
  verses: "51",
  source: {
    label: "Bible API",
    href: "#",
    authorityLevel: "scripture",
  },
} as const;

export const directoryFilterExample = {
  searchPlaceholder: "Search offices, parishes, schools, or clergy",
  searchName: "q",
  categoryLabel: "All directory types",
  categoryName: "type",
  categories: [
    { label: "Parishes", value: "parishes" },
    { label: "Schools", value: "schools" },
    { label: "Offices", value: "offices" },
    { label: "Clergy", value: "clergy" },
  ],
  actionLabel: "Filter directory",
} as const;

export const dateRangeLabelExample = {
  label: "Active years",
  startDate: "1878",
  endDate: "1903",
} as const;

export const centuryFilterExample = {
  label: "All centuries",
  name: "century",
  centuries: [
    { label: "19th century", value: "19" },
    { label: "20th century", value: "20" },
    { label: "21st century", value: "21" },
  ],
} as const;

export const nameFilterExample = {
  name: "name",
  placeholder: "Search by name",
} as const;

export const institutionalDirectoryExample = {
  title: "Institutional Directory",
  description: "A reusable directory shell for Catholic institutions and records.",
  items: [
    {
      eyebrow: "Parish",
      title: "Saint Anselm Parish",
      description: "Sunday Mass, confessions, parish office, ministries, and bulletins.",
      meta: "Santa Fe, NM",
      status: "Active",
      href: "#",
    },
    {
      eyebrow: "School",
      title: "Saint Catherine Academy",
      description: "Catholic school directory record with public contact and office data.",
      meta: "K–8",
      status: "Open",
      href: "#",
    },
    {
      eyebrow: "Office",
      title: "Office of Divine Worship",
      description: "Diocesan office supporting liturgy, sacraments, and parish guidance.",
      meta: "Chancery",
      status: "Public",
      href: "#",
    },
  ],
} as const;

export const pontiffDirectoryExample = {
  title: "Pontiff Directory",
  description: "A Vatican-style directory of pontiffs with pontificate date ranges.",
  centuries: [
    { label: "19th century", value: "19" },
    { label: "20th century", value: "20" },
    { label: "21st century", value: "21" },
  ],
  pontiffs: [
    {
      title: "Leo XIII",
      description: "Supreme Pontiff of the Catholic Church.",
      pontificateStart: "1878",
      pontificateEnd: "1903",
      century: "19th century",
      meta: "Rome",
      status: "Historical",
      href: "#",
    },
    {
      title: "Pius X",
      description: "Supreme Pontiff of the Catholic Church.",
      pontificateStart: "1903",
      pontificateEnd: "1914",
      century: "20th century",
      meta: "Rome",
      status: "Saint",
      href: "#",
    },
  ],
} as const;

export const pontiffCardExample = pontiffDirectoryExample.pontiffs[0];

export const clergyDirectoryExample = {
  title: "Clergy Directory",
  description: "Directory of clergy records for public diocesan and parish websites.",
  clergy: [
    {
      eyebrow: "Priest",
      title: "Rev. Thomas Aquinas",
      description: "Pastor, Saint Anselm Parish.",
      meta: "Parish clergy",
      status: "Active",
      href: "#",
    },
    {
      eyebrow: "Deacon",
      title: "Deacon John Fisher",
      description: "Permanent deacon serving parish liturgy and catechesis.",
      meta: "Diaconate",
      status: "Active",
      href: "#",
    },
  ],
} as const;

export const parishDirectoryExample = {
  title: "Parish Directory",
  description: "A public parish directory for diocesan websites.",
  parishes: [
    {
      eyebrow: "Parish",
      title: "Saint Anselm Parish",
      description: "Masses, confessions, parish office, ministries, and bulletins.",
      meta: "Santa Fe, NM",
      status: "Active",
      href: "#",
    },
    {
      eyebrow: "Mission",
      title: "San Miguel Mission",
      description: "Historic mission church with public Mass schedule.",
      meta: "Northern deanery",
      status: "Mission",
      href: "#",
    },
  ],
} as const;

export const schoolDirectoryExample = {
  title: "School Directory",
  description: "Catholic schools directory for public institutional sites.",
  schools: [
    {
      eyebrow: "School",
      title: "Saint Catherine Academy",
      description: "Classical Catholic school serving K–8 students.",
      meta: "K–8",
      status: "Open",
      href: "#",
    },
    {
      eyebrow: "High School",
      title: "Aquinas Preparatory",
      description: "Catholic preparatory high school.",
      meta: "9–12",
      status: "Open",
      href: "#",
    },
  ],
} as const;

export const officeDirectoryExample = {
  title: "Office Directory",
  description: "Chancery and diocesan office directory.",
  offices: [
    {
      eyebrow: "Office",
      title: "Office of Divine Worship",
      description: "Supports liturgy, sacraments, and parish guidance.",
      meta: "Chancery",
      status: "Public",
      href: "#",
    },
    {
      eyebrow: "Office",
      title: "Office of Catholic Schools",
      description: "Supports Catholic school governance and formation.",
      meta: "Education",
      status: "Public",
      href: "#",
    },
  ],
} as const;

export const saintDirectoryExample = {
  title: "Saint Directory",
  description: "Directory structure for saints, blesseds, and feast records.",
  centuries: [
    { label: "1st century", value: "1" },
    { label: "13th century", value: "13" },
    { label: "16th century", value: "16" },
  ],
  saints: [
    {
      eyebrow: "Saint",
      title: "Saint Thomas Aquinas",
      description: "Doctor of the Church.",
      meta: "13th century",
      status: "Doctor",
      href: "#",
    },
    {
      eyebrow: "Saint",
      title: "Saint Teresa of Ávila",
      description: "Doctor of the Church and Carmelite reformer.",
      meta: "16th century",
      status: "Doctor",
      href: "#",
    },
  ],
} as const;

export const newsCardExample = {
  title: "Parish announces Corpus Christi procession",
  description: "The procession will follow the principal Sunday Mass and conclude with Benediction.",
  date: "June 7, 2026",
  category: "Parish news",
  href: "#",
  source: { label: "Parish office", href: "#", authorityLevel: "local" },
} as const;

export const newsListExample = {
  title: "Latest news",
  description: "Public notices and institutional updates.",
  items: [
    newsCardExample,
    {
      title: "Catholic school registration opens",
      description: "Enrollment for the coming academic year is now open.",
      date: "June 10, 2026",
      category: "School",
      href: "#",
      source: { label: "School office", href: "#", authorityLevel: "local" },
    },
  ],
} as const;

export const calendarItemExample = {
  title: "Corpus Christi Procession",
  date: "Jun 7",
  time: "11:30 AM",
  location: "Church grounds",
  category: "Liturgical",
  description: "Procession immediately following the principal Mass.",
  href: "#",
} as const;

export const calendarTabsExample = {
  upcoming: [
    calendarItemExample,
    {
      title: "Parish Council Meeting",
      date: "Jun 12",
      time: "6:00 PM",
      location: "Parish hall",
      category: "Meeting",
      description: "Monthly council meeting.",
      href: "#",
    },
  ],
  liturgical: [
    {
      title: "Solemnity Mass",
      date: "Jun 29",
      time: "7:00 PM",
      location: "Church",
      category: "Holy Day",
      description: "Evening Mass for the solemnity.",
      href: "#",
    },
  ],
  meetings: [
    {
      title: "Finance Council",
      date: "Jul 2",
      time: "5:30 PM",
      location: "Office",
      category: "Meeting",
      description: "Quarterly finance council meeting.",
      href: "#",
    },
  ],
} as const;

export const featuredStoryExample = {
  eyebrow: "Featured story",
  title: "A new chapter for the parish school",
  description: "A public-facing story treatment for diocesan newsrooms, school announcements, and parish features.",
  date: "June 2026",
  category: "Education",
  href: "#",
  source: { label: "Diocese", href: "#", authorityLevel: "official" },
} as const;

export const pressReleaseCardExample = {
  title: "Diocese announces new office hours",
  description: "The chancery has published updated public office hours for the summer.",
  date: "June 3, 2026",
  category: "Press release",
  office: "Communications",
  href: "#",
  source: { label: "Press office", href: "#", authorityLevel: "official" },
} as const;

export const pressOfficeNoticeExample = {
  title: "Official notice from the communications office",
  description: "This notice demonstrates a formal newsroom alert with authority and date context.",
  date: "June 3, 2026",
  office: "Press Office",
  severity: "official",
  href: "#",
} as const;

export const mediaCardExample = {
  title: "Bishop blesses restored chapel",
  description: "A general media card for diocesan, parish, school, and Vatican-style media indexes.",
  date: "June 2026",
  category: "Photo",
  href: "#",
  media: {
    src: "/examples/buenos-aires-cathedral.jpg",
    alt: "Church interior",
    caption: "Example external image URL for CMS or media database content.",
    provider: "CMS",
    fit: "cover",
    position: "center",
  },
} as const;

export const videoCardExample = {
  title: "Papal audience video",
  description: "A video card that can render YouTube, Vatican News, CMS, or database-provided embed URLs.",
  date: "June 2026",
  category: "Video",
  href: "#",
  duration: "12 min",
  media: {
    src: "https://www.youtube.com/embed/HBqOHEnYDxs",
    title: "Example embedded video",
    caption: "Example iframe embed URL.",
    provider: "YouTube",
  },
} as const;

export const photoGalleryCardExample = {
  title: "Corpus Christi procession gallery",
  description: "A gallery card for parish events, diocesan newsrooms, school albums, and media archives.",
  date: "June 2026",
  category: "Gallery",
  href: "#photo-gallery-expanded-example",
  provider: "CMS",
  photoCount: 18,
  fit: "cover",
  position: "center",
  photos: [
    {
      src: "/examples/buenos-aires-cathedral.jpg",
      alt: "Buenos Aires Cathedral interior",
      fit: "cover",
      position: "center",
    },
    {
      src: "/examples/chapel-detail-1.svg",
      alt: "Restored chapel altar detail",
    },
    {
      src: "/examples/chapel-detail-2.svg",
      alt: "Chapel windows and nave detail",
    },
    {
      src: "/examples/chapel-detail-3.svg",
      alt: "Chapel sanctuary detail",
    },
  ],
} as const;

export const projectStatusBadgeExample = {
  status: "incubating",
  label: "Incubating",
} as const;

export const repositoryLinkExample = {
  href: "#",
  provider: "GitHub",
  language: "TypeScript",
  license: "MIT",
  openIssues: 12,
} as const;

export const contributorListExample = {
  title: "Contributors",
  contributors: [
    {
      name: "CDCF maintainer",
      role: "Maintainer",
      affiliation: "Catholic Digital Commons-style project",
      href: "#",
    },
    {
      name: "Parish technologist",
      role: "Contributor",
      affiliation: "Diocesan implementation partner",
      href: "#",
    },
  ],
} as const;

export const projectCardExample = {
  title: "Liturgical Calendar API",
  description: "A machine-readable liturgical calendar project that can power parish schedules, feast day cards, and Catholic applications.",
  projectType: "api",
  status: "incubating",
  href: "#",
  repository: repositoryLinkExample,
  standardHref: "#",
  contributors: contributorListExample.contributors,
  tags: ["Liturgical Calendar API", "Machine-readable", "Parish-ready"],
} as const;

export const datasetCardExample = {
  title: "Catholic Parish Dataset",
  description: "A structured dataset for parish entities, locations, contact records, and public institutional metadata.",
  coverage: "United States",
  format: "JSON",
  license: "Open data",
  version: "0.1",
  source: {
    label: "Catholic datasets",
    href: "#",
    authorityLevel: "dataset",
  },
  machineReadable: true,
  href: "#",
} as const;

export const apiEndpointCardExample = {
  method: "GET",
  path: "/api/liturgical-calendar/{date}",
  description: "Returns the liturgical day, season, color, rank, and readings for a given date.",
  responseFormat: "JSON",
  authentication: "Public",
  version: "0.1",
  exampleHref: "#",
} as const;

export const namespaceBadgeExample = {
  namespace: "csc",
  label: "Catholic Semantic Canon",
} as const;

export const reviewStatusBadgeExample = {
  status: "in-review",
  label: "In review",
} as const;

export const ontologyPropertyTableExample = {
  properties: [
    {
      property: "feastDate",
      expectedType: "Date",
      required: true,
      description: "Calendar date on which the feast is observed.",
    },
    {
      property: "liturgicalRank",
      expectedType: "LiturgicalRank",
      required: true,
      description: "Rank such as solemnity, feast, memorial, or optional memorial.",
    },
    {
      property: "associatedSaint",
      expectedType: "Saint",
      required: false,
      description: "Associated saint entity when the day commemorates a saint.",
    },
  ],
} as const;

export const ontologyClassCardExample = {
  className: "LiturgicalDay",
  namespace: "csc",
  label: "Liturgical Day",
  description: "A machine-readable class for a day in the Catholic liturgical calendar.",
  reviewStatus: "in-review",
  properties: ontologyPropertyTableExample.properties,
  source: {
    label: "Catholic Semantic Canon",
    href: "#",
    authorityLevel: "semantic",
  },
} as const;

export const termDefinitionCardExample = {
  term: "Solemnity",
  definition: "A liturgical day of the highest rank, observed with particular importance in the Roman Rite calendar.",
  namespace: "csc",
  reviewStatus: "reviewed",
  source: {
    label: "Catholic Semantic Canon",
    href: "#",
    authorityLevel: "semantic",
  },
} as const;

export const translationVariantCardExample = {
  term: "Solemnity",
  language: "Latin",
  variant: "Sollemnitas",
  note: "Latin variant useful for multilingual liturgical and canonical references.",
  source: {
    label: "Translation table",
    href: "#",
    authorityLevel: "translation",
  },
} as const;

export const authorityLevelBadgeExample = {
  authorityLevel: "magisterial",
  label: "Magisterial",
} as const;

export const machineReadableBadgeExample = {
  status: "available",
  label: "Machine-readable",
} as const;

export const canonicalSourceCardExample = {
  title: "Dilexit nos",
  description: "Official source record for an encyclical letter exposed as a canonical, citable, machine-readable source.",
  authorityLevel: "magisterial",
  sourceType: "Encyclical",
  href: "#",
  citation: "Francis, Encyclical Letter Dilexit nos, 24 October 2024.",
  reviewStatus: "accepted",
  machineReadable: "available",
} as const;

export const provenanceTrailExample = {
  title: "Source provenance",
  steps: [
    {
      label: "Holy See source",
      description: "Primary official source record.",
      href: "#",
      authorityLevel: "official",
    },
    {
      label: "Canonical citation",
      description: "Normalized citation record for reuse in documents, APIs, and archives.",
      href: "#",
      authorityLevel: "canonical",
    },
    {
      label: "Machine-readable export",
      description: "Structured JSON record consumed by public interfaces and Catholic applications.",
      href: "#",
      authorityLevel: "machine",
    },
  ],
} as const;

export const entityCardExample = {
  id: "liturgical-day:corpus-christi-2026",
  title: "Corpus Christi",
  entityType: "liturgical-day",
  description: "A liturgical day entity with readings, rank, season, and calendar metadata.",
  href: "#",
  authorityLevel: "semantic",
  reviewStatus: "reviewed",
  machineReadable: "available",
} as const;

export const entityRelationshipListExample = {
  title: "Entity relationships",
  entities: [
    entityCardExample,
    {
      id: "bible-passage:luke-9-11b-17",
      title: "Luke 9:11b–17",
      entityType: "bible-passage",
      description: "Gospel reading entity.",
      href: "#",
      authorityLevel: "canonical",
      reviewStatus: "reviewed",
      machineReadable: "available",
    },
    {
      id: "term:solemnity",
      title: "Solemnity",
      entityType: "term",
      description: "Liturgical rank term.",
      href: "#",
      authorityLevel: "semantic",
      reviewStatus: "reviewed",
      machineReadable: "available",
    },
  ],
  relationships: [
    {
      sourceId: "liturgical-day:corpus-christi-2026",
      predicate: "hasReading",
      targetId: "bible-passage:luke-9-11b-17",
      label: "Corpus Christi has Gospel reading Luke 9:11b–17",
      description: "Connects a liturgical day to its lectionary reading.",
      href: "#",
      authorityLevel: "canonical",
    },
    {
      sourceId: "liturgical-day:corpus-christi-2026",
      predicate: "hasRank",
      targetId: "term:solemnity",
      label: "Corpus Christi has rank Solemnity",
      description: "Connects a liturgical day to a canonical rank term.",
      href: "#",
      authorityLevel: "semantic",
    },
  ],
} as const;

export const semanticRelationGraphExample = {
  title: "Liturgical day knowledge graph",
  description: "A visual interface for Catholic knowledge relationships that can power APIs, search, source trails, and semantic applications.",
  entities: entityRelationshipListExample.entities,
  relationships: entityRelationshipListExample.relationships,
} as const;

export const titheIconExample = {
  placement: "inline",
  giveHref: "#",
  secondaryHref: "#",
  currency: "USD",
  locale: "en-US",
  amounts: [25, 50, 100],
  selectedAmount: 50,
} as const;

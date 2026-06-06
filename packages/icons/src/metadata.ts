import {
  ArrowRightIcon,
  BellIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  CloseIcon,
  CopyIcon,
  DownloadIcon,
  ExternalLinkIcon,
  FilterIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
} from "./interface";

import {
  BibleIcon,
  CandleIcon,
  ChaliceIcon,
  ChurchIcon,
  CrossIcon,
  DoveIcon,
  FishIcon,
  HostIcon,
  KeysIcon,
  RosaryIcon,
} from "./catholic";

import {
  AltarIcon,
  BaptismShellIcon,
  ConfessionalIcon,
  KneelerIcon,
  LectionaryIcon,
  MonstranceIcon,
  ThuribleIcon,
} from "./liturgy";

import {
  ArchiveIcon,
  CitationIcon,
  DecreeIcon,
  DocumentIcon,
  SealIcon,
  TranslationIcon,
} from "./documents";

import {
  DonationIcon,
  FamilyIcon,
  FormationIcon,
  MinistryIcon,
  OfficeIcon,
  SchoolIcon,
  VolunteerIcon,
} from "./parish";

export type IconCategory =
  | "Interface"
  | "Catholic"
  | "Liturgy"
  | "Documents"
  | "Parish";

export type IconRegistryItem = {
  name: string;
  exportName: string;
  category: IconCategory;
  description: string;
  tags: readonly string[];
  Icon: typeof ArrowRightIcon;
};

export const iconRegistry = [
  { name: "Arrow right", exportName: "ArrowRightIcon", category: "Interface", description: "Directional arrow for links, navigation, and calls to action.", tags: ["arrow", "right", "next", "cta", "navigation"], Icon: ArrowRightIcon },
  { name: "Bell", exportName: "BellIcon", category: "Interface", description: "Notifications, alerts, reminders, and updates.", tags: ["bell", "notification", "alert", "reminder"], Icon: BellIcon },
  { name: "Calendar", exportName: "CalendarIcon", category: "Interface", description: "Dates, events, schedules, and calendars.", tags: ["calendar", "date", "event", "schedule"], Icon: CalendarIcon },
  { name: "Check", exportName: "CheckIcon", category: "Interface", description: "Confirmation, completion, or selected state.", tags: ["check", "success", "complete", "selected"], Icon: CheckIcon },
  { name: "Chevron down", exportName: "ChevronDownIcon", category: "Interface", description: "Open menus, selects, accordions, and disclosure controls.", tags: ["chevron", "down", "select", "dropdown", "disclosure"], Icon: ChevronDownIcon },
  { name: "Clock", exportName: "ClockIcon", category: "Interface", description: "Times, hours, schedules, and deadlines.", tags: ["clock", "time", "hours", "schedule"], Icon: ClockIcon },
  { name: "Close", exportName: "CloseIcon", category: "Interface", description: "Close, dismiss, or remove action.", tags: ["close", "dismiss", "remove", "x"], Icon: CloseIcon },
  { name: "Copy", exportName: "CopyIcon", category: "Interface", description: "Copy code, text, links, or citations.", tags: ["copy", "clipboard", "code", "duplicate"], Icon: CopyIcon },
  { name: "Download", exportName: "DownloadIcon", category: "Interface", description: "Download documents, files, bulletins, or media.", tags: ["download", "file", "document", "save"], Icon: DownloadIcon },
  { name: "External link", exportName: "ExternalLinkIcon", category: "Interface", description: "Links that open external resources or source sites.", tags: ["external", "link", "source", "open"], Icon: ExternalLinkIcon },
  { name: "Filter", exportName: "FilterIcon", category: "Interface", description: "Filtering lists, directories, archives, and search results.", tags: ["filter", "search", "directory", "archive"], Icon: FilterIcon },
  { name: "Mail", exportName: "MailIcon", category: "Interface", description: "Email and contact links.", tags: ["mail", "email", "contact"], Icon: MailIcon },
  { name: "Map pin", exportName: "MapPinIcon", category: "Interface", description: "Locations, parishes, offices, and campuses.", tags: ["map", "pin", "location", "parish"], Icon: MapPinIcon },
  { name: "Menu", exportName: "MenuIcon", category: "Interface", description: "Open navigation, drawers, or menus.", tags: ["menu", "hamburger", "navigation"], Icon: MenuIcon },
  { name: "Phone", exportName: "PhoneIcon", category: "Interface", description: "Phone numbers and contact actions.", tags: ["phone", "call", "contact"], Icon: PhoneIcon },
  { name: "Search", exportName: "SearchIcon", category: "Interface", description: "Search documentation, archives, directories, or records.", tags: ["search", "find", "query", "archive"], Icon: SearchIcon },

  { name: "Bible", exportName: "BibleIcon", category: "Catholic", description: "Scripture, readings, Bible studies, and catechesis.", tags: ["bible", "scripture", "readings", "catechesis"], Icon: BibleIcon },
  { name: "Candle", exportName: "CandleIcon", category: "Catholic", description: "Prayer, devotion, vigils, and sacred space.", tags: ["candle", "prayer", "devotion", "vigil"], Icon: CandleIcon },
  { name: "Chalice", exportName: "ChaliceIcon", category: "Catholic", description: "Eucharistic chalice symbol for Mass, liturgy, and sacramental contexts.", tags: ["chalice", "mass", "eucharist", "liturgy", "sacrament"], Icon: ChaliceIcon },
  { name: "Church", exportName: "ChurchIcon", category: "Catholic", description: "Church building symbol for parishes, dioceses, and locations.", tags: ["church", "parish", "diocese", "building", "location"], Icon: ChurchIcon },
  { name: "Cross", exportName: "CrossIcon", category: "Catholic", description: "Primary Christian cross symbol.", tags: ["cross", "christian", "catholic", "faith"], Icon: CrossIcon },
  { name: "Dove", exportName: "DoveIcon", category: "Catholic", description: "Holy Spirit, peace, confirmation, and sacramental imagery.", tags: ["dove", "holy spirit", "peace", "confirmation"], Icon: DoveIcon },
  { name: "Fish", exportName: "FishIcon", category: "Catholic", description: "Christian symbol, catechesis, and early Church references.", tags: ["fish", "ichthys", "christian", "early church"], Icon: FishIcon },
  { name: "Host", exportName: "HostIcon", category: "Catholic", description: "Eucharistic host, adoration, and sacramental contexts.", tags: ["host", "eucharist", "adoration", "mass"], Icon: HostIcon },
  { name: "Keys", exportName: "KeysIcon", category: "Catholic", description: "Petrine office, authority, and ecclesial governance.", tags: ["keys", "peter", "pope", "authority"], Icon: KeysIcon },
  { name: "Rosary", exportName: "RosaryIcon", category: "Catholic", description: "Rosary symbol for prayer, devotion, and Marian contexts.", tags: ["rosary", "prayer", "marian", "devotion"], Icon: RosaryIcon },

  { name: "Altar", exportName: "AltarIcon", category: "Liturgy", description: "Altars, sanctuaries, Mass pages, and worship spaces.", tags: ["altar", "sanctuary", "mass", "liturgy"], Icon: AltarIcon },
  { name: "Baptism shell", exportName: "BaptismShellIcon", category: "Liturgy", description: "Baptism, sacramental preparation, and parish rites.", tags: ["baptism", "shell", "sacrament", "rite"], Icon: BaptismShellIcon },
  { name: "Confessional", exportName: "ConfessionalIcon", category: "Liturgy", description: "Confession schedules, reconciliation, and sacramental pages.", tags: ["confession", "reconciliation", "sacrament"], Icon: ConfessionalIcon },
  { name: "Kneeler", exportName: "KneelerIcon", category: "Liturgy", description: "Prayer, worship, adoration, and devotional contexts.", tags: ["kneeler", "prayer", "adoration", "worship"], Icon: KneelerIcon },
  { name: "Lectionary", exportName: "LectionaryIcon", category: "Liturgy", description: "Readings, lectionary references, and liturgical calendars.", tags: ["lectionary", "readings", "scripture", "calendar"], Icon: LectionaryIcon },
  { name: "Monstrance", exportName: "MonstranceIcon", category: "Liturgy", description: "Adoration, Eucharistic devotion, and exposition.", tags: ["monstrance", "adoration", "eucharist", "devotion"], Icon: MonstranceIcon },
  { name: "Thurible", exportName: "ThuribleIcon", category: "Liturgy", description: "Incense, solemn liturgy, and ceremonial contexts.", tags: ["thurible", "incense", "liturgy", "solemn"], Icon: ThuribleIcon },

  { name: "Archive", exportName: "ArchiveIcon", category: "Documents", description: "Document archives, records, and source repositories.", tags: ["archive", "records", "documents", "repository"], Icon: ArchiveIcon },
  { name: "Citation", exportName: "CitationIcon", category: "Documents", description: "Citations, references, footnotes, and source trails.", tags: ["citation", "reference", "source", "footnote"], Icon: CitationIcon },
  { name: "Decree", exportName: "DecreeIcon", category: "Documents", description: "Decrees, official documents, rulings, and notices.", tags: ["decree", "official", "document", "notice"], Icon: DecreeIcon },
  { name: "Document", exportName: "DocumentIcon", category: "Documents", description: "General documents, files, bulletins, and forms.", tags: ["document", "file", "form", "bulletin"], Icon: DocumentIcon },
  { name: "Seal", exportName: "SealIcon", category: "Documents", description: "Authority, seals, authentication, and official status.", tags: ["seal", "authority", "official", "authentication"], Icon: SealIcon },
  { name: "Translation", exportName: "TranslationIcon", category: "Documents", description: "Translations, language variants, and multilingual documents.", tags: ["translation", "language", "multilingual", "variant"], Icon: TranslationIcon },

  { name: "Donation", exportName: "DonationIcon", category: "Parish", description: "Giving, donations, campaigns, and stewardship.", tags: ["donation", "giving", "stewardship", "campaign"], Icon: DonationIcon },
  { name: "Family", exportName: "FamilyIcon", category: "Parish", description: "Families, households, parish life, and community pages.", tags: ["family", "household", "community", "parish"], Icon: FamilyIcon },
  { name: "Formation", exportName: "FormationIcon", category: "Parish", description: "Faith formation, classes, catechesis, and learning.", tags: ["formation", "catechesis", "class", "education"], Icon: FormationIcon },
  { name: "Ministry", exportName: "MinistryIcon", category: "Parish", description: "Ministries, groups, volunteers, and parish organizations.", tags: ["ministry", "group", "volunteer", "parish"], Icon: MinistryIcon },
  { name: "Office", exportName: "OfficeIcon", category: "Parish", description: "Parish offices, administration, and contact sections.", tags: ["office", "administration", "contact", "parish"], Icon: OfficeIcon },
  { name: "School", exportName: "SchoolIcon", category: "Parish", description: "Catholic schools, education, and parish campuses.", tags: ["school", "education", "campus", "parish"], Icon: SchoolIcon },
  { name: "Volunteer", exportName: "VolunteerIcon", category: "Parish", description: "Volunteers, service, outreach, and ministry work.", tags: ["volunteer", "service", "outreach", "ministry"], Icon: VolunteerIcon },
] as const satisfies readonly IconRegistryItem[];

export const iconCategories = [
  "Interface",
  "Catholic",
  "Liturgy",
  "Documents",
  "Parish",
] as const satisfies readonly IconCategory[];

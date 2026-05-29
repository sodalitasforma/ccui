export type NavItem = {
  label: string;
  href: string;
  current?: boolean;
};

export type LanguageItem = {
  label: string;
  href: string;
  current?: boolean;
  lang?: string;
};

export type LiturgicalColor =
  | "white"
  | "green"
  | "violet"
  | "red"
  | "rose"
  | "black"
  | "gold";

export type ScheduleStatus =
  | "normal"
  | "cancelled"
  | "moved"
  | "livestream"
  | "exception";

export type ExceptionSeverity =
  | "info"
  | "warning"
  | "danger"
  | "success"
  | "liturgical"
  | "official";

export type CatholicSource = {
  label: string;
  href?: string;
  authorityLevel?: string;
};

export type ScheduleMeta = {
  language?: string;
  location?: string;
  livestreamHref?: string;
  note?: string;
  source?: CatholicSource;
};

export type ScheduleTime = ScheduleMeta & {
  time: string;
  label?: string;
  status?: ScheduleStatus;
};

export type ScheduleDay = {
  day: string;
  date?: string;
  times: readonly ScheduleTime[];
};

export type ScheduleException = {
  title: string;
  description?: string;
  date?: string;
  severity?: ExceptionSeverity;
};

export type ScheduleBlockData = {
  title: string;
  subtitle?: string;
  badge?: string;
  days: readonly ScheduleDay[];
  exceptions?: readonly ScheduleException[];
  source?: CatholicSource;
};

export type LiturgicalSeason =
  | "Advent"
  | "Christmas"
  | "Lent"
  | "Easter"
  | "Ordinary Time"
  | "Triduum"
  | "Sanctoral"
  | "Other";

export type LiturgicalRank =
  | "Solemnity"
  | "Feast"
  | "Memorial"
  | "Optional Memorial"
  | "Ferial"
  | "Sunday"
  | "Holy Day"
  | "Other";

export type ReadingReferenceData = {
  label: string;
  citation: string;
  book?: string;
  chapter?: number;
  verses?: string;
  translation?: string;
  source?: CatholicSource;
};

export type LiturgicalDayData = {
  title: string;
  date: string;
  season: LiturgicalSeason | string;
  color: LiturgicalColor;
  rank?: LiturgicalRank | string;
  description?: string;
  readings?: readonly ReadingReferenceData[];
  source?: CatholicSource;
};

export type PrayerCardData = {
  title: string;
  text: string;
  tradition?: string;
  language?: string;
  source?: CatholicSource;
};

export type ParishAnnouncementData = {
  title: string;
  description?: string;
  date?: string;
  severity?: ExceptionSeverity;
  href?: string;
};

export type BulletinData = {
  title: string;
  date: string;
  description?: string;
  href?: string;
  fileType?: string;
};

export type MinistryData = {
  title: string;
  description?: string;
  category?: string;
  leader?: string;
  meetingTime?: string;
  href?: string;
};

export type DonationCalloutData = {
  title: string;
  description?: string;
  amountLabel?: string;
  actionLabel: string;
  actionHref: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export type ParishContactData = {
  title: string;
  phone?: string;
  email?: string;
  website?: string;
  addressLines?: readonly string[];
  officeHours?: readonly {
    day: string;
    hours: string;
  }[];
  mapHref?: string;
  locationNote?: string;
};

export type ChurchDocumentAuthority =
  | "pope"
  | "holy-see"
  | "dicastery"
  | "bishop"
  | "diocese"
  | "parish"
  | "council"
  | "canon-law"
  | "scripture"
  | "other";

export type ChurchDocumentType =
  | "encyclical"
  | "apostolic-letter"
  | "apostolic-constitution"
  | "motu-proprio"
  | "homily"
  | "audience"
  | "decree"
  | "instruction"
  | "notification"
  | "pastoral-letter"
  | "bulletin"
  | "policy"
  | "form"
  | "source"
  | "other";

export type ChurchDocumentData = {
  title: string;
  subtitle?: string;
  citation?: string;
  documentType: ChurchDocumentType | string;
  authority: ChurchDocumentAuthority | string;
  authorityLabel?: string;
  date?: string;
  language?: string;
  description?: string;
  href?: string;
  source?: CatholicSource;
};

export type ChurchDocumentMetadataItem = {
  label: string;
  value: string;
  href?: string;
};

export type ParagraphAnchorData = {
  id: string;
  number?: string;
  children: string;
  href?: string;
};

export type FootnoteData = {
  id: string;
  marker: string;
  text: string;
  href?: string;
};

export type RelatedDocumentData = ChurchDocumentData & {
  relationship?: string;
};

export type ArchiveSearchResultData = ChurchDocumentData & {
  excerpt?: string;
};

export type DownloadLinkData = {
  label: string;
  href: string;
  fileType: string;
  fileSize?: string;
  description?: string;
};

export type SourceCardData = {
  title: string;
  description?: string;
  authority: ChurchDocumentAuthority | string;
  authorityLabel?: string;
  sourceType?: string;
  href?: string;
  citation?: string;
};

export type CitationTrailItem = {
  label: string;
  citation: string;
  href?: string;
  authority?: ChurchDocumentAuthority | string;
};

export type CanonicalReferenceData = {
  label: string;
  value: string;
  system?: string;
  href?: string;
  description?: string;
};

export type OfficialNoticeData = {
  title: string;
  description?: string;
  date?: string;
  authority: ChurchDocumentAuthority | string;
  authorityLabel?: string;
  documentType?: ChurchDocumentType | string;
  href?: string;
};

export type PrayerBlockData = {
  title?: string;
  text: string;
  language?: string;
  source?: CatholicSource;
};

export type BiblePassageData = {
  reference: string;
  text: string;
  translation?: string;
  book?: string;
  chapter?: number;
  verses?: string;
  source?: CatholicSource;
};

export type DirectoryEntityData = {
  title: string;
  description?: string;
  eyebrow?: string;
  meta?: string;
  status?: string;
  href?: string;
};

export type DirectoryFilterOption = {
  label: string;
  value: string;
};

export type DirectoryFilterData = {
  searchPlaceholder?: string;
  searchName?: string;
  categoryLabel?: string;
  categoryName?: string;
  categories?: readonly DirectoryFilterOption[];
  actionLabel?: string;
};

export type DateRangeLabelData = {
  label?: string;
  startDate?: string;
  endDate?: string;
};

export type CenturyFilterData = {
  label?: string;
  name?: string;
  centuries: readonly DirectoryFilterOption[];
};

export type PontiffData = DirectoryEntityData & {
  pontificateStart?: string;
  pontificateEnd?: string;
  century?: string;
};

export type ClergyDirectoryData = {
  title: string;
  description?: string;
  clergy: readonly DirectoryEntityData[];
};

export type ParishDirectoryData = {
  title: string;
  description?: string;
  parishes: readonly DirectoryEntityData[];
};

export type SchoolDirectoryData = {
  title: string;
  description?: string;
  schools: readonly DirectoryEntityData[];
};

export type OfficeDirectoryData = {
  title: string;
  description?: string;
  offices: readonly DirectoryEntityData[];
};

export type SaintDirectoryData = {
  title: string;
  description?: string;
  saints: readonly DirectoryEntityData[];
};

export type NewsItemData = {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  href?: string;
  source?: CatholicSource;
};

export type CalendarItemData = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  category?: string;
  description?: string;
  href?: string;
};

export type PressReleaseData = NewsItemData & {
  office?: string;
};

export type PressOfficeNoticeData = {
  title: string;
  description?: string;
  date?: string;
  office?: string;
  severity?: "official" | "info" | "warning" | "danger";
  href?: string;
};

export type FeaturedStoryData = NewsItemData & {
  eyebrow?: string;
};

export type MediaSourceData = {
  src: string;
  title?: string;
  alt?: string;
  caption?: string;
  provider?: string;
};

export type MediaCardData = {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  href?: string;
  media: MediaSourceData;
};

export type VideoCardData = MediaCardData & {
  duration?: string;
};

export type PhotoGalleryCardData = {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  href?: string;
  photos: readonly MediaSourceData[];
};

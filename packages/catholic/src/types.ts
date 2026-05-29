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

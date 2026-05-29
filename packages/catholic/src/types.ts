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
  times: ScheduleTime[];
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
  days: ScheduleDay[];
  exceptions?: ScheduleException[];
  source?: CatholicSource;
};

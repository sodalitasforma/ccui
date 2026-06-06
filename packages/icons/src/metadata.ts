import {
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  CopyIcon,
  MenuIcon,
  SearchIcon,
} from "./interface";

import {
  ChaliceIcon,
  ChurchIcon,
  CrossIcon,
  RosaryIcon,
} from "./catholic";

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
  {
    name: "Arrow right",
    exportName: "ArrowRightIcon",
    category: "Interface",
    description: "Directional arrow for links, navigation, and calls to action.",
    tags: ["arrow", "right", "next", "cta", "navigation"],
    Icon: ArrowRightIcon,
  },
  {
    name: "Check",
    exportName: "CheckIcon",
    category: "Interface",
    description: "Confirmation, completion, or selected state.",
    tags: ["check", "success", "complete", "selected"],
    Icon: CheckIcon,
  },
  {
    name: "Close",
    exportName: "CloseIcon",
    category: "Interface",
    description: "Close, dismiss, or remove action.",
    tags: ["close", "dismiss", "remove", "x"],
    Icon: CloseIcon,
  },
  {
    name: "Copy",
    exportName: "CopyIcon",
    category: "Interface",
    description: "Copy code, text, links, or citations.",
    tags: ["copy", "clipboard", "code", "duplicate"],
    Icon: CopyIcon,
  },
  {
    name: "Menu",
    exportName: "MenuIcon",
    category: "Interface",
    description: "Open navigation, drawers, or menus.",
    tags: ["menu", "hamburger", "navigation"],
    Icon: MenuIcon,
  },
  {
    name: "Search",
    exportName: "SearchIcon",
    category: "Interface",
    description: "Search documentation, archives, directories, or records.",
    tags: ["search", "find", "query", "archive"],
    Icon: SearchIcon,
  },
  {
    name: "Chalice",
    exportName: "ChaliceIcon",
    category: "Catholic",
    description: "Eucharistic chalice symbol for Mass, liturgy, and sacramental contexts.",
    tags: ["chalice", "mass", "eucharist", "liturgy", "sacrament"],
    Icon: ChaliceIcon,
  },
  {
    name: "Church",
    exportName: "ChurchIcon",
    category: "Catholic",
    description: "Church building symbol for parishes, dioceses, and locations.",
    tags: ["church", "parish", "diocese", "building", "location"],
    Icon: ChurchIcon,
  },
  {
    name: "Cross",
    exportName: "CrossIcon",
    category: "Catholic",
    description: "Primary Christian cross symbol.",
    tags: ["cross", "christian", "catholic", "faith"],
    Icon: CrossIcon,
  },
  {
    name: "Rosary",
    exportName: "RosaryIcon",
    category: "Catholic",
    description: "Rosary symbol for prayer, devotion, and Marian contexts.",
    tags: ["rosary", "prayer", "marian", "devotion"],
    Icon: RosaryIcon,
  },
] as const satisfies readonly IconRegistryItem[];

export const iconCategories = [
  "Interface",
  "Catholic",
  "Liturgy",
  "Documents",
  "Parish",
] as const satisfies readonly IconCategory[];

import type { ComponentPropsWithoutRef } from "react";
import { Badge } from "@ccui/primitives";
import type { AuthorityLevel } from "./types";

type BadgeVariant =
  | "neutral"
  | "brown"
  | "gold"
  | "active"
  | "success"
  | "danger";

type AuthorityLevelBadgeProps = {
  authorityLevel: AuthorityLevel | string;
  label?: string;
} & ComponentPropsWithoutRef<"span">;

const variantByAuthority: Record<string, BadgeVariant> = {
  official: "success",
  magisterial: "gold",
  canonical: "brown",
  scholarly: "active",
  dataset: "neutral",
  semantic: "active",
  local: "brown",
  machine: "neutral",
  unreviewed: "danger",
};

function titleCase(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function AuthorityLevelBadge({
  authorityLevel,
  label,
  ...props
}: AuthorityLevelBadgeProps) {
  const normalized = String(authorityLevel);
  const variant = variantByAuthority[normalized] ?? "neutral";

  return (
    <Badge variant={variant} {...props}>
      {label ?? titleCase(normalized)}
    </Badge>
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { Badge } from "@catholiccommons/primitives";
import type { ProjectStatus } from "./types";

type BadgeVariant =
  | "neutral"
  | "brown"
  | "gold"
  | "active"
  | "success"
  | "danger";

type ProjectStatusBadgeProps = {
  status: ProjectStatus | string;
  label?: string;
} & ComponentPropsWithoutRef<"span">;

const variantByStatus: Record<string, BadgeVariant> = {
  proposed: "neutral",
  incubating: "gold",
  active: "active",
  maintained: "success",
  reviewed: "brown",
  accepted: "success",
  deprecated: "danger",
};

function titleCase(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function ProjectStatusBadge({
  status,
  label,
  ...props
}: ProjectStatusBadgeProps) {
  const normalized = String(status);
  const variant = variantByStatus[normalized] ?? "neutral";

  return (
    <Badge variant={variant} {...props}>
      {label ?? titleCase(normalized)}
    </Badge>
  );
}

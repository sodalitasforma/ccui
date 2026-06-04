import type { ComponentPropsWithoutRef } from "react";
import { Badge } from "@catholiccommons/primitives";
import type { ReviewStatus } from "./types";

type BadgeVariant =
  | "neutral"
  | "brown"
  | "gold"
  | "active"
  | "success"
  | "danger";

type ReviewStatusBadgeProps = {
  status: ReviewStatus | string;
  label?: string;
} & ComponentPropsWithoutRef<"span">;

const variantByStatus: Record<string, BadgeVariant> = {
  draft: "neutral",
  "in-review": "gold",
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

export function ReviewStatusBadge({
  status,
  label,
  ...props
}: ReviewStatusBadgeProps) {
  const normalized = String(status);
  const variant = variantByStatus[normalized] ?? "neutral";

  return (
    <Badge variant={variant} {...props}>
      {label ?? titleCase(normalized)}
    </Badge>
  );
}

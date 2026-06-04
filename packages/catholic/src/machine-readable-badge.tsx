import type { ComponentPropsWithoutRef } from "react";
import { Badge } from "@catholiccommons/primitives";
import type { MachineReadableStatus } from "./types";

type BadgeVariant =
  | "neutral"
  | "brown"
  | "gold"
  | "active"
  | "success"
  | "danger";

type MachineReadableBadgeProps = {
  status: MachineReadableStatus | string;
  label?: string;
} & ComponentPropsWithoutRef<"span">;

const variantByStatus: Record<string, BadgeVariant> = {
  available: "success",
  partial: "gold",
  planned: "active",
  unavailable: "danger",
};

function titleCase(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function MachineReadableBadge({
  status,
  label,
  ...props
}: MachineReadableBadgeProps) {
  const normalized = String(status);
  const variant = variantByStatus[normalized] ?? "neutral";

  return (
    <Badge variant={variant} {...props}>
      {label ?? `Machine-readable: ${titleCase(normalized)}`}
    </Badge>
  );
}

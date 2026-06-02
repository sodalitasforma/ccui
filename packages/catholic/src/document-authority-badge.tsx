import type { ComponentPropsWithoutRef } from "react";
import { Badge } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { ChurchDocumentAuthority } from "./types";

type DocumentAuthorityBadgeProps = {
  authority: ChurchDocumentAuthority | string;
  label?: string;
} & ComponentPropsWithoutRef<"span">;

const variantByAuthority: Record<string, "brown" | "gold" | "active" | "liturgicalViolet" | "neutral"> = {
  pope: "gold",
  "holy-see": "gold",
  dicastery: "brown",
  bishop: "liturgicalViolet",
  diocese: "liturgicalViolet",
  parish: "brown",
  council: "gold",
  "canon-law": "active",
  scripture: "active",
  other: "neutral",
};

function labelize(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function DocumentAuthorityBadge({
  authority,
  label,
  className,
  ...props
}: DocumentAuthorityBadgeProps) {
  const key = String(authority);
  const variant = variantByAuthority[key] ?? "neutral";

  return (
    <Badge
      variant={variant}
      className={cx("ccui-document-authority-badge", className)}
      {...props}
    >
      {label ?? labelize(key)}
    </Badge>
  );
}

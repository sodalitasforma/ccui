import type { ComponentPropsWithoutRef } from "react";
import { Tag } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { ChurchDocumentType } from "./types";

type DocumentTypeBadgeProps = {
  documentType: ChurchDocumentType | string;
  label?: string;
} & ComponentPropsWithoutRef<"span">;

const variantByType: Record<string, "neutral" | "brown" | "gold" | "active" | "blue"> = {
  encyclical: "gold",
  "apostolic-letter": "gold",
  "apostolic-constitution": "gold",
  "motu-proprio": "gold",
  homily: "brown",
  audience: "brown",
  decree: "active",
  instruction: "active",
  notification: "blue",
  "pastoral-letter": "brown",
  bulletin: "blue",
  policy: "neutral",
  form: "neutral",
  source: "active",
  other: "neutral",
};

function labelize(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function DocumentTypeBadge({
  documentType,
  label,
  className,
  ...props
}: DocumentTypeBadgeProps) {
  const key = String(documentType);
  const variant = variantByType[key] ?? "neutral";

  return (
    <Tag
      variant={variant}
      className={cx("forma-document-type-badge", className)}
      {...props}
    >
      {label ?? labelize(key)}
    </Tag>
  );
}

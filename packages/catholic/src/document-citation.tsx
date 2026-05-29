import type { ComponentPropsWithoutRef } from "react";
import { Card, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

type DocumentCitationProps = {
  citation: string;
  label?: string;
} & ComponentPropsWithoutRef<"blockquote">;

export function DocumentCitation({
  citation,
  label = "Citation",
  className,
  ...props
}: DocumentCitationProps) {
  return (
    <Card
      as="blockquote"
      padding="md"
      border="gold"
      className={cx("forma-document-citation", className)}
      {...props}
    >
      <Text as="p" size="xs" tone="goldText" className="forma-document-citation__label">
        {label}
      </Text>
      <Text as="p" className="forma-document-citation__text">
        {citation}
      </Text>
    </Card>
  );
}

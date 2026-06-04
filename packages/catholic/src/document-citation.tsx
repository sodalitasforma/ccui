import type { ComponentPropsWithoutRef } from "react";
import { Card, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

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
      className={cx("ccui-document-citation", className)}
      {...props}
    >
      <Text as="p" size="xs" tone="goldText" className="ccui-document-citation__label">
        {label}
      </Text>
      <Text as="p" className="ccui-document-citation__text">
        {citation}
      </Text>
    </Card>
  );
}

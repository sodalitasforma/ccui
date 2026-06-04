import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

type DocumentListProps = {
  title?: string;
  description?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export function DocumentList({
  title,
  description,
  children,
  className,
  ...props
}: DocumentListProps) {
  return (
    <section className={cx("ccui-document-list", className)} {...props}>
      {(title || description) ? (
        <Stack gap="xs" className="ccui-document-list__header">
          {title ? <h2 className="ccui-document-list__title">{title}</h2> : null}
          {description ? (
            <Text as="p" size="sm" tone="muted">
              {description}
            </Text>
          ) : null}
        </Stack>
      ) : null}

      <Stack gap="md" className="ccui-document-list__items">
        {children}
      </Stack>
    </section>
  );
}

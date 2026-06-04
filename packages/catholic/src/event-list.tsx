import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

type EventListProps = {
  title?: string;
  description?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export function EventList({
  title,
  description,
  children,
  className,
  ...props
}: EventListProps) {
  return (
    <section className={cx("ccui-event-list", className)} {...props}>
      {(title || description) ? (
        <Stack gap="xs" className="ccui-event-list__header">
          {title ? <h2 className="ccui-event-list__title">{title}</h2> : null}
          {description ? (
            <Text as="p" size="sm" tone="muted">
              {description}
            </Text>
          ) : null}
        </Stack>
      ) : null}

      <Stack gap="md" className="ccui-event-list__items">
        {children}
      </Stack>
    </section>
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { Card, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type OfficeHourItem = {
  days: string;
  hours: string;
  note?: string;
};

type OfficeHoursProps = {
  title?: string;
  items: OfficeHourItem[];
} & ComponentPropsWithoutRef<"section">;

export function OfficeHours({
  title = "Office hours",
  items,
  className,
  ...props
}: OfficeHoursProps) {
  return (
    <Card as="section" padding="md" border="subtle" className={cx("forma-office-hours", className)} {...props}>
      <Stack gap="sm">
        <h3 className="forma-office-hours__title">{title}</h3>

        <dl className="forma-office-hours__list">
          {items.map((item) => (
            <div key={`${item.days}-${item.hours}`}>
              <dt>{item.days}</dt>
              <dd>
                <span>{item.hours}</span>
                {item.note ? (
                  <Text as="span" size="xs" tone="muted">
                    {item.note}
                  </Text>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </Stack>
    </Card>
  );
}

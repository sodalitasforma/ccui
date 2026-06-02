import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Stack,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type VisitorInfoHour = {
  label: string;
  value: string;
  note?: string;
};

export type VisitorInfoBlockProps = {
  title?: string;
  description?: string;
  hours: readonly VisitorInfoHour[];
  closureNote?: string;
  disruptionNote?: string;
  parkingNote?: string;
} & ComponentPropsWithoutRef<"section">;

export function VisitorInfoBlock({
  title = "Visitor information",
  description,
  hours,
  closureNote,
  disruptionNote,
  parkingNote,
  className,
  ...props
}: VisitorInfoBlockProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("ccui-visitor-info-block", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="ccui-visitor-info-block__eyebrow">
              Visitors
            </Text>
            <Heading level={3} size="lg">
              {title}
            </Heading>
          </Stack>

          <Badge variant="gold">Open hours</Badge>
        </Cluster>

        {description ? (
          <Text tone="secondary">{description}</Text>
        ) : null}

        <dl className="ccui-visitor-info-block__hours">
          {hours.map((item) => (
            <div key={`${item.label}-${item.value}`}>
              <dt>{item.label}</dt>
              <dd>
                <span>{item.value}</span>
                {item.note ? <span>{item.note}</span> : null}
              </dd>
            </div>
          ))}
        </dl>

        {closureNote ? (
          <Text as="p" size="sm" tone="muted">
            {closureNote}
          </Text>
        ) : null}

        {disruptionNote ? (
          <Text as="p" size="sm" className="ccui-visitor-info-block__notice">
            {disruptionNote}
          </Text>
        ) : null}

        {parkingNote ? (
          <Text as="p" size="sm" tone="secondary">
            {parkingNote}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}

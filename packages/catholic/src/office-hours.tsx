import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Stack,
  Tag,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type OfficeHourSession = {
  label?: string;
  value: string;
  note?: string;
};

export type OfficeHourItem = {
  day?: string;
  days?: string;
  hours?: string;
  value?: string;
  sessions?: readonly OfficeHourSession[];
  note?: string;
  status?: "open" | "closed" | "limited" | "appointment";
};

type OfficeHoursProps = {
  title?: string;
  description?: string;
  hours?: readonly OfficeHourItem[];
  items?: readonly OfficeHourItem[];
  closureNote?: string;
  disruptionNote?: string;
} & ComponentPropsWithoutRef<"section">;

const badgeVariantByStatus: Record<NonNullable<OfficeHourItem["status"]>, "gold" | "brown" | "danger" | "active"> = {
  open: "gold",
  closed: "danger",
  limited: "brown",
  appointment: "active",
};

const statusLabelByStatus: Record<NonNullable<OfficeHourItem["status"]>, string> = {
  open: "Open",
  closed: "Closed",
  limited: "Limited",
  appointment: "Appointment",
};

export function OfficeHours({
  title = "Office hours",
  description,
  hours,
  items,
  closureNote,
  disruptionNote,
  className,
  ...props
}: OfficeHoursProps) {
  const officeHours = items ?? hours ?? [];

  return (
    <Card
      as="section"
      padding="lg"
      className={cx("forma-office-hours", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Heading level={3} size="lg" className="forma-office-hours__title">
              {title}
            </Heading>

            {description ? (
              <Text tone="secondary">{description}</Text>
            ) : null}
          </Stack>

          <Badge variant="gold">Hours</Badge>
        </Cluster>

        <dl className="forma-office-hours__list">
          {officeHours.map((item) => {
            const status = item.status;
            const dayLabel = item.day ?? item.days ?? "";
            const sessions = item.sessions?.length
              ? item.sessions
              : [{ value: item.hours ?? item.value ?? "" }];

            return (
              <div key={dayLabel}>
                <dt>{dayLabel}</dt>
                <dd>
                  <Stack gap="xs">
                    {status ? (
                      <Tag variant={status === "closed" ? "brown" : "gold"}>
                        {statusLabelByStatus[status]}
                      </Tag>
                    ) : null}

                    {sessions.map((session, index) => (
                      <span key={`${dayLabel}-${session.label ?? ""}-${session.value}-${index}`}>
                        {session.label ? (
                          <strong>{session.label}: </strong>
                        ) : null}
                        {session.value}
                        {session.note ? (
                          <span className="forma-office-hours__note"> — {session.note}</span>
                        ) : null}
                      </span>
                    ))}

                    {item.note ? (
                      <span className="forma-office-hours__note">{item.note}</span>
                    ) : null}
                  </Stack>
                </dd>
              </div>
            );
          })}
        </dl>

        {closureNote ? (
          <Text as="p" size="sm" tone="muted">
            {closureNote}
          </Text>
        ) : null}

        {disruptionNote ? (
          <Text as="p" size="sm" className="forma-office-hours__disruption">
            {disruptionNote}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}

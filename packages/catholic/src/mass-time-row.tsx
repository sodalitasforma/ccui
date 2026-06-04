import type { ComponentPropsWithoutRef } from "react";
import { Badge, Cluster, Link, Stack, Tag, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { ScheduleStatus, ScheduleTime } from "./types";

type MassTimeRowProps = ScheduleTime &
  ComponentPropsWithoutRef<"div">;

const badgeVariantByStatus: Record<ScheduleStatus, "success" | "gold" | "danger" | "brown" | "active"> = {
  normal: "success",
  livestream: "gold",
  cancelled: "danger",
  moved: "brown",
  exception: "active",
};

const statusLabelByStatus: Record<ScheduleStatus, string> = {
  normal: "Scheduled",
  livestream: "Livestream",
  cancelled: "Cancelled",
  moved: "Moved",
  exception: "Exception",
};

export function MassTimeRow({
  time,
  label,
  language,
  location,
  livestreamHref,
  note,
  status = "normal",
  source,
  className,
  ...props
}: MassTimeRowProps) {
  return (
    <div className={cx("ccui-mass-time-row", className)} {...props}>
      <Cluster align="start" justify="between" gap="md">
        <Stack gap="xs" className="ccui-mass-time-row__main">
          <Cluster gap="sm" align="baseline">
            <Text as="p" className="ccui-mass-time-row__time">
              {time}
            </Text>
            {label ? (
              <Text as="p" className="ccui-mass-time-row__label">
                {label}
              </Text>
            ) : null}
          </Cluster>

          <Cluster gap="xs">
            {language ? <Tag>{language}</Tag> : null}
            {location ? <Tag>{location}</Tag> : null}
            {note ? <Tag>{note}</Tag> : null}
            {source?.href ? (
              <Link href={source.href}>{source.label}</Link>
            ) : null}
          </Cluster>
        </Stack>

        <Cluster gap="xs" align="center">
          {livestreamHref ? (
            <Link href={livestreamHref}>Watch</Link>
          ) : null}
          <Badge variant={badgeVariantByStatus[status]}>
            {statusLabelByStatus[status]}
          </Badge>
        </Cluster>
      </Cluster>
    </div>
  );
}

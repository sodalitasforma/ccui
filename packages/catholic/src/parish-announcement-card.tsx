import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Heading, Link, Stack, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import { ExceptionNotice } from "./exception-notice";
import type { ParishAnnouncementData } from "./types";

type ParishAnnouncementCardProps = ParishAnnouncementData &
  ComponentPropsWithoutRef<"article">;

export function ParishAnnouncementCard({
  title,
  description,
  date,
  severity = "official",
  href,
  className,
  ...props
}: ParishAnnouncementCardProps) {
  return (
    <Card
      as="article"
      padding="md"
      border="subtle"
      className={cx("ccui-parish-announcement-card", className)}
      {...props}
    >
      <Stack gap="sm">
        <ExceptionNotice title={title} description={description} date={date} severity={severity} />
        {href ? (
          <Cluster justify="end">
            <Link href={href}>Read announcement</Link>
          </Cluster>
        ) : null}
      </Stack>
    </Card>
  );
}

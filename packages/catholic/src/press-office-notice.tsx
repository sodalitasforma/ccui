import type { ComponentPropsWithoutRef } from "react";
import { Cluster, Link, Notice, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { PressOfficeNoticeData } from "./types";

type PressOfficeNoticeProps = PressOfficeNoticeData & ComponentPropsWithoutRef<"section">;

const noticeVariantBySeverity: Record<NonNullable<PressOfficeNoticeData["severity"]>, "official" | "info" | "warning" | "danger"> = {
  official: "official",
  info: "info",
  warning: "warning",
  danger: "danger",
};

export function PressOfficeNotice({
  title,
  description,
  date,
  office,
  severity = "official",
  href,
  className,
  ...props
}: PressOfficeNoticeProps) {
  return (
    <Notice
      as="section"
      variant={noticeVariantBySeverity[severity]}
      className={cx("forma-press-office-notice", className)}
      {...props}
    >
      <Stack gap="xs">
        <Cluster gap="xs">
          {office ? <Tag variant="brown">{office}</Tag> : null}
          {date ? <Tag>{date}</Tag> : null}
        </Cluster>

        <Text as="p" className="forma-press-office-notice__title">
          {href ? <Link href={href}>{title}</Link> : title}
        </Text>

        {description ? <Text as="p" tone="secondary">{description}</Text> : null}
      </Stack>
    </Notice>
  );
}

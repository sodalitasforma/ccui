import type { ComponentPropsWithoutRef } from "react";
import { Notice, Stack, Text } from "@ccui/primitives";
import type { ExceptionSeverity, ScheduleException } from "./types";

type ExceptionNoticeProps = {
  severity?: ExceptionSeverity;
} & ScheduleException &
  ComponentPropsWithoutRef<"div">;

const noticeVariantBySeverity: Record<ExceptionSeverity, "info" | "success" | "warning" | "danger" | "official" | "liturgical"> = {
  info: "info",
  warning: "warning",
  danger: "danger",
  success: "success",
  official: "official",
  liturgical: "liturgical",
};

export function ExceptionNotice({
  title,
  description,
  date,
  severity = "official",
  ...props
}: ExceptionNoticeProps) {
  return (
    <Notice variant={noticeVariantBySeverity[severity]} {...props}>
      <Stack gap="xs">
        <Text as="p" className="ccui-exception-notice__title">
          {date ? `${date} — ${title}` : title}
        </Text>
        {description ? (
          <Text as="p" tone="secondary">
            {description}
          </Text>
        ) : null}
      </Stack>
    </Notice>
  );
}

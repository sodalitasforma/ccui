import type { ComponentPropsWithoutRef } from "react";
import { Cluster, Tag, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import type { DateRangeLabelData } from "./types";

type DateRangeLabelProps = DateRangeLabelData & ComponentPropsWithoutRef<"span">;

export function DateRangeLabel({
  label = "Date range",
  startDate,
  endDate,
  className,
  ...props
}: DateRangeLabelProps) {
  const value = startDate && endDate ? `${startDate} – ${endDate}` : startDate ?? endDate ?? "All dates";

  return (
    <span className={cx("ccui-date-range-label", className)} {...props}>
      <Cluster gap="xs" align="center">
        <Tag variant="brown">{label}</Tag>
        <Text as="span" size="sm" tone="secondary">
          {value}
        </Text>
      </Cluster>
    </span>
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { MassScheduleBlock } from "./mass-schedule-block";
import type { ScheduleBlockData } from "./types";

type ConfessionScheduleBlockProps = Omit<ScheduleBlockData, "badge"> &
  ComponentPropsWithoutRef<"section">;

export function ConfessionScheduleBlock(props: ConfessionScheduleBlockProps) {
  return <MassScheduleBlock badge="Confession" {...props} />;
}

import type { ComponentPropsWithoutRef } from "react";
import { MassScheduleBlock } from "./mass-schedule-block";
import type { ScheduleBlockData } from "./types";

type HolyDayScheduleBlockProps = Omit<ScheduleBlockData, "badge"> &
  ComponentPropsWithoutRef<"section">;

export function HolyDayScheduleBlock(props: HolyDayScheduleBlockProps) {
  return <MassScheduleBlock badge="Holy Day" {...props} />;
}

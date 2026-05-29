import type { ComponentPropsWithoutRef } from "react";
import { MassScheduleBlock } from "./mass-schedule-block";
import type { ScheduleBlockData } from "./types";

type AdorationScheduleBlockProps = Omit<ScheduleBlockData, "badge"> &
  ComponentPropsWithoutRef<"section">;

export function AdorationScheduleBlock(props: AdorationScheduleBlockProps) {
  return <MassScheduleBlock badge="Adoration" {...props} />;
}

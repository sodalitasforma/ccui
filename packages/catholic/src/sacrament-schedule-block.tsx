import type { ComponentPropsWithoutRef } from "react";
import { MassScheduleBlock } from "./mass-schedule-block";
import type { ScheduleBlockData } from "./types";

type SacramentScheduleBlockProps = Omit<ScheduleBlockData, "badge"> & {
  sacrament?: string;
} & ComponentPropsWithoutRef<"section">;

export function SacramentScheduleBlock({
  sacrament = "Sacrament",
  ...props
}: SacramentScheduleBlockProps) {
  return <MassScheduleBlock badge={sacrament} {...props} />;
}

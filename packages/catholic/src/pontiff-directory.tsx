import type { ComponentPropsWithoutRef } from "react";
import { Grid, Stack } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { CenturyFilter } from "./century-filter";
import { NameFilter } from "./name-filter";
import { PontiffCard } from "./pontiff-card";
import type { DirectoryFilterOption, PontiffData } from "./types";

type PontiffDirectoryProps = {
  title?: string;
  description?: string;
  pontiffs: readonly PontiffData[];
  centuries?: readonly DirectoryFilterOption[];
} & ComponentPropsWithoutRef<"section">;

export function PontiffDirectory({
  title = "Pontiff Directory",
  description,
  pontiffs,
  centuries,
  className,
  ...props
}: PontiffDirectoryProps) {
  return (
    <section className={cx("ccui-pontiff-directory", className)} {...props}>
      <Stack gap="md">
        <Stack gap="sm">
          <NameFilter placeholder="Search pontiffs" />
          {centuries?.length ? <CenturyFilter centuries={centuries} /> : null}
        </Stack>

        <Grid columns="2" gap="md">
          {pontiffs.map((pontiff) => (
            <PontiffCard key={`${pontiff.title}-${pontiff.pontificateStart ?? ""}`} {...pontiff} />
          ))}
        </Grid>
      </Stack>
    </section>
  );
}

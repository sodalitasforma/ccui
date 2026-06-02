import type { ComponentPropsWithoutRef } from "react";
import { CenturyFilter } from "./century-filter";
import { InstitutionalDirectory } from "./institutional-directory";
import { NameFilter } from "./name-filter";
import type { DirectoryFilterOption, SaintDirectoryData } from "./types";
import { Stack } from "@ccui/primitives";

type SaintDirectoryProps = SaintDirectoryData & {
  centuries?: readonly DirectoryFilterOption[];
} & ComponentPropsWithoutRef<"section">;

export function SaintDirectory({
  title = "Saint Directory",
  description,
  saints,
  centuries,
  ...props
}: SaintDirectoryProps) {
  return (
    <InstitutionalDirectory
      title={title}
      description={description}
      items={saints}
      filter={
        <Stack gap="sm">
          <NameFilter placeholder="Search saints" />
          {centuries?.length ? <CenturyFilter centuries={centuries} /> : null}
        </Stack>
      }
      {...props}
    />
  );
}

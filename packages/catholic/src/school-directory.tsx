import type { ComponentPropsWithoutRef } from "react";
import { DirectoryFilter } from "./directory-filter";
import { InstitutionalDirectory } from "./institutional-directory";
import type { SchoolDirectoryData } from "./types";

type SchoolDirectoryProps = SchoolDirectoryData & ComponentPropsWithoutRef<"section">;

export function SchoolDirectory({
  title = "School Directory",
  description,
  schools,
  ...props
}: SchoolDirectoryProps) {
  return (
    <InstitutionalDirectory
      title={title}
      description={description}
      items={schools}
      filter={
        <DirectoryFilter
          searchPlaceholder="Search schools"
          categoryLabel="All school levels"
          categories={[
            { label: "Elementary", value: "elementary" },
            { label: "High school", value: "high-school" },
            { label: "Classical", value: "classical" },
          ]}
        />
      }
      {...props}
    />
  );
}

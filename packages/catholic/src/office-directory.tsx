import type { ComponentPropsWithoutRef } from "react";
import { DirectoryFilter } from "./directory-filter";
import { InstitutionalDirectory } from "./institutional-directory";
import type { OfficeDirectoryData } from "./types";

type OfficeDirectoryProps = OfficeDirectoryData & ComponentPropsWithoutRef<"section">;

export function OfficeDirectory({
  title = "Office Directory",
  description,
  offices,
  ...props
}: OfficeDirectoryProps) {
  return (
    <InstitutionalDirectory
      title={title}
      description={description}
      items={offices}
      filter={
        <DirectoryFilter
          searchPlaceholder="Search offices"
          categoryLabel="All offices"
          categories={[
            { label: "Chancery", value: "chancery" },
            { label: "Liturgy", value: "liturgy" },
            { label: "Education", value: "education" },
          ]}
        />
      }
      {...props}
    />
  );
}

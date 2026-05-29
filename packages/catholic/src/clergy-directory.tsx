import type { ComponentPropsWithoutRef } from "react";
import { DirectoryFilter } from "./directory-filter";
import { InstitutionalDirectory } from "./institutional-directory";
import type { ClergyDirectoryData } from "./types";

type ClergyDirectoryProps = ClergyDirectoryData & ComponentPropsWithoutRef<"section">;

export function ClergyDirectory({
  title = "Clergy Directory",
  description,
  clergy,
  ...props
}: ClergyDirectoryProps) {
  return (
    <InstitutionalDirectory
      title={title}
      description={description}
      items={clergy}
      filter={
        <DirectoryFilter
          searchPlaceholder="Search clergy"
          categoryLabel="All roles"
          categories={[
            { label: "Priests", value: "priests" },
            { label: "Deacons", value: "deacons" },
            { label: "Religious", value: "religious" },
          ]}
        />
      }
      {...props}
    />
  );
}

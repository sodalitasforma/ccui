import type { ComponentPropsWithoutRef } from "react";
import { DirectoryFilter } from "./directory-filter";
import { InstitutionalDirectory } from "./institutional-directory";
import type { ParishDirectoryData } from "./types";

type ParishDirectoryProps = ParishDirectoryData & ComponentPropsWithoutRef<"section">;

export function ParishDirectory({
  title = "Parish Directory",
  description,
  parishes,
  ...props
}: ParishDirectoryProps) {
  return (
    <InstitutionalDirectory
      title={title}
      description={description}
      items={parishes}
      filter={
        <DirectoryFilter
          searchPlaceholder="Search parishes"
          categoryLabel="All parish types"
          categories={[
            { label: "Territorial parishes", value: "territorial" },
            { label: "Missions", value: "missions" },
            { label: "Shrines", value: "shrines" },
          ]}
        />
      }
      {...props}
    />
  );
}

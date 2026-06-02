import type { ComponentPropsWithoutRef } from "react";
import { Button, FilterBar, Select } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { NameFilter } from "./name-filter";
import type { DirectoryFilterData } from "./types";

type DirectoryFilterProps = DirectoryFilterData & ComponentPropsWithoutRef<"form">;

export function DirectoryFilter({
  searchPlaceholder = "Search directory",
  searchName = "q",
  categoryLabel = "All categories",
  categoryName = "category",
  categories,
  actionLabel = "Apply filters",
  className,
  ...props
}: DirectoryFilterProps) {
  return (
    <FilterBar
      as="form"
      className={cx("ccui-directory-filter", className)}
      {...props}
    >
      <NameFilter name={searchName} placeholder={searchPlaceholder} />

      {categories?.length ? (
        <Select name={categoryName} aria-label={categoryLabel}>
          <option value="">{categoryLabel}</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </Select>
      ) : null}

      <Button type="submit" size="sm">
        {actionLabel}
      </Button>
    </FilterBar>
  );
}

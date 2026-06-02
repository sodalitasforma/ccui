import type { ComponentPropsWithoutRef } from "react";
import { SearchInput } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

type NameFilterProps = {
  name?: string;
  placeholder?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "size">;

export function NameFilter({
  name = "name",
  placeholder = "Search by name",
  className,
  ...props
}: NameFilterProps) {
  return (
    <SearchInput
      name={name}
      placeholder={placeholder}
      className={cx("ccui-name-filter", className)}
      {...props}
    />
  );
}

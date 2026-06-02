import type { ComponentPropsWithoutRef } from "react";
import { SearchInput } from "@ccui/primitives";
import { cx } from "@ccui/primitives";

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

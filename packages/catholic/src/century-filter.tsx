import type { ComponentPropsWithoutRef } from "react";
import { Select } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { CenturyFilterData } from "./types";

type CenturyFilterProps = CenturyFilterData &
  Omit<ComponentPropsWithoutRef<"select">, "children" | "size">;

export function CenturyFilter({
  label = "All centuries",
  name = "century",
  centuries,
  className,
  ...props
}: CenturyFilterProps) {
  return (
    <Select
      name={name}
      aria-label={label}
      className={cx("ccui-century-filter", className)}
      {...props}
    >
      <option value="">{label}</option>
      {centuries.map((century) => (
        <option key={century.value} value={century.value}>
          {century.label}
        </option>
      ))}
    </Select>
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

type SearchInputSize = "sm" | "md" | "lg";

type SearchInputProps = {
  size?: SearchInputSize;
} & Omit<ComponentPropsWithoutRef<"input">, "size">;

export function SearchInput({
  size = "md",
  className,
  type = "search",
  ...props
}: SearchInputProps) {
  return (
    <input
      type={type}
      className={cx("ccui-search-input", `ccui-search-input--size-${size}`, className)}
      {...props}
    />
  );
}

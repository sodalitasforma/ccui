import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

type SearchInputSize = "sm" | "md" | "lg";

type SearchInputProps = {
  size?: SearchInputSize;
} & ComponentPropsWithoutRef<"input">;

export function SearchInput({
  size = "md",
  className,
  type = "search",
  ...props
}: SearchInputProps) {
  return (
    <input
      type={type}
      className={cx("forma-search-input", `forma-search-input--size-${size}`, className)}
      {...props}
    />
  );
}

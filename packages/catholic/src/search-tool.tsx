import type { ComponentPropsWithoutRef } from "react";
import { Button, SearchInput } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

type SearchToolProps = {
  action?: string;
  placeholder?: string;
} & ComponentPropsWithoutRef<"form">;

export function SearchTool({
  action = "/search",
  placeholder = "Search",
  className,
  ...props
}: SearchToolProps) {
  return (
    <form className={cx("ccui-search-tool", className)} action={action} role="search" {...props}>
      <SearchInput name="q" size="sm" placeholder={placeholder} aria-label={placeholder} />
      <Button size="sm" variant="secondary" type="submit">
        Search
      </Button>
    </form>
  );
}

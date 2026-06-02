import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

type DividerTone = "subtle" | "strong" | "gold" | "active";

type DividerProps = {
  tone?: DividerTone;
} & ComponentPropsWithoutRef<"hr">;

export function Divider({ tone = "subtle", className, ...props }: DividerProps) {
  return (
    <hr
      className={cx("ccui-divider", `ccui-divider--tone-${tone}`, className)}
      {...props}
    />
  );
}

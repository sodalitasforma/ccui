import type { ComponentPropsWithoutRef } from "react";
import { Tag } from "../../primitives/src";
import type { NamespaceBadgeData } from "./types";

type NamespaceBadgeProps = NamespaceBadgeData & ComponentPropsWithoutRef<"span">;

export function NamespaceBadge({
  namespace,
  label,
  ...props
}: NamespaceBadgeProps) {
  return (
    <Tag variant="blue" {...props}>
      {label ?? namespace}
    </Tag>
  );
}

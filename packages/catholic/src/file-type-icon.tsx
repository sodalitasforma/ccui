import type { ComponentPropsWithoutRef } from "react";
import { IconFrame, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

type FileTypeIconProps = {
  fileType: string;
} & ComponentPropsWithoutRef<"span">;

export function FileTypeIcon({
  fileType,
  className,
  ...props
}: FileTypeIconProps) {
  const label = fileType.toUpperCase();

  return (
    <IconFrame
      as="span"
      size="sm"
      tone="gold"
      className={cx("forma-file-type-icon", className)}
      aria-label={`${label} file`}
      {...props}
    >
      <Text as="span" size="2xs" tone="goldText" className="forma-file-type-icon__label">
        {label}
      </Text>
    </IconFrame>
  );
}

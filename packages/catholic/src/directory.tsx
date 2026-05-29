import type { ComponentPropsWithoutRef, ElementType } from "react";
import { Grid, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

type DirectoryProps<T extends ElementType = "section"> = {
  as?: T;
  title?: string;
  description?: string;
} & ComponentPropsWithoutRef<T>;

export function Directory<T extends ElementType = "section">({
  as,
  title,
  description,
  className,
  children,
  ...props
}: DirectoryProps<T>) {
  const Component = as || "section";

  return (
    <Component className={cx("forma-directory", className)} {...props}>
      {title || description ? (
        <Stack gap="xs" className="forma-directory__header">
          {title ? <h2 className="forma-directory__title">{title}</h2> : null}
          {description ? (
            <Text tone="muted" size="sm">
              {description}
            </Text>
          ) : null}
        </Stack>
      ) : null}

      <Grid columns="auto" gap="md" className="forma-directory__grid">
        {children}
      </Grid>
    </Component>
  );
}

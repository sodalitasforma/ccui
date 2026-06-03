import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Stack } from "./stack";
import { Heading } from "./heading";
import { Text } from "./text";
import { cx } from "./utils";

type EmptyStateTone = "neutral" | "official" | "subtle";

type EmptyStateOwnProps = {
  tone?: EmptyStateTone;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  children?: ReactNode;
};

type EmptyStateProps<T extends ElementType = "div"> = {
  as?: T;
} & EmptyStateOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof EmptyStateOwnProps | "as">;

export function EmptyState<T extends ElementType = "div">({
  as,
  tone = "neutral",
  title,
  description,
  action,
  children,
  className,
  ...props
}: EmptyStateProps<T>) {
  const Component = as || "div";

  const content =
    children ??
    (title || description || action ? (
      <Stack gap="sm" className="ccui-empty-state__content">
        {title ? (
          <Heading level={3} size="md">
            {title}
          </Heading>
        ) : null}
        {description ? <Text tone="secondary">{description}</Text> : null}
        {action ? <div className="ccui-empty-state__action">{action}</div> : null}
      </Stack>
    ) : null);

  return (
    <Component
      className={cx("ccui-empty-state", `ccui-empty-state--tone-${tone}`, className)}
      {...props}
    >
      {content}
    </Component>
  );
}

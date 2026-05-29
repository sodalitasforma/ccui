import type { ComponentPropsWithoutRef } from "react";
import { Cluster, IconFrame, Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

type ResourceLinkVariant = "default" | "document" | "external" | "download";

type ResourceLinkProps = {
  title: string;
  description?: string;
  href: string;
  meta?: string;
  variant?: ResourceLinkVariant;
} & ComponentPropsWithoutRef<"a">;

const iconByVariant: Record<ResourceLinkVariant, string> = {
  default: "↗",
  document: "¶",
  external: "↗",
  download: "↓",
};

export function ResourceLink({
  title,
  description,
  href,
  meta,
  variant = "default",
  className,
  ...props
}: ResourceLinkProps) {
  return (
    <a
      className={cx("forma-resource-link", `forma-resource-link--variant-${variant}`, className)}
      href={href}
      {...props}
    >
      <Cluster align="start" gap="sm">
        <IconFrame tone={variant === "document" ? "gold" : "brown"} size="sm">
          {iconByVariant[variant]}
        </IconFrame>

        <Stack gap="xs">
          <Text as="span" size="sm" className="forma-resource-link__title">
            {title}
          </Text>
          {description ? (
            <Text as="span" size="xs" tone="muted">
              {description}
            </Text>
          ) : null}
          {meta ? (
            <Text as="span" size="xs" tone="muted">
              {meta}
            </Text>
          ) : null}
        </Stack>
      </Cluster>
    </a>
  );
}

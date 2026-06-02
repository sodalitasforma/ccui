import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Badge, Cluster, Text } from "@ccui/primitives";
import { cx } from "@ccui/primitives";

type AnnouncementBannerVariant = "official" | "liturgical" | "warning" | "emergency";

type AnnouncementBannerProps = {
  title: string;
  description?: string;
  href?: string;
  actionLabel?: string;
  variant?: AnnouncementBannerVariant;
  badge?: string;
  actions?: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export function AnnouncementBanner({
  title,
  description,
  href,
  actionLabel = "Read more",
  variant = "official",
  badge,
  actions,
  className,
  ...props
}: AnnouncementBannerProps) {
  return (
    <section
      className={cx(
        "ccui-announcement-banner",
        `ccui-announcement-banner--variant-${variant}`,
        className
      )}
      {...props}
    >
      <Cluster justify="between" align="center" gap="md">
        <Cluster gap="sm" align="start">
          {badge ? <Badge variant={variant === "emergency" ? "danger" : "gold"}>{badge}</Badge> : null}

          <div>
            <Text as="p" size="md" className="ccui-announcement-banner__title">
              {title}
            </Text>
            {description ? (
              <Text as="p" size="sm" tone="secondary">
                {description}
              </Text>
            ) : null}
          </div>
        </Cluster>

        {actions ? (
          <div className="ccui-announcement-banner__actions">{actions}</div>
        ) : href ? (
          <a className="ccui-announcement-banner__link" href={href}>
            {actionLabel}
          </a>
        ) : null}
      </Cluster>
    </section>
  );
}

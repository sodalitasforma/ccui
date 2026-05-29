import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Badge, Cluster, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

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
        "forma-announcement-banner",
        `forma-announcement-banner--variant-${variant}`,
        className
      )}
      {...props}
    >
      <Cluster justify="between" align="center" gap="md">
        <Cluster gap="sm" align="start">
          {badge ? <Badge variant={variant === "emergency" ? "danger" : "gold"}>{badge}</Badge> : null}

          <div>
            <Text as="p" size="md" className="forma-announcement-banner__title">
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
          <div className="forma-announcement-banner__actions">{actions}</div>
        ) : href ? (
          <a className="forma-announcement-banner__link" href={href}>
            {actionLabel}
          </a>
        ) : null}
      </Cluster>
    </section>
  );
}

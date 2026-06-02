import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  Badge,
  Button,
  Card,
  Cluster,
  Heading,
  Stack,
  Tag,
  Text,
} from "@ccui/primitives";
import { cx } from "@ccui/primitives";

export type ParishHeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "subtle" | "ghost" | "gold" | "danger";
};

export type ParishHeroProps = {
  title: string;
  subtitle?: string;
  designation?: string;
  description?: string;
  addressLines?: readonly string[];
  primaryAction?: ParishHeroAction;
  secondaryAction?: ParishHeroAction;
  imageLabel?: string;
  media?: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export function ParishHero({
  title,
  subtitle,
  designation = "Parish",
  description,
  addressLines = [],
  primaryAction,
  secondaryAction,
  imageLabel = "Parish image",
  media,
  className,
  ...props
}: ParishHeroProps) {
  return (
    <Card
      as="section"
      padding="none"
      border="gold"
      className={cx("ccui-parish-hero", !media && "ccui-parish-hero--no-media", className)}
      {...props}
    >
      <div className="ccui-parish-hero__grid">
        <Stack gap="lg" className="ccui-parish-hero__content">
          <Stack gap="md">
            <Cluster gap="sm">
              <Badge variant="gold">{designation}</Badge>
              {subtitle ? <Tag variant="brown">{subtitle}</Tag> : null}
            </Cluster>

            <Stack gap="sm">
              <Heading level={1} size="3xl" family="display">
                {title}
              </Heading>

              {description ? (
                <Text size="md" tone="secondary" className="ccui-parish-hero__description">
                  {description}
                </Text>
              ) : null}
            </Stack>
          </Stack>

          {addressLines.length ? (
            <address className="ccui-parish-hero__address">
              {addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          ) : null}

          {(primaryAction || secondaryAction) ? (
            <Cluster gap="sm">
              {primaryAction ? (
                <Button href={primaryAction.href} variant={primaryAction.variant ?? "primary"}>
                  {primaryAction.label}
                </Button>
              ) : null}

              {secondaryAction ? (
                <Button href={secondaryAction.href} variant={secondaryAction.variant ?? "secondary"}>
                  {secondaryAction.label}
                </Button>
              ) : null}
            </Cluster>
          ) : null}
        </Stack>

        {media ? (
          <div className="ccui-parish-hero__media" aria-label={imageLabel}>
            {media}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

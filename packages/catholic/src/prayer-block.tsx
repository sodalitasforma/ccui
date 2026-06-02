import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Divider, Heading, Link, Stack, Tag, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { PrayerBlockData } from "./types";

type PrayerBlockProps = PrayerBlockData & ComponentPropsWithoutRef<"section">;

export function PrayerBlock({
  title,
  text,
  language,
  source,
  className,
  ...props
}: PrayerBlockProps) {
  return (
    <Card as="section" padding="lg" border="gold" className={cx("ccui-prayer-block", className)} {...props}>
      <Stack gap="md">
        {title ? (
          <Heading level={3} size="xl">
            {title}
          </Heading>
        ) : null}

        <Text as="p" size="lg" className="ccui-prayer-block__text">
          {text}
        </Text>

        {(language || source?.href) ? (
          <>
            <Divider tone="subtle" />
            <Cluster gap="xs">
              {language ? <Tag>{language}</Tag> : null}
              {source?.href ? <Link href={source.href}>{source.label}</Link> : null}
            </Cluster>
          </>
        ) : null}
      </Stack>
    </Card>
  );
}

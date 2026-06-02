import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";

export type MinistryDirectoryItem = {
  name: string;
  category: string;
  description?: string;
  contactLabel?: string;
  contactHref?: string;
};

export type MinistryDirectoryBlockProps = {
  title?: string;
  description?: string;
  ministries: readonly MinistryDirectoryItem[];
} & ComponentPropsWithoutRef<"section">;

export function MinistryDirectoryBlock({
  title = "Ministries",
  description,
  ministries,
  className,
  ...props
}: MinistryDirectoryBlockProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("forma-ministry-directory-block", className)}
      {...props}
    >
      <Stack gap="lg">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="forma-ministry-directory-block__eyebrow">
              Parish life
            </Text>

            <Heading level={2} size="lg">
              {title}
            </Heading>

            {description ? (
              <Text tone="secondary">{description}</Text>
            ) : null}
          </Stack>

          <Badge variant="gold">{ministries.length} ministries</Badge>
        </Cluster>

        <div className="forma-ministry-directory-block__grid">
          {ministries.map((ministry) => (
            <article
              key={`${ministry.category}-${ministry.name}`}
              className="forma-ministry-directory-block__item"
            >
              <Stack gap="sm">
                <Cluster gap="sm">
                  <Tag variant="brown">{ministry.category}</Tag>
                </Cluster>

                <Stack gap="xs">
                  <Heading level={3} size="md">
                    {ministry.name}
                  </Heading>

                  {ministry.description ? (
                    <Text size="sm" tone="secondary">
                      {ministry.description}
                    </Text>
                  ) : null}
                </Stack>

                {ministry.contactHref && ministry.contactLabel ? (
                  <Link
                    href={ministry.contactHref}
                    className="forma-ministry-directory-block__contact"
                  >
                    {ministry.contactLabel}
                  </Link>
                ) : null}
              </Stack>
            </article>
          ))}
        </div>
      </Stack>
    </Card>
  );
}

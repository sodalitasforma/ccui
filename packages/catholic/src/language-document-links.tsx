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
} from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

export type LanguageDocumentLinkItem = {
  language: string;
  label: string;
  href: string;
};

export type LanguageDocumentLinksProps = {
  title: string;
  description?: string;
  authority?: string;
  documentType?: string;
  links: readonly LanguageDocumentLinkItem[];
} & ComponentPropsWithoutRef<"article">;

export function LanguageDocumentLinks({
  title,
  description,
  authority,
  documentType = "Document",
  links,
  className,
  ...props
}: LanguageDocumentLinksProps) {
  return (
    <Card
      as="article"
      padding="lg"
      border="gold"
      className={cx("ccui-language-document-links", className)}
      {...props}
    >
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="ccui-language-document-links__eyebrow">
              Official document
            </Text>

            <Heading level={3} size="lg">
              {title}
            </Heading>
          </Stack>

          <Badge variant="gold">{documentType}</Badge>
        </Cluster>

        {description ? (
          <Text tone="secondary">{description}</Text>
        ) : null}

        {authority ? (
          <Tag variant="brown">{authority}</Tag>
        ) : null}

        <Cluster gap="sm">
          {links.map((item) => (
            <Link
              key={`${item.language}-${item.href}`}
              href={item.href}
              className="ccui-language-document-links__link"
            >
              <span>{item.label}</span>
              <span className="ccui-language-document-links__language">
                {item.language}
              </span>
            </Link>
          ))}
        </Cluster>
      </Stack>
    </Card>
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Link, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { DocumentAuthorityBadge } from "./document-authority-badge";
import type { CitationTrailItem } from "./types";

type CitationTrailProps = {
  title?: string;
  items: readonly CitationTrailItem[];
} & ComponentPropsWithoutRef<"section">;

export function CitationTrail({
  title = "Citation trail",
  items,
  className,
  ...props
}: CitationTrailProps) {
  return (
    <section className={cx("ccui-citation-trail", className)} {...props}>
      <Stack gap="md">
        <Text as="h3" size="lg" className="ccui-citation-trail__title">
          {title}
        </Text>

        <Stack gap="sm">
          {items.map((item, index) => (
            <Card key={`${item.label}-${item.citation}`} padding="md" border="subtle">
              <div className="ccui-citation-trail__item">
                <Text as="span" size="xs" tone="goldText" className="ccui-citation-trail__index">
                  {index + 1}
                </Text>
                <Stack gap="xs" className="ccui-citation-trail__body">
                  <Cluster gap="xs" align="center">
                    {item.authority ? <DocumentAuthorityBadge authority={item.authority} /> : null}
                    <Text as="span" className="ccui-citation-trail__label">
                      {item.label}
                    </Text>
                  </Cluster>
                  <Text as="p" tone="secondary">
                    {item.citation}
                  </Text>
                  {item.href ? <Link href={item.href}>Open source</Link> : null}
                </Stack>
              </div>
            </Card>
          ))}
        </Stack>
      </Stack>
    </section>
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { Badge, Heading, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

export type ParishQuickLinkItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
};

export type ParishQuickLinksProps = {
  title?: string;
  description?: string;
  items: readonly ParishQuickLinkItem[];
} & ComponentPropsWithoutRef<"section">;

export function ParishQuickLinks({
  title = "Quick links",
  description,
  items,
  className,
  ...props
}: ParishQuickLinksProps) {
  return (
    <section className={cx("ccui-parish-quick-links", className)} {...props}>
      <Stack gap="md">
        <Stack gap="xs">
          <Heading level={2} size="lg">
            {title}
          </Heading>
          {description ? (
            <Text tone="secondary">{description}</Text>
          ) : null}
        </Stack>

        <div className="ccui-parish-quick-links__grid">
          {items.map((item) => (
            <a
              key={`${item.label}-${item.href}`}
              href={item.href}
              className="ccui-parish-quick-links__item"
            >
              <span className="ccui-parish-quick-links__item-main">
                <span className="ccui-parish-quick-links__label">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="ccui-parish-quick-links__description">
                    {item.description}
                  </span>
                ) : null}
              </span>

              {item.badge ? (
                <Badge variant="gold">{item.badge}</Badge>
              ) : null}
            </a>
          ))}
        </div>
      </Stack>
    </section>
  );
}

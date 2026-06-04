import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Breadcrumb } from "./breadcrumb";
import type { NavItem } from "./types";
import { Container, Eyebrow, Heading, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: NavItem[];
  actions?: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <section className={cx("ccui-page-header", className)} {...props}>
      <Container size="xl">
        <Stack gap="md">
          {breadcrumbs.length > 0 ? <Breadcrumb items={breadcrumbs} /> : null}

          <Stack gap="sm">
            {eyebrow ? <Eyebrow tone="gold">{eyebrow}</Eyebrow> : null}
            <Heading level={1} size="4xl">
              {title}
            </Heading>
            {description ? (
              <Text size="lg" tone="secondary" className="ccui-page-header__description">
                {description}
              </Text>
            ) : null}
          </Stack>

          {actions ? <div className="ccui-page-header__actions">{actions}</div> : null}
        </Stack>
      </Container>
    </section>
  );
}

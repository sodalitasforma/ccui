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

export type ParishFormLinkItem = {
  title: string;
  href: string;
  description?: string;
  provider?: string;
  formType?: string;
};

export type ParishFormLinksProps = {
  title?: string;
  description?: string;
  forms: readonly ParishFormLinkItem[];
} & ComponentPropsWithoutRef<"section">;

export function ParishFormLinks({
  title = "Forms and registrations",
  description,
  forms,
  className,
  ...props
}: ParishFormLinksProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("ccui-parish-form-links", className)}
      {...props}
    >
      <Stack gap="lg">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="ccui-parish-form-links__eyebrow">
              Registration
            </Text>

            <Heading level={2} size="lg">
              {title}
            </Heading>

            {description ? (
              <Text tone="secondary">{description}</Text>
            ) : null}
          </Stack>

          <Badge variant="gold">{forms.length} forms</Badge>
        </Cluster>

        <div className="ccui-parish-form-links__grid">
          {forms.map((form) => (
            <article
              key={`${form.title}-${form.href}`}
              className="ccui-parish-form-links__item"
            >
              <Stack gap="sm">
                <Cluster gap="sm">
                  {form.formType ? <Tag variant="gold">{form.formType}</Tag> : null}
                  {form.provider ? <Tag variant="brown">{form.provider}</Tag> : null}
                </Cluster>

                <Stack gap="xs">
                  <Heading level={3} size="md">
                    {form.title}
                  </Heading>

                  {form.description ? (
                    <Text size="sm" tone="secondary">
                      {form.description}
                    </Text>
                  ) : null}
                </Stack>

                <Link href={form.href} className="ccui-parish-form-links__action">
                  Open form
                </Link>
              </Stack>
            </article>
          ))}
        </div>
      </Stack>
    </Card>
  );
}

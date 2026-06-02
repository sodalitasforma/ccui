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

export type SacramentalPreparationItem = {
  sacrament: string;
  description: string;
  contactRole?: string;
  contactHref?: string;
  leadTime?: string;
  appointmentRequired?: boolean;
  registrationHref?: string;
};

export type SacramentalPreparationBlockProps = {
  title?: string;
  description?: string;
  items: readonly SacramentalPreparationItem[];
} & ComponentPropsWithoutRef<"section">;

export function SacramentalPreparationBlock({
  title = "Sacramental preparation",
  description,
  items,
  className,
  ...props
}: SacramentalPreparationBlockProps) {
  return (
    <Card
      as="section"
      padding="lg"
      border="gold"
      className={cx("forma-sacramental-preparation-block", className)}
      {...props}
    >
      <Stack gap="lg">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Text as="p" className="forma-sacramental-preparation-block__eyebrow">
              Sacraments
            </Text>

            <Heading level={2} size="lg">
              {title}
            </Heading>

            {description ? (
              <Text tone="secondary">{description}</Text>
            ) : null}
          </Stack>

          <Badge variant="gold">{items.length} sacraments</Badge>
        </Cluster>

        <div className="forma-sacramental-preparation-block__grid">
          {items.map((item) => (
            <article
              key={item.sacrament}
              className="forma-sacramental-preparation-block__item"
            >
              <Stack gap="sm">
                <Cluster gap="sm">
                  <Tag variant="gold">{item.sacrament}</Tag>
                  {item.appointmentRequired ? (
                    <Tag variant="brown">Appointment required</Tag>
                  ) : null}
                </Cluster>

                <Text size="sm" tone="secondary">
                  {item.description}
                </Text>

                <dl className="forma-sacramental-preparation-block__meta">
                  {item.contactRole ? (
                    <div>
                      <dt>Contact</dt>
                      <dd>
                        {item.contactHref ? (
                          <Link href={item.contactHref}>{item.contactRole}</Link>
                        ) : (
                          item.contactRole
                        )}
                      </dd>
                    </div>
                  ) : null}

                  {item.leadTime ? (
                    <div>
                      <dt>Lead time</dt>
                      <dd>{item.leadTime}</dd>
                    </div>
                  ) : null}
                </dl>

                {item.registrationHref ? (
                  <Link
                    href={item.registrationHref}
                    className="forma-sacramental-preparation-block__action"
                  >
                    Start preparation
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

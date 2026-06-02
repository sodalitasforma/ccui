import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  Badge,
  Card,
  Cluster,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
} from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import { MassScheduleBlock } from "./mass-schedule-block";
import type { ScheduleBlockData } from "./types";

type SacramentScheduleBlockProps = Omit<ScheduleBlockData, "badge"> & {
  badge?: string;
  sacrament?: string;
  action?: ReactNode;
  contactRole?: string;
  contactHref?: string;
  leadTime?: string;
  appointmentRequired?: boolean;
  registrationHref?: string;
  registrationLabel?: string;
  pastoralNote?: string;
  lastUpdated?: string;
  sourceNote?: string;
} & ComponentPropsWithoutRef<"section">;

export function SacramentScheduleBlock({
  badge,
  sacrament,
  action,
  contactRole,
  contactHref,
  leadTime,
  appointmentRequired,
  registrationHref,
  registrationLabel = "Begin preparation",
  pastoralNote,
  lastUpdated,
  sourceNote,
  className,
  ...props
}: SacramentScheduleBlockProps) {
  const hasPreparationMeta =
    contactRole || leadTime || appointmentRequired || registrationHref || pastoralNote;

  return (
    <section className={cx("ccui-sacrament-schedule-block", className)}>
      <Stack gap="md">
        <MassScheduleBlock
          badge={badge ?? sacrament ?? "Sacrament"}
          action={action}
          lastUpdated={lastUpdated}
          sourceNote={sourceNote}
          {...props}
        />

        {hasPreparationMeta ? (
          <Card padding="lg" border="gold" className="ccui-sacrament-schedule-block__preparation">
            <Stack gap="md">
              <Cluster justify="between" align="start" gap="md">
                <Stack gap="xs">
                  <Text as="p" className="ccui-sacrament-schedule-block__eyebrow">
                    Preparation
                  </Text>

                  <Heading level={3} size="lg">
                    Sacramental preparation details
                  </Heading>
                </Stack>

                {appointmentRequired ? (
                  <Badge variant="gold">Appointment required</Badge>
                ) : (
                  <Badge variant="brown">Pastoral contact</Badge>
                )}
              </Cluster>

              <dl className="ccui-sacrament-schedule-block__meta">
                {contactRole ? (
                  <div>
                    <dt>Contact</dt>
                    <dd>
                      {contactHref ? <Link href={contactHref}>{contactRole}</Link> : contactRole}
                    </dd>
                  </div>
                ) : null}

                {leadTime ? (
                  <div>
                    <dt>Lead time</dt>
                    <dd>{leadTime}</dd>
                  </div>
                ) : null}

                {appointmentRequired ? (
                  <div>
                    <dt>Requirement</dt>
                    <dd>
                      <Tag variant="gold">Appointment required</Tag>
                    </dd>
                  </div>
                ) : null}
              </dl>

              {pastoralNote ? (
                <Text as="p" size="sm" tone="secondary">
                  {pastoralNote}
                </Text>
              ) : null}

              {registrationHref ? (
                <Link href={registrationHref} className="ccui-sacrament-schedule-block__action">
                  {registrationLabel}
                </Link>
              ) : null}
            </Stack>
          </Card>
        ) : null}
      </Stack>
    </section>
  );
}

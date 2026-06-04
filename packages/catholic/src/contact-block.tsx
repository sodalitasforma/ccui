import type { ComponentPropsWithoutRef } from "react";
import { Card, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

type ContactBlockProps = {
  title?: string;
  phone?: string;
  email?: string;
  website?: string;
  addressLines?: string[];
} & ComponentPropsWithoutRef<"section">;

export function ContactBlock({
  title = "Contact",
  phone,
  email,
  website,
  addressLines = [],
  className,
  ...props
}: ContactBlockProps) {
  return (
    <Card as="section" padding="md" border="subtle" className={cx("ccui-contact-block", className)} {...props}>
      <Stack gap="sm">
        <h3 className="ccui-contact-block__title">{title}</h3>

        <dl className="ccui-contact-block__list">
          {phone ? (
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${phone}`}>{phone}</a>
              </dd>
            </div>
          ) : null}

          {email ? (
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </div>
          ) : null}

          {website ? (
            <div>
              <dt>Website</dt>
              <dd>
                <a href={website}>{website}</a>
              </dd>
            </div>
          ) : null}

          {addressLines.length > 0 ? (
            <div>
              <dt>Address</dt>
              <dd>
                <Text as="span" size="sm">
                  {addressLines.map((line) => (
                    <span key={line} className="ccui-contact-block__address-line">
                      {line}
                    </span>
                  ))}
                </Text>
              </dd>
            </div>
          ) : null}
        </dl>
      </Stack>
    </Card>
  );
}

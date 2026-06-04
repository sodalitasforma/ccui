import type { ComponentPropsWithoutRef } from "react";
import { Card, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";

type LocationBlockProps = {
  title?: string;
  addressLines: string[];
  mapHref?: string;
  note?: string;
} & ComponentPropsWithoutRef<"section">;

export function LocationBlock({
  title = "Location",
  addressLines,
  mapHref,
  note,
  className,
  ...props
}: LocationBlockProps) {
  return (
    <Card as="section" padding="md" border="subtle" className={cx("ccui-location-block", className)} {...props}>
      <Stack gap="sm">
        <h3 className="ccui-location-block__title">{title}</h3>

        <address className="ccui-location-block__address">
          {addressLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>

        {note ? (
          <Text size="sm" tone="muted">
            {note}
          </Text>
        ) : null}

        {mapHref ? (
          <a className="ccui-location-block__map-link" href={mapHref}>
            View map
          </a>
        ) : null}
      </Stack>
    </Card>
  );
}

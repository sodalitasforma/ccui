import type { ComponentPropsWithoutRef } from "react";
import { Grid, Stack } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import { ContactBlock } from "./contact-block";
import { LocationBlock } from "./location-block";
import { OfficeHours } from "./office-hours";
import type { ParishContactData } from "./types";

type ParishContactCardProps = ParishContactData & ComponentPropsWithoutRef<"section">;

export function ParishContactCard({
  title,
  phone,
  email,
  website,
  addressLines,
  officeHours,
  mapHref,
  locationNote,
  className,
  ...props
}: ParishContactCardProps) {
  const contactAddressLines = addressLines ? [...addressLines] : undefined;
  const officeHourItems = officeHours
    ? officeHours.map((item) => ({ days: item.day, hours: item.hours }))
    : undefined;
  const locationAddressLines = addressLines ? [...addressLines] : [];

  return (
    <section className={cx("ccui-parish-contact-card", className)} {...props}>
      <Grid columns="3" gap="md">
        <ContactBlock
          title={title}
          phone={phone}
          email={email}
          website={website}
          addressLines={contactAddressLines}
        />

        {officeHourItems?.length ? <OfficeHours items={officeHourItems} /> : null}

        {locationAddressLines.length || mapHref || locationNote ? (
          <LocationBlock
            addressLines={locationAddressLines}
            mapHref={mapHref}
            note={locationNote}
          />
        ) : null}
      </Grid>
    </section>
  );
}

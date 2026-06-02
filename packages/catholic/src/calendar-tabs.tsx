import type { ComponentPropsWithoutRef } from "react";
import { Stack, Tab, TabList, TabPanel, Tabs } from "@ccui/primitives";
import { cx } from "@ccui/primitives";
import { CalendarItem } from "./calendar-item";
import type { CalendarItemData } from "./types";

type CalendarTabsProps = {
  upcoming: readonly CalendarItemData[];
  liturgical?: readonly CalendarItemData[];
  meetings?: readonly CalendarItemData[];
} & ComponentPropsWithoutRef<"section">;

export function CalendarTabs({
  upcoming,
  liturgical,
  meetings,
  className,
  ...props
}: CalendarTabsProps) {
  return (
    <section className={cx("ccui-calendar-tabs", className)} {...props}>
      <Tabs>
        <TabList>
          <Tab>Upcoming</Tab>
          {liturgical?.length ? <Tab>Liturgical</Tab> : null}
          {meetings?.length ? <Tab>Meetings</Tab> : null}
        </TabList>

        <TabPanel index={0}>
          <Stack gap="sm">
            {upcoming.map((item) => (
              <CalendarItem key={`${item.title}-${item.date}`} {...item} />
            ))}
          </Stack>
        </TabPanel>

        {liturgical?.length ? (
          <TabPanel index={1}>
            <Stack gap="sm">
              {liturgical.map((item) => (
                <CalendarItem key={`${item.title}-${item.date}`} {...item} />
              ))}
            </Stack>
          </TabPanel>
        ) : null}

        {meetings?.length ? (
          <TabPanel index={2}>
            <Stack gap="sm">
              {meetings.map((item) => (
                <CalendarItem key={`${item.title}-${item.date}`} {...item} />
              ))}
            </Stack>
          </TabPanel>
        ) : null}
      </Tabs>
    </section>
  );
}

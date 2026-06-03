import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  Cluster,
  Container,
  Divider,
  EmptyState,
  Eyebrow,
  FilterBar,
  Grid,
  Heading,
  IconFrame,
  Link,
  MediaFrame,
  Notice,
  Panel,
  SearchInput,
  Section,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
  Text,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  ArrowRightIcon,
  BellIcon,
  CheckIcon,
  HeartIcon,
} from "@ccui/primitives";

import {
  AnnouncementBanner,
  BiblePassageCard,
  ChurchDocumentCard,
  ConfessionScheduleBlock,
  DatasetCard,
  DocumentCard,
  DownloadLink,
  EventCard,
  LiturgicalDayCard,
  MassScheduleBlock,
  NewsCard,
  ParishHero,
  PrayerCard,
  ProjectDonationCallout,
  SafeguardingNotice,
  StaffProfile,
  VisitorInfoBlock,
  WorshipAidCard,
} from "@ccui/catholic";

export type CCUIFixture = {
  name: string;
  packageName: "@ccui/primitives" | "@ccui/catholic";
  status: "ready" | "needs-fixture" | "type-only" | "utility";
  element?: React.ReactNode;
};

export const ccuiFixtures: CCUIFixture[] = [
  {
    name: "Button",
    packageName: "@ccui/primitives",
    status: "ready",
    element: (
      <Cluster gap="sm">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="gold">Gold</Button>
        <Button variant="danger">Danger</Button>
      </Cluster>
    ),
  },
  {
    name: "Card",
    packageName: "@ccui/primitives",
    status: "ready",
    element: (
      <Card padding="lg" border="subtle">
        <Stack gap="xs">
          <Heading level={3} size="md">Card</Heading>
          <Text tone="secondary">A raised content surface.</Text>
        </Stack>
      </Card>
    ),
  },
  {
    name: "Timeline",
    packageName: "@ccui/primitives",
    status: "ready",
    element: (
      <Timeline>
        <TimelineItem status="complete">
          <TimelineMarker><CheckIcon size="xs" /></TimelineMarker>
          <TimelineContent>
            <Heading level={3} size="md">Complete item</Heading>
            <Text tone="secondary">The first timeline event rendered.</Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem status="current">
          <TimelineMarker>2</TimelineMarker>
          <TimelineContent>
            <Heading level={3} size="md">Current item</Heading>
            <Text tone="secondary">The current timeline event rendered.</Text>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    ),
  },
  {
    name: "Table",
    packageName: "@ccui/primitives",
    status: "ready",
    element: (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>External render</TableCell>
            <TableCell><Badge variant="success" size="xs">Passed</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    name: "MassScheduleBlock",
    packageName: "@ccui/catholic",
    status: "ready",
    element: (
      <MassScheduleBlock
        title="Mass Schedule"
        subtitle="Regular parish Mass times."
        days={[
          {
            day: "Sunday",
            times: [
              {
                time: "9:00 AM",
                label: "Sunday Mass",
                language: "English",
                location: "Main church",
              },
            ],
          },
        ]}
        exceptions={[]}
        source={{ label: "Parish schedule", href: "#" }}
      />
    ),
  },
  {
    name: "LiturgicalDayCard",
    packageName: "@ccui/catholic",
    status: "ready",
    element: (
      <LiturgicalDayCard
        title="Second Sunday of Advent"
        date="December 7"
        season="Advent"
        color="Violet"
        rank="Sunday"
        readings={[
          { label: "First Reading", citation: "Isaiah 11:1-10" },
          { label: "Gospel", citation: "Matthew 3:1-12" },
        ]}
      />
    ),
  },
  {
    name: "ProjectDonationCallout",
    packageName: "@ccui/catholic",
    status: "ready",
    element: (
      <ProjectDonationCallout
        title="Support the parish restoration fund"
        description="Help preserve the church, chapel, sacred art, and parish facilities for future generations."
        amounts={["$25", "$50", "$100"]}
        selectedAmount="$50"
        impact="$50 funds one restoration hour."
        primaryAction={{ label: "Give now", href: "#" }}
        secondaryActions={[{ label: "Learn about the project", href: "#" }]}
      />
    ),
  },
];

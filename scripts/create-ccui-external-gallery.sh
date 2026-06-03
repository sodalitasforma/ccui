#!/usr/bin/env bash
set -euo pipefail

WORKDIR="/tmp/ccui-external-gallery"
REPO_DIR="$WORKDIR/repo"
PACK_DIR="$WORKDIR/packs"
APP_DIR="$WORKDIR/gallery"

rm -rf "$WORKDIR"
mkdir -p "$WORKDIR" "$PACK_DIR" "$APP_DIR"

echo "== Clone fresh repo from GitHub =="
git clone https://github.com/sodalitasforma/forma.git "$REPO_DIR"

cd "$REPO_DIR"

echo "== Install and build repo =="
pnpm install
pnpm typecheck
pnpm build

echo "== Pack CCUI packages =="
for pkg in tokens primitives catholic; do
  (cd "packages/$pkg" && pnpm pack --pack-destination "$PACK_DIR")
done

TOKENS_TGZ="$(ls "$PACK_DIR"/ccui-tokens-*.tgz | head -1)"
PRIMITIVES_TGZ="$(ls "$PACK_DIR"/ccui-primitives-*.tgz | head -1)"
CATHOLIC_TGZ="$(ls "$PACK_DIR"/ccui-catholic-*.tgz | head -1)"

echo "tokens: $TOKENS_TGZ"
echo "primitives: $PRIMITIVES_TGZ"
echo "catholic: $CATHOLIC_TGZ"

echo "== Create clean external gallery app =="
cd "$APP_DIR"

cat > package.json <<JSON
{
  "name": "ccui-external-gallery",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "vite build",
    "preview": "vite preview --host 127.0.0.1"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "typescript": "latest",
    "react": "latest",
    "react-dom": "latest",
    "@ccui/tokens": "file:$TOKENS_TGZ",
    "@ccui/primitives": "file:$PRIMITIVES_TGZ",
    "@ccui/catholic": "file:$CATHOLIC_TGZ"
  },
  "pnpm": {
    "overrides": {
      "@ccui/tokens": "file:$TOKENS_TGZ",
      "@ccui/primitives": "file:$PRIMITIVES_TGZ",
      "@ccui/catholic": "file:$CATHOLIC_TGZ"
    }
  }
}
JSON

cat > index.html <<'HTML'
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CCUI External Gallery</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
HTML

mkdir -p src

cat > src/main.tsx <<'TSX'
import React from "react";
import { createRoot } from "react-dom/client";

import "@ccui/tokens/css-vars.css";
import "@ccui/primitives/primitives.css";
import "@ccui/catholic/catholic.css";

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
  CheckIcon,
  ArrowRightIcon,
  BellIcon,
  HeartIcon,
} from "@ccui/primitives";

import {
  AnnouncementBanner,
  ApiEndpointCard,
  BiblePassageCard,
  BulletinCard,
  CalendarItem,
  CanonicalReference,
  CanonicalSourceCard,
  ChurchDocumentCard,
  ChurchDocumentHeader,
  ClergyProfile,
  ConfessionScheduleBlock,
  ContactBlock,
  DatasetCard,
  DirectoryCard,
  DocumentAuthorityBadge,
  DocumentCard,
  DownloadLink,
  EventCard,
  FeastDayHero,
  LiturgicalColorDot,
  LiturgicalDayCard,
  LiturgicalSeasonBadge,
  MassScheduleBlock,
  MinistryCard,
  NewsCard,
  OfficialNoticeCard,
  PageHeader,
  ParishAnnouncementCard,
  ParishHero,
  PrayerCard,
  ProjectCard,
  ProjectDonationCallout,
  ReadingReference,
  SafeguardingNotice,
  SocialLinks,
  StaffProfile,
  TitheIcon,
  VisitorInfoBlock,
  WorshipAidCard,
} from "@ccui/catholic";

const colorTokens = [
  ["brown-950", "var(--ccui-color-brown-950)"],
  ["brown-700", "var(--ccui-color-brown-700)"],
  ["gold-400", "var(--ccui-color-gold-400)"],
  ["paper-50", "var(--ccui-color-paper-50)"],
  ["paper-100", "var(--ccui-color-paper-100)"],
  ["blue-700", "var(--ccui-color-blue-700)"],
  ["green-700", "var(--ccui-color-green-700)"],
  ["red-700", "var(--ccui-color-red-700)"],
  ["violet-700", "var(--ccui-color-violet-700)"],
];

const liturgicalTokens = [
  ["White", "var(--ccui-liturgical-white)"],
  ["Green", "var(--ccui-liturgical-green)"],
  ["Violet", "var(--ccui-liturgical-violet)"],
  ["Red", "var(--ccui-liturgical-red)"],
  ["Rose", "var(--ccui-liturgical-rose)"],
  ["Black", "var(--ccui-liturgical-black)"],
  ["Gold", "var(--ccui-liturgical-gold)"],
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <Text as="p" size="xs" tone="muted" className="demo-label">
      {children}
    </Text>
  );
}

function DemoBlock({
  title,
  source,
  children,
}: {
  title: string;
  source: string;
  children: React.ReactNode;
}) {
  return (
    <Card padding="lg" border="subtle" className="demo-block">
      <Stack gap="md">
        <Cluster justify="between" align="start" gap="md">
          <Stack gap="xs">
            <Heading level={3} size="lg">{title}</Heading>
            <Text size="sm" tone="muted">{source}</Text>
          </Stack>
          <Tag variant="brown">external package import</Tag>
        </Cluster>
        <Divider />
        <DemoErrorBoundary name={title}>
          {children}
        </DemoErrorBoundary>
      </Stack>
    </Card>
  );
}

function TokenSwatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="token-swatch">
      <div className="token-swatch__chip" style={{ background: value }} />
      <Text as="p" size="sm">{name}</Text>
      <Text as="p" size="xs" tone="muted">{value}</Text>
    </div>
  );
}

type DemoErrorBoundaryProps = {
  name: string;
  children: React.ReactNode;
};

type DemoErrorBoundaryState = {
  error: Error | null;
};

class DemoErrorBoundary extends React.Component<DemoErrorBoundaryProps, DemoErrorBoundaryState> {
  state: DemoErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): DemoErrorBoundaryState {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <Notice variant="danger" title={`${this.props.name} crashed`}>
          {this.state.error.message}
        </Notice>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <main>
      <Section surface="page" spacing="lg">
        <Container size="xl">
          <Stack gap="xl">
            <Stack gap="md" className="demo-hero">
              <Eyebrow>External Consumer Gallery</Eyebrow>
              <Heading level={1} size="4xl" family="display">
                Catholic Commons UI
              </Heading>
              <Text size="lg" tone="secondary">
                This page is not rendered inside the CCUI repo. It is a clean Vite app that installs packed packages from a fresh GitHub clone and imports them exactly like the docs.
              </Text>
              <Cluster gap="sm">
                <Tag variant="brown">@ccui/tokens</Tag>
                <Tag variant="gold">@ccui/primitives</Tag>
                <Tag variant="blue">@ccui/catholic</Tag>
              </Cluster>
            </Stack>

            <Stack gap="lg">
              <Heading level={2} size="2xl">Tokens</Heading>

              <DemoBlock title="Color tokens" source='CSS variables from "@ccui/tokens/css-vars.css"'>
                <Grid columns="3" gap="md">
                  {colorTokens.map(([name, value]) => (
                    <TokenSwatch key={name} name={name} value={value} />
                  ))}
                </Grid>
              </DemoBlock>

              <DemoBlock title="Liturgical color tokens" source='CSS variables from "@ccui/tokens/css-vars.css"'>
                <Grid columns="3" gap="md">
                  {liturgicalTokens.map(([name, value]) => (
                    <TokenSwatch key={name} name={name} value={value} />
                  ))}
                </Grid>
              </DemoBlock>

              <DemoBlock title="Typography tokens" source='CSS variables from "@ccui/tokens/css-vars.css"'>
                <Stack gap="sm">
                  <Heading level={3} size="2xl" family="display">Display heading</Heading>
                  <Heading level={3} size="xl">Interface heading</Heading>
                  <Text tone="secondary">Body text uses the CCUI interface and document scale.</Text>
                  <Text size="sm" tone="muted">Muted small text for metadata and secondary descriptions.</Text>
                </Stack>
              </DemoBlock>
            </Stack>

            <Stack gap="lg">
              <Heading level={2} size="2xl">Primitives</Heading>

              <DemoBlock title="Buttons" source='import { Button } from "@ccui/primitives"'>
                <Cluster gap="sm">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="subtle">Subtle</Button>
                  <Button variant="subtle" size="xs" iconAfter={<ArrowRightIcon size="xs" />}>Read CDCF Manifesto</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="gold">Gold</Button>
                  <Button variant="danger">Danger</Button>
                </Cluster>
              </DemoBlock>

              <DemoBlock title="Badges and tags" source='import { Badge, Tag } from "@ccui/primitives"'>
                <Cluster gap="sm">
                  <Badge variant="neutral">Neutral</Badge>
                  <Badge variant="gold">Gold</Badge>
                  <Badge variant="brown">Brown</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Tag variant="brown">Tag brown</Tag>
                  <Tag variant="gold">Tag gold</Tag>
                  <Tag variant="blue">Tag blue</Tag>
                </Cluster>
              </DemoBlock>

              <DemoBlock title="Cards, panels, notices" source='import { Card, Panel, Notice } from "@ccui/primitives"'>
                <Grid columns="3" gap="md">
                  <Card padding="md" border="subtle">
                    <Stack gap="xs">
                      <Heading level={3} size="md">Card</Heading>
                      <Text tone="secondary">A raised surface for contained content.</Text>
                    </Stack>
                  </Card>
                  <Panel padding="md">
                    <Stack gap="xs">
                      <Heading level={3} size="md">Panel</Heading>
                      <Text tone="secondary">A neutral composition surface.</Text>
                    </Stack>
                  </Panel>
                  <Notice variant="info" title="Notice">
                    Public information should be stable, readable, and source-aware.
                  </Notice>
                </Grid>
              </DemoBlock>

              <DemoBlock title="Forms" source='import { SearchInput, Select, FilterBar } from "@ccui/primitives"'>
                <Stack gap="md">
                  <FilterBar>
                    <SearchInput label="Search records" placeholder="Search documentation..." />
                    <Select label="Type" options={[
                      { label: "All", value: "all" },
                      { label: "Documents", value: "documents" },
                      { label: "Schedules", value: "schedules" },
                    ]} />
                  </FilterBar>
                </Stack>
              </DemoBlock>

              <DemoBlock title="Table" source='import { TableWrapper, Table } from "@ccui/primitives"'>
                <TableWrapper>
                  <Table>
                    <TableHead>
                    <TableRow>
                      <TableHeader>Component</TableHeader>
                      <TableHeader>Package</TableHeader>
                      <TableHeader>Status</TableHeader>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Button</TableCell>
                      <TableCell>@ccui/primitives</TableCell>
                      <TableCell><Badge variant="success" size="xs">Rendered</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>MassScheduleBlock</TableCell>
                      <TableCell>@ccui/catholic</TableCell>
                      <TableCell><Badge variant="success" size="xs">Rendered</Badge></TableCell>
                    </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </DemoBlock>

              <DemoBlock title="Timeline" source='import { Timeline } from "@ccui/primitives"'>
                <Timeline>
                  <TimelineItem status="complete">
                    <TimelineMarker><CheckIcon size="xs" /></TimelineMarker>
                    <TimelineContent>
                      <Heading level={3} size="md">Tokens loaded</Heading>
                      <Text tone="secondary">CSS variables are available in the consumer app.</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem status="current">
                    <TimelineMarker>2</TimelineMarker>
                    <TimelineContent>
                      <Heading level={3} size="md">Primitives rendered</Heading>
                      <Text tone="secondary">Button, Card, Stack, and Text render from @ccui/primitives.</Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem status="upcoming">
                    <TimelineMarker>3</TimelineMarker>
                    <TimelineContent>
                      <Heading level={3} size="md">Catholic components rendered</Heading>
                      <Text tone="secondary">Mass schedules and giving components render from @ccui/catholic.</Text>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </DemoBlock>

              <DemoBlock title="Accordion and empty state" source='import { Accordion, EmptyState } from "@ccui/primitives"'>
                <Grid columns="2" gap="md">
                  <Accordion>
                    <AccordionItem>
                      <AccordionTrigger>What is this page?</AccordionTrigger>
                      <AccordionContent>
                        This is an external consumer page proving CCUI packages render outside the monorepo.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <EmptyState
                    title="No records yet"
                    description="This state appears when an institution has not published data."
                    action={<Button size="sm">Create record</Button>}
                  />
                </Grid>
              </DemoBlock>

              <DemoBlock title="Icons and media frame" source='import { IconFrame, MediaFrame } from "@ccui/primitives"'>
                <Grid columns="3" gap="md">
                  <IconFrame><BellIcon /></IconFrame>
                  <IconFrame tone="gold"><HeartIcon /></IconFrame>
                  <MediaFrame aspectRatio="16/9">
                    <div className="demo-media-fill">MediaFrame</div>
                  </MediaFrame>
                </Grid>
              </DemoBlock>
            </Stack>

            <Stack gap="lg">
              <Heading level={2} size="2xl">Catholic Components</Heading>

              <DemoBlock title="Parish hero" source='import { ParishHero } from "@ccui/catholic"'>
                <ParishHero
                  title="Saint Mark Parish"
                  designation="A Catholic parish website"
                  description="A parish homepage should help the faithful find worship, receive notices, support the Church, and stay connected."
                  primaryAction={{ label: "Mass Times", href: "#" }}
                  secondaryAction={{ label: "Bulletin", href: "#" }}
                />
              </DemoBlock>

              <DemoBlock title="Mass schedule" source='import { MassScheduleBlock } from "@ccui/catholic"'>
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
                          status: "livestream",
                          livestreamHref: "#",
                        },
                        {
                          time: "11:00 AM",
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
              </DemoBlock>

              <DemoBlock title="Confession schedule" source='import { ConfessionScheduleBlock } from "@ccui/catholic"'>
                <ConfessionScheduleBlock
                  title="Confession"
                  subtitle="The Sacrament of Reconciliation."
                  days={[
                    {
                      day: "Saturday",
                      times: [
                        { time: "3:30 PM", label: "Confession", location: "Church" },
                      ],
                    },
                  ]}
                  source={{ label: "Parish office", href: "#" }}
                />
              </DemoBlock>

              <DemoBlock title="Liturgical day" source='import { LiturgicalDayCard } from "@ccui/catholic"'>
                <LiturgicalDayCard
                  title="Second Sunday of Advent"
                  date="December 7"
                  season="Advent"
                  color="Violet"
                  rank="Sunday"
                  readings={[
                    { label: "First Reading", citation: "Isaiah 11:1-10" },
                    { label: "Gospel", citation: "Matthew 3:1-12" }
                  ]}
                />
              </DemoBlock>

              <DemoBlock title="Giving and tithe" source='import { ProjectDonationCallout, TitheIcon } from "@ccui/catholic"'>
                <Grid columns="2" gap="md">
                  <ProjectDonationCallout
                    title="Support the parish restoration fund"
                    description="Help preserve the church, chapel, sacred art, and parish facilities for future generations."
                    amounts={["$25", "$50", "$100"]}
                    selectedAmount="$50"
                    impact="$50 funds one restoration hour."
                    primaryAction={{ label: "Give now", href: "#" }}
                    secondaryActions={[{ label: "Learn about the project", href: "#" }]}
                  />
                  <TitheIcon
                    title="Online giving"
                    description="Recurring parish support."
                    amounts={[
                      { label: "$25", value: "25" },
                      { label: "$50", value: "50", selected: true },
                      { label: "$100", value: "100" },
                    ]}
                    frequencies={[
                      { label: "Weekly", value: "weekly" },
                      { label: "Monthly", value: "monthly", selected: true },
                    ]}
                    href="#"
                    ctaLabel="Give"
                  />
                </Grid>
              </DemoBlock>

              <DemoBlock title="Documents and authority" source='import document components from "@ccui/catholic"'>
                <Grid columns="2" gap="md">
                  <ChurchDocumentCard
                    title="Pastoral Letter"
                    description="A formal document card for Church communications."
                    documentType="Pastoral Letter"
                    authority="Diocesan"
                    date="2026"
                    href="#"
                  />
                  <DocumentCard
                    title="Parish Finance Report"
                    description="Annual public report with stable metadata."
                    type="Report"
                    date="2026"
                    href="#"
                  />
                  <CanonicalSourceCard
                    title="Code of Canon Law"
                    description="Canonical source with authority and citation context."
                    sourceType="Canonical source"
                    href="#"
                  />
                  <DownloadLink
                    label="Download bulletin PDF"
                    href="#"
                    fileType="PDF"
                    fileSize="2.4 MB"
                  />
                </Grid>
              </DemoBlock>

              <DemoBlock title="Profiles and directories" source='import profile/directory components from "@ccui/catholic"'>
                <Grid columns="3" gap="md">
                  <ClergyProfile
                    name="Fr. Thomas Martin"
                    title="Pastor"
                    parish="Saint Mark Parish"
                    email="pastor@example.org"
                  />
                  <StaffProfile
                    name="Maria Santos"
                    title="Parish Secretary"
                    department="Office"
                    email="office@example.org"
                  />
                  <DirectoryCard
                    title="Parish Office"
                    description="Administrative office and sacramental records."
                    href="#"
                    metadata={["Open Monday-Friday", "Santa Fe, NM"]}
                  />
                </Grid>
              </DemoBlock>

              <DemoBlock title="News, events, notices" source='import public communication components from "@ccui/catholic"'>
                <Grid columns="3" gap="md">
                  <AnnouncementBanner
                    title="Holy Day schedule posted"
                    description="Mass times for the solemnity are now available."
                    href="#"
                  />
                  <NewsCard
                    title="Restoration project begins"
                    description="The parish has begun chapel restoration work."
                    date="June 2, 2026"
                    href="#"
                  />
                  <EventCard
                    title="Parish supper"
                    date="Friday"
                    time="6:00 PM"
                    location="Parish hall"
                    href="#"
                  />
                </Grid>
              </DemoBlock>

              <DemoBlock title="Bible, prayer, worship aid" source='import devotional components from "@ccui/catholic"'>
                <Grid columns="3" gap="md">
                  <BiblePassageCard
                    citation="John 21:6"
                    text="Cast the net on the right side of the boat, and you will find some."
                    translation="RSVCE"
                  />
                  <PrayerCard
                    title="Prayer before Mass"
                    text="Prepare our hearts, O Lord, to receive you with reverence."
                    source="Parish prayer card"
                  />
                  <WorshipAidCard
                    title="Sunday Worship Aid"
                    description="Readings, hymns, and responses for Sunday Mass."
                    href="#"
                  />
                </Grid>
              </DemoBlock>

              <DemoBlock title="Infrastructure components" source='import data/API components from "@ccui/catholic"'>
                <Grid columns="2" gap="md">
                  <ApiEndpointCard
                    method="GET"
                    path="/v1/liturgical-days"
                    description="Returns liturgical calendar records."
                    responseFormat="JSON"
                    status="Stable"
                  />
                  <DatasetCard
                    title="Liturgical Calendar Dataset"
                    description="Machine-readable calendar data for Catholic applications."
                    coverage="Roman Rite"
                    format="JSON"
                    license="Open"
                    version="0.1"
                  />
                  <ProjectCard
                    title="Catholic data infrastructure"
                    description="Reusable source-backed infrastructure for Catholic public information."
                    status="Active"
                    href="#"
                  />
                  <ReadingReference
                    label="Gospel"
                    citation="Matthew 3:1-12"
                    href="#"
                  />
                </Grid>
              </DemoBlock>

              <DemoBlock title="Safeguarding and visitor info" source='import institutional components from "@ccui/catholic"'>
                <Grid columns="2" gap="md">
                  <SafeguardingNotice
                    title="Safe Environment"
                    description="Information about parish safeguarding policies and reporting."
                    action={{ label: "Learn more", href: "#" }}
                  />
                  <VisitorInfoBlock
                    title="Visitor Information"
                    address="123 Parish Road, Santa Fe, NM"
                    phone="(505) 555-0100"
                    email="office@example.org"
                    hours="Monday-Friday, 9:00 AM-4:00 PM"
                  />
                </Grid>
              </DemoBlock>

              <DemoBlock title="Badges and small Catholic primitives" source='import small Catholic components from "@ccui/catholic"'>
                <Cluster gap="sm">
                  <DocumentAuthorityBadge authority="Diocesan" />
                  <LiturgicalSeasonBadge season="Advent" />
                  <CanonicalReference citation="can. 213" />
                  <LiturgicalColorDot color="Violet" />
                  <SocialLinks links={[
                    { label: "Facebook", href: "#", icon: "f" },
                    { label: "YouTube", href: "#", icon: "▶" },
                  ]} />
                </Cluster>
              </DemoBlock>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
TSX

cat > src/demo.css <<'CSS'
CSS

cat >> src/main.tsx <<'TSX'
TSX

cat > src/style.css <<'CSS'
.demo-hero {
  max-width: 56rem;
}

.demo-label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.demo-block {
  background: var(--ccui-color-surface-raised);
}

.token-swatch {
  display: grid;
  gap: 0.35rem;
  border: 1px solid var(--ccui-color-border-subtle);
  border-radius: var(--ccui-radius-md);
  padding: var(--ccui-space-3);
  background: var(--ccui-color-surface-raised);
}

.token-swatch__chip {
  min-height: 3rem;
  border: 1px solid var(--ccui-color-border-subtle);
  border-radius: var(--ccui-radius-sm);
}

.demo-media-fill {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: var(--ccui-color-surface-subtle);
  color: var(--ccui-color-text-muted);
  font-family: var(--ccui-font-interface);
  font-weight: var(--ccui-font-weight-bold);
}
CSS

python3 - <<'PY'
from pathlib import Path
path = Path("src/main.tsx")
text = path.read_text()
if 'import "./style.css";' not in text:
    text = text.replace('import "@ccui/catholic/catholic.css";', 'import "@ccui/catholic/catholic.css";\nimport "./style.css";')
path.write_text(text)
PY

echo "== Install consumer deps =="
pnpm install

echo "== Build external gallery =="
pnpm build

echo "== SUCCESS: external CCUI gallery built =="
echo "App path: $APP_DIR"
echo "Run it with:"
echo "cd $APP_DIR && pnpm dev"
echo "Then open: http://127.0.0.1:5173"

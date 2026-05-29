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
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Table,
  TableWrapper,
  TBody,
  TD,
  TH,
  THead,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  TR,
  Tag,
  Text,
} from "../../../../packages/primitives/src";

import {
  AnnouncementBanner,
  Breadcrumb,
  ClergyProfile,
  ContactBlock,
  Directory,
  DirectoryCard,
  DocumentCard,
  DocumentList,
  EventCard,
  EventList,
  InstitutionalFooter,
  InstitutionalHeader,
  LocationBlock,
  OfficeHours,
  PageHeader,
  ResourceLink,
  StaffProfile,
} from "../../../../packages/catholic/src";

import {
  accordionExamples,
  buttonExamples,
  mediaFrameExample,
  noticeExamples,
  tableRows,
} from "./docs/examples";
import {
  accordionExamplesCode,
  buttonExamplesCode,
  mediaFrameExampleCode,
  noticeExamplesCode,
  tableExampleCode,
} from "./docs/codegen";

import colors from "../../../../packages/tokens/src/colors.json";
import liturgicalColors from "../../../../packages/tokens/src/liturgical-colors.json";

type Primitive = {
  name: string;
  description: string;
  status: "Added";
  category: "Layout" | "Typography" | "Surface" | "Action" | "Forms" | "Data" | "Media";
};

const primitives: Primitive[] = [
  { name: "Container", description: "Centers page content at stable institutional widths.", status: "Added", category: "Layout" },
  { name: "Section", description: "Applies page, subtle, parchment, raised, or dark surfaces.", status: "Added", category: "Layout" },
  { name: "Stack", description: "Vertical rhythm using spacing tokens.", status: "Added", category: "Layout" },
  { name: "Cluster", description: "Inline wrapping groups for actions, metadata, and nav.", status: "Added", category: "Layout" },
  { name: "Grid", description: "Responsive card and directory layouts.", status: "Added", category: "Layout" },
  { name: "Text", description: "Body copy with text-safe semantic tones.", status: "Added", category: "Typography" },
  { name: "Heading", description: "Serif, document, interface, and inscriptional heading styles.", status: "Added", category: "Typography" },
  { name: "Eyebrow", description: "Uppercase institutional section labels.", status: "Added", category: "Typography" },
  { name: "Card", description: "Restrained raised content surface.", status: "Added", category: "Surface" },
  { name: "Panel", description: "Grouped institutional module surface.", status: "Added", category: "Surface" },
  { name: "Divider", description: "Subtle, strong, gold, and active separators.", status: "Added", category: "Surface" },
  { name: "Notice", description: "Official, liturgical, warning, danger, success, and info notices.", status: "Added", category: "Surface" },
  { name: "Button", description: "Primary, secondary, gold, ghost, and danger actions.", status: "Added", category: "Action" },
  { name: "Link", description: "Brown-first institutional links.", status: "Added", category: "Action" },
  { name: "Badge", description: "Compact status, season, and category labels.", status: "Added", category: "Action" },
  { name: "Tag", description: "Lightweight filter and metadata labels.", status: "Added", category: "Action" },
  { name: "SearchInput", description: "Search field for directories and archives.", status: "Added", category: "Forms" },
  { name: "Select", description: "Native select styled for filters and language controls.", status: "Added", category: "Forms" },
  { name: "FilterBar", description: "Composed search/filter/action row.", status: "Added", category: "Forms" },
  { name: "Tabs", description: "News, calendar, and section switching.", status: "Added", category: "Data" },
  { name: "Accordion", description: "Disclosure sections for menus and structured details.", status: "Added", category: "Data" },
  { name: "Table", description: "Dense institutional records and metadata.", status: "Added", category: "Data" },
  { name: "Timeline", description: "Historical, sacramental, and project chronology.", status: "Added", category: "Data" },
  { name: "EmptyState", description: "Sober blank states for unpublished records.", status: "Added", category: "Data" },
  { name: "IconFrame", description: "Restrained framed icon container.", status: "Added", category: "Media" },
  { name: "MediaFrame", description: "Formal image, video, and hero media frame.", status: "Added", category: "Media" },
];

const categories = ["Layout", "Typography", "Surface", "Action", "Forms", "Data", "Media"] as const;

const rawColors = colors.color.raw as Record<string, string>;
const semanticColors = colors.color.semantic as Record<string, string>;

function resolveColor(value: string) {
  const match = value.match(/^\{color\.raw\.(.+)\}$/);
  if (!match) return value;
  return rawColors[match[1]] || value;
}

function Code({ children }: { children: string }) {
  return <code className="docs-code">{children}</code>;
}

function ComponentBlock({
  title,
  description,
  children,
  code,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}) {
  return (
    <section className="docs-block">
      <Stack gap="sm">
        <Cluster justify="between" align="start">
          <Stack gap="xs">
            <Heading level={2} size="xl" family="interface">
              {title}
            </Heading>
            <Text tone="muted">{description}</Text>
          </Stack>
          <Badge variant="success">Added</Badge>
        </Cluster>

        <Card padding="lg" border="subtle" className="docs-preview">
          {children}
        </Card>

        <pre className="docs-pre">
          <code>{code}</code>
        </pre>
      </Stack>
    </section>
  );
}

function ColorRow({ name, value }: { name: string; value: string }) {
  const resolved = resolveColor(value);

  return (
    <div className="docs-token-row">
      <div className="docs-color-chip" style={{ background: resolved }} aria-hidden="true" />
      <div>
        <Text as="p" size="sm">
          {name}
        </Text>
        <Text as="p" size="xs" tone="muted">
          {value}
        </Text>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="docs-shell">
      <aside className="docs-sidebar">
        <Stack gap="lg">
          <Stack gap="xs">
            <Text as="p" size="md">
              Forma
            </Text>
            <Text as="p" size="xs" tone="muted">
              Catholic UI Kit
            </Text>
          </Stack>

          <nav className="docs-nav" aria-label="Documentation">
            <a href="#introduction">Introduction</a>
            <a href="#colors">Colors</a>
            <a href="#components">Components</a>
            <a href="#examples">Examples</a>
            <a href="#liturgical">Liturgical</a>
          </nav>

          <Divider />

          <Stack gap="xs">
            <a className="docs-nav-small" href="#examples">Primitive examples</a>
            <a className="docs-nav-small" href="#institutional">Institutional examples</a>
            <a className="docs-nav-small" href="#liturgical">Liturgical colors</a>
          </Stack>
        </Stack>
      </aside>

      <div className="docs-main">
        <Section id="introduction" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
              <Cluster gap="sm">
                <Badge variant="gold">v0.0.1</Badge>
                <Tag variant="brown">Phase 2 complete</Tag>
                <Tag variant="active">26 primitives</Tag>
              </Cluster>

              <Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Components
                </Heading>
                <Text size="lg" tone="secondary" className="docs-lede">
                  Beautiful, accessible, token-bound primitives for Catholic
                  institutions. Built from a Vatican-informed visual grammar,
                  corrected into a reusable design system.
                </Text>
              </Stack>

              <Cluster gap="sm">
                <Button>Get started</Button>
                <Button variant="secondary">View registry</Button>
              </Cluster>
            </Stack>
          </Container>
        </Section>

        <Section id="colors" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Eyebrow>Foundations</Eyebrow>
                <Heading level={2} size="2xl">
                  Colors
                </Heading>
                <Text tone="muted">
                  Vatican-derived institutional colors, corrected into semantic
                  tokens for accessible Catholic interfaces.
                </Text>
              </Stack>

              <Grid columns="2" gap="lg">
                <Panel surface="raised" padding="md">
                  <Stack gap="md">
                    <Heading level={3} size="lg" family="interface">
                      Semantic colors
                    </Heading>
                    <Stack gap="xs">
                      {Object.entries(semanticColors)
                        .slice(0, 14)
                        .map(([name, value]) => (
                          <ColorRow key={name} name={name} value={String(value)} />
                        ))}
                    </Stack>
                  </Stack>
                </Panel>

                <Panel surface="raised" padding="md">
                  <Stack gap="md">
                    <Heading level={3} size="lg" family="interface">
                      Raw palette
                    </Heading>
                    <Stack gap="xs">
                      {Object.entries(rawColors)
                        .slice(0, 14)
                        .map(([name, value]) => (
                          <ColorRow key={name} name={name} value={String(value)} />
                        ))}
                    </Stack>
                  </Stack>
                </Panel>
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section id="examples" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Show, don’t tell</Eyebrow>
                <Heading level={2} size="2xl">
                  Examples
                </Heading>
              </Stack>

              <ComponentBlock
                title="Button"
                description="Primary, secondary, gold, ghost, and danger actions."
                code={buttonExamplesCode}
              >
                <Cluster gap="sm">
                  {buttonExamples.map((button) => (
                    <Button key={button.label} variant={button.variant}>
                      {button.label}
                    </Button>
                  ))}
                </Cluster>
              </ComponentBlock>

              <ComponentBlock
                title="Notice"
                description="A bordered communication block for official notes, liturgical context, warnings, and system states."
                code={noticeExamplesCode}
              >
                <Stack gap="sm">
                  {noticeExamples.map((notice) => (
                    <Notice key={notice.variant} variant={notice.variant}>
                      {notice.children}
                    </Notice>
                  ))}
                </Stack>
              </ComponentBlock>

              <ComponentBlock
                title="FilterBar"
                description="Search and filter composition for directories and archives."
                code={`<FilterBar>
  <SearchInput placeholder="Search" />
  <Select><option>All</option></Select>
  <Button>Apply</Button>
</FilterBar>`}
              >
                <FilterBar>
                  <SearchInput placeholder="Search by name" />
                  <Select aria-label="Type">
                    <option>All records</option>
                    <option>Parishes</option>
                    <option>Schools</option>
                    <option>Offices</option>
                  </Select>
                  <Button variant="secondary">Apply</Button>
                </FilterBar>
              </ComponentBlock>

              <ComponentBlock
                title="Tabs"
                description="Native tab primitives for news, calendars, and content panels."
                code={`<Tabs>
  <TabList>
    <Tab active>News</Tab>
    <Tab>Calendar</Tab>
  </TabList>
  <TabPanel>...</TabPanel>
</Tabs>`}
              >
                <Tabs>
                  <TabList>
                    <Tab>News</Tab>
                    <Tab>Calendar</Tab>
                    <Tab>Media</Tab>
                  </TabList>
                  <TabPanel index={0}>
                    <Text tone="secondary">
                      News panel: parish, diocesan, and institutional updates.
                    </Text>
                  </TabPanel>
                  <TabPanel index={1}>
                    <Text tone="secondary">
                      Calendar panel: public events, liturgies, and office closures.
                    </Text>
                  </TabPanel>
                  <TabPanel index={2}>
                    <Text tone="secondary">
                      Media panel: photo galleries, videos, and featured stories.
                    </Text>
                  </TabPanel>
                </Tabs>
              </ComponentBlock>

              <ComponentBlock
                title="Accordion"
                description="A disclosure pattern for structured Catholic institutional content."
                code={accordionExamplesCode}
              >
                <Accordion>
                  {accordionExamples.map((item) => (
                    <AccordionItem key={item.title} defaultOpen={item.defaultOpen}>
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>
                        <Text tone="secondary">{item.content}</Text>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ComponentBlock>

              <ComponentBlock
                title="Table"
                description="A restrained table wrapper for records, schedules, and structured institutional data."
                code={tableExampleCode}
              >
                <TableWrapper>
                  <Table>
                    <THead>
                      <TR>
                        <TH>Office</TH>
                        <TH>Status</TH>
                        <TH>Next step</TH>
                      </TR>
                    </THead>
                    <TBody>
                      {tableRows.map((row) => (
                        <TR key={row.office}>
                          <TD>{row.office}</TD>
                          <TD>
                            <Badge variant={row.statusVariant}>{row.status}</Badge>
                          </TD>
                          <TD>
                            <Button size="sm" variant={row.actionVariant}>
                              {row.action}
                            </Button>
                          </TD>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </TableWrapper>
              </ComponentBlock>

              <ComponentBlock
                title="Timeline"
                description="History, provenance, sacramental steps, and project milestones."
                code={`<Timeline>
  <TimelineItem>
    <TimelineMarker tone="gold" />
    <TimelineContent>...</TimelineContent>
  </TimelineItem>
</Timeline>`}
              >
                <Timeline>
                  <TimelineItem>
                    <TimelineMarker tone="gold" />
                    <TimelineContent>
                      <Text as="p" size="sm">
                        Vatican reference audit
                      </Text>
                      <Text as="p" size="xs" tone="muted">
                        Institutional grammar extracted.
                      </Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineMarker tone="success" />
                    <TimelineContent>
                      <Text as="p" size="sm">
                        Core primitives complete
                      </Text>
                      <Text as="p" size="xs" tone="muted">
                        26 primitives added.
                      </Text>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </ComponentBlock>

              <ComponentBlock
                title="MediaFrame"
                description="A media container that can render database, CMS, Vatican News, YouTube, or public website media URLs."
                code={mediaFrameExampleCode}
              >
                <Stack gap="sm">
                  <MediaFrame ratio="video" surface="dark">
                    <iframe
                      src={mediaFrameExample.src}
                      title={mediaFrameExample.title}
                      allowFullScreen
                    />
                  </MediaFrame>
                  <Text size="xs" tone="muted">
                    {mediaFrameExample.caption}
                  </Text>
                </Stack>
              </ComponentBlock>

              <ComponentBlock
                title="EmptyState"
                description="Quiet blank states for unpublished institutional records."
                code={`<EmptyState tone="official">
  <Heading>No records published</Heading>
</EmptyState>`}
              >
                <EmptyState tone="official">
                  <Stack gap="sm">
                    <Heading level={3} size="lg">
                      No records published
                    </Heading>
                    <Text tone="muted">
                      Empty states stay sober and useful.
                    </Text>
                  </Stack>
                </EmptyState>
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="liturgical" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Eyebrow>Liturgical</Eyebrow>
                <Heading level={2} size="2xl">
                  Catholic-native colors
                </Heading>
              </Stack>

              <Grid columns="2" gap="md">
                {liturgicalColors.liturgicalColors.map((item) => (
                  <Card key={item.token} padding="md" border="subtle">
                    <Cluster align="start">
                      <div
                        className="docs-liturgical-dot"
                        style={{
                          background: `var(--forma-${item.token.replace(".", "-")})`,
                        }}
                        aria-hidden="true"
                      />
                      <Stack gap="xs">
                        <Text as="p" size="md">
                          {item.name}
                        </Text>
                        <Text as="p" size="xs" tone="muted">
                          {item.token}
                        </Text>
                        <Text as="p" size="sm" tone="secondary">
                          {item.use}
                        </Text>
                      </Stack>
                    </Cluster>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>


        <Section id="institutional" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 3</Eyebrow>
                <Heading level={2} size="2xl">
                  Institutional components
                </Heading>
                <Text tone="muted">
                  Components for parishes, dioceses, chancery offices, Catholic schools, ministries, foundations, and public-facing Church institutions.
                </Text>
              </Stack>

              <ComponentBlock
                title="InstitutionalHeader"
                description="Top-level identity, language, utility, search, and primary navigation for a Catholic institution."
                code={`<InstitutionalHeader
  title="Saint Anselm Parish"
  subtitle="A Catholic parish of the Diocese"
  primaryItems={[
    { label: "Mass Times", href: "#", current: true },
    { label: "Sacraments", href: "#" },
    { label: "Ministries", href: "#" }
  ]}
  utilityItems={[
    { label: "Bulletin", href: "#" },
    { label: "Contact", href: "#" }
  ]}
  languages={[
    { label: "EN", href: "#", current: true },
    { label: "ES", href: "#" }
  ]}
  searchAction="#"
/>`}
              >
                <InstitutionalHeader
                  title="Saint Anselm Parish"
                  subtitle="A Catholic parish of the Diocese"
                  primaryItems={[
                    { label: "Mass Times", href: "#", current: true },
                    { label: "Sacraments", href: "#" },
                    { label: "Ministries", href: "#" },
                    { label: "School", href: "#" },
                    { label: "Give", href: "#" },
                  ]}
                  utilityItems={[
                    { label: "Bulletin", href: "#" },
                    { label: "Contact", href: "#" },
                  ]}
                  languages={[
                    { label: "EN", href: "#", current: true },
                    { label: "ES", href: "#" },
                  ]}
                  searchAction="#"
                />
              </ComponentBlock>

              <ComponentBlock
                title="PageHeader + Breadcrumb"
                description="Formal page opening with optional breadcrumbs, eyebrow, description, and actions."
                code={`<PageHeader
  eyebrow="Parish office"
  title="Institutional page header"
  description="A formal header for parish, diocesan, school, ministry, and foundation pages."
  breadcrumbs={[
    { label: "Home", href: "#" },
    { label: "Parish", href: "#" },
    { label: "Office", href: "#" }
  ]}
/>`}
              >
                <PageHeader
                  eyebrow="Parish office"
                  title="Institutional page header"
                  description="A formal header for parish, diocesan, school, ministry, and foundation pages."
                  breadcrumbs={[
                    { label: "Home", href: "#" },
                    { label: "Parish", href: "#" },
                    { label: "Office", href: "#" },
                  ]}
                  actions={
                    <Cluster>
                      <Button size="sm">Primary action</Button>
                      <Button size="sm" variant="secondary">Secondary action</Button>
                    </Cluster>
                  }
                />
              </ComponentBlock>

              <ComponentBlock
                title="AnnouncementBanner"
                description="Official, liturgical, warning, and emergency announcements."
                code={`<AnnouncementBanner
  badge="Official"
  title="Parish office closed Friday"
  description="The office will reopen Monday morning."
  href="#"
/>`}
              >
                <AnnouncementBanner
                  badge="Official"
                  title="Parish office closed Friday"
                  description="The office will reopen Monday morning. Sacramental emergencies should use the emergency line."
                  href="#"
                />
              </ComponentBlock>

              <ComponentBlock
                title="Directory + DirectoryCard"
                description="Directory shell and cards for offices, ministries, schools, parishes, staff groups, and institutional records."
                code={`<Directory title="Institutional directory">
  <DirectoryCard
    eyebrow="Office"
    title="Chancery Office"
    description="Administrative office for diocesan governance and records."
    status="Open"
    href="#"
  />
</Directory>`}
              >
                <Directory title="Institutional directory" description="Directory and directory cards.">
                  <DirectoryCard
                    eyebrow="Office"
                    title="Chancery Office"
                    description="Administrative office for diocesan governance and records."
                    meta="Open Monday through Friday"
                    status="Open"
                    href="#"
                  />
                  <DirectoryCard
                    eyebrow="Ministry"
                    title="Marriage Tribunal"
                    description="Canonical process support and case information."
                    meta="By appointment"
                    href="#"
                  />
                </Directory>
              </ComponentBlock>

              <ComponentBlock
                title="ContactBlock"
                description="Structured contact details for parish offices, diocesan offices, ministries, schools, and foundations."
                code={`<ContactBlock
  phone="(555) 123-4567"
  email="office@example.org"
  website="https://example.org"
  addressLines={["123 Cathedral Place", "Santa Fe, NM 87501"]}
/>`}
              >
                <ContactBlock
                  title="Contact"
                  phone="(555) 123-4567"
                  email="office@example.org"
                  website="https://example.org"
                  addressLines={["123 Cathedral Place", "Santa Fe, NM 87501"]}
                />
              </ComponentBlock>

              <ComponentBlock
                title="OfficeHours"
                description="Structured office-hour display for public-facing institutional pages."
                code={`<OfficeHours
  items={[
    { days: "Monday–Thursday", hours: "9:00 AM – 4:00 PM" },
    { days: "Friday", hours: "9:00 AM – Noon", note: "Summer hours" }
  ]}
/>`}
              >
                <OfficeHours
                  items={[
                    { days: "Monday–Thursday", hours: "9:00 AM – 4:00 PM" },
                    { days: "Friday", hours: "9:00 AM – Noon", note: "Summer hours" },
                  ]}
                />
              </ComponentBlock>

              <ComponentBlock
                title="LocationBlock"
                description="Address, map link, and location note for offices, parishes, schools, and ministries."
                code={`<LocationBlock
  addressLines={["123 Cathedral Place", "Santa Fe, NM 87501"]}
  mapHref="#"
  note="Parking available behind the parish hall."
/>`}
              >
                <LocationBlock
                  addressLines={["123 Cathedral Place", "Santa Fe, NM 87501"]}
                  mapHref="#"
                  note="Parking available behind the parish hall."
                />
              </ComponentBlock>

              <ComponentBlock
                title="StaffProfile + ClergyProfile"
                description="Profile cards for staff and clergy, with clergy receiving a more formal gold treatment."
                code={`<StaffProfile
  name="Maria Sanchez"
  position="Parish Secretary"
  department="Office"
  email="maria@example.org"
/>

<ClergyProfile
  name="Rev. Thomas More"
  title="Pastor"
  assignment="Saint Anselm Parish"
  orderOrPostnominals="Pastor"
/>`}
              >
                <Grid columns="2" gap="md">
                  <StaffProfile
                    name="Maria Sanchez"
                    position="Parish Secretary"
                    department="Office"
                    email="maria@example.org"
                    phone="(555) 123-4567"
                  />

                  <ClergyProfile
                    name="Rev. Thomas More"
                    title="Pastor"
                    assignment="Saint Anselm Parish"
                    orderOrPostnominals="Pastor"
                    email="pastor@example.org"
                  />
                </Grid>
              </ComponentBlock>

              <ComponentBlock
                title="DocumentList + DocumentCard + ResourceLink"
                description="Official documents, forms, policies, downloads, and external institutional resources."
                code={`<DocumentList title="Documents">
  <DocumentCard
    title="Parish Registration Form"
    documentType="Form"
    authority="Parish"
    fileType="PDF"
    href="#"
  />
  <ResourceLink
    title="Safe Environment Policy"
    href="#"
    variant="document"
  />
</DocumentList>`}
              >
                <DocumentList title="Documents" description="Document cards and resource links.">
                  <DocumentCard
                    title="Parish Registration Form"
                    documentType="Form"
                    authority="Parish"
                    date="May 2026"
                    fileType="PDF"
                    href="#"
                    description="Registration form for new parishioners."
                  />
                  <ResourceLink
                    title="Safe Environment Policy"
                    description="Policy and training information."
                    meta="External resource"
                    href="#"
                    variant="document"
                  />
                </DocumentList>
              </ComponentBlock>

              <ComponentBlock
                title="EventList + EventCard"
                description="Public calendar cards for liturgical, parish, school, diocesan, and ministry events."
                code={`<EventList title="Events">
  <EventCard
    title="Corpus Christi Procession"
    date="Jun 7"
    time="11:30 AM"
    location="Church grounds"
    category="Liturgical"
    href="#"
  />
</EventList>`}
              >
                <EventList title="Events" description="Event cards for public calendars.">
                  <EventCard
                    title="Corpus Christi Procession"
                    date="Jun 7"
                    time="11:30 AM"
                    location="Church grounds"
                    category="Liturgical"
                    description="Procession immediately following the principal Mass."
                    href="#"
                  />
                  <EventCard
                    title="Parish Council Meeting"
                    date="Jun 12"
                    time="6:00 PM"
                    location="Parish hall"
                    category="Meeting"
                    href="#"
                  />
                </EventList>
              </ComponentBlock>

              <ComponentBlock
                title="InstitutionalFooter"
                description="Formal footer for Catholic institutional websites."
                code={`<InstitutionalFooter
  title="Saint Anselm Parish"
  description="A public-facing Catholic institution built with Forma."
  links={[
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Giving", href: "#" }
  ]}
/>`}
              >
                <InstitutionalFooter
                  title="Saint Anselm Parish"
                  description="A public-facing Catholic institution built with Forma."
                  links={[
                    { label: "Contact", href: "#" },
                    { label: "Privacy", href: "#" },
                    { label: "Giving", href: "#" },
                  ]}
                />
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

      </div>
    </main>
  );
}

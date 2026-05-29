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
            <a href="#tokens">Tokens</a>
            <a href="#components">Components</a>
            <a href="#examples">Examples</a>
            <a href="#liturgical">Liturgical</a>
          </nav>

          <Divider />

          <Stack gap="xs">
            {categories.map((category) => (
              <a className="docs-nav-small" key={category} href={`#${category.toLowerCase()}`}>
                {category}
              </a>
            ))}
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

        <Section id="tokens" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Eyebrow>Foundations</Eyebrow>
                <Heading level={2} size="2xl">
                  Tokens
                </Heading>
                <Text tone="muted">
                  Semantic tokens are the source of truth. Components consume
                  variables, not one-off styles.
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

        <Section id="components" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Primitives</Eyebrow>
                <Heading level={2} size="2xl">
                  Component index
                </Heading>
                <Text tone="muted">
                  The current package exports these primitives from{" "}
                  <Code>@forma/primitives</Code>.
                </Text>
              </Stack>

              {categories.map((category) => (
                <section key={category} id={category.toLowerCase()}>
                  <Stack gap="md">
                    <Heading level={3} size="lg" family="interface">
                      {category}
                    </Heading>
                    <Grid columns="2" gap="md">
                      {primitives
                        .filter((primitive) => primitive.category === category)
                        .map((primitive) => (
                          <Card key={primitive.name} padding="md" border="subtle">
                            <Stack gap="sm">
                              <Cluster justify="between" align="start">
                                <Text as="p" size="md">
                                  {primitive.name}
                                </Text>
                                <Badge variant="success">{primitive.status}</Badge>
                              </Cluster>
                              <Text as="p" size="sm" tone="muted">
                                {primitive.description}
                              </Text>
                            </Stack>
                          </Card>
                        ))}
                    </Grid>
                  </Stack>
                </section>
              ))}
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
                code={`<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="gold">Gold</Button>`}
              >
                <Cluster gap="sm">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="gold">Gold</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </Cluster>
              </ComponentBlock>

              <ComponentBlock
                title="Notice"
                description="Official and liturgical notices for institutional communication."
                code={`<Notice variant="official">
  Parish office notice.
</Notice>`}
              >
                <Stack gap="md">
                  <Notice variant="official">
                    The parish office will publish an updated Holy Day schedule
                    before the end of the week.
                  </Notice>
                  <Notice variant="liturgical">
                    Liturgical notices use a restrained visual treatment and a
                    clear left border.
                  </Notice>
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
                    <Tab active>News</Tab>
                    <Tab>Calendar</Tab>
                    <Tab>Media</Tab>
                  </TabList>
                  <TabPanel>
                    <Text tone="secondary">
                      Tabs can power Vatican-style news/calendar sections.
                    </Text>
                  </TabPanel>
                </Tabs>
              </ComponentBlock>

              <ComponentBlock
                title="Accordion"
                description="Disclosure for office details, sacrament preparation, and menus."
                code={`<Accordion>
  <AccordionItem>
    <AccordionTrigger open>Confession</AccordionTrigger>
    <AccordionContent open>...</AccordionContent>
  </AccordionItem>
</Accordion>`}
              >
                <Accordion>
                  <AccordionItem>
                    <AccordionTrigger open>Confession schedule</AccordionTrigger>
                    <AccordionContent open>
                      Saturday, 3:30 PM to 4:30 PM, or by appointment.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionTrigger>Sacrament preparation</AccordionTrigger>
                    <AccordionContent>
                      Preparation details may be disclosed here.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ComponentBlock>

              <ComponentBlock
                title="Table"
                description="Dense, legible institutional records."
                code={`<TableWrapper>
  <Table>
    <THead>...</THead>
    <TBody>...</TBody>
  </Table>
</TableWrapper>`}
              >
                <TableWrapper>
                  <Table>
                    <THead>
                      <TR>
                        <TH>Day</TH>
                        <TH>Time</TH>
                        <TH>Location</TH>
                      </TR>
                    </THead>
                    <TBody>
                      <TR>
                        <TD>Sunday</TD>
                        <TD>8:00 AM</TD>
                        <TD>Nave</TD>
                      </TR>
                      <TR>
                        <TD>Sunday</TD>
                        <TD>10:30 AM</TD>
                        <TD>Nave</TD>
                      </TR>
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
                description="Formal frame for images, video, and future feast-day hero media."
                code={`<MediaFrame ratio="video" surface="dark">
  ...
</MediaFrame>`}
              >
                <MediaFrame ratio="video" surface="dark">
                  <div className="docs-media-placeholder">
                    <IconFrame tone="inverse" size="lg">
                      ✦
                    </IconFrame>
                  </div>
                </MediaFrame>
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
      </div>
    </main>
  );
}

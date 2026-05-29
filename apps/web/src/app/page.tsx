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
import typography from "../../../../packages/tokens/src/typography.json";
import spacing from "../../../../packages/tokens/src/spacing.json";
import radius from "../../../../packages/tokens/src/radius.json";
import shadows from "../../../../packages/tokens/src/shadows.json";
import borders from "../../../../packages/tokens/src/borders.json";
import motion from "../../../../packages/tokens/src/motion.json";
import liturgicalColors from "../../../../packages/tokens/src/liturgical-colors.json";

type RawColors = Record<string, string>;

const rawColors = colors.color.raw as RawColors;
const semanticColors = colors.color.semantic as Record<string, string>;

function resolveColor(value: string) {
  const match = value.match(/^\{color\.raw\.(.+)\}$/);

  if (!match) {
    return value;
  }

  return rawColors[match[1]] || value;
}

function entries<T extends Record<string, unknown>>(value: T) {
  return Object.entries(value);
}

function TokenCode({ children }: { children: string }) {
  return <code className="gallery-code">{children}</code>;
}

function ColorSwatch({
  name,
  value,
  resolved,
}: {
  name: string;
  value: string;
  resolved: string;
}) {
  return (
    <Card padding="sm" border="subtle" className="gallery-swatch-card">
      <div
        className="gallery-swatch"
        style={{ background: resolved }}
        aria-hidden="true"
      />
      <Stack gap="xs">
        <Text as="p" size="sm">
          {name}
        </Text>
        <Text as="p" size="xs" tone="muted">
          {value}
        </Text>
        {resolved !== value ? (
          <Text as="p" size="xs" tone="muted">
            {resolved}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
}

export default function Home() {
  const primitiveNames = [
    "Container",
    "Section",
    "Stack",
    "Cluster",
    "Grid",
    "Card",
    "Panel",
    "Divider",
    "Text",
    "Heading",
    "Eyebrow",
    "Button",
    "Link",
    "Badge",
    "Tag",
    "Tabs",
    "Accordion",
    "SearchInput",
    "Select",
    "FilterBar",
    "Table",
    "Timeline",
    "EmptyState",
    "Notice",
    "IconFrame",
    "MediaFrame",
  ];

  return (
    <main>
      <Section surface="page" spacing="xl">
        <Container size="xl">
          <Stack gap="xl">
            <Stack gap="md">
              <Cluster gap="sm">
                <Badge variant="gold">Forma</Badge>
                <Tag variant="brown">Catholic UI Kit</Tag>
                <Tag variant="active">Vatican-derived tokens</Tag>
              </Cluster>

              <Stack gap="sm">
                <Eyebrow tone="gold">Design system gallery</Eyebrow>
                <Heading level={1} size="5xl" family="display">
                  A visual grammar for Catholic digital institutions.
                </Heading>
                <Text size="lg" tone="secondary" className="gallery-lede">
                  This page is built from Forma primitives and Forma tokens. It
                  shows the current token system, primitive inventory, and first
                  component states before Catholic-specific components are added.
                </Text>
              </Stack>

              <Cluster gap="sm">
                <Button>Primary action</Button>
                <Button variant="secondary">Secondary action</Button>
                <Button variant="gold">Gold action</Button>
                <Link href="#primitives">View primitives</Link>
              </Cluster>
            </Stack>

            <Notice variant="official">
              Vatican reference work informed the palette, type direction,
              restrained borders, and institutional hierarchy. Forma keeps the
              feeling while enforcing text-safe semantic tokens.
            </Notice>
          </Stack>
        </Container>
      </Section>

      <Section surface="subtle" spacing="lg">
        <Container size="xl">
          <Stack gap="lg">
            <Stack gap="sm">
              <Eyebrow>Tokens</Eyebrow>
              <Heading level={2}>Color system</Heading>
              <Text tone="muted">
                Raw colors provide the palette. Semantic colors define safe UI
                usage.
              </Text>
            </Stack>

            <Panel>
              <Stack gap="lg">
                <Stack gap="sm">
                  <Heading level={3} size="lg">
                    Raw palette
                  </Heading>
                  <Grid columns="auto" gap="md">
                    {entries(rawColors).map(([name, value]) => (
                      <ColorSwatch
                        key={name}
                        name={name}
                        value={String(value)}
                        resolved={String(value)}
                      />
                    ))}
                  </Grid>
                </Stack>

                <Divider />

                <Stack gap="sm">
                  <Heading level={3} size="lg">
                    Semantic colors
                  </Heading>
                  <Grid columns="auto" gap="md">
                    {entries(semanticColors).map(([name, value]) => (
                      <ColorSwatch
                        key={name}
                        name={name}
                        value={String(value)}
                        resolved={resolveColor(String(value))}
                      />
                    ))}
                  </Grid>
                </Stack>
              </Stack>
            </Panel>
          </Stack>
        </Container>
      </Section>

      <Section surface="page" spacing="lg">
        <Container size="xl">
          <Grid columns="2" gap="lg">
            <Panel>
              <Stack gap="md">
                <Eyebrow>Typography</Eyebrow>
                <Heading level={2}>Type tokens</Heading>

                <Stack gap="sm">
                  {entries(typography.typography.fontFamily).map(
                    ([name, value]) => (
                      <Card key={name} padding="sm">
                        <Stack gap="xs">
                          <Text size="xs" tone="muted">
                            {name}
                          </Text>
                          <p
                            className="gallery-type-sample"
                            style={{ fontFamily: String(value) }}
                          >
                            Forma Ecclesiae
                          </p>
                          <Text size="xs" tone="muted">
                            {String(value)}
                          </Text>
                        </Stack>
                      </Card>
                    )
                  )}
                </Stack>
              </Stack>
            </Panel>

            <Panel surface="raised">
              <Stack gap="md">
                <Eyebrow>Scale</Eyebrow>
                <Heading level={2}>Size, radius, shadow</Heading>

                <TableWrapper>
                  <Table density="compact">
                    <THead>
                      <TR>
                        <TH>Token</TH>
                        <TH>Value</TH>
                      </TR>
                    </THead>
                    <TBody>
                      {entries(typography.typography.scale).map(
                        ([name, value]) => (
                          <TR key={`type-${name}`}>
                            <TD>
                              <TokenCode>{`font.${name}`}</TokenCode>
                            </TD>
                            <TD>{String(value)}</TD>
                          </TR>
                        )
                      )}
                      {entries(radius.radius).map(([name, value]) => (
                        <TR key={`radius-${name}`}>
                          <TD>
                            <TokenCode>{`radius.${name}`}</TokenCode>
                          </TD>
                          <TD>{String(value)}</TD>
                        </TR>
                      ))}
                      {entries(shadows.shadow).map(([name, value]) => (
                        <TR key={`shadow-${name}`}>
                          <TD>
                            <TokenCode>{`shadow.${name}`}</TokenCode>
                          </TD>
                          <TD>{String(value)}</TD>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </TableWrapper>
              </Stack>
            </Panel>
          </Grid>
        </Container>
      </Section>

      <Section surface="parchment" spacing="lg" id="primitives">
        <Container size="xl">
          <Stack gap="lg">
            <Stack gap="sm">
              <Eyebrow tone="active">Phase 2 complete</Eyebrow>
              <Heading level={2}>Core primitive inventory</Heading>
              <Text tone="muted">
                These primitives are the foundation for parish, diocesan,
                liturgical, document, directory, media, and CDCF components.
              </Text>
            </Stack>

            <Grid columns="auto" gap="md">
              {primitiveNames.map((name) => (
                <Card key={name} padding="sm" border="subtle">
                  <Cluster justify="between">
                    <Text as="p" size="sm">
                      {name}
                    </Text>
                    <Badge variant="success">Added</Badge>
                  </Cluster>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section surface="page" spacing="lg">
        <Container size="xl">
          <Stack gap="lg">
            <Stack gap="sm">
              <Eyebrow>Primitive specimens</Eyebrow>
              <Heading level={2}>What we can render now</Heading>
            </Stack>

            <Grid columns="2" gap="lg">
              <Card padding="lg" shadow="sm">
                <Stack gap="md">
                  <Eyebrow tone="gold">Parish notice</Eyebrow>
                  <Heading level={3} size="xl">
                    Holy Day schedule
                  </Heading>
                  <Text tone="secondary">
                    The parish office may publish schedule changes using Notice,
                    Card, Badge, Text, and Button primitives.
                  </Text>
                  <Cluster>
                    <Badge variant="liturgicalWhite">Solemnity</Badge>
                    <Tag variant="brown">Updated today</Tag>
                  </Cluster>
                  <Divider />
                  <Cluster>
                    <Button size="sm">View schedule</Button>
                    <Button size="sm" variant="ghost">
                      Contact office
                    </Button>
                  </Cluster>
                </Stack>
              </Card>

              <Panel tone="official">
                <Stack gap="md">
                  <Eyebrow>Filters</Eyebrow>
                  <Heading level={3} size="xl">
                    Directory controls
                  </Heading>
                  <FilterBar>
                    <SearchInput placeholder="Search by name" />
                    <Select aria-label="Century">
                      <option>All centuries</option>
                      <option>XXI Century</option>
                      <option>XX Century</option>
                    </Select>
                    <Button variant="secondary">Apply</Button>
                  </FilterBar>
                </Stack>
              </Panel>

              <Card padding="lg">
                <Stack gap="md">
                  <Eyebrow>Tabs</Eyebrow>
                  <Tabs>
                    <TabList>
                      <Tab active>News</Tab>
                      <Tab>Calendar</Tab>
                      <Tab>Media</Tab>
                    </TabList>
                    <TabPanel>
                      <Text tone="secondary">
                        Tabs are ready for Vatican-style news/calendar panels
                        and parish schedule sections.
                      </Text>
                    </TabPanel>
                  </Tabs>
                </Stack>
              </Card>

              <Card padding="lg">
                <Stack gap="md">
                  <Eyebrow>Accordion</Eyebrow>
                  <Accordion>
                    <AccordionItem>
                      <AccordionTrigger open>
                        Confession and adoration
                      </AccordionTrigger>
                      <AccordionContent open>
                        Times, locations, exceptions, and notes can be revealed
                        in structured sections.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionTrigger>Sacrament preparation</AccordionTrigger>
                      <AccordionContent>
                        Hidden content remains native and accessible.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Stack>
              </Card>

              <Card padding="lg">
                <Stack gap="md">
                  <Eyebrow>Timeline</Eyebrow>
                  <Timeline>
                    <TimelineItem>
                      <TimelineMarker tone="gold" />
                      <TimelineContent>
                        <Text as="p" size="sm">
                          Vatican reference audit
                        </Text>
                        <Text as="p" size="xs" tone="muted">
                          Visual grammar extracted
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
                          26 / 26 added
                        </Text>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Stack>
              </Card>

              <Card padding="lg">
                <Stack gap="md">
                  <Eyebrow>Media</Eyebrow>
                  <MediaFrame ratio="video" surface="dark">
                    <div className="gallery-media-placeholder">
                      <IconFrame tone="inverse" size="lg">
                        ✦
                      </IconFrame>
                    </div>
                  </MediaFrame>
                  <Text size="sm" tone="muted">
                    MediaFrame is ready for photos, videos, feast-day hero
                    imagery, and diocesan media cards.
                  </Text>
                </Stack>
              </Card>

              <EmptyState tone="official">
                <Stack gap="sm">
                  <Heading level={3} size="lg">
                    No records published
                  </Heading>
                  <Text tone="muted">
                    Empty states stay sober and institutional.
                  </Text>
                </Stack>
              </EmptyState>

              <Notice variant="liturgical">
                Liturgical and official notices can now be composed before
                Catholic-specific components exist.
              </Notice>
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section surface="dark" spacing="lg">
        <Container size="xl">
          <Grid columns="3" gap="lg">
            <Stack gap="sm">
              <Eyebrow tone="inverse">Spacing</Eyebrow>
              {entries(spacing.spacing).slice(0, 8).map(([name, value]) => (
                <Text key={name} tone="inverse" size="sm">
                  {name}: {String(value)}
                </Text>
              ))}
            </Stack>

            <Stack gap="sm">
              <Eyebrow tone="inverse">Borders</Eyebrow>
              {entries(borders.border).map(([name, value]) => (
                <Text key={name} tone="inverse" size="sm">
                  {name}: {String(value)}
                </Text>
              ))}
            </Stack>

            <Stack gap="sm">
              <Eyebrow tone="inverse">Motion</Eyebrow>
              {entries(motion.motion.duration).map(([name, value]) => (
                <Text key={`duration-${name}`} tone="inverse" size="sm">
                  {name}: {String(value)}
                </Text>
              ))}
              {entries(motion.motion.easing).map(([name, value]) => (
                <Text key={`easing-${name}`} tone="inverse" size="sm">
                  {name}: {String(value)}
                </Text>
              ))}
            </Stack>
          </Grid>
        </Container>
      </Section>

      <Section surface="page" spacing="lg">
        <Container size="xl">
          <Stack gap="md">
            <Eyebrow>Liturgical colors</Eyebrow>
            <Heading level={2}>Catholic-native token set</Heading>
            <Grid columns="auto" gap="md">
              {liturgicalColors.liturgicalColors.map((item) => {
                const cssVar = `var(--forma-${item.token.replace(".", "-")})`;

                return (
                  <Card key={item.token} padding="sm">
                    <Cluster align="start">
                      <div
                        className="gallery-liturgical-dot"
                        style={{ background: cssVar }}
                        aria-hidden="true"
                      />
                      <Stack gap="xs">
                        <Text as="p" size="sm">
                          {item.name}
                        </Text>
                        <Text as="p" size="xs" tone="muted">
                          {item.token}
                        </Text>
                        <Text as="p" size="xs" tone="secondary">
                          {item.use}
                        </Text>
                      </Stack>
                    </Cluster>
                  </Card>
                );
              })}
            </Grid>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}

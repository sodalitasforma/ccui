import { CCUISidebar } from "../components/ccui-sidebar";

import {
  Badge,
  Button,
  Card,
  Cluster,
  Container,
  Grid,
  Heading,
  Panel,
  Section,
  SearchInput,
  Select,
  Stack,
  Table,
  TableWrapper,
  Tabs,
  TabList,
  Tab,
  TBody,
  TD,
  TH,
  THead,
  TR,
  Text,
  ArrowRightIcon,
} from "../../../../../packages/primitives/src";

import colors from "../../../../../packages/tokens/src/colors.json";

const rawColors = colors.color.raw as Record<string, string>;
const semanticColors = colors.color.semantic as Record<string, string>;

function tokenNameToCssVar(name: string) {
  return `--ccui-color-${name
    .replace(/\./g, "-")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()}`;
}

function liturgicalTokenToCssVar(token: string) {
  return `--ccui-${token.replace(/\./g, "-")}`;
}

const cdcfColors = Object.entries(rawColors)
  .filter(([name]) => name.startsWith("cdcfNavy") || name.startsWith("cdcfGold"))
  .map(([name, value]) => ({
    name,
    token: tokenNameToCssVar(name).replace("--ccui-color-", ""),
    value: String(value),
  }));

const sourceBackedLiturgicalColors = [
  {
    name: "White",
    token: "liturgical.white",
    value: "var(--ccui-liturgical-white)",
    status: "Ordinary prescribed color",
    use: "Easter Time, Christmas Time, celebrations of the Lord other than his Passion, the Blessed Virgin Mary, Angels, non-martyr Saints, All Saints, Nativity of St. John the Baptist, St. John the Evangelist, Chair of St. Peter, and Conversion of St. Paul.",
    source: "GIRM 346a",
  },
  {
    name: "Red",
    token: "liturgical.red",
    value: "var(--ccui-liturgical-red)",
    status: "Ordinary prescribed color",
    use: "Palm Sunday of the Lord’s Passion, Good Friday, Pentecost, celebrations of the Lord’s Passion, Apostles, Evangelists, and Martyr Saints.",
    source: "GIRM 346b",
  },
  {
    name: "Green",
    token: "liturgical.green",
    value: "var(--ccui-liturgical-green)",
    status: "Ordinary prescribed color",
    use: "Offices and Masses of Ordinary Time.",
    source: "GIRM 346c",
  },
  {
    name: "Violet",
    token: "liturgical.violet",
    value: "var(--ccui-liturgical-violet)",
    status: "Ordinary prescribed color",
    use: "Advent and Lent. It may also be used in Offices and Masses for the Dead.",
    source: "GIRM 346d",
  },
  {
    name: "Black",
    token: "liturgical.black",
    value: "var(--ccui-liturgical-black)",
    status: "Permitted funerary color in the United States",
    use: "Besides violet, white or black may be used at funeral services and other Offices and Masses for the Dead in the Dioceses of the United States.",
    source: "GIRM 346e, U.S. adaptation",
  },
  {
    name: "Rose",
    token: "liturgical.rose",
    value: "var(--ccui-liturgical-rose)",
    status: "Optional where practiced",
    use: "May be used, where it is the practice, on Gaudete Sunday and Laetare Sunday.",
    source: "GIRM 346f",
  },
  {
    name: "Gold",
    token: "liturgical.gold",
    value: "var(--ccui-liturgical-gold)",
    status: "Festive / more solemn use",
    use: "Festive or more precious sacred vestments may be used on more solemn days; USCCB notes gold or silver are permitted in the United States for more solemn occasions.",
    source: "GIRM 346g; USCCB liturgical colors",
  },
] as const;

function resolveColor(value: string) {
  const match = value.match(/^\{color\.raw\.(.+)\}$/);
  if (!match) return value;
  return rawColors[match[1]] || value;
}

function ColorSwatch({
  name,
  value,
}: {
  name: string;
  value: string;
}) {
  const resolved = resolveColor(value);

  return (
    <Card padding="md" border="subtle">
      <Cluster align="center" gap="md">
        <div
          className="docs-color-chip"
          style={{ background: resolved }}
          aria-hidden="true"
        />
        <Stack gap="xs">
          <Text as="p" size="sm" weight="semibold">
            {name}
          </Text>
          <Text as="p" size="xs" tone="muted" family="mono">
            var({tokenNameToCssVar(name)})
          </Text>
          <Text as="p" size="xs" tone="muted" family="mono">
            {value}
          </Text>
          {resolved !== value ? (
            <Text as="p" size="xs" tone="muted" family="mono">
              {resolved}
            </Text>
          ) : null}
        </Stack>
      </Cluster>
    </Card>
  );
}

function LiturgicalSwatch({
  token,
  name,
  value,
  status,
  use,
  source,
}: {
  token: string;
  name: string;
  value: string;
  status: string;
  use: string;
  source: string;
}) {
  return (
    <Card padding="md" border="subtle">
      <Cluster align="start" gap="md">
        <div
          className="docs-liturgical-dot"
          style={{
            background: value,
          }}
          aria-hidden="true"
        />
        <Stack gap="xs">
          <Cluster gap="sm" align="center">
            <Text as="p" size="md" weight="semibold">
              {name}
            </Text>
            <Badge variant="neutral" size="xs">
              {source}
            </Badge>
          </Cluster>
          <Text as="p" size="xs" tone="muted" family="mono">
            var({liturgicalTokenToCssVar(token)})
          </Text>
          <Text as="p" size="xs" tone="goldText" weight="semibold">
            {status}
          </Text>
          <Text as="p" size="sm" tone="secondary">
            {use}
          </Text>
        </Stack>
      </Cluster>
    </Card>
  );
}

export default function ColorsPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="colors" />

      <div className="docs-main">
        <Section id="overview" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
<Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Colors
                </Heading>

                <Text size="lg" tone="secondary" className="docs-lede">
                  Catholic Commons UI orders color by source and office. Its
institutional palette takes its principal cue from the Holy See’s
public digital presence and from the yellow-and-white heraldic
language of Vatican City. Semantic tokens translate that palette into
ordinary interface duties: page, surface, text, boundary, link,
accent, action, and state. CDCF tokens serve the narrower work of
Catholic data infrastructure: canonical sources, reviewed authority,
machine-readable records, provenance, and semantic relationships.
Liturgical tokens are reserved for colors that carry ecclesial
meaning in worship, calendars, feasts, vesture, and sacred context.
Accordingly, a component should use semantic color unless the matter
represented is liturgical, canonical, institutional, or data-specific
in a way that calls for a more determinate token.
                </Text>
              </Stack>

              <Cluster gap="sm">
                <Button href="/components-gallery" iconAfter={<ArrowRightIcon size="xs" />}>
                  Browse components
                </Button>
                <Button href="/typography" variant="secondary">
                  View typography
                </Button>
              </Cluster>
            </Stack>
          </Container>
        </Section>

        <Section id="state-tokens" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Heading level={2} size="xl">
                  State tokens
                </Heading>
                <Text tone="secondary">
                  These controls prove the interaction grammar: default, selected,
                  disabled, focusable, and dark-surface states all resolve through
                  semantic state tokens instead of one-off colors.
                </Text>
              </Stack>

              <div className="docs-state-specimen-grid">
                <Card padding="md" border="subtle" surface="raised">
                  <Stack gap="sm">
                    <Heading level={3} size="sm">
                      Buttons
                    </Heading>
                    <Cluster gap="sm">
                      <Button variant="secondary">Default</Button>
                      <Button variant="secondary" aria-pressed="true">Selected</Button>
                      <Button variant="secondary" disabled>Disabled</Button>
                    </Cluster>
                    <Text size="xs" tone="muted">
                      Uses control, selected, focus, and disabled tokens.
                    </Text>
                  </Stack>
                </Card>

                <Card padding="md" border="subtle" surface="raised">
                  <Stack gap="sm">
                    <Heading level={3} size="sm">
                      Forms
                    </Heading>
                    <Stack gap="sm">
                      <SearchInput placeholder="Search records" />
                      <SearchInput placeholder="Disabled search" disabled />
                      <Select aria-label="Example select" defaultValue="one">
                        <option value="one">Default select</option>
                        <option value="two">Second option</option>
                      </Select>
                    </Stack>
                    <Text size="xs" tone="muted">
                      Uses control background, border, hover, focus, and disabled tokens.
                    </Text>
                  </Stack>
                </Card>

                <Card padding="md" border="subtle" surface="raised">
                  <Stack gap="sm">
                    <Heading level={3} size="sm">
                      Tabs
                    </Heading>
                    <Tabs>
                      <TabList aria-label="State token tabs">
                        <Tab aria-current="page">Active</Tab>
                        <Tab>Resting</Tab>
                        <Tab>Another</Tab>
                      </TabList>
                    </Tabs>
                    <Text size="xs" tone="muted">
                      Uses nav active text, border, and surface tokens.
                    </Text>
                  </Stack>
                </Card>

                <Card padding="md" border="subtle" surface="dark">
                  <Stack gap="sm">
                    <Heading level={3} size="sm">
                      Dark surface
                    </Heading>
                    <Cluster gap="sm">
                      <Button variant="ghost" size="icon" aria-label="Default on dark">
                        <span aria-hidden="true">⌕</span>
                      </Button>
                      <Button variant="ghost" size="icon" aria-label="Selected on dark" aria-pressed="true">
                        <span aria-hidden="true">✓</span>
                      </Button>
                    </Cluster>
                    <Text size="xs" tone="inverse">
                      Confirms inverse icon/control contrast on dark surfaces.
                    </Text>
                  </Stack>
                </Card>
              </div>
            </Stack>
          </Container>
        </Section>

        <Section id="theme-specimens" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="md">
              <Stack gap="sm">
                <Heading level={2} size="xl">
                  Theme specimens
                </Heading>
                <Text tone="secondary">
                  These paired specimens verify that primitives, icons, form controls, selected
                  states, disabled states, and dark surfaces respond to semantic theme tokens.
                </Text>
              </Stack>

              <div className="docs-theme-specimen-pair">
                {["light", "dark"].map((theme) => (
                  <Card
                    key={theme}
                    padding="lg"
                    border="subtle"
                    surface="raised"
                    data-theme={theme}
                    className="docs-theme-specimen"
                  >
                    <Stack gap="md">
                      <Cluster gap="sm" justify="between" align="center">
                        <Heading level={3} size="md">
                          {theme === "light" ? "Light theme" : "Dark theme"}
                        </Heading>
                        <Badge variant={theme === "light" ? "neutral" : "gold"} size="xs">
                          data-theme={theme}
                        </Badge>
                      </Cluster>

                      <Stack gap="sm">
                        <Text size="xs" tone="muted" weight="semibold">
                          Buttons
                        </Text>
                        <Cluster gap="sm">
                          <Button size="sm">Default</Button>
                          <Button size="sm" variant="subtle">Subtle</Button>
                          <Button size="sm" aria-pressed="true">Selected</Button>
                          <Button size="sm" disabled>Disabled</Button>
                          <Button size="icon" variant="ghost" aria-label="Icon action">
                            <ArrowRightIcon />
                          </Button>
                        </Cluster>
                      </Stack>

                      <Stack gap="sm">
                        <Text size="xs" tone="muted" weight="semibold">
                          Forms
                        </Text>
                        <div className="docs-theme-specimen-controls">
                          <SearchInput placeholder="Search records" />
                          <Select aria-label={`${theme} theme select`} defaultValue="one">
                            <option value="one">Default select</option>
                            <option value="two">Second option</option>
                          </Select>
                        </div>
                      </Stack>

                      <Stack gap="sm">
                        <Text size="xs" tone="muted" weight="semibold">
                          Tabs
                        </Text>
                        <Tabs>
                          <TabList aria-label={`${theme} theme tabs`}>
                            <Tab aria-current="page">Active</Tab>
                            <Tab>Resting</Tab>
                            <Tab>Another</Tab>
                          </TabList>
                        </Tabs>
                      </Stack>

                      <Stack gap="sm">
                        <Text size="xs" tone="muted" weight="semibold">
                          Text and badges
                        </Text>
                        <Cluster gap="sm">
                          <Badge variant="gold" size="xs">Gold</Badge>
                          <Badge variant="success" size="xs">Success</Badge>
                          <Badge variant="neutral" size="xs">Neutral</Badge>
                        </Cluster>
                        <Text tone="secondary">
                          Secondary text should remain legible against the active theme surface.
                        </Text>
                      </Stack>
                    </Stack>
                  </Card>
                ))}
              </div>
            </Stack>
          </Container>
        </Section>

        <Section id="semantic-colors" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Semantic colors
                </Heading>
                <Text tone="muted">
                  Semantic colors describe use: page surface, raised surface,
                  text, border, link, accent, and state. Components should prefer
                  these over raw palette values.
                </Text>
              </Stack>

              <Grid columns="2" gap="md">
                {Object.entries(semanticColors).map(([name, value]) => (
                  <ColorSwatch key={name} name={name} value={String(value)} />
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section id="raw-palette" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Raw palette
                </Heading>
                <Text tone="muted">
                  Raw colors are the underlying palette. They are useful for
                  token authorship, but should not become the default way to
                  style product UI.
                </Text>
              </Stack>

              <Grid columns="2" gap="md">
                {Object.entries(rawColors).map(([name, value]) => (
                  <ColorSwatch key={name} name={name} value={String(value)} />
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section id="liturgical-colors" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Liturgical colors
                </Heading>
                <Text tone="muted">
                  Liturgical colors are source-backed Catholic domain tokens for
                  calendars, feast days, Mass schedules, season badges, and
                  worship-centered UI. The Church defines the liturgical color
                  uses; Catholic Commons UI assigns stable digital token values
                  for interface consistency.
                </Text>
              </Stack>

              <Panel surface="parchment" padding="lg" tone="gold">
                <Stack gap="sm">
                  <Heading level={3} size="lg" family="interface">
                    Source basis
                  </Heading>
                  <Text tone="secondary">
                    The source of truth for Roman Rite vestment color use is
                    General Instruction of the Roman Missal 346. The U.S. text
                    includes local adaptations for funerals and solemn occasions.
                    Hex values are CCUI design choices, not rubrical definitions.
                  </Text>
                  <Cluster gap="sm">
                    <Badge variant="gold">GIRM 346</Badge>
                    <Badge variant="neutral">USCCB adaptation</Badge>
                    <Badge variant="neutral">Digital token interpretation</Badge>
                  </Cluster>
                </Stack>
              </Panel>

              <Grid columns="2" gap="md">
                {sourceBackedLiturgicalColors.map((item) => (
                  <LiturgicalSwatch
                    key={item.token}
                    token={item.token}
                    name={item.name}
                    value={item.value}
                    status={item.status}
                    use={item.use}
                    source={item.source}
                  />
                ))}
              </Grid>

              <Panel surface="raised" padding="lg">
                <TableWrapper>
                  <Table>
                    <THead>
                      <TR>
                        <TH>Color</TH>
                        <TH>Rubrical status</TH>
                        <TH>Primary source</TH>
                      </TR>
                    </THead>
                    <TBody>
                      {sourceBackedLiturgicalColors.map((item) => (
                        <TR key={item.token}>
                          <TD>{item.name}</TD>
                          <TD>{item.status}</TD>
                          <TD>{item.source}</TD>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </TableWrapper>
              </Panel>
            </Stack>
          </Container>
        </Section>

        <Section id="cdcf-colors" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  CDCF colors
                </Heading>
                <Text tone="muted">
                  Catholic Digital Commons Foundation uses a navy and gold palette. These values are mirrored from the CDCF website Tailwind configuration.
                </Text>
              </Stack>

              <Grid columns="2" gap="md">
                {cdcfColors.map((item) => (
                  <Card key={item.token} padding="md" border="subtle">
                    <Cluster align="start">
                      <div
                        className="docs-color-chip"
                        style={{ background: item.value }}
                        aria-hidden="true"
                      />
                      <Stack gap="xs">
                        <Text as="p" size="sm" weight="semibold">
                          {item.name}
                        </Text>
                        <Text as="p" size="xs" tone="muted">
                          {item.token}
                        </Text>
                        <Text as="p" size="xs" tone="muted">
                          {item.value}
                        </Text>
                      </Stack>
                    </Cluster>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section id="usage-guidance" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Usage guidance
                </Heading>
                <Text tone="muted">
                  Color decisions should stay semantic so Catholic Commons UI can
                  evolve without rewriting every component.
                </Text>
              </Stack>

              <Panel surface="raised" padding="lg">
                <TableWrapper>
                  <Table>
                    <THead>
                      <TR>
                        <TH>Use case</TH>
                        <TH>Prefer</TH>
                        <TH>Avoid</TH>
                      </TR>
                    </THead>
                    <TBody>
                      <TR>
                        <TD>Component backgrounds</TD>
                        <TD>surface semantic tokens</TD>
                        <TD>raw color values</TD>
                      </TR>
                      <TR>
                        <TD>Text hierarchy</TD>
                        <TD>text semantic tokens</TD>
                        <TD>one-off gray or brown choices</TD>
                      </TR>
                      <TR>
                        <TD>Links and actions</TD>
                        <TD>link and accent semantic tokens</TD>
                        <TD>hard-coded blue or gold values</TD>
                      </TR>
                      <TR>
                        <TD>Feasts and seasons</TD>
                        <TD>liturgical tokens</TD>
                        <TD>generic status colors</TD>
                      </TR>
                      <TR>
                        <TD>Alerts and validation</TD>
                        <TD>status semantic tokens</TD>
                        <TD>liturgical colors</TD>
                      </TR>
                    </TBody>
                  </Table>
                </TableWrapper>
              </Panel>
            </Stack>
          </Container>
        </Section>

      </div>
    </main>
  );
}

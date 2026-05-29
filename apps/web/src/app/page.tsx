import systemStats from "./system-stats.json";

import {
  Badge,
  Button,
  Card,
  Cluster,
  Container,
  Divider,
  Grid,
  Heading,
  Link,
  Section,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Tag,
  Text,
} from "../../../../packages/primitives/src";

import {
  ApiEndpointCard,
  ChurchDocumentCard,
  FeastDayHero,
  LiturgicalDayCard,
  MassScheduleBlock,
  ProjectCard,
} from "../../../../packages/catholic/src";

import {
  apiEndpointCardExample,
  churchDocumentExample,
  feastDayHeroExample,
  liturgicalDayExample,
  massScheduleExample,
  projectCardExample,
} from "./docs/examples";

const tabData = [
  {
    label: "Parish",
    title: "Parish interfaces",
    description:
      "Parish websites need structured public information: Mass times, confession schedules, bulletins, announcements, ministries, giving, location, and office contact data.",
    data: [
      "MassScheduleBlock",
      "ConfessionScheduleBlock",
      "BulletinCard",
      "MinistryCard",
      "DonationCallout",
      "ParishContactCard",
    ],
    model: "Parish → schedules → exceptions → documents → ministries → actions",
    example: "A parish can expose the same schedule data to a public website, calendar feed, bulletin page, and future API.",
  },
  {
    label: "Institution",
    title: "Institutional interfaces",
    description:
      "Dioceses, schools, offices, and foundations need consistent navigation, directories, documents, staff profiles, locations, news, events, and official notices.",
    data: [
      "InstitutionalHeader",
      "Directory",
      "StaffProfile",
      "ClergyProfile",
      "ChurchDocumentCard",
      "EventCard",
    ],
    model: "Institution → offices → people → documents → events → public records",
    example: "A diocesan office can publish documents, contacts, events, and official notices through reusable records instead of one-off page layouts.",
  },
  {
    label: "Infrastructure",
    title: "Catholic infrastructure interfaces",
    description:
      "CDCF-style projects need UI for APIs, datasets, ontologies, source authority, provenance, semantic relations, machine-readable status, and canonical records.",
    data: [
      "ProjectCard",
      "DatasetCard",
      "ApiEndpointCard",
      "OntologyClassCard",
      "CanonicalSourceCard",
      "SemanticRelationGraph",
    ],
    model: "Source → entity → relation → dataset → API → interface",
    example: "A liturgical calendar API can power feast cards, parish calendars, reading references, search results, and machine-readable Catholic applications.",
  },
] as const;

export default function Home() {
  return (
    <main className="home-shell">
      <header className="home-nav">
        <Cluster justify="between" align="center">
          <Cluster gap="sm" align="center">
            <Text as="p" size="md" className="home-brand">
              Forma
            </Text>
            <Badge variant="gold">Catholic UI Kit</Badge>
          </Cluster>

          <Cluster gap="sm" align="center">
            <Link href="/components-gallery">Components</Link>
            <Link href="/components-gallery#catholic-infrastructure-projects">
              Infrastructure
            </Link>
            <Link href="/components-gallery#entity-graph-components">Graph</Link>
            <Button size="sm">Install</Button>
          </Cluster>
        </Cluster>
      </header>

      <Section surface="page" spacing="lg" className="home-hero">
        <Container size="lg">
          <Stack gap="lg" className="home-centered">
            <Cluster gap="sm" className="home-centered">
              <Tag variant="brown">{systemStats.components} components</Tag>
              <Tag variant="gold">{systemStats.cssTokenReferences} token references</Tag>
              <Tag variant="blue">{systemStats.docsExamples} live examples</Tag>
            </Cluster>

            <Stack gap="md" className="home-hero__copy">
              <Heading level={1} size="4xl" family="display">
                A Design System for the Digital Catholic Church
              </Heading>

              <Text size="lg" tone="secondary" className="home-hero__lede">
                Open source components for those called to mend the nets of the Church.
              </Text>
            </Stack>

            <Cluster gap="sm" className="home-centered">
              <Button>View component gallery</Button>
              <Button variant="secondary">Review system map</Button>
            </Cluster>
          </Stack>
        </Container>
      </Section>

      <Section surface="page" spacing="lg" className="home-interface">
        <Container size="xl">
          <Stack gap="lg">
            <Cluster justify="between" align="end" gap="lg" className="home-section-heading">
              <Stack gap="xs">
                <Text as="p" className="home-kicker">
                  Interface surface
                </Text>
                <Heading level={2} size="2xl">
                  One system can render parish life, liturgy, documents, and infrastructure.
                </Heading>
              </Stack>

              <Text tone="secondary" className="home-section-heading__copy">
                This is a composed interface made from Forma components. The same records can power
                public pages, internal tools, APIs, archives, and source-backed Catholic datasets.
              </Text>
            </Cluster>

            <div className="home-interface-board">
              <Grid columns="2" gap="lg" className="home-interface-grid">
                <Stack gap="lg">
                  <FeastDayHero {...feastDayHeroExample} />

                  <MassScheduleBlock
                    title={massScheduleExample.title}
                    subtitle={massScheduleExample.subtitle}
                    badge={massScheduleExample.badge}
                    days={massScheduleExample.days}
                    exceptions={massScheduleExample.exceptions}
                    source={massScheduleExample.source}
                  />
                </Stack>

                <Stack gap="lg">
                  <LiturgicalDayCard {...liturgicalDayExample} />
                  <ChurchDocumentCard {...churchDocumentExample} />
                  <ApiEndpointCard {...apiEndpointCardExample} />
                </Stack>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Section>

      <Section surface="page" spacing="lg" className="home-proof">
        <Container size="xl">
          <Stack gap="lg">
            <Cluster justify="between" align="end" gap="lg" className="home-section-heading">
              <Stack gap="xs">
                <Text as="p" className="home-kicker">
                  Built from real components
                </Text>
                <Heading level={2} size="2xl">
                  The homepage explains the system. The gallery proves it.
                </Heading>
              </Stack>

              <Text tone="secondary" className="home-section-heading__copy">
                These examples are not screenshots. They are live components rendered
                from the same package used by the component gallery.
              </Text>
            </Cluster>

            <Grid columns="2" gap="lg" className="home-proof-grid">
              <Stack gap="lg">
                <FeastDayHero {...feastDayHeroExample} />

                <MassScheduleBlock
                  title={massScheduleExample.title}
                  subtitle={massScheduleExample.subtitle}
                  badge={massScheduleExample.badge}
                  days={massScheduleExample.days}
                  exceptions={massScheduleExample.exceptions}
                  source={massScheduleExample.source}
                />
              </Stack>

              <Stack gap="lg">
                <ProjectCard {...projectCardExample} />
                <ApiEndpointCard {...apiEndpointCardExample} />
              </Stack>
            </Grid>

            <Card padding="lg" border="gold" className="home-final-card">
              <Cluster justify="between" align="center" gap="lg">
                <Stack gap="xs">
                  <Heading level={3} size="xl">
                    Continue to the component gallery.
                  </Heading>
                  <Text tone="secondary">
                    The gallery contains the full audited component set, with live previews
                    and matching generated code examples.
                  </Text>
                </Stack>

                <Button>Open gallery</Button>
              </Cluster>
            </Card>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}

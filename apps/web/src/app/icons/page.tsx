import { CCUISidebar } from "../components/ccui-sidebar";
import {
  Badge,
  Card,
  Cluster,
  Container,
  Heading,
  Section,
  Stack,
  Text,
} from "../../../../../packages/primitives/src";

import {
  ArrowRightIcon,
  ChaliceIcon,
  CheckIcon,
  ChurchIcon,
  CloseIcon,
  CopyIcon,
  CrossIcon,
  MenuIcon,
  RosaryIcon,
  SearchIcon,
} from "@catholiccommons/icons";

const liveIcons = [
  { name: "ArrowRightIcon", category: "Interface", Icon: ArrowRightIcon },
  { name: "CheckIcon", category: "Interface", Icon: CheckIcon },
  { name: "CloseIcon", category: "Interface", Icon: CloseIcon },
  { name: "CopyIcon", category: "Interface", Icon: CopyIcon },
  { name: "MenuIcon", category: "Interface", Icon: MenuIcon },
  { name: "SearchIcon", category: "Interface", Icon: SearchIcon },
  { name: "ChaliceIcon", category: "Catholic", Icon: ChaliceIcon },
  { name: "ChurchIcon", category: "Catholic", Icon: ChurchIcon },
  { name: "CrossIcon", category: "Catholic", Icon: CrossIcon },
  { name: "RosaryIcon", category: "Catholic", Icon: RosaryIcon },
] as const;

const iconCategories = [
  {
    title: "Interface",
    examples: "Search, menu, close, copy, check, arrow, download, filter, calendar, clock, mail, phone, map pin, bell.",
  },
  {
    title: "Catholic",
    examples: "Cross, crucifix, chalice, host, monstrance, rosary, Bible, church, candle, dove, fish, chi-rho, keys, miter, crozier.",
  },
  {
    title: "Liturgy",
    examples: "Altar, thurible, lectionary, stole, Advent wreath, baptism shell, oil stock, confessional, kneeler.",
  },
  {
    title: "Documents",
    examples: "Document, seal, scroll, citation, canon, decree, archive, translation, source, provenance.",
  },
  {
    title: "Parish",
    examples: "School, office, donation, ministry, volunteer, family, formation, event, bulletin, visitor, safeguarding.",
  },
] as const;

const buildPhases = [
  "Create a dedicated @catholiccommons/icons package.",
  "Move existing small icons into the shared icon API.",
  "Add the first hand-curated set of 40–60 icons.",
  "Build an icons docs page with search, categories, previews, and copyable imports.",
  "Add an SVG normalization script for future batches.",
  "Scale the library into a few hundred consistent icons.",
] as const;

export default function IconsPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="icons" />

      <div className="docs-main">
        <Container size="lg">
          <Section id="overview" surface="page" spacing="lg">
            <Stack gap="lg">
              <Stack gap="md">
                <Cluster gap="sm">
                  <Badge variant="success" size="xs">Foundation live</Badge>
                  <Badge variant="neutral" size="xs">Expanded library coming soon</Badge>
                </Cluster>

                <Heading level={1} size="3xl">
                  Icons
                </Heading>

                <Text tone="secondary" size="lg">
                  Catholic Commons Icons is a new SVG React icon package for interface controls,
                  Catholic symbols, liturgy, documents, parish websites, and Catholic data infrastructure.
                </Text>
              </Stack>

              <Card padding="lg" border="subtle" surface="raised">
                <Stack gap="sm">
                  <Heading level={2} size="md">
                    Package goal
                  </Heading>
                  <Text tone="secondary">
                    Build a few hundred consistent SVG icons that can be imported as React
                    components, styled with currentColor, and used across Catholic Commons UI
                    without hardcoded colors or one-off SVG handling.
                  </Text>
                </Stack>
              </Card>
            </Stack>
          </Section>

          <Section id="live-icons" surface="page" spacing="lg">
            <Stack gap="md">
              <Heading level={2} size="xl">
                Live foundation icons
              </Heading>

              <Text tone="secondary">
                The first icon package foundation is live. These icons already use the shared
                24×24 SVG API and can be imported from the package.
              </Text>

              <div className="docs-icon-preview-grid">
                {liveIcons.map(({ name, category, Icon }) => (
                  <Card key={name} padding="md" border="subtle" surface="raised">
                    <Stack gap="sm">
                      <div className="docs-icon-preview">
                        <Icon size="lg" title={name} />
                      </div>
                      <Stack gap="xs">
                        <Heading level={3} size="sm">
                          {name}
                        </Heading>
                        <Text tone="muted" size="xs">
                          {category}
                        </Text>
                      </Stack>
                    </Stack>
                  </Card>
                ))}
              </div>

              <pre className="docs-code-block"><code>{`import { CrossIcon, ChaliceIcon, SearchIcon } from "@catholiccommons/icons";`}</code></pre>
            </Stack>
          </Section>

          <Section id="package-plan" surface="page" spacing="lg">
            <Stack gap="md">
              <Heading level={2} size="xl">
                Icon package plan
              </Heading>

              <Text tone="secondary">
                Icons live in a dedicated package so users can install them independently
                and import only the symbols they need.
              </Text>

              <pre className="docs-code-block"><code>{`packages/icons/
  package.json
  src/
    index.ts
    icon.tsx
    types.ts
    interface/
    catholic/
    liturgy/
    documents/
    parish/
    metadata.ts`}</code></pre>
            </Stack>
          </Section>

          <Section id="categories" surface="page" spacing="lg">
            <Stack gap="md">
              <Heading level={2} size="xl">
                Icon categories
              </Heading>

              <div className="docs-icon-category-grid">
                {iconCategories.map((category) => (
                  <Card key={category.title} padding="md" border="subtle" surface="raised">
                    <Stack gap="xs">
                      <Heading level={3} size="sm">
                        {category.title}
                      </Heading>
                      <Text tone="secondary" size="sm">
                        {category.examples}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </div>
            </Stack>
          </Section>

          <Section id="svg-rules" surface="page" spacing="lg">
            <Stack gap="md">
              <Heading level={2} size="xl">
                SVG rules
              </Heading>

              <ul className="docs-plain-list">
                <li>Use a 24×24 viewBox.</li>
                <li>Use currentColor for stroke and fill.</li>
                <li>Avoid hardcoded colors.</li>
                <li>Use consistent stroke width, linecaps, and joins.</li>
                <li>Expose size and title props through a shared icon API.</li>
                <li>Keep source SVGs normalized before converting to React components.</li>
              </ul>
            </Stack>
          </Section>

          <Section id="build-phases" surface="page" spacing="lg">
            <Stack gap="md">
              <Heading level={2} size="xl">
                Build phases
              </Heading>

              <ol className="docs-plain-list">
                {buildPhases.map((phase) => (
                  <li key={phase}>{phase}</li>
                ))}
              </ol>
            </Stack>
          </Section>
        </Container>
      </div>
    </main>
  );
}

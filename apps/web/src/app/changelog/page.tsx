import { CCUISidebar } from "../components/ccui-sidebar";
import { DocsFloatingSearch } from "../components/docs-floating-search";
import {
  Badge,
  Card,
  Container,
  Heading,
  Section,
  Stack,
  Text,
} from "../../../../../packages/primitives/src";

const unreleasedChanges = [
  "Simplified public repository documentation.",
  "Renamed the repository to sodalitasforma/ccui.",
  "Updated homepage positioning copy and repository links.",
  "Replaced Saint Anselm demo references with Saint Peter.",
  "Refined mobile viewport, iPhone safe-area, docs hero, and dropdown behavior.",
] as const;

const initialAdditions = [
  "Initial Catholic Commons UI monorepo.",
  "Documentation app.",
  "Design tokens package.",
  "Primitive components package.",
  "Catholic components package.",
  "Icons package.",
  "Component gallery.",
  "Colors, typography, icons, docs, and templates routes.",
  "Verification scripts for icons, Catholic package exports, theme tokens, docs search anchors, CSS contracts, lint, typecheck, build, and audit.",
  "Mobile audit tooling.",
] as const;

export default function ChangelogPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="changelog" />
      <div className="docs-main">
        <DocsFloatingSearch />

        <Section id="overview" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Changelog
                </Heading>
                <Text size="lg" tone="secondary" className="docs-lede">
                  Release notes for Catholic Commons UI. The root changelog tracks semver releases; this page presents the same changes in a readable documentation format.
                </Text>
              </Stack>
            </Stack>
          </Container>
        </Section>

        <Section id="unreleased" surface="page" spacing="md">
          <Container size="lg">
            <Card padding="lg" border="subtle" surface="raised">
              <Stack gap="md">
                <Stack gap="xs">
                  <Badge variant="gold">Unreleased</Badge>
                  <Heading level={2} size="2xl">
                    Current development
                  </Heading>
                  <Text tone="secondary">
                    Changes merged to main that have not yet been assigned to a tagged release.
                  </Text>
                </Stack>

                <Stack gap="xs">
                  {unreleasedChanges.map((item) => (
                    <Text key={item} as="p">
                      • {item}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            </Card>
          </Container>
        </Section>

        <Section id="v0-0-1" surface="page" spacing="md">
          <Container size="lg">
            <Card padding="lg" border="subtle" surface="raised">
              <Stack gap="md">
                <Stack gap="xs">
                  <Badge variant="neutral">0.0.1</Badge>
                  <Heading level={2} size="2xl">
                    Initial public baseline
                  </Heading>
                  <Text tone="secondary">
                    The first tracked baseline for the Catholic Commons UI repository.
                  </Text>
                </Stack>

                <Stack gap="xs">
                  {initialAdditions.map((item) => (
                    <Text key={item} as="p">
                      • {item}
                    </Text>
                  ))}
                </Stack>

                <Stack gap="xs">
                  <Heading level={3} size="lg">
                    Changed
                  </Heading>
                  <Text as="p">
                    • Moved from the original project naming toward Catholic Commons UI / CCUI.
                  </Text>
                  <Text as="p">
                    • Expanded the system from early component inventory into tokens, primitives, Catholic components, icons, docs, and package boundaries.
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Container>
        </Section>

        <Section id="release-workflow" surface="page" spacing="md">
          <Container size="lg">
            <Card padding="lg" border="subtle" surface="raised">
              <Stack gap="md">
                <Stack gap="xs">
                  <Heading level={2} size="2xl">
                    Release workflow
                  </Heading>
                  <Text tone="secondary">
                    Catholic Commons UI uses semantic versioning.
                  </Text>
                </Stack>

                <Stack gap="xs">
                  <Text as="p">
                    <strong>Major</strong> releases are reserved for stable public API changes and breaking changes.
                  </Text>
                  <Text as="p">
                    <strong>Minor</strong> releases add components, primitives, documentation surfaces, package capabilities, templates, or CLI features.
                  </Text>
                  <Text as="p">
                    <strong>Patch</strong> releases fix bugs, improve documentation, polish behavior, or make non-breaking refinements.
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </Container>
        </Section>
      </div>
    </main>
  );
}

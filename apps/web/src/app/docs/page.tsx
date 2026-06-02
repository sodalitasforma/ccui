import { CCUISidebar } from "../components/ccui-sidebar";

import {
  Button,
  Card,
  Cluster,
  Container,
  Grid,
  Heading,
  Section,
  Stack,
  Text,
  ArrowRightIcon,
} from "../../../../../packages/primitives/src";

import {
  InstitutionalFooter,
} from "../../../../../packages/catholic/src";


export default function DocsPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="docs" />

      <div className="docs-main">
        <Section id="overview" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Documentation
                </Heading>
                <Text size="lg" tone="secondary" className="docs-lede">
                  Learn how Catholic Commons UI is organized, how to use its tokens and components,
                  and how Catholic-specific interfaces should be composed.
                </Text>
              </Stack>

              <Cluster gap="sm">
                <Button href="/components-gallery" iconAfter={<ArrowRightIcon size="xs" />}>
                  Browse components
                </Button>
                <Button href="/templates" variant="secondary">
                  View templates
                </Button>
              </Cluster>
            </Stack>
          </Container>
        </Section>


        <Section id="getting-started" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="md">
              <Heading level={2} size="2xl">Getting started</Heading>
              <Text tone="secondary">
                Catholic Commons UI is organized as a cascade: tokens define the design language,
                primitives consume those tokens, Catholic components compose primitives,
                and templates show complete institutional use cases.
              </Text>
              <Card padding="lg" border="subtle" className="docs-preview">
                <pre className="docs-pre"><code>{`import { Button, Card, Stack } from "@ccui/primitives";
import { MassScheduleBlock, ChurchDocumentCard } from "@ccui/catholic";`}</code></pre>
              </Card>
            </Stack>
          </Container>
        </Section>

        <Section id="foundations" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="md">
              <Heading level={2} size="2xl">Foundations</Heading>
              <Text tone="secondary">
                Foundations include color, type, spacing, surfaces, borders, and liturgical color.
                App pages should choose existing semantic tokens rather than introducing local colors.
              </Text>
            </Stack>
          </Container>
        </Section>

        <Section id="component-usage" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="md">
              <Heading level={2} size="2xl">Component usage</Heading>
              <Text tone="secondary">
                Use primitives for general interface structure. Use Catholic components when the
                interface carries Catholic meaning: Mass times, liturgical days, Church documents,
                parish giving, safeguarding, directories, or Catholic data infrastructure.
              </Text>
            </Stack>
          </Container>
        </Section>

        <Section id="catholic-design-principles" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="md">
              <Heading level={2} size="2xl">Catholic design principles</Heading>
              <Text tone="secondary">
                Catholic interfaces should make worship, authority, source, place, office,
                sacrament, and public trust legible. Catholic Commons UI exists to make that structure reusable.
              </Text>
            </Stack>
          </Container>
        </Section>

        <Section id="accessibility" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="md">
              <Heading level={2} size="2xl">Accessibility</Heading>
              <Text tone="secondary">
                Public Catholic information must be readable, navigable, source-aware, and accessible
                to parishioners, visitors, clergy, staff, and researchers.
              </Text>
            </Stack>
          </Container>
        </Section>

        <Section id="contributing" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="md">
              <Heading level={2} size="2xl">Contributing</Heading>
              <Text tone="secondary">
                New components should preserve the cascade: no local colors, no hard-coded visual
                decisions, and no domain-specific props leaking into DOM elements.
              </Text>
            </Stack>
          </Container>
        </Section>

        <InstitutionalFooter
          title="Catholic Commons UI Docs"
          description="Documentation for the Catholic Commons UI Catholic design system."
          links={[
            { label: "Components", href: "/components-gallery" },
            { label: "Templates", href: "/templates" },
            { label: "Home", href: "/" },
          ]}
        />
      </div>
    </main>
  );
}

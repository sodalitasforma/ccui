import { CCUISidebar } from "../components/ccui-sidebar";

import {
  Badge,
  Button,
  Cluster,
  Container,
  Heading,
  Section,
  Stack,
  Text,
  ArrowRightIcon,
} from "../../../../../packages/primitives/src";

export default function TypographyPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="typography" />

      <div className="docs-main">
        <Section id="overview" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
              <Cluster gap="sm">
                <Badge variant="gold">Coming soon</Badge>
              </Cluster>

              <Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Typography
                </Heading>

                <Text size="lg" tone="secondary" className="docs-lede">
                  Catholic Commons UI typography will define Catholic-native type hierarchy,
                  display voice, interface text, document rhythm, citations,
                  multilingual support, and future downloadable type assets.
                </Text>
              </Stack>

              <Cluster gap="sm">
                <Button href="/components-gallery#primitive-typography" iconAfter={<ArrowRightIcon size="xs" />}>
                  View typography primitives
                </Button>
                <Button href="/components-gallery" variant="secondary">
                  Browse components
                </Button>
              </Cluster>
            </Stack>
          </Container>
        </Section>
      </div>
    </main>
  );
}

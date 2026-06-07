import {
  Badge,
  Container,
  Heading,
  Section,
  Stack,
  Text,
} from "../../../../../packages/primitives/src";

import { CCUISidebar } from "../components/ccui-sidebar";
import { DocsFloatingSearch } from "../components/docs-floating-search";

export default function TemplatesPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="templates" />
      <DocsFloatingSearch />

      <div className="docs-main">
        <Section id="overview" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
              <Badge variant="gold">Coming soon</Badge>

              <Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Templates
                </Heading>
                <Text size="lg" tone="secondary" className="docs-lede">
                  Composed Catholic page patterns will live here after the component registry
                  and documentation structure are settled.
                </Text>
              </Stack>
            </Stack>
          </Container>
        </Section>
      </div>
    </main>
  );
}

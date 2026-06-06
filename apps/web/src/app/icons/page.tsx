import { CCUISidebar } from "../components/ccui-sidebar";
import {
  Container,
  Heading,
  Section,
  Stack,
  Text,
} from "../../../../../packages/primitives/src";
import { IconsGallery } from "./icons-gallery";

export default function IconsPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="icons" />

      <div className="docs-main">
        <Container size="lg">
          <Section id="overview" surface="page" spacing="lg">
            <Stack gap="md">
              <Heading level={1} size="4xl" className="docs-gallery-title">
                Icons
              </Heading>

              <Text tone="secondary" size="lg" className="docs-gallery-lede">
                Search, preview, and copy imports for Catholic Commons Icons.
              </Text>
            </Stack>
          </Section>

          <Section id="live-icons" surface="page" spacing="lg">
            <IconsGallery />
          </Section>
        </Container>
      </div>
    </main>
  );
}

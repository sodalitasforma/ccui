import { CCUISidebar } from "../components/ccui-sidebar";
import {
  Badge,
  Button,
  Card,
  Cluster,
  Container,
  Heading,
  Link,
  Section,
  Stack,
  Text,
  ArrowRightIcon,
} from "../../../../../packages/primitives/src";

const setupOptions = [
  {
    title: "Use packages",
    description: "Install the package layers directly. Recommended today.",
    badge: null,
  },
  {
    title: "Use the CLI",
    description: "Initialize a project and add components by name.",
    badge: "Coming soon",
  },
  {
    title: "Existing Projects",
    description: "Add CCUI to an app you already created.",
    badge: null,
  },
] as const;

const frameworks = [
  "Next.js",
  "Vite",
  "Astro",
  "React Router",
  "TanStack Start",
  "React Manual",
] as const;

export default function DocsPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="docs" />

      <div className="docs-main docs-main--install">
        <Container size="lg">
          <div className="docs-install-shell">
            <article className="docs-install-article">
              <Section id="overview" surface="page" spacing="lg">
                <Stack gap="lg">
                  <Stack gap="sm">
                    <Heading level={1} size="3xl" className="docs-install-title">
                      Installation
                    </Heading>

                    <Cluster gap="sm" className="docs-install-prev-next">
                      <Link href="/components-gallery">Previous</Link>
                      <Link href="/docs#use-packages">Next</Link>
                    </Cluster>

                    <Text tone="secondary" className="docs-install-lede">
                      How to install Catholic Commons UI and structure your app.
                    </Text>
                  </Stack>

                  <div className="docs-install-recommendation">
                    <Text as="p">
                      <strong>Recommended for new projects:</strong> use the CCUI packages directly today.
                      CLI and registry setup are coming soon.
                    </Text>
                  </div>

                  <Text as="p" className="docs-install-prompt">
                    Choose the setup that matches your starting point.
                  </Text>

                  <div className="docs-install-options">
                    {setupOptions.map((option) => (
                      <div key={option.title} className="docs-install-option">
                        <Cluster justify="between" align="start" gap="sm">
                          <Heading level={2} size="sm" className="docs-install-option__title">
                            {option.title}
                          </Heading>
                          {option.badge ? (
                            <Badge variant="neutral" size="xs">
                              {option.badge}
                            </Badge>
                          ) : null}
                        </Cluster>
                        <Text as="p" tone="secondary" size="sm">
                          {option.description}
                        </Text>
                      </div>
                    ))}
                  </div>
                </Stack>
              </Section>

              <Section id="quick-start" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Use packages
                    </Heading>
                    <Text tone="secondary">
                      Install the tokens, primitives, and Catholic component layer.
                    </Text>
                  </Stack>

                  <pre className="docs-install-code"><code>{`pnpm add @ccui/tokens @ccui/primitives @ccui/catholic`}</code></pre>
                </Stack>
              </Section>

              <Section id="import-styles" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Import styles
                    </Heading>
                    <Text tone="secondary">
                      Add the styles once in your app entrypoint or global stylesheet.
                    </Text>
                  </Stack>

                  <pre className="docs-install-code"><code>{`import "@ccui/tokens/css-vars.css";
import "@ccui/primitives/primitives.css";
import "@ccui/catholic/catholic.css";`}</code></pre>
                </Stack>
              </Section>

              <Section id="use-components" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Use components
                    </Heading>
                    <Text tone="secondary">
                      Import only the layer you need.
                    </Text>
                  </Stack>

                  <pre className="docs-install-code"><code>{`import { Button } from "@ccui/primitives";
import { MassScheduleBlock } from "@ccui/catholic";

export function ParishPage() {
  return (
    <MassScheduleBlock
      title="Mass Schedule"
      subtitle="Regular parish Mass times."
      days={[]}
    />
  );
}`}</code></pre>
                </Stack>
              </Section>

              <Section id="use-the-cli" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Cluster gap="sm" align="center">
                      <Heading level={2} size="xl" className="docs-install-section-title">
                        Use the CLI
                      </Heading>
                      <Badge variant="neutral" size="xs">Coming soon</Badge>
                    </Cluster>

                    <Text tone="secondary">
                      The planned CLI will initialize a project and add components by name.
                    </Text>
                  </Stack>

                  <pre className="docs-install-code docs-install-code--muted"><code>{`pnpm dlx ccui@latest init
pnpm dlx ccui@latest add mass-schedule-block
pnpm dlx ccui@latest add institutional-header`}</code></pre>
                </Stack>
              </Section>

              <Section id="existing-projects" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Existing Projects
                    </Heading>
                    <Text tone="secondary">
                      Add the packages, import the styles once, then replace one interface surface
                      at a time with CCUI components.
                    </Text>
                  </Stack>

                  <div className="docs-install-note">
                    <Text as="p">
                      Keep the cascade intact: tokens → primitives → Catholic components → pages.
                    </Text>
                  </div>
                </Stack>
              </Section>

              <Section id="frameworks" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Frameworks
                    </Heading>
                    <Text tone="secondary">
                      Framework-specific guides are coming soon.
                    </Text>
                  </Stack>

                  <div className="docs-framework-list">
                    {frameworks.map((framework) => (
                      <div key={framework} className="docs-framework-item">
                        <span>{framework}</span>
                        <Badge variant="neutral" size="xs">Soon</Badge>
                      </div>
                    ))}
                  </div>
                </Stack>
              </Section>

              <div className="docs-install-footer-nav">
                <Link href="/components-gallery">Introduction</Link>
                <Button href="/components-gallery" size="sm" iconAfter={<ArrowRightIcon size="xs" />}>
                  Components
                </Button>
              </div>
            </article>
          </div>
        </Container>
      </div>
    </main>
  );
}

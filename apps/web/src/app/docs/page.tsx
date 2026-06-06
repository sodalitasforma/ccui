import { CCUISidebar } from "../components/ccui-sidebar";
import {
  Badge,
  Cluster,
  Container,
  Heading,
  Link,
  Section,
  Stack,
  Text,
} from "../../../../../packages/primitives/src";

const setupOptions = [
  {
    title: "Use the CLI",
    description: "Initialize config and add component wrappers from the terminal.",
    href: "/docs#use-the-cli",
    badge: "Recommended",
  },
  {
    title: "Existing Project",
    description: "Add Catholic Commons UI to an app you already created.",
    href: "/docs#existing-project",
    badge: null,
  },
  {
    title: "Use packages",
    description: "Install the package layers directly for manual setup.",
    href: "/docs#use-packages",
    badge: null,
  },
] as const;

const frameworks = [
  { name: "Next.js", href: "/docs#next-js" },
  { name: "Vite", href: "/docs#vite" },
  { name: "Astro", href: "/docs#astro" },
  { name: "React Router", href: "/docs#react-router" },
  { name: "TanStack Start", href: "/docs#tanstack-start" },
  { name: "React Manual", href: "/docs#react-manual" },
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
                      <Link href="/docs#components-json">Next</Link>
                    </Cluster>

                    <Text tone="secondary" className="docs-install-lede">
                      How to install dependencies and structure your app.
                    </Text>
                  </Stack>

                  <div className="docs-install-recommendation">
                    <Text as="p">
                      <strong>Recommended for new projects:</strong> use the Catholic Commons CLI
                      to initialize your config and add components from the terminal.
                    </Text>
                  </div>

                  <Text as="p" className="docs-install-prompt">
                    Choose the setup that matches your starting point.
                  </Text>

                  <div className="docs-install-options">
                    {setupOptions.map((option) => (
                      <Link key={option.title} href={option.href} className="docs-install-option">
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
                      </Link>
                    ))}
                  </div>
                </Stack>
              </Section>

              <Section id="use-the-cli" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Use the CLI
                    </Heading>
                    <Text tone="secondary">
                      Initialize Catholic Commons UI in an existing React project and add component wrappers.
                    </Text>
                  </Stack>

                  <pre className="docs-install-code"><code>{`pnpm dlx catholiccommons init
pnpm dlx catholiccommons add mass-schedule-block`}</code></pre>

                  <Text tone="secondary">
                    To see available components, run <code>pnpm dlx catholiccommons list</code>.
                  </Text>
                </Stack>
              </Section>

              <Section id="existing-project" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Existing Project
                    </Heading>
                    <Text tone="secondary">
                      Add Catholic Commons UI to an app you already created.
                    </Text>
                  </Stack>

                  <pre className="docs-install-code"><code>{`pnpm add @catholiccommons/tokens @catholiccommons/primitives @catholiccommons/catholic`}</code></pre>

                  <pre className="docs-install-code"><code>{`import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";`}</code></pre>
                </Stack>
              </Section>

              <Section id="frameworks" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Choose Your Framework
                    </Heading>
                    <Text tone="secondary">
                      Pick the framework closest to your app and run the CLI from your project root.
                    </Text>
                  </Stack>

                  <div className="docs-framework-list">
                    {frameworks.map((framework) => (
                      <Link key={framework.name} href={framework.href} className="docs-framework-item">
                        <span>{framework.name}</span>
                        <Badge variant="neutral" size="xs">Guide</Badge>
                      </Link>
                    ))}
                  </div>
                </Stack>
              </Section>

              <Section id="components-json" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      components.json
                    </Heading>
                    <Text tone="secondary">
                      The init command creates a small config file for project paths and defaults.
                    </Text>
                  </Stack>

                  <pre className="docs-install-code"><code>{`{
  "$schema": "https://catholiccommonsui.org/schema.json",
  "style": "default",
  "typescript": true,
  "tsx": true,
  "css": "app/globals.css",
  "aliases": {
    "components": "@/components",
    "lib": "@/lib"
  }
}`}</code></pre>
                </Stack>
              </Section>

              <Section id="package-imports" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Package Imports
                    </Heading>
                    <Text tone="secondary">
                      Import only the layer you need.
                    </Text>
                  </Stack>

                  <pre className="docs-install-code"><code>{`import { Button } from "@catholiccommons/primitives";
import { MassScheduleBlock } from "@catholiccommons/catholic";

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

              <Section id="next-js" surface="page" spacing="lg">
                <Stack gap="sm">
                  <Heading level={2} size="xl" className="docs-install-section-title">
                    Next.js
                  </Heading>
                  <Text tone="secondary">
                    Run the CLI from your Next.js app root, then import the Catholic Commons styles in
                    your global stylesheet or app entrypoint.
                  </Text>
                </Stack>
              </Section>

              <Section id="vite" surface="page" spacing="lg">
                <Stack gap="sm">
                  <Heading level={2} size="xl" className="docs-install-section-title">
                    Vite
                  </Heading>
                  <Text tone="secondary">
                    Run the CLI from your Vite project root, then import the styles in your main app
                    entrypoint.
                  </Text>
                </Stack>
              </Section>

              <Section id="astro" surface="page" spacing="lg">
                <Stack gap="sm">
                  <Heading level={2} size="xl" className="docs-install-section-title">
                    Astro
                  </Heading>
                  <Text tone="secondary">
                    Use Catholic Commons UI in React islands or React-enabled Astro projects.
                  </Text>
                </Stack>
              </Section>

              <Section id="react-router" surface="page" spacing="lg">
                <Stack gap="sm">
                  <Heading level={2} size="xl" className="docs-install-section-title">
                    React Router
                  </Heading>
                  <Text tone="secondary">
                    Run the CLI from your React Router app and import the global styles once.
                  </Text>
                </Stack>
              </Section>

              <Section id="tanstack-start" surface="page" spacing="lg">
                <Stack gap="sm">
                  <Heading level={2} size="xl" className="docs-install-section-title">
                    TanStack Start
                  </Heading>
                  <Text tone="secondary">
                    Run the CLI from your TanStack Start app root and keep generated wrappers in your
                    app components directory.
                  </Text>
                </Stack>
              </Section>

              <Section id="react-manual" surface="page" spacing="lg">
                <Stack gap="sm">
                  <Heading level={2} size="xl" className="docs-install-section-title">
                    React Manual
                  </Heading>
                  <Text tone="secondary">
                    Install the packages directly, import the styles once, and import components from
                    the published package layers.
                  </Text>
                </Stack>
              </Section>
            </article>
          </div>
        </Container>
      </div>
    </main>
  );
}

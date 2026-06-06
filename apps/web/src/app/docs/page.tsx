import { CCUISidebar } from "../components/ccui-sidebar";
import { DocsPageActions } from "../components/docs-page-actions";
import { DocsCodeBlock } from "../components/docs-code-block";
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
    href: "/docs#package-imports",
    badge: null,
  },
] as const;



const docsPageUrl = "https://catholiccommonsui.com/docs";


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
                    <Cluster gap="sm" align="center" justify="between" className="docs-page-titlebar">
                      <Heading level={1} size="3xl" className="docs-install-title">
                        Installation
                      </Heading>
                      <DocsPageActions url={docsPageUrl} />
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

                  <DocsCodeBlock
                    language="bash"
                    code={`pnpm dlx catholiccommons init
pnpm dlx catholiccommons add mass-schedule-block`}
                    copyable
                  />

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

                  <DocsCodeBlock
                    language="bash"
                    code={`pnpm add @catholiccommons/tokens @catholiccommons/primitives @catholiccommons/catholic`}
                    copyable
                  />

                  <DocsCodeBlock
                    language="tsx"
                    code={`import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";`}
                    copyable
                  />
                </Stack>
              </Section>

              <Section id="theme-application" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Apply a theme
                    </Heading>
                    <Text tone="secondary">
                      Catholic Commons UI themes are applied with a <code>data-theme</code> attribute.
                      Put the attribute on your app root, document element, or any subtree that should
                      inherit the theme.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="tsx"
                    code={`// app/layout.tsx
import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}`}
                    copyable
                  />

                  <Text tone="secondary">
                    For dark mode, set the same attribute to <code>dark</code>. The tokens, primitives,
                    and Catholic components inherit from that root.
                  </Text>

                  <DocsCodeBlock
                    language="tsx"
                    code={`<html lang="en" data-theme="dark">
  <body>{children}</body>
</html>`}
                    copyable
                  />

                  <Text tone="secondary">
                    You can also theme only part of a page. This is useful for previews, dashboards,
                    dark panels, or parish sites with a dark hero area.
                  </Text>

                  <DocsCodeBlock
                    language="tsx"
                    code={`<section data-theme="dark">
  <MassScheduleBlock
    title="Mass schedule"
    days={[
      {
        day: "Sunday",
        times: [
          { time: "8:00 AM", label: "Low Mass" },
          { time: "10:30 AM", label: "Sung Mass" },
        ],
      },
    ]}
  />
</section>`}
                    copyable
                  />

                  <Text tone="secondary">
                    Use <code>/colors#theme-specimens</code>, <code>/colors#primitive-theme-specimens</code>,
                    and <code>/colors#catholic-theme-specimens</code> to verify contrast before shipping.
                  </Text>
                </Stack>
              </Section>

              <Section id="next-js" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Next.js
                    </Heading>
                    <Text tone="secondary">
                      Use this for full parish websites, docs sites, dashboards, or apps that need routing,
                      layouts, and production deployment conventions.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="bash"
                    code={`pnpm dlx catholiccommons init
pnpm dlx catholiccommons add mass-schedule-block`}
                    copyable
                  />

                  <Text tone="secondary">
                    Import the styles once in your app root, usually in <code>app/layout.tsx</code>
                    or wherever your global stylesheet is loaded.
                  </Text>

                  <DocsCodeBlock
                    language="tsx"
                    code={`import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";`}
                    copyable
                  />

                  <Text tone="secondary">
                    Then use Catholic Commons components in pages, layouts, or shared app components.
                  </Text>
                </Stack>
              </Section>

              <Section id="vite" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Vite
                    </Heading>
                    <Text tone="secondary">
                      Use this for lightweight React apps, prototypes, internal tools, or fast static apps
                      where you control the React entrypoint directly.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="bash"
                    code={`pnpm dlx catholiccommons init
pnpm dlx catholiccommons add mass-schedule-block`}
                    copyable
                  />

                  <Text tone="secondary">
                    Import the styles once in <code>src/main.tsx</code>, <code>src/App.tsx</code>,
                    or your main stylesheet.
                  </Text>

                  <DocsCodeBlock
                    language="tsx"
                    code={`import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";`}
                    copyable
                  />

                  <Text tone="secondary">
                    Vite is closest to plain React: import styles once, then import components anywhere
                    in your React tree.
                  </Text>
                </Stack>
              </Section>

              <Section id="astro" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Astro
                    </Heading>
                    <Text tone="secondary">
                      Use this for content-heavy Catholic sites: parish websites, ministry pages, archives,
                      landing pages, documentation, and mostly-static pages with a few React islands.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="tsx"
                    code={`pnpm astro add react
pnpm dlx catholiccommons init
pnpm dlx catholiccommons add mass-schedule-block`}
                    copyable
                  />

                  <Text tone="secondary">
                    Astro needs React enabled before React components can be used. Import Catholic Commons
                    styles once in a global layout, global stylesheet, or React entry used by your islands.
                  </Text>

                  <DocsCodeBlock
                    language="tsx"
                    code={`import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";`}
                    copyable
                  />

                  <Text tone="secondary">
                    Think of Astro as mostly HTML pages, with Catholic Commons React components placed
                    where a page needs structured UI.
                  </Text>
                </Stack>
              </Section>

              <Section id="react-router" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      React Router
                    </Heading>
                    <Text tone="secondary">
                      Use this when your React app is organized around URL routes and route modules.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="bash"
                    code={`pnpm dlx catholiccommons init
pnpm dlx catholiccommons add mass-schedule-block`}
                    copyable
                  />

                  <Text tone="secondary">
                    Import styles once in your root route, root layout, client entry, or global stylesheet.
                  </Text>

                  <DocsCodeBlock
                    language="tsx"
                    code={`import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";`}
                    copyable
                  />

                  <Text tone="secondary">
                    Then use Catholic Commons components inside route modules, such as a parish route,
                    events route, or document archive route.
                  </Text>
                </Stack>
              </Section>

              <Section id="tanstack-start" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      TanStack Start
                    </Heading>
                    <Text tone="secondary">
                      Use this for full-stack React apps built around TanStack Router, server rendering,
                      and server functions.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="bash"
                    code={`pnpm dlx catholiccommons init
pnpm dlx catholiccommons add mass-schedule-block`}
                    copyable
                  />

                  <Text tone="secondary">
                    Import styles once in your root client/app entry or global stylesheet.
                  </Text>

                  <DocsCodeBlock
                    language="tsx"
                    code={`import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";`}
                    copyable
                  />

                  <Text tone="secondary">
                    Then use Catholic Commons components inside route components or shared app components.
                  </Text>
                </Stack>
              </Section>

              <Section id="react-manual" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      React Manual
                    </Heading>
                    <Text tone="secondary">
                      Use this when you are not using a framework guide and want to wire the app yourself.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="bash"
                    code={`pnpm add @catholiccommons/tokens @catholiccommons/primitives @catholiccommons/catholic`}
                    copyable
                  />

                  <Text tone="secondary">
                    Import the styles once in your React entrypoint.
                  </Text>

                  <DocsCodeBlock
                    language="tsx"
                    code={`import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";`}
                    copyable
                  />

                  <Text tone="secondary">
                    Then import components directly from the published package layers.
                  </Text>

                  <DocsCodeBlock
                    language="tsx"
                    code={`import { Button } from "@catholiccommons/primitives";
import { MassScheduleBlock } from "@catholiccommons/catholic";`}
                    copyable
                  />
                </Stack>
              </Section>
            </article>
          </div>
        </Container>
      </div>
    </main>
  );
}

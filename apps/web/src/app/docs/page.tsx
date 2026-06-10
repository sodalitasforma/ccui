import { CCUISidebar } from "../components/ccui-sidebar";
import { DocsFloatingSearch } from "../components/docs-floating-search";
import { DocsPageActions } from "../components/docs-page-actions";
import { DocsCodeBlock } from "../components/docs-code-block";
import {
  Badge,
  Button,
  Cluster,
  Container,
  Heading,
  Link,
  Section,
  Stack,
  Text,
} from "@catholiccommons/primitives";

const setupOptions = [
  {
    title: "Use the package",
    description: "Install @catholiccommons/ui and import from one entrypoint.",
    href: "/docs#package-imports",
    badge: "Recommended",
  },
  {
    title: "Existing Project",
    description: "Add Catholic Commons UI to an app you already created.",
    href: "/docs#existing-project",
    badge: null,
  },
  {
    title: "Choose Your Framework",
    description: "Use the same imports, then place the stylesheet in the right app entrypoint.",
    href: "/docs#next-js",
    badge: null,
  },
] as const;

const docsPageUrl = "https://catholiccommonsui.com/docs";

const installCommand = `pnpm add @catholiccommons/ui`;

const styleImport = `import "@catholiccommons/ui/styles.css";`;

const componentImports = `import {
  Button,
  Card,
  Stack,
  MassScheduleBlock,
  ParishHero,
  SearchIcon,
} from "@catholiccommons/ui";`;

const parishExample = `export function ParishPage() {
  return (
    <Stack gap="lg">
      <ParishHero
        title="St. Example Parish"
        subtitle="A Catholic parish website built with Catholic Commons UI."
        primaryAction={{ label: "Mass times", href: "#mass" }}
      />

      <Card>
        <Stack gap="md">
          <Button>
            <SearchIcon size="sm" aria-hidden="true" />
            Search
          </Button>

          <MassScheduleBlock
            title="Mass Schedule"
            subtitle="Regular parish Mass times."
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
        </Stack>
      </Card>
    </Stack>
  );
}`;

export default function DocsPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="docs" />
      <div className="docs-main docs-main--install">
        <DocsFloatingSearch />

        <Section id="documentation" surface="page" spacing="lg" className="docs-documentation-hero">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Documentation
                </Heading>
                <Text size="lg" tone="secondary">
                  Install Catholic Commons UI, load the stylesheet, apply themes, and build
                  with primitives, Catholic components, and icons.
                </Text>
              </Stack>

              <Cluster gap="sm">
                <Button href="/components-gallery">
                  Browse components
                </Button>
                <Button href="/templates" variant="secondary">
                  View templates
                </Button>
              </Cluster>
            </Stack>
          </Container>
        </Section>

        <Container size="lg">
          <div className="docs-install-shell">
            <article className="docs-install-article">
              <Section id="overview" surface="page" spacing="lg">
                <Stack gap="lg">
                  <Stack gap="sm">
                    <Cluster gap="sm" align="center" justify="between" className="docs-page-titlebar">
                      <Heading level={2} size="3xl" className="docs-install-title">
                        Installation
                      </Heading>
                      <DocsPageActions url={docsPageUrl} />
                    </Cluster>

                    <Text tone="secondary" className="docs-install-lede">
                      Catholic Commons UI is installed through one umbrella package.
                      Install it once, import the stylesheet once, then import components from
                      the same package.
                    </Text>
                  </Stack>

                  <div className="docs-install-recommendation">
                    <Text as="p">
                      <strong>Recommended for new projects:</strong> use <code>@catholiccommons/ui</code>.
                      It gives your app one install command, one stylesheet import, and one
                      component import source.
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

              <Section id="package-imports" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Use the package
                    </Heading>
                    <Text tone="secondary">
                      Install the umbrella package.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="bash"
                    code={installCommand}
                    copyable
                  />
                </Stack>
              </Section>

              <Section id="import-styles" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Import styles
                    </Heading>
                    <Text tone="secondary">
                      Import the stylesheet once in your app root, client entrypoint, or global
                      stylesheet. It loads token variables, primitive styles, and Catholic component
                      styles.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="tsx"
                    code={styleImport}
                    copyable
                  />
                </Stack>
              </Section>

              <Section id="use-components" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Use components
                    </Heading>
                    <Text tone="secondary">
                      Import primitives, Catholic components, and icons from the umbrella package.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="tsx"
                    code={componentImports}
                    copyable
                  />
                </Stack>
              </Section>

              <Section id="example" surface="page" spacing="lg">
                <Stack gap="md">
                  <Stack gap="xs">
                    <Heading level={2} size="xl" className="docs-install-section-title">
                      Example
                    </Heading>
                    <Text tone="secondary">
                      After installing the package and importing the stylesheet, a parish page can
                      compose primitives, Catholic components, and icons from one import source.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="tsx"
                    code={parishExample}
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
                      Put the attribute on your document element, app root, or any subtree that should
                      inherit the theme.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="tsx"
                    code={`// app/layout.tsx
import "@catholiccommons/ui/styles.css";

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
                    For dark mode, set the same attribute to <code>dark</code>. Components inherit
                    token values from the nearest themed root.
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
  <MassScheduleBlock title="Mass schedule" days={[]} />
</section>`}
                    copyable
                  />

                  <Text tone="secondary">
                    Use <code>/colors#theme-specimens</code>, <code>/colors#primitive-theme-specimens</code>,
                    and <code>/colors#catholic-theme-specimens</code> to verify contrast before shipping.
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
                      Add the umbrella package, import the stylesheet once, then migrate one surface
                      at a time: a button group, parish hero, Mass schedule, document card, archive
                      view, or media card.
                    </Text>
                  </Stack>

                  <DocsCodeBlock
                    language="bash"
                    code={installCommand}
                    copyable
                  />

                  <Text tone="secondary">
                    Do not copy source files into your app unless you are intentionally forking the kit.
                    Package imports keep you on the maintained design system.
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

                  <DocsCodeBlock language="bash" code={installCommand} copyable />

                  <Text tone="secondary">
                    Import <code>@catholiccommons/ui/styles.css</code> in <code>app/layout.tsx</code>
                    or in the global stylesheet loaded by your app.
                  </Text>

                  <DocsCodeBlock language="tsx" code={styleImport} copyable />
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

                  <DocsCodeBlock language="bash" code={installCommand} copyable />

                  <Text tone="secondary">
                    Import <code>@catholiccommons/ui/styles.css</code> in <code>src/main.tsx</code>,
                    <code>src/App.tsx</code>, or your main stylesheet.
                  </Text>

                  <DocsCodeBlock language="tsx" code={styleImport} copyable />
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
                    language="bash"
                    code={`pnpm astro add react
pnpm add @catholiccommons/ui`}
                    copyable
                  />

                  <Text tone="secondary">
                    Astro needs React enabled before React components can be used. Import
                    <code>@catholiccommons/ui/styles.css</code> in a global layout, global stylesheet,
                    or React island entry.
                  </Text>

                  <DocsCodeBlock language="tsx" code={styleImport} copyable />
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

                  <DocsCodeBlock language="bash" code={installCommand} copyable />

                  <Text tone="secondary">
                    Import <code>@catholiccommons/ui/styles.css</code> in your root route, root layout,
                    client entry, or global stylesheet.
                  </Text>

                  <DocsCodeBlock language="tsx" code={styleImport} copyable />
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

                  <DocsCodeBlock language="bash" code={installCommand} copyable />

                  <Text tone="secondary">
                    Import <code>@catholiccommons/ui/styles.css</code> in your root client/app entry
                    or global stylesheet.
                  </Text>

                  <DocsCodeBlock language="tsx" code={styleImport} copyable />
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

                  <DocsCodeBlock language="bash" code={installCommand} copyable />

                  <Text tone="secondary">
                    Import the stylesheet once in your React entrypoint, then import components from
                    <code>@catholiccommons/ui</code>.
                  </Text>

                  <DocsCodeBlock language="tsx" code={styleImport} copyable />
                  <DocsCodeBlock language="tsx" code={componentImports} copyable />
                </Stack>
              </Section>
            </article>
          </div>
        </Container>
      </div>
    </main>
  );
}

import Image from "next/image";
import systemStats from "./system-stats.json";
import { docsSearchItems } from "./docs/search-index";

import {
  Button,
  Cluster,
  Container,
  DocSearch,
  Heading,
  Link,
  Section,
  Stack,
  Tag,
  Text,
  ArrowRightIcon,
} from "../../../../packages/primitives/src";

import {
  InstitutionalFooter,
} from "../../../../packages/catholic/src";

export default function Home() {
  return (
    <main className="home-shell">
      <header className="home-nav">
        <Cluster justify="between" align="center" gap="lg">
          <Cluster gap="lg" align="center">
            <Link href="/" className="home-logo" aria-label="Catholic Commons UI home">
              <Image
                  src="/ccui-logo.png"
                  alt=""
                  width={48}
                  height={48}
                  className="home-logo__image"
                  aria-hidden="true"
                />
              <span className="home-logo__copy">
                <span className="home-logo__wordmark">Catholic Commons UI</span>
                <span className="home-logo__version">v0.0.1</span>
              </span>
            </Link>
          </Cluster>

          <Cluster gap="md" align="center" className="home-nav-actions">
            <nav className="home-nav-links" aria-label="Primary navigation">
              <Link href="/docs">Docs</Link>
              <Link href="/components-gallery">Components</Link>
              <span className="home-nav-disabled" aria-disabled="true">Templates</span>
            </nav>

            <DocSearch label="Search documentation..." items={docsSearchItems} />

            <span className="home-nav-divider" aria-hidden="true" />

            <Link
              href="https://github.com"
              className="home-github-link"
              aria-label="Catholic Commons UI on GitHub"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                width="18"
                height="18"
                className="home-github-link__icon"
              >
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 7.71.4.08.55-.18.55-.39 0-.19-.01-.83-.01-1.5-2.01.37-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.16-.28-.15-.68-.52-.01-.53.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.21-3.64-.91-3.64-4.03 0-.89.31-1.62.82-2.19-.08-.2-.36-1.04.08-2.16 0 0 .67-.22 2.2.84A7.48 7.48 0 0 1 8 3.91c.68 0 1.36.09 2 .27 1.53-1.06 2.2-.84 2.2-.84.44 1.12.16 1.96.08 2.16.51.57.82 1.3.82 2.19 0 3.13-1.87 3.82-3.65 4.03.29.25.54.75.54 1.52 0 1.1-.01 1.98-.01 2.25 0 .21.15.47.55.39A8.07 8.07 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z"
                />
              </svg>
            </Link>

            <Link href="https://github.com" className="home-stars-link">
              0 stars
            </Link>

            <Button href="mailto:contact@example.com" size="sm">
              Contact
            </Button>
          </Cluster>
        </Cluster>
      </header>

      <Section surface="page" spacing="lg" className="home-hero">
        <Container size="lg">
          <Stack gap="lg" className="home-centered">
            <Button
              href="https://catholicdigitalcommons.org/about/manifesto"
              size="xs"
              variant="subtle"
              iconAfter={<ArrowRightIcon size="xs" />}
            >
              Read CDCF Manifesto
            </Button>

            <Stack gap="md" className="home-hero__copy">
              <Heading level={1} size="4xl" family="display">
                A Design System for the Digital Catholic Church
              </Heading>

              <Text size="lg" tone="secondary" className="home-hero__lede">
                Free, open-source components for those called to mend the nets of the Church.
              </Text>
            </Stack>

            <Cluster gap="sm" className="home-centered">
              <Tag variant="brown">{systemStats.components} components</Tag>
              <Tag variant="gold">{systemStats.cssTokenReferences} token references</Tag>
              <Tag variant="blue">{systemStats.docsExamples} live examples</Tag>
            </Cluster>

            <Cluster gap="sm" className="home-centered">
              <Button
                href="/components-gallery"
                iconAfter={<ArrowRightIcon size="xs" />}
              >
                Build your parish website
              </Button>
            </Cluster>
          </Stack>
        </Container>
      </Section>

      <InstitutionalFooter
        title="Catholic Commons UI"
        description="An open-source Catholic design system for parishes, Catholic institutions, magisterial documents, liturgical interfaces, and Catholic Digital Commons Foundation infrastructure."
      />
    </main>
  );
}

import { DocSearch } from "../../../../packages/primitives/src";
import { docsSearchItems } from "./docs/search-index";
import { ThemeTestToggle } from "./components/theme-test-toggle";
import Image from "next/image";
import systemStats from "./system-stats.json";

import {
  Button,
  Cluster,
  Container,
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
              <Link href="/components-gallery" className="home-nav-link-desktop">Components</Link>
            </nav>

            <div className="home-doc-search">
              <DocSearch
                items={docsSearchItems}
                label="Search documentation..."
              />
            </div>

            <Link href="https://github.com/sodalitasforma/ccui" className="home-stars-link" aria-label="GitHub stars">
              <svg className="home-stars-link__icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M8 0.2C3.6 0.2 0 3.8 0 8.2c0 3.5 2.3 6.5 5.5 7.6 0.4 0.1 0.5-0.2 0.5-0.4v-1.4c-2.2 0.5-2.7-1.1-2.7-1.1-0.4-0.9-0.9-1.1-0.9-1.1-0.7-0.5 0.1-0.5 0.1-0.5 0.8 0.1 1.2 0.8 1.2 0.8 0.7 1.2 1.9 0.9 2.3 0.7 0.1-0.5 0.3-0.9 0.5-1.1-1.8-0.2-3.6-0.9-3.6-3.9 0-0.9 0.3-1.6 0.8-2.1-0.1-0.2-0.4-1 0.1-2.1 0 0 0.7-0.2 2.2 0.8 0.6-0.2 1.3-0.3 2-0.3s1.4 0.1 2 0.3c1.5-1 2.2-0.8 2.2-0.8 0.4 1.1 0.2 1.9 0.1 2.1 0.5 0.6 0.8 1.3 0.8 2.1 0 3-1.8 3.7-3.6 3.9 0.3 0.3 0.6 0.8 0.6 1.6v2.4c0 0.2 0.1 0.5 0.6 0.4 3.2-1.1 5.5-4.1 5.5-7.6C16 3.8 12.4 0.2 8 0.2Z" />
              </svg>
              <span className="home-stars-link__count">0</span>
            </Link>

            <Button href="https://github.com/sodalitasforma/ccui/issues" size="sm">
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
                A UI kit for Catholic projects and digital services, informed by ecclesiastical websites, official Church documents, liturgical data, parish workflows, and Catholic institutional design patterns.
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
                <ThemeTestToggle />
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

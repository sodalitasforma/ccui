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
            </nav>

            <Link href="https://github.com/sodalitasforma/forma" className="home-stars-link" aria-label="GitHub stars">
              0
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

import { CCUISidebar } from "../components/ccui-sidebar";
import { DocsFloatingSearch } from "../components/docs-floating-search";
import { DocsCodeBlock } from "../components/docs-code-block";
import {
  Button,
  Card,
  Cluster,
  Container,
  Divider,
  Eyebrow,
  Grid,
  Heading,
  Panel,
  Section,
  Stack,
  Table,
  TableWrapper,
  TBody,
  TD,
  TH,
  THead,
  TR,
  Text,
  ArrowRightIcon,
} from "../../../../../packages/primitives/src";

function TypeSpecimenRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Stack gap="xs">
      <Eyebrow>{label}</Eyebrow>
      {children}
    </Stack>
  );
}

function TypographyBlock({
  title,
  description,
  children,
  code,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}) {
  return (
    <section className="docs-block docs-block--specimen">
      <Stack gap="sm">
        <Stack gap="xs">
          <Heading level={2} size="xl" family="interface">
            {title}
          </Heading>
          <Text tone="muted">{description}</Text>
        </Stack>

        <div className="docs-specimen">{children}</div>

        <details className="docs-code-disclosure">
          <summary className="docs-code-toggle-label">Show code</summary>
          <DocsCodeBlock code={code} variant="preview" copyable />
        </details>
      </Stack>
    </section>
  );
}

export default function TypographyPage() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="typography" />
      <DocsFloatingSearch />

      <div className="docs-main">
        <Section id="overview" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
<Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Typography
                </Heading>

                <Text size="lg" tone="secondary" className="docs-lede">
                  Catholic Commons UI follows the Vatican.va typographic pattern:
                  Cormorant Garamond carries public ecclesial identity and formal
                  display; Inter carries contemporary navigation, controls, and
                  administration; Garamond-family document text carries prayers,
                  citations, canonical passages, and source-backed reading.
                </Text>
              </Stack>

              <Cluster gap="sm">
                <Button href="/components-gallery" iconAfter={<ArrowRightIcon size="xs" />}>
                  Browse components
                </Button>
                <Button href="/docs" variant="secondary">
                  Read docs
                </Button>
              </Cluster>
            </Stack>
          </Container>
        </Section>

        <Section id="typefaces" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Typefaces
                </Heading>
                <Text tone="muted">
                  The Vatican.va redesign joins formal Catholic public identity to clear
                  contemporary access for institutional and magisterial material.
                  Catholic Commons UI makes that pattern reusable by assigning each
                  typeface a proper office: display, document, interface, inscription,
                  or machine-readable reference.
                </Text>
              </Stack>

              <Panel surface="raised" padding="lg">
                <Stack gap="lg">
                  <Grid columns="2" gap="md">
                    <Card padding="md" border="subtle">
                      <Stack gap="xs">
                        <Eyebrow>Display</Eyebrow>
                        <Heading family="display" size="2xl">
                          Cormorant Garamond
                        </Heading>
                        <Text tone="secondary">
                          The display face governs public identity: parish names,
                          page openings, feast heroes, institutional titles, and formal
                          moments where the system must speak with dignity before it
                          speaks with utility.
                        </Text>
                        <Text family="mono" size="xs" tone="muted">
                          --ccui-font-display
                        </Text>
                      </Stack>
                    </Card>

                    <Card padding="md" border="subtle">
                      <Stack gap="xs">
                        <Eyebrow>Document</Eyebrow>
                        <Heading family="document" size="lg" lineHeight="base">
                          EB Garamond
                        </Heading>
                        <Text family="document" size="lg" lineHeight="relaxed">
                          The document face governs source-backed reading: prayers,
                          citations, canonical passages, document excerpts, archival
                          records, and long-form ecclesial text.
                        </Text>
                        <Text family="mono" size="xs" tone="muted">
                          --ccui-font-document
                        </Text>
                      </Stack>
                    </Card>

                    <Card padding="md" border="subtle">
                      <Stack gap="xs">
                        <Eyebrow>Interface</Eyebrow>
                        <Heading family="interface" size="lg">
                          Inter / Source Sans 3
                        </Heading>
                        <Text tone="secondary">
                          The interface face governs administration: navigation, forms,
                          filters, buttons, tables, metadata, labels, and every place
                          where clarity outranks ceremony.
                        </Text>
                        <Text family="mono" size="xs" tone="muted">
                          --ccui-font-interface
                        </Text>
                      </Stack>
                    </Card>

                    <Card padding="md" border="subtle">
                      <Stack gap="xs">
                        <Eyebrow>Inscription</Eyebrow>
                        <Heading family="inscription" size="md">
                          Cinzel / Trajan Pro
                        </Heading>
                        <Text tone="secondary">
                          The inscriptional face governs short ceremonial marks:
                          archive labels, sacred headings, formal seals, and uppercase
                          fragments that recall carved Roman public lettering.
                        </Text>
                        <Text family="mono" size="xs" tone="muted">
                          --ccui-font-inscription
                        </Text>
                      </Stack>
                    </Card>

                    <Card padding="md" border="subtle">
                      <Stack gap="xs">
                        <Eyebrow>Mono</Eyebrow>
                        <Text family="mono" size="lg">
                          canonical:document:1234
                        </Text>
                        <Text tone="secondary">
                          The monospace face governs technical truth: canonical IDs,
                          API paths, dataset keys, source identifiers, version strings,
                          and machine-readable records.
                        </Text>
                        <Text family="mono" size="xs" tone="muted">
                          --ccui-font-mono
                        </Text>
                      </Stack>
                    </Card>

                    <Card padding="md" border="subtle">
                      <Stack gap="xs">
                        <Eyebrow>Loading status</Eyebrow>
                        <Heading family="interface" size="lg">
                          Tokens first
                        </Heading>
                        <Text tone="secondary">
                          The repo declares font-family tokens and fallbacks. It does
                          not yet ship project-owned font files. Font loading can later
                          be resolved through next/font, self-hosted woff2 files, or a
                          package-level font asset policy.
                        </Text>
                        <Text family="mono" size="xs" tone="muted">
                          packages/tokens/src/typography.json
                        </Text>
                      </Stack>
                    </Card>
                  </Grid>

                  <TableWrapper>
                    <Table>
                      <THead>
                        <TR>
                          <TH>Token</TH>
                          <TH>Typeface stack</TH>
                          <TH>Jurisdiction</TH>
                        </TR>
                      </THead>
                      <TBody>
                        <TR>
                          <TD>--ccui-font-display</TD>
                          <TD>Cormorant Garamond, EB Garamond, Georgia, Times New Roman, serif</TD>
                          <TD>Public identity and large formal openings.</TD>
                        </TR>
                        <TR>
                          <TD>--ccui-font-document</TD>
                          <TD>EB Garamond, Georgia, Times New Roman, serif</TD>
                          <TD>Source-backed reading, prayers, citations, and documents.</TD>
                        </TR>
                        <TR>
                          <TD>--ccui-font-interface</TD>
                          <TD>Inter, Source Sans 3, Tahoma, Verdana, Segoe UI, system-ui, sans-serif</TD>
                          <TD>Controls, navigation, forms, metadata, and administration.</TD>
                        </TR>
                        <TR>
                          <TD>--ccui-font-inscription</TD>
                          <TD>Cinzel, Trajan Pro, Charlemagne, Georgia, Times New Roman, serif</TD>
                          <TD>Short ceremonial labels and inscriptional fragments.</TD>
                        </TR>
                        <TR>
                          <TD>--ccui-font-mono</TD>
                          <TD>Lucida Console, Courier New, monospace</TD>
                          <TD>Technical identifiers and machine-readable records.</TD>
                        </TR>
                      </TBody>
                    </Table>
                  </TableWrapper>
                </Stack>
              </Panel>
            </Stack>
          </Container>
        </Section>

        <Section id="type-roles" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Type roles
                </Heading>
                <Text tone="muted">
                  Type is divided by role before size: display, interface, document,
                  inscription, and mono each solve a different problem.
                </Text>
              </Stack>

              <div className="docs-type-matrix" aria-label="Typography system summary">
                <div className="docs-type-matrix__row docs-type-matrix__row--head">
                  <Text as="p" className="docs-type-matrix__cell">Type role</Text>
                  <Text as="p" className="docs-type-matrix__cell">Use when</Text>
                  <Text as="p" className="docs-type-matrix__cell">Primitive</Text>
                </div>

                <div className="docs-type-matrix__row">
                  <div className="docs-type-matrix__voice">
                    <span className="docs-type-matrix__sample docs-type-matrix__sample--display">Aa</span>
                    <Text as="p" className="docs-type-matrix__name">Display</Text>
                  </div>
                  <Text tone="secondary">Public identity, page openings, feast heroes, parish titles.</Text>
                  <Text tone="muted">Heading family=&quot;display&quot;</Text>
                </div>

                <div className="docs-type-matrix__row">
                  <div className="docs-type-matrix__voice">
                    <span className="docs-type-matrix__sample docs-type-matrix__sample--interface">Aa</span>
                    <Text as="p" className="docs-type-matrix__name">Interface</Text>
                  </div>
                  <Text tone="secondary">Navigation, controls, tables, filters, labels, metadata.</Text>
                  <Text tone="muted">Heading family=&quot;interface&quot;, Text family=&quot;interface&quot;</Text>
                </div>

                <div className="docs-type-matrix__row">
                  <div className="docs-type-matrix__voice">
                    <span className="docs-type-matrix__sample docs-type-matrix__sample--document">Aa</span>
                    <Text as="p" className="docs-type-matrix__name">Document</Text>
                  </div>
                  <Text tone="secondary">Readable records, prayers, citations, notices, source-backed text.</Text>
                  <Text tone="muted">Text family=&quot;document&quot;</Text>
                </div>
              </div>

              <TypographyBlock
                title="Typeface roles"
                description="Distinct type families separate public identity, interface control, source-backed reading, ceremonial labels, and technical identifiers."
                code={`<Stack gap="md">
  <Heading family="display" size="2xl">Saint Peter Parish</Heading>
  <Heading family="interface" size="lg">Office directory</Heading>
  <Text family="document" size="lg" lineHeight="relaxed">
    The faithful have the right to receive source-backed information in a stable, readable form.
  </Text>
  <Text family="inscription" size="sm">Sacred archive</Text>
  <Text family="mono" size="sm">canonical:document:1234</Text>
</Stack>`}
              >
                <Stack gap="md">
                  <TypeSpecimenRow label="Display">
                    <Heading family="display" size="2xl">
                      Saint Peter Parish
                    </Heading>
                  </TypeSpecimenRow>

                  <TypeSpecimenRow label="Interface">
                    <Heading family="interface" size="lg">
                      Office directory
                    </Heading>
                  </TypeSpecimenRow>

                  <TypeSpecimenRow label="Document">
                    <Text family="document" size="lg" lineHeight="relaxed">
                      The faithful have the right to receive source-backed information in a stable, readable form.
                    </Text>
                  </TypeSpecimenRow>

                  <TypeSpecimenRow label="Inscription">
                    <Text family="inscription" size="sm">
                      Sacred archive
                    </Text>
                  </TypeSpecimenRow>

                  <TypeSpecimenRow label="Mono">
                    <Text family="mono" size="sm">
                      canonical:document:1234
                    </Text>
                  </TypeSpecimenRow>
                </Stack>
              </TypographyBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="heading-scale" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Heading scale
                </Heading>
                <Text tone="muted">
                  Heading level stays semantic. Heading size controls visual hierarchy.
                </Text>
              </Stack>

              <TypographyBlock
                title="Heading scale"
                description="Heading sizes provide a controlled hierarchy for page titles, section titles, card titles, and formal display moments."
                code={`<Stack gap="md">
  <Heading family="display" size="5xl" lineHeight="display">Display 5xl</Heading>
  <Heading family="display" size="3xl">Display 3xl</Heading>
  <Heading family="interface" size="xl">Interface xl</Heading>
  <Heading family="interface" size="md" weight="semibold">Interface md</Heading>
  <Heading family="document" size="lg" lineHeight="base">Document lg</Heading>
  <Heading family="inscription" size="sm">Inscription sm</Heading>
</Stack>`}
              >
                <Stack gap="md">
                  <Heading family="display" size="5xl" lineHeight="display">Display 5xl</Heading>
                  <Heading family="display" size="3xl">Display 3xl</Heading>
                  <Heading family="interface" size="xl">Interface xl</Heading>
                  <Heading family="interface" size="md" weight="semibold">Interface md</Heading>
                  <Heading family="document" size="lg" lineHeight="base">Document lg</Heading>
                  <Heading family="inscription" size="sm">Inscription sm</Heading>
                </Stack>
              </TypographyBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="text-scale" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Text scale
                </Heading>
                <Text tone="muted">
                  Text sizes cover metadata, interface copy, readable body text,
                  and larger supporting passages.
                </Text>
              </Stack>

              <TypographyBlock
                title="Text scale"
                description="Use text scale for body copy, metadata, and supporting prose rather than forcing everything through headings."
                code={`<Stack gap="xs">
  <Text size="2xs">2xs metadata</Text>
  <Text size="xs">xs label</Text>
  <Text size="sm">sm interface text</Text>
  <Text size="base">base body text</Text>
  <Text size="md">md emphasized body text</Text>
  <Text size="lg">lg readable passage</Text>
  <Text size="xl">xl short lead text</Text>
</Stack>`}
              >
                <Stack gap="xs">
                  <Text size="2xs">2xs metadata</Text>
                  <Text size="xs">xs label</Text>
                  <Text size="sm">sm interface text</Text>
                  <Text size="base">base body text</Text>
                  <Text size="md">md emphasized body text</Text>
                  <Text size="lg">lg readable passage</Text>
                  <Text size="xl">xl short lead text</Text>
                </Stack>
              </TypographyBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="text-rhythm" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Text tones and rhythm
                </Heading>
                <Text tone="muted">
                  Semantic tones, line heights, and weights communicate hierarchy,
                  state, and reading density without hard-coded page styles.
                </Text>
              </Stack>

              <TypographyBlock
                title="Text tones and rhythm"
                description="Combine tone, weight, and line height to create hierarchy without adding one-off CSS."
                code={`<Stack gap="xs">
  <Text tone="primary" weight="regular">Primary readable text.</Text>
  <Text tone="secondary" weight="medium">Secondary supporting text.</Text>
  <Text tone="muted" size="sm">Muted metadata text.</Text>
  <Text tone="goldText" weight="semibold">Gold institutional emphasis.</Text>
  <Text tone="activeText" weight="bold">Active selected state.</Text>
  <Text family="document" size="lg" lineHeight="relaxed">
    Longer source-backed text uses relaxed document rhythm.
  </Text>
</Stack>`}
              >
                <Stack gap="xs">
                  <Text tone="primary" weight="regular">Primary readable text.</Text>
                  <Text tone="secondary" weight="medium">Secondary supporting text.</Text>
                  <Text tone="muted" size="sm">Muted metadata text.</Text>
                  <Text tone="goldText" weight="semibold">Gold institutional emphasis.</Text>
                  <Text tone="activeText" weight="bold">Active selected state.</Text>
                  <Text family="document" size="lg" lineHeight="relaxed">
                    Longer source-backed text uses relaxed document rhythm.
                  </Text>
                </Stack>
              </TypographyBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="typography-api" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Typography API
                </Heading>
                <Text tone="muted">
                  Typography primitives expose semantic roles first: family, scale,
                  tone, rhythm, and weight.
                </Text>
              </Stack>

              <Panel surface="raised" padding="lg">
                <TableWrapper>
                  <Table>
                    <THead>
                      <TR>
                        <TH>Primitive</TH>
                        <TH>Prop</TH>
                        <TH>Values</TH>
                        <TH>Use</TH>
                      </TR>
                    </THead>
                    <TBody>
                      <TR>
                        <TD>Heading</TD>
                        <TD>family</TD>
                        <TD>display, document, interface, inscription</TD>
                        <TD>Choose the voice of the heading.</TD>
                      </TR>
                      <TR>
                        <TD>Heading</TD>
                        <TD>size</TD>
                        <TD>sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl</TD>
                        <TD>Set heading scale independently from semantic level.</TD>
                      </TR>
                      <TR>
                        <TD>Heading</TD>
                        <TD>lineHeight</TD>
                        <TD>tight, display, base</TD>
                        <TD>Control heading rhythm for display or compact interface use.</TD>
                      </TR>
                      <TR>
                        <TD>Heading</TD>
                        <TD>weight</TD>
                        <TD>semibold, bold</TD>
                        <TD>Use semibold for quieter hierarchy and bold for default emphasis.</TD>
                      </TR>
                      <TR>
                        <TD>Text</TD>
                        <TD>family</TD>
                        <TD>interface, document, display, inscription, mono</TD>
                        <TD>Choose body, citation, ceremonial, or technical text style.</TD>
                      </TR>
                      <TR>
                        <TD>Text</TD>
                        <TD>size</TD>
                        <TD>2xs, xs, sm, base, md, lg, xl</TD>
                        <TD>Set readable text scale.</TD>
                      </TR>
                      <TR>
                        <TD>Text</TD>
                        <TD>tone</TD>
                        <TD>primary, secondary, muted, inverse, link, goldText, activeText</TD>
                        <TD>Apply semantic color without page-specific CSS.</TD>
                      </TR>
                      <TR>
                        <TD>Text</TD>
                        <TD>lineHeight</TD>
                        <TD>tight, base, relaxed, loose</TD>
                        <TD>Control reading rhythm for metadata, body text, and long passages.</TD>
                      </TR>
                      <TR>
                        <TD>Text</TD>
                        <TD>weight</TD>
                        <TD>regular, medium, semibold, bold</TD>
                        <TD>Control emphasis without swapping components.</TD>
                      </TR>
                      <TR>
                        <TD>Eyebrow</TD>
                        <TD>tone</TD>
                        <TD>muted, gold, active, inverse</TD>
                        <TD>Use for compact uppercase institutional labels.</TD>
                      </TR>
                    </TBody>
                  </Table>
                </TableWrapper>
              </Panel>
            </Stack>
          </Container>
        </Section>

        <Section id="token-inventory" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Token inventory
                </Heading>
                <Text tone="muted">
                  The repo declares font-family tokens and fallback stacks. It does
                  not store project-owned font files; that decision belongs to the
                  font asset policy rather than the typography API.
                </Text>
              </Stack>

              <Grid columns="2" gap="md">
                <Card padding="md" border="subtle">
                  <Stack gap="xs">
                    <Heading level={3} size="md" family="interface">Families</Heading>
                    <Text size="sm" family="mono">--ccui-font-display</Text>
                    <Text size="sm" family="mono">--ccui-font-interface</Text>
                    <Text size="sm" family="mono">--ccui-font-document</Text>
                    <Text size="sm" family="mono">--ccui-font-inscription</Text>
                    <Text size="sm" family="mono">--ccui-font-mono</Text>
                  </Stack>
                </Card>

                <Card padding="md" border="subtle">
                  <Stack gap="xs">
                    <Heading level={3} size="md" family="interface">Scales</Heading>
                    <Text size="sm" family="mono">2xs, xs, sm, base, md, lg, xl</Text>
                    <Text size="sm" family="mono">2xl, 3xl, 4xl, 5xl</Text>
                    <Divider />
                    <Text size="sm" family="mono">tight, display, base, relaxed, loose</Text>
                    <Text size="sm" family="mono">regular, medium, semibold, bold</Text>
                  </Stack>
                </Card>
              </Grid>
            </Stack>
          </Container>
        </Section>
      </div>
    </main>
  );
}

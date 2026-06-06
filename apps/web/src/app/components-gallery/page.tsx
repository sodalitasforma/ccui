import { CCUISidebar } from "../components/ccui-sidebar";
import { DocsCodeBlock } from "../components/docs-code-block";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ArrowRightIcon,
  Badge,
  Button,
  Card,
  CheckIcon,
  CopyIcon,
  Cluster,
  Container,
  Divider,
  EmptyState,
  Eyebrow,
  FilterBar,
  Grid,
  Heading,
  IconFrame,
  Link,
  MediaFrame,
  Notice,
  Panel,
  SearchInput,
  Section,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Tag,
  Table,
  TableWrapper,
  TBody,
  TD,
  TH,
  THead,
  Timeline,
  TimelineItem,
  TR,
  Text,
} from "../../../../../packages/primitives/src";

import {
  AnnouncementBanner,
  EntityRelationshipList,
  EntityCard,
  SemanticRelationGraph,
  MachineReadableBadge,
  ProvenanceTrail,
  AuthorityLevelBadge,
  CanonicalSourceCard,
  TranslationVariantCard,
  TermDefinitionCard,
  ReviewStatusBadge,
  NamespaceBadge,
  OntologyPropertyTable,
  OntologyClassCard,
  ApiEndpointCard,
  DatasetCard,
  ContributorList,
  RepositoryLink,
  ProjectStatusBadge,
  ProjectCard,
  PhotoGalleryCard,
  VideoCard,
  MediaCard,
  PressOfficeNotice,
  PressReleaseCard,
  FeaturedStory,
  CalendarItem,
  CalendarTabs,
  NewsList,
  NewsCard,
  SaintDirectory,
  OfficeDirectory,
  SchoolDirectory,
  ParishDirectory,
  ClergyDirectory,
  PontiffCard,
  PontiffDirectory,
  NameFilter,
  CenturyFilter,
  DateRangeLabel,
  DirectoryFilter,
  InstitutionalDirectory,
  BiblePassageCard,
  PrayerBlock,
  OfficialNoticeCard,
  CanonicalReference,
  CitationTrail,
  SourceCard,
  FileTypeIcon,
  DownloadLink,
  ArchiveSearchResult,
  RelatedDocuments,
  FootnoteList,
  ParagraphAnchor,
  DocumentCitation,
  DocumentTypeBadge,
  DocumentAuthorityBadge,
  DocumentMetadata,
  ChurchDocumentCard,
  ChurchDocumentHeader,
  ParishContactCard,
  ProjectDonationCallout,
  TitheIcon,
  MinistryCard,
  BulletinCard,
  ParishAnnouncementCard,
  PrayerCard,
  ReadingReference,
  LiturgicalSeasonBadge,
  LiturgicalDayCard,
  LiturgicalColorDot,
  FeastDayHero,
  SacramentScheduleBlock,
  MassScheduleBlock,
  HolyDayScheduleBlock,
  ConfessionScheduleBlock,
  AdorationScheduleBlock,
  ClergyProfile,
  ContactBlock,
  Directory,
  DirectoryCard,
  DocumentCard,
  DocumentList,
  EventCard,
  EventList,
  InstitutionalFooter,
  InstitutionalHeader,
  LocationBlock,
  OfficeHours,
  PageHeader,
  ResourceLink,
  StaffProfile,
} from "../../../../../packages/catholic/src";

import {
  accordionExamples,
  announcementBannerExample,
  clergyProfileExample,
  contactBlockExample,
  directoryExample,
  documentListExample,
  emptyStateExample,
  eventListExample,
  filterBarExample,
  institutionalFooterExample,
  institutionalHeaderExample,
  locationBlockExample,
  mediaFrameExample,
  noticeExamples,
  officeHoursExample,
  pageHeaderExample,
  staffProfileExample,
  tabExamples,
  tableRows,
  timelineExamples,
  semanticRelationGraphExample,
  entityRelationshipListExample,
  entityCardExample,
  provenanceTrailExample,
  machineReadableBadgeExample,
  canonicalSourceCardExample,
  authorityLevelBadgeExample,
  translationVariantCardExample,
  termDefinitionCardExample,
  reviewStatusBadgeExample,
  ontologyPropertyTableExample,
  ontologyClassCardExample,
  namespaceBadgeExample,
  repositoryLinkExample,
  projectStatusBadgeExample,
  projectCardExample,
  datasetCardExample,
  contributorListExample,
  apiEndpointCardExample,
  videoCardExample,
  photoGalleryCardExample,
  mediaCardExample,
  pressReleaseCardExample,
  pressOfficeNoticeExample,
  newsListExample,
  newsCardExample,
  featuredStoryExample,
  calendarTabsExample,
  calendarItemExample,
  schoolDirectoryExample,
  saintDirectoryExample,
  pontiffDirectoryExample,
  pontiffCardExample,
  parishDirectoryExample,
  officeDirectoryExample,
  clergyDirectoryExample,
  nameFilterExample,
  institutionalDirectoryExample,
  directoryFilterExample,
  dateRangeLabelExample,
  centuryFilterExample,
  sourceCardExample,
  prayerBlockExample,
  officialNoticeCardExample,
  citationTrailExample,
  canonicalReferenceExample,
  biblePassageCardExample,
  relatedDocumentsExample,
  paragraphAnchorExample,
  footnoteListExample,
  fileTypeIconExample,
  downloadLinkExample,
  archiveSearchResultExample,
  documentTypeBadgeExample,
  documentCitationExample,
  documentAuthorityBadgeExample,
  churchDocumentMetadataExample,
  churchDocumentExample,
  parishContactCardExample,
  projectDonationCalloutExample,
  titheIconExample,
  ministryCardExample,
  bulletinCardExample,
  parishAnnouncementCardExample,
  prayerCardExample,
  readingReferenceExample,
  liturgicalSeasonBadgeExample,
  liturgicalDayExample,
  liturgicalColorDotExample,
  feastDayHeroExample,
  sacramentScheduleExample,
  massScheduleExample,
  holyDayScheduleExample,
  confessionScheduleExample,
  adorationScheduleExample,
} from "../docs/examples";
import {
  accordionExamplesCode,
  announcementBannerExampleCode,
  buttonExamplesCode,
  contactBlockExampleCode,
  directoryExampleCode,
  documentListExampleCode,
  emptyStateExampleCode,
  eventListExampleCode,
  filterBarExampleCode,
  institutionalFooterExampleCode,
  institutionalHeaderExampleCode,
  locationBlockExampleCode,
  mediaFrameExampleCode,
  noticeExamplesCode,
  officeHoursExampleCode,
  pageHeaderExampleCode,
  staffAndClergyExampleCode,
  tabExamplesCode,
  tableExampleCode,
  timelineExamplesCode,
  semanticRelationGraphExampleCode,
  entityRelationshipListExampleCode,
  entityCardExampleCode,
  provenanceTrailExampleCode,
  machineReadableBadgeExampleCode,
  canonicalSourceCardExampleCode,
  authorityLevelBadgeExampleCode,
  translationVariantCardExampleCode,
  termDefinitionCardExampleCode,
  reviewStatusBadgeExampleCode,
  ontologyPropertyTableExampleCode,
  ontologyClassCardExampleCode,
  namespaceBadgeExampleCode,
  repositoryLinkExampleCode,
  projectStatusBadgeExampleCode,
  projectCardExampleCode,
  datasetCardExampleCode,
  contributorListExampleCode,
  apiEndpointCardExampleCode,
  videoCardExampleCode,
  photoGalleryCardExampleCode,
  mediaCardExampleCode,
  pressReleaseCardExampleCode,
  pressOfficeNoticeExampleCode,
  newsListExampleCode,
  newsCardExampleCode,
  featuredStoryExampleCode,
  calendarTabsExampleCode,
  calendarItemExampleCode,
  schoolDirectoryExampleCode,
  saintDirectoryExampleCode,
  pontiffDirectoryExampleCode,
  pontiffCardExampleCode,
  parishDirectoryExampleCode,
  officeDirectoryExampleCode,
  clergyDirectoryExampleCode,
  nameFilterExampleCode,
  institutionalDirectoryExampleCode,
  directoryFilterExampleCode,
  dateRangeLabelExampleCode,
  centuryFilterExampleCode,
  sourceCardExampleCode,
  prayerBlockExampleCode,
  officialNoticeCardExampleCode,
  citationTrailExampleCode,
  canonicalReferenceExampleCode,
  biblePassageCardExampleCode,
  relatedDocumentsExampleCode,
  paragraphAnchorExampleCode,
  footnoteListExampleCode,
  fileTypeIconExampleCode,
  downloadLinkExampleCode,
  archiveSearchResultExampleCode,
  documentCitationExampleCode,
  documentTypeBadgeExampleCode,
  documentAuthorityBadgeExampleCode,
  documentMetadataExampleCode,
  churchDocumentCardExampleCode,
  churchDocumentHeaderExampleCode,
  parishContactCardExampleCode,
  projectDonationCalloutExampleCode,
  titheIconExampleCode,
  ministryCardExampleCode,
  bulletinCardExampleCode,
  parishAnnouncementCardExampleCode,
  prayerCardExampleCode,
  readingReferenceExampleCode,
  liturgicalSeasonBadgeExampleCode,
  liturgicalDayExampleCode,
  liturgicalColorDotExampleCode,
  feastDayHeroExampleCode,
  sacramentScheduleExampleCode,
  massScheduleExampleCode,
  holyDayScheduleExampleCode,
  confessionScheduleExampleCode,
  adorationScheduleExampleCode,
} from "../docs/codegen";



function ComponentBlock({
  title,
  description,
  children,
  code,
  variant = "preview",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
  variant?: "preview" | "specimen";
}) {
  return (
    <section className={`docs-block docs-block--${variant}`}>
      <Stack gap="sm">
        <Stack gap="xs">
          <Heading level={2} size="xl" family="interface">
            {title}
          </Heading>
          <Text tone="muted">{description}</Text>
        </Stack>

        {variant === "preview" ? (
          <Card padding="lg" border="subtle" className="docs-preview">
            {children}
          </Card>
        ) : (
          <div className="docs-specimen">
            {children}
          </div>
        )}

        <details className="docs-code-disclosure">
          <summary className="docs-code-toggle-label">
            Show code
          </summary>
          <DocsCodeBlock code={code} variant="preview" copyable />
        </details>
      </Stack>
    </section>
  );
}

function SpecimenRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Stack gap="xs">
      <Eyebrow>{label}</Eyebrow>
      <Cluster gap="sm" align="center">
        {children}
      </Cluster>
    </Stack>
  );
}

export default function Home() {
  return (
    <main className="docs-shell">
      <CCUISidebar current="components" />

      <div className="docs-main">
        <Section id="introduction" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Components
                </Heading>
                <Text size="lg" tone="secondary" className="docs-lede">
                  A component registry for Catholic websites, documents, liturgy,
                  directories, and digital infrastructure. Built from tokens,
                  primitives, Catholic components, and reusable page patterns.
                </Text>
              </Stack>

              <Cluster gap="sm">
                <Button href="/docs">Read docs</Button>
                <Button href="/templates" variant="secondary">View templates</Button>
              </Cluster>
            </Stack>
          </Container>
        </Section>

        <Section id="colors" surface="page" spacing="md">
          <Container size="lg">
            <Panel surface="raised" padding="lg">
              <Stack gap="sm">
                <Eyebrow>System foundation</Eyebrow>
                <Heading level={2} size="2xl">
                  Colors
                </Heading>
                <Text tone="secondary">
                  Raw palette, semantic interface colors, liturgical colors, usage guidance, and token inventory now live on the dedicated colors page.
                </Text>
                <Cluster>
                  <Button href="/colors">Open color system</Button>
                </Cluster>
              </Stack>
            </Panel>
          </Container>
        </Section>

        <Section id="primitive-layout" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Layout primitives
                </Heading>
                <Text tone="muted">
                  Layout primitives establish page width, section rhythm, stacked spacing, inline groups, and responsive grids.
                </Text>
              </Stack>

              <ComponentBlock
                variant="specimen"
                title="Container, Section, Stack, Cluster, Grid"
                description="The basic page-composition primitives used throughout Catholic Commons UI."
                code={`<Section surface="page" spacing="md">
  <Container size="lg">
    <Stack gap="lg">
      <Grid columns="3" gap="md">
        <Card padding="md">First</Card>
        <Card padding="md">Second</Card>
        <Card padding="md">Third</Card>
      </Grid>
    </Stack>
  </Container>
</Section>`}
              >
                <Section surface="page" spacing="none">
                  <Container size="lg">
                    <Stack gap="lg">
                      <Grid columns="3" gap="md">
                        <Card padding="md">First</Card>
                        <Card padding="md">Second</Card>
                        <Card padding="md">Third</Card>
                      </Grid>
                    </Stack>
                  </Container>
                </Section>
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="primitive-typography" surface="page" spacing="md">
          <Container size="lg">
            <Panel surface="raised" padding="lg">
              <Stack gap="sm">
                <Eyebrow>System foundation</Eyebrow>
                <Heading level={2} size="2xl">
                  Typography
                </Heading>
                <Text tone="secondary">
                  Type roles, heading scale, text rhythm, semantic tones, and typography API now live on the dedicated typography page.
                </Text>
                <Cluster>
                  <Button href="/typography">Open typography system</Button>
                </Cluster>
              </Stack>
            </Panel>
          </Container>
        </Section>

        <Section id="primitive-surfaces" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Surface primitives
                </Heading>
                <Text tone="muted">
                  Surface primitives hold content, divide regions, and communicate official or system states.
                </Text>
              </Stack>

              <ComponentBlock
                variant="specimen"
                title="Notice"
                description="A bordered communication block for official notes, liturgical context, warnings, and system states."
                code={noticeExamplesCode}
              >
                <Stack gap="sm">
                  {noticeExamples.map((notice) => (
                    <Notice key={notice.variant} variant={notice.variant}>
                      {notice.children}
                    </Notice>
                  ))}
                </Stack>
              </ComponentBlock>

              <ComponentBlock
                variant="specimen"
                title="Card, Panel, Divider"
                description="Use panels for grouped regions, cards for portable content objects, and dividers for internal separation."
                code={`<Panel surface="raised" padding="lg">
  <Stack gap="md">
    <Stack gap="xs">
      <Heading level={3} size="md" family="interface">
        Parish office
      </Heading>
      <Text tone="secondary">
        Group related contact and schedule information inside a panel.
      </Text>
    </Stack>

    <Divider />

    <Grid columns="2" gap="md">
      <Card padding="md" border="subtle" surface="raised">
        <Stack gap="xs">
          <Heading level={4} size="sm" family="interface">
            Office hours
          </Heading>
          <Text tone="muted">Monday–Friday · 9:00 AM–4:00 PM</Text>
        </Stack>
      </Card>

      <Card padding="md" border="subtle" surface="raised">
        <Stack gap="xs">
          <Heading level={4} size="sm" family="interface">
            Contact
          </Heading>
          <Text tone="muted">Call the parish office for appointments.</Text>
        </Stack>
      </Card>
    </Grid>
  </Stack>
</Panel>`}
              >
                <Stack gap="lg">
                  <Panel surface="raised" padding="lg">
                    <Stack gap="md">
                      <Stack gap="xs">
                        <Heading level={3} size="md" family="interface">
                          Parish office
                        </Heading>
                        <Text tone="secondary">
                          Group related contact and schedule information inside a panel.
                        </Text>
                      </Stack>

                      <Divider />

                      <Grid columns="2" gap="md">
                        <Card padding="md" border="subtle" surface="raised">
                          <Stack gap="xs">
                            <Heading level={4} size="sm" family="interface">
                              Office hours
                            </Heading>
                            <Text tone="muted">Monday–Friday · 9:00 AM–4:00 PM</Text>
                          </Stack>
                        </Card>

                        <Card padding="md" border="subtle" surface="raised">
                          <Stack gap="xs">
                            <Heading level={4} size="sm" family="interface">
                              Contact
                            </Heading>
                            <Text tone="muted">Call the parish office for appointments.</Text>
                          </Stack>
                        </Card>
                      </Grid>
                    </Stack>
                  </Panel>

                  <TableWrapper>
                    <Table>
                      <THead>
                        <TR>
                          <TH>Primitive</TH>
                          <TH>Role</TH>
                          <TH>Useful props</TH>
                        </TR>
                      </THead>
                      <TBody>
                        <TR>
                          <TD>Panel</TD>
                          <TD>Grouped page region.</TD>
                          <TD>surface, padding, tone</TD>
                        </TR>
                        <TR>
                          <TD>Card</TD>
                          <TD>Portable content object inside a region.</TD>
                          <TD>surface, padding, border, shadow</TD>
                        </TR>
                        <TR>
                          <TD>Divider</TD>
                          <TD>Separator inside related content.</TD>
                          <TD>tone</TD>
                        </TR>
                      </TBody>
                    </Table>
                  </TableWrapper>
                </Stack>
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="primitive-actions" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Action and metadata primitives
                </Heading>
                <Text tone="muted">
                  Action primitives cover calls to action, links, badges, and lightweight metadata labels.
                </Text>
              </Stack>

              <ComponentBlock
                variant="specimen"
                title="Button"
                description="Buttons communicate actions with variants, sizes, icons, links, and disabled states."
                code={buttonExamplesCode}
              >
                <Stack gap="xl">
                  <Stack gap="lg">
                    <SpecimenRow label="Primary actions">
                      <Button>Save changes</Button>
                      <Button variant="secondary">Cancel</Button>
                      <Button variant="ghost">Preview</Button>
                    </SpecimenRow>

                    <SpecimenRow label="Institutional actions">
                      <Button variant="gold">Donate</Button>
                      <Button variant="secondary" iconAfter={<ArrowRightIcon size="sm" />}>
                        Continue
                      </Button>
                      <Button variant="danger">Delete</Button>
                    </SpecimenRow>

                    <SpecimenRow label="Icon controls">
                      <Button iconBefore={<CopyIcon size="sm" />}>Copy</Button>
                      <Button size="icon" variant="ghost" aria-label="Copy code">
                        <CopyIcon size="sm" />
                      </Button>
                      <Button size="icon" variant="ghost" aria-label="Continue">
                        <ArrowRightIcon size="sm" />
                      </Button>
                    </SpecimenRow>

                    <SpecimenRow label="Links and states">
                      <Button href="/docs">Read docs</Button>
                      <Button disabled>Disabled</Button>
                    </SpecimenRow>
                  </Stack>

                  <div className="docs-component-api">
                    <Stack gap="md">
                      <Stack gap="xs">
                        <Heading level={3} size="md" family="interface">
                          API
                        </Heading>
                        <Text tone="muted">
                          Button supports semantic variants, standard sizes, optional icons, link rendering, and disabled states.
                        </Text>
                      </Stack>

                      <TableWrapper>
                        <Table>
                          <THead>
                            <TR>
                              <TH>Prop</TH>
                              <TH>Values</TH>
                              <TH>Use</TH>
                            </TR>
                          </THead>
                          <TBody>
                            <TR>
                              <TD>variant</TD>
                              <TD>primary, secondary, subtle, ghost, gold, danger, floating</TD>
                              <TD>Visual priority and intent.</TD>
                            </TR>
                            <TR>
                              <TD>size</TD>
                              <TD>xs, sm, md, lg, icon</TD>
                              <TD>Control scale. Use icon for icon-only controls.</TD>
                            </TR>
                            <TR>
                              <TD>iconBefore / iconAfter</TD>
                              <TD>ReactNode</TD>
                              <TD>Add an icon before or after the label.</TD>
                            </TR>
                            <TR>
                              <TD>href</TD>
                              <TD>string</TD>
                              <TD>Render a link styled as a button.</TD>
                            </TR>
                            <TR>
                              <TD>disabled</TD>
                              <TD>boolean</TD>
                              <TD>Disable a native button action.</TD>
                            </TR>
                          </TBody>
                        </Table>
                      </TableWrapper>
                    </Stack>
                  </div>
                </Stack>
              </ComponentBlock>

              <ComponentBlock
                variant="specimen"
                title="Badge, Tag, Link"
                description="Compact metadata, taxonomy labels, and institutional links."
                code={`<Cluster gap="sm" align="center">
  <Badge variant="neutral">Draft</Badge>
  <Badge variant="gold">Official</Badge>
  <Tag>Parish</Tag>
  <Tag>Directory</Tag>
  <Link href="#">Read more</Link>
</Cluster>`}
              >
                <Cluster gap="sm" align="center">
                  <Badge variant="neutral">Draft</Badge>
                  <Badge variant="gold">Official</Badge>
                  <Tag>Parish</Tag>
                  <Tag>Directory</Tag>
                  <Link href="#">Read more</Link>
                </Cluster>
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="primitive-forms" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Form primitives
                </Heading>
                <Text tone="muted">
                  Form primitives support search, filters, selects, and compact input/action rows.
                </Text>
              </Stack>

              <ComponentBlock
                variant="specimen"
                title="FilterBar"
                description="A compact row for search, select, and filter actions."
                code={filterBarExampleCode}
              >
                <FilterBar>
                  <SearchInput placeholder={filterBarExample.searchPlaceholder} />
                  <Select aria-label="Office filter">
                    <option>{filterBarExample.selectLabel}</option>
                  </Select>
                  <Button size="sm">{filterBarExample.buttonLabel}</Button>
                </FilterBar>
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="primitive-data-display" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Data display primitives
                </Heading>
                <Text tone="muted">
                  Data display primitives structure disclosure, tabbed panels, tables, timelines, and empty states.
                </Text>
              </Stack>

              <ComponentBlock
                variant="specimen"
                title="Tabs"
                description="A switchable panel pattern for news, calendar, media, and directory views."
                code={tabExamplesCode}
              >
                <Tabs>
                  <TabList>
                    {tabExamples.map((tab) => (
                      <Tab key={tab.label}>{tab.label}</Tab>
                    ))}
                  </TabList>
                  {tabExamples.map((tab, index) => (
                    <TabPanel key={tab.label} index={index}>
                      <Text tone="secondary">{tab.content}</Text>
                    </TabPanel>
                  ))}
                </Tabs>
              </ComponentBlock>

              <ComponentBlock
                variant="specimen"
                title="Accordion"
                description="A disclosure pattern for structured Catholic institutional content."
                code={accordionExamplesCode}
              >
                <Accordion>
                  {accordionExamples.map((item) => (
                    <AccordionItem key={item.title} defaultOpen={item.defaultOpen}>
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>
                        <Text tone="secondary">{item.content}</Text>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ComponentBlock>

              <ComponentBlock
                variant="specimen"
                title="Table"
                description="A restrained table wrapper for records, schedules, and structured institutional data."
                code={tableExampleCode}
              >
                <TableWrapper>
                  <Table>
                    <THead>
                      <TR>
                        <TH>Office</TH>
                        <TH>Status</TH>
                        <TH>Next step</TH>
                      </TR>
                    </THead>
                    <TBody>
                      {tableRows.map((row) => (
                        <TR key={row.office}>
                          <TD>{row.office}</TD>
                          <TD>
                            <Badge variant={row.statusVariant}>{row.status}</Badge>
                          </TD>
                          <TD>
                            <Button size="sm" variant={row.actionVariant}>
                              {row.action}
                            </Button>
                          </TD>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </TableWrapper>
              </ComponentBlock>

              <ComponentBlock
                variant="specimen"
                title="Timeline"
                description="A vertical sequence for process steps, project history, sacramental preparation, or institutional chronology."
                code={timelineExamplesCode}
              >
                <Timeline currentStep={2}>
                  {timelineExamples.map((item, index) => {
                    const step = index + 1;

                    return (
                      <TimelineItem
                        key={item.title}
                        step={step}
                        icon={step < 2 ? <CheckIcon size="xs" /> : undefined}
                      >
                        <Stack gap="xs">
                          <Text size="xs" tone="goldText">
                            {item.meta}
                          </Text>
                          <Heading level={3} size="sm">
                            {item.title}
                          </Heading>
                          <Text tone="secondary">
                            {item.description}
                          </Text>
                        </Stack>
                      </TimelineItem>
                    );
                  })}
                </Timeline>
              </ComponentBlock>

              <ComponentBlock
                variant="specimen"
                title="EmptyState"
                description="A useful no-results state for directories, searches, calendars, and archives."
                code={emptyStateExampleCode}
              >
                <EmptyState>
                  <Stack gap="sm">
                    <Heading level={3} size="md">
                      {emptyStateExample.title}
                    </Heading>
                    <Text tone="secondary">
                      {emptyStateExample.description}
                    </Text>
                    <Button variant="secondary">{emptyStateExample.actionLabel}</Button>
                  </Stack>
                </EmptyState>
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="primitive-media" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Media and icon primitives
                </Heading>
                <Text tone="muted">
                  Media primitives frame video, images, icons, and notification affordances.
                </Text>
              </Stack>

              <ComponentBlock
                variant="specimen"
                title="MediaFrame"
                description="A media container that can render database, CMS, Vatican News, YouTube, or public website media URLs."
                code={mediaFrameExampleCode}
              >
                <Stack gap="sm">
                  <MediaFrame ratio="video" surface="dark">
                    <iframe
                      src={mediaFrameExample.src}
                      title={mediaFrameExample.title}
                      allowFullScreen
                    />
                  </MediaFrame>
                  <Text size="xs" tone="muted">
                    {mediaFrameExample.caption}
                  </Text>
                </Stack>
              </ComponentBlock>

              <ComponentBlock
                variant="specimen"
                title="IconFrame"
                description="A restrained framed icon container."
                code={`<Cluster gap="sm">
  <IconFrame><span aria-hidden="true">✦</span></IconFrame>
  <IconFrame><span aria-hidden="true">☩</span></IconFrame>
</Cluster>`}
              >
                <Cluster gap="sm">
                  <IconFrame><span aria-hidden="true">✦</span></IconFrame>
                  <IconFrame><span aria-hidden="true">☩</span></IconFrame>
                </Cluster>
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="parish-websites" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Parish websites
                </Heading>
                <Text tone="muted">
                  Components for the public life of a parish: navigation, page headers,
                  announcements, schedules, ministries, giving, bulletins, news, media,
                  contact paths, staff, clergy, events, and footer structure.
                </Text>
              </Stack>

              <ComponentBlock
                title="InstitutionalHeader"
                description="Top-level identity, language, utility, search, and primary navigation for a Catholic institution."
                code={institutionalHeaderExampleCode}
              >
                <InstitutionalHeader
                  title={institutionalHeaderExample.title}
                  subtitle={institutionalHeaderExample.subtitle}
                  primaryItems={[...institutionalHeaderExample.primaryItems]}
                  contactAction={institutionalHeaderExample.contactAction}
                />
              </ComponentBlock>

              <ComponentBlock
                title="PageHeader + Breadcrumb"
                description="Formal page opening with optional breadcrumbs, eyebrow, description, and actions."
                code={pageHeaderExampleCode}
              >
                <PageHeader
                  eyebrow={pageHeaderExample.eyebrow}
                  title={pageHeaderExample.title}
                  description={pageHeaderExample.description}
                  breadcrumbs={[...pageHeaderExample.breadcrumbs]}
                  actions={
                    <Cluster>
                      <Button size="sm">Primary action</Button>
                      <Button size="sm" variant="secondary">Secondary action</Button>
                    </Cluster>
                  }
                />
              </ComponentBlock>

              <ComponentBlock
                title="AnnouncementBanner"
                description="Official, liturgical, warning, and emergency announcements."
                code={announcementBannerExampleCode}
              >
                <AnnouncementBanner
                  badge={announcementBannerExample.badge}
                  title={announcementBannerExample.title}
                  description={announcementBannerExample.description}
                  href={announcementBannerExample.href}
                />
              </ComponentBlock>

              <ComponentBlock
                title="MassScheduleBlock"
                description="A parish Mass schedule with languages, locations, livestreams, exceptions, and source metadata."
                code={massScheduleExampleCode}
              >
                <MassScheduleBlock
                  title={massScheduleExample.title}
                  subtitle={massScheduleExample.subtitle}
                  badge={massScheduleExample.badge}
                  days={massScheduleExample.days}
                  exceptions={massScheduleExample.exceptions}
                  source={massScheduleExample.source}
                />
              </ComponentBlock>

              <ComponentBlock
                title="ConfessionScheduleBlock"
                description="A confession schedule using the same schedule data shape and MassTimeRow infrastructure."
                code={confessionScheduleExampleCode}
              >
                <ConfessionScheduleBlock
                  title={confessionScheduleExample.title}
                  subtitle={confessionScheduleExample.subtitle}
                  days={confessionScheduleExample.days}
                  exceptions={confessionScheduleExample.exceptions}
                />
              </ComponentBlock>

              <ComponentBlock
                title="AdorationScheduleBlock"
                description="A public Eucharistic adoration schedule."
                code={adorationScheduleExampleCode}
              >
                <AdorationScheduleBlock
                  title={adorationScheduleExample.title}
                  subtitle={adorationScheduleExample.subtitle}
                  days={adorationScheduleExample.days}
                />
              </ComponentBlock>

              <ComponentBlock
                title="SacramentScheduleBlock"
                description="A reusable schedule block for sacramental preparation and parish sacrament programs."
                code={sacramentScheduleExampleCode}
              >
                <SacramentScheduleBlock
                  title={sacramentScheduleExample.title}
                  subtitle={sacramentScheduleExample.subtitle}
                  sacrament={sacramentScheduleExample.sacrament}
                  days={sacramentScheduleExample.days}
                />
              </ComponentBlock>

              <ComponentBlock
                title="HolyDayScheduleBlock"
                description="A holy day schedule with vigil, feast-day, livestream, and office-closure exception support."
                code={holyDayScheduleExampleCode}
              >
                <HolyDayScheduleBlock
                  title={holyDayScheduleExample.title}
                  subtitle={holyDayScheduleExample.subtitle}
                  days={holyDayScheduleExample.days}
                  exceptions={holyDayScheduleExample.exceptions}
                />
              </ComponentBlock>

              <ComponentBlock
                title="PrayerCard"
                description="A prayer or devotional text card with source metadata for future canon and prayer datasets."
                code={prayerCardExampleCode}
              >
                <PrayerCard {...prayerCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ParishAnnouncementCard"
                description="A parish-specific announcement card built on the same notice language as schedule exceptions."
                code={parishAnnouncementCardExampleCode}
              >
                <ParishAnnouncementCard {...parishAnnouncementCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="BulletinCard"
                description="A parish bulletin wrapper built from the existing DocumentCard pattern."
                code={bulletinCardExampleCode}
              >
                <BulletinCard {...bulletinCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="MinistryCard"
                description="A ministry card for parish groups, apostolates, and volunteer programs."
                code={ministryCardExampleCode}
              >
                <MinistryCard {...ministryCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ProjectDonationCallout"
                description="A giving callout for parish campaigns, restoration funds, and recurring support."
                code={projectDonationCalloutExampleCode}
              >
                <ProjectDonationCallout {...projectDonationCalloutExample} />
              </ComponentBlock>

              <ComponentBlock
                title="TitheIcon"
                description="A floating give affordance that opens into a recurring tithe call to action."
                code={titheIconExampleCode}
              >
                <TitheIcon {...titheIconExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ParishContactCard"
                description="A parish contact composition reusing ContactBlock, OfficeHours, and LocationBlock."
                code={parishContactCardExampleCode}
              >
                <ParishContactCard {...parishContactCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="Directory + DirectoryCard"
                description="Directory shell and cards for offices, ministries, schools, parishes, staff groups, and institutional records."
                code={directoryExampleCode}
              >
                <Directory title={directoryExample.title} description={directoryExample.description}>
                  {directoryExample.cards.map((card) => (
                    <DirectoryCard
                      key={card.title}
                      eyebrow={card.eyebrow}
                      title={card.title}
                      description={card.description}
                      meta={card.meta}
                      status={"status" in card ? card.status : undefined}
                      href={card.href}
                    />
                  ))}
                </Directory>
              </ComponentBlock>

              <ComponentBlock
                title="ContactBlock"
                description="Structured contact details for parish offices, diocesan offices, ministries, schools, and foundations."
                code={contactBlockExampleCode}
              >
                <ContactBlock
                  title={contactBlockExample.title}
                  phone={contactBlockExample.phone}
                  email={contactBlockExample.email}
                  website={contactBlockExample.website}
                  addressLines={[...contactBlockExample.addressLines]}
                />
              </ComponentBlock>

              <ComponentBlock
                title="OfficeHours"
                description="Structured office-hour display for public-facing institutional pages."
                code={officeHoursExampleCode}
              >
                <OfficeHours items={[...officeHoursExample.items]} />
              </ComponentBlock>

              <ComponentBlock
                title="LocationBlock"
                description="Address, map link, and location note for offices, parishes, schools, and ministries."
                code={locationBlockExampleCode}
              >
                <LocationBlock
                  addressLines={[...locationBlockExample.addressLines]}
                  mapHref={locationBlockExample.mapHref}
                  note={locationBlockExample.note}
                />
              </ComponentBlock>

              <ComponentBlock
                title="StaffProfile + ClergyProfile"
                description="Profile cards for staff and clergy, with clergy receiving a more formal gold treatment."
                code={staffAndClergyExampleCode}
              >
                <Grid columns="2" gap="md">
                  <StaffProfile
                    name={staffProfileExample.name}
                    position={staffProfileExample.position}
                    department={staffProfileExample.department}
                    email={staffProfileExample.email}
                    phone={staffProfileExample.phone}
                  />

                  <ClergyProfile
                    name={clergyProfileExample.name}
                    title={clergyProfileExample.title}
                    assignment={clergyProfileExample.assignment}
                    orderOrPostnominals={clergyProfileExample.orderOrPostnominals}
                    email={clergyProfileExample.email}
                  />
                </Grid>
              </ComponentBlock>

              <ComponentBlock
                title="DocumentList + DocumentCard + ResourceLink"
                description="Official documents, forms, policies, downloads, and external institutional resources."
                code={documentListExampleCode}
              >
                <DocumentList title={documentListExample.title} description={documentListExample.description}>
                  <DocumentCard {...documentListExample.document} />
                  <ResourceLink {...documentListExample.resource} />
                </DocumentList>
              </ComponentBlock>

              <ComponentBlock
                title="EventList + EventCard"
                description="Public calendar cards for liturgical, parish, school, diocesan, and ministry events."
                code={eventListExampleCode}
              >
                <EventList title={eventListExample.title} description={eventListExample.description}>
                  {eventListExample.events.map((event) => (
                    <EventCard key={event.title} {...event} />
                  ))}
                </EventList>
              </ComponentBlock>

              <ComponentBlock
                title="FeaturedStory"
                description="A prominent story treatment for diocesan news, parish features, and school announcements."
                code={featuredStoryExampleCode}
              >
                <FeaturedStory {...featuredStoryExample} />
              </ComponentBlock>

              <ComponentBlock
                title="NewsCard"
                description="A public news card for parish, diocesan, school, and ministry updates."
                code={newsCardExampleCode}
              >
                <NewsCard {...newsCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="NewsList"
                description="A stacked list of news cards."
                code={newsListExampleCode}
              >
                <NewsList {...newsListExample} />
              </ComponentBlock>

              <ComponentBlock
                title="CalendarItem"
                description="A public calendar item for liturgies, events, meetings, and office closures."
                code={calendarItemExampleCode}
              >
                <CalendarItem {...calendarItemExample} />
              </ComponentBlock>

              <ComponentBlock
                title="CalendarTabs"
                description="Tabbed public calendar display for upcoming, liturgical, and meeting events."
                code={calendarTabsExampleCode}
              >
                <CalendarTabs {...calendarTabsExample} />
              </ComponentBlock>

              <ComponentBlock
                title="PressReleaseCard"
                description="A formal press release card for diocesan and institutional communications."
                code={pressReleaseCardExampleCode}
              >
                <PressReleaseCard {...pressReleaseCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="PressOfficeNotice"
                description="A formal press office notice for official communications."
                code={pressOfficeNoticeExampleCode}
              >
                <PressOfficeNotice {...pressOfficeNoticeExample} />
              </ComponentBlock>

              <ComponentBlock
                title="MediaCard"
                description="A general media card for image-backed media records."
                code={mediaCardExampleCode}
              >
                <MediaCard {...mediaCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="VideoCard"
                description="A video card for YouTube, Vatican News, CMS, or database-provided iframe URLs."
                code={videoCardExampleCode}
              >
                <VideoCard {...videoCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="PhotoGalleryCard"
                description="A gallery card for event albums, diocesan newsrooms, parish media, and archives."
                code={photoGalleryCardExampleCode}
              >
                <PhotoGalleryCard {...photoGalleryCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="InstitutionalFooter"
                description="Formal footer for Catholic institutional websites."
                code={institutionalFooterExampleCode}
              >
                <InstitutionalFooter
                  title={institutionalFooterExample.title}
                  description={institutionalFooterExample.description}
                  links={[...institutionalFooterExample.links]}
                />
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="liturgy" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Liturgy
                </Heading>
                <Text tone="muted">
                  Components for liturgical days, seasons, colors, feast days, reading references,
                  and worship-centered Catholic interfaces.
                </Text>
              </Stack>

              <ComponentBlock
                title="FeastDayHero"
                description="A hero treatment for solemnities, feast days, and parish liturgical emphasis."
                code={feastDayHeroExampleCode}
              >
                <FeastDayHero
                  title={feastDayHeroExample.title}
                  date={feastDayHeroExample.date}
                  season={feastDayHeroExample.season}
                  color={feastDayHeroExample.color}
                  rank={feastDayHeroExample.rank}
                  description={feastDayHeroExample.description}
                  actionHref={feastDayHeroExample.actionHref}
                  actionLabel={feastDayHeroExample.actionLabel}
                  source={feastDayHeroExample.source}
                />
              </ComponentBlock>

              <ComponentBlock
                title="LiturgicalDayCard"
                description="A compact card for a liturgical day with season, rank, color, readings, and source metadata."
                code={liturgicalDayExampleCode}
              >
                <LiturgicalDayCard
                  title={liturgicalDayExample.title}
                  date={liturgicalDayExample.date}
                  season={liturgicalDayExample.season}
                  color={liturgicalDayExample.color}
                  rank={liturgicalDayExample.rank}
                  description={liturgicalDayExample.description}
                  readings={liturgicalDayExample.readings}
                  source={liturgicalDayExample.source}
                />
              </ComponentBlock>

              <ComponentBlock
                title="ReadingReference"
                description="A citation display for lectionary readings and future Bible API data."
                code={readingReferenceExampleCode}
              >
                <ReadingReference
                  label={readingReferenceExample.label}
                  citation={readingReferenceExample.citation}
                  book={readingReferenceExample.book}
                  chapter={readingReferenceExample.chapter}
                  verses={readingReferenceExample.verses}
                  translation={readingReferenceExample.translation}
                  source={readingReferenceExample.source}
                />
              </ComponentBlock>

              <ComponentBlock
                title="LiturgicalSeasonBadge"
                description="A season badge paired with a liturgical color."
                code={liturgicalSeasonBadgeExampleCode}
              >
                <LiturgicalSeasonBadge
                  season={liturgicalSeasonBadgeExample.season}
                  color={liturgicalSeasonBadgeExample.color}
                />
              </ComponentBlock>

              <ComponentBlock
                title="LiturgicalColorDot"
                description="A small liturgical color indicator for calendars, schedules, and feast cards."
                code={liturgicalColorDotExampleCode}
              >
                <Cluster gap="sm" align="center">
                  <LiturgicalColorDot
                    color={liturgicalColorDotExample.color}
                    label={liturgicalColorDotExample.label}
                  />
                  <Text>{liturgicalColorDotExample.label}</Text>
                </Cluster>
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="documents-authority" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Documents & authority
                </Heading>
                <Text tone="muted">
                  Components for Church documents, official notices, archives, citations,
                  canonical sources, source trails, prayer, scripture, and machine-readable trust.
                </Text>
              </Stack>

              <ComponentBlock
                title="ChurchDocumentHeader"
                description="A formal header for papal, diocesan, parish, canonical, and source-backed document pages."
                code={churchDocumentHeaderExampleCode}
              >
                <ChurchDocumentHeader {...churchDocumentExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ChurchDocumentCard"
                description="A reusable card for document search results, related documents, and archive lists."
                code={churchDocumentCardExampleCode}
              >
                <ChurchDocumentCard {...churchDocumentExample} />
              </ComponentBlock>

              <ComponentBlock
                title="DocumentMetadata"
                description="A structured metadata row for date, authority, type, language, and source."
                code={documentMetadataExampleCode}
              >
                <DocumentMetadata items={churchDocumentMetadataExample.items} />
              </ComponentBlock>

              <ComponentBlock
                title="DocumentAuthorityBadge"
                description="A badge for source authority such as pope, bishop, diocese, parish, canon law, or scripture."
                code={documentAuthorityBadgeExampleCode}
              >
                <DocumentAuthorityBadge {...documentAuthorityBadgeExample} />
              </ComponentBlock>

              <ComponentBlock
                title="DocumentTypeBadge"
                description="A type badge for encyclicals, decrees, pastoral letters, policies, forms, and sources."
                code={documentTypeBadgeExampleCode}
              >
                <DocumentTypeBadge {...documentTypeBadgeExample} />
              </ComponentBlock>

              <ComponentBlock
                title="DocumentCitation"
                description="A citation display for canonical, magisterial, and archival references."
                code={documentCitationExampleCode}
              >
                <DocumentCitation {...documentCitationExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ParagraphAnchor"
                description="An anchorable numbered paragraph for document pages and canonical references."
                code={paragraphAnchorExampleCode}
              >
                <ParagraphAnchor
                  id={paragraphAnchorExample.id}
                  number={paragraphAnchorExample.number}
                  href={paragraphAnchorExample.href}
                >
                  {paragraphAnchorExample.children}
                </ParagraphAnchor>
              </ComponentBlock>

              <ComponentBlock
                title="FootnoteList"
                description="A document footnote list for source references and backlinks."
                code={footnoteListExampleCode}
              >
                <FootnoteList title={footnoteListExample.title} items={footnoteListExample.items} />
              </ComponentBlock>

              <ComponentBlock
                title="RelatedDocuments"
                description="A related-document stack using ChurchDocumentCard for source continuity."
                code={relatedDocumentsExampleCode}
              >
                <RelatedDocuments title={relatedDocumentsExample.title} documents={relatedDocumentsExample.documents} />
              </ComponentBlock>

              <ComponentBlock
                title="ArchiveSearchResult"
                description="A search result component for Vatican-style, diocesan, parish, and canonical archives."
                code={archiveSearchResultExampleCode}
              >
                <ArchiveSearchResult {...archiveSearchResultExample} />
              </ComponentBlock>

              <ComponentBlock
                title="DownloadLink"
                description="A formal download affordance for official PDFs, HTML files, forms, and source documents."
                code={downloadLinkExampleCode}
              >
                <DownloadLink {...downloadLinkExample} />
              </ComponentBlock>

              <ComponentBlock
                title="FileTypeIcon"
                description="A compact file-type indicator for downloads and archive results."
                code={fileTypeIconExampleCode}
              >
                <FileTypeIcon {...fileTypeIconExample} />
              </ComponentBlock>

              <ComponentBlock
                title="SourceCard"
                description="A canonical source card for official Church, diocesan, parish, canon law, or scripture sources."
                code={sourceCardExampleCode}
              >
                <SourceCard {...sourceCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="CitationTrail"
                description="A source trail showing how a claim or document connects across official references."
                code={citationTrailExampleCode}
              >
                <CitationTrail title={citationTrailExample.title} items={citationTrailExample.items} />
              </ComponentBlock>

              <ComponentBlock
                title="CanonicalReference"
                description="A stable reference component for canon law, scripture, semantic canon, and dataset identifiers."
                code={canonicalReferenceExampleCode}
              >
                <CanonicalReference {...canonicalReferenceExample} />
              </ComponentBlock>

              <ComponentBlock
                title="OfficialNoticeCard"
                description="A formal official notice card for diocesan, parish, school, or institutional announcements."
                code={officialNoticeCardExampleCode}
              >
                <OfficialNoticeCard {...officialNoticeCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="PrayerBlock"
                description="A formal prayer block for devotionals, liturgical pages, and source-backed prayer datasets."
                code={prayerBlockExampleCode}
              >
                <PrayerBlock {...prayerBlockExample} />
              </ComponentBlock>

              <ComponentBlock
                title="BiblePassageCard"
                description="A scripture passage display for Bible API and lectionary integrations."
                code={biblePassageCardExampleCode}
              >
                <BiblePassageCard {...biblePassageCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="CanonicalSourceCard"
                description="A canonical source card for official documents, semantic sources, datasets, and machine-readable Catholic references."
                code={canonicalSourceCardExampleCode}
              >
                <CanonicalSourceCard {...canonicalSourceCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="AuthorityLevelBadge"
                description="A badge for official, magisterial, canonical, scholarly, dataset, semantic, local, machine, and unreviewed authority levels."
                code={authorityLevelBadgeExampleCode}
              >
                <AuthorityLevelBadge {...authorityLevelBadgeExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ProvenanceTrail"
                description="A visible source trail from official source through canonical normalization to machine-readable export."
                code={provenanceTrailExampleCode}
              >
                <ProvenanceTrail {...provenanceTrailExample} />
              </ComponentBlock>

              <ComponentBlock
                title="MachineReadableBadge"
                description="A badge showing whether a source, dataset, or canonical record is available to software."
                code={machineReadableBadgeExampleCode}
              >
                <MachineReadableBadge {...machineReadableBadgeExample} />
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="directories" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Directories
                </Heading>
                <Text tone="muted">
                  Components for Catholic directories, filters, date ranges, names,
                  clergy, parishes, schools, offices, saints, pontiffs, and institutional records.
                </Text>
              </Stack>

              <ComponentBlock
                title="InstitutionalDirectory"
                description="A reusable directory shell built from Directory and DirectoryCard."
                code={institutionalDirectoryExampleCode}
              >
                <InstitutionalDirectory
                  title={institutionalDirectoryExample.title}
                  description={institutionalDirectoryExample.description}
                  items={institutionalDirectoryExample.items}
                  filter={<DirectoryFilter {...directoryFilterExample} />}
                />
              </ComponentBlock>

              <ComponentBlock
                title="DirectoryFilter"
                description="A filter row for directory search and category filtering."
                code={directoryFilterExampleCode}
              >
                <DirectoryFilter {...directoryFilterExample} />
              </ComponentBlock>

              <ComponentBlock
                title="DateRangeLabel"
                description="A compact date range label for pontificates, tenures, archives, and historical directories."
                code={dateRangeLabelExampleCode}
              >
                <DateRangeLabel {...dateRangeLabelExample} />
              </ComponentBlock>

              <ComponentBlock
                title="CenturyFilter"
                description="A select control for historical directories such as pontiffs, saints, and councils."
                code={centuryFilterExampleCode}
              >
                <CenturyFilter {...centuryFilterExample} />
              </ComponentBlock>

              <ComponentBlock
                title="NameFilter"
                description="A directory search input specialized for names."
                code={nameFilterExampleCode}
              >
                <NameFilter {...nameFilterExample} />
              </ComponentBlock>

              <ComponentBlock
                title="PontiffDirectory"
                description="A Vatican-style pontiff directory with name and century filters."
                code={pontiffDirectoryExampleCode}
              >
                <PontiffDirectory
                  title={pontiffDirectoryExample.title}
                  description={pontiffDirectoryExample.description}
                  centuries={pontiffDirectoryExample.centuries}
                  pontiffs={pontiffDirectoryExample.pontiffs}
                />
              </ComponentBlock>

              <ComponentBlock
                title="PontiffCard"
                description="A formal card for pontiff records and pontificate date ranges."
                code={pontiffCardExampleCode}
              >
                <PontiffCard {...pontiffCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ClergyDirectory"
                description="A directory wrapper for priests, deacons, and religious."
                code={clergyDirectoryExampleCode}
              >
                <ClergyDirectory {...clergyDirectoryExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ParishDirectory"
                description="A parish and mission directory wrapper."
                code={parishDirectoryExampleCode}
              >
                <ParishDirectory {...parishDirectoryExample} />
              </ComponentBlock>

              <ComponentBlock
                title="SchoolDirectory"
                description="A Catholic schools directory wrapper."
                code={schoolDirectoryExampleCode}
              >
                <SchoolDirectory {...schoolDirectoryExample} />
              </ComponentBlock>

              <ComponentBlock
                title="OfficeDirectory"
                description="A chancery and diocesan office directory wrapper."
                code={officeDirectoryExampleCode}
              >
                <OfficeDirectory {...officeDirectoryExample} />
              </ComponentBlock>

              <ComponentBlock
                title="SaintDirectory"
                description="A directory wrapper for saints, blesseds, feast records, and historical filters."
                code={saintDirectoryExampleCode}
              >
                <SaintDirectory {...saintDirectoryExample} />
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="catholic-data-infrastructure" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl" className="docs-component-list">
              <Stack gap="sm" className="docs-section-intro">
                <Heading level={2} size="2xl">
                  Catholic data infrastructure
                </Heading>
                <Text tone="muted">
                  Components for Catholic open-source infrastructure: projects, APIs,
                  datasets, repositories, standards, ontologies, semantic records,
                  translations, contributors, and entity graphs.
                </Text>
              </Stack>

              <ComponentBlock
                title="ProjectCard"
                description="A public face for a Catholic infrastructure project, API, dataset, ontology, standard, tool, or repository."
                code={projectCardExampleCode}
              >
                <ProjectCard {...projectCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ProjectStatusBadge"
                description="A lifecycle badge for proposed, incubating, active, maintained, reviewed, accepted, or deprecated projects."
                code={projectStatusBadgeExampleCode}
              >
                <ProjectStatusBadge {...projectStatusBadgeExample} />
              </ComponentBlock>

              <ComponentBlock
                title="RepositoryLink"
                description="A repository link with provider, language, license, and issue metadata."
                code={repositoryLinkExampleCode}
              >
                <RepositoryLink {...repositoryLinkExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ContributorList"
                description="A contributor list for maintainers, reviewers, implementers, and institutional collaborators."
                code={contributorListExampleCode}
              >
                <ContributorList {...contributorListExample} />
              </ComponentBlock>

              <ComponentBlock
                title="DatasetCard"
                description="A dataset face component with coverage, format, license, version, source, and machine-readable status."
                code={datasetCardExampleCode}
              >
                <DatasetCard {...datasetCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ApiEndpointCard"
                description="An API endpoint component for public Catholic APIs and machine-readable services."
                code={apiEndpointCardExampleCode}
              >
                <ApiEndpointCard {...apiEndpointCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="OntologyClassCard"
                description="A class card for Catholic Semantic Canon or OntoKit-style ontology records."
                code={ontologyClassCardExampleCode}
              >
                <OntologyClassCard {...ontologyClassCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="OntologyPropertyTable"
                description="A property table for ontology classes, schemas, and structured Catholic datasets."
                code={ontologyPropertyTableExampleCode}
              >
                <OntologyPropertyTable properties={ontologyPropertyTableExample.properties} />
              </ComponentBlock>

              <ComponentBlock
                title="NamespaceBadge"
                description="A namespace badge for semantic vocabularies and Catholic data domains."
                code={namespaceBadgeExampleCode}
              >
                <NamespaceBadge {...namespaceBadgeExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ReviewStatusBadge"
                description="A review badge for draft, in-review, reviewed, accepted, and deprecated semantic records."
                code={reviewStatusBadgeExampleCode}
              >
                <ReviewStatusBadge {...reviewStatusBadgeExample} />
              </ComponentBlock>

              <ComponentBlock
                title="TermDefinitionCard"
                description="A term definition card for semantic canon entries, glossaries, and ontology-backed terms."
                code={termDefinitionCardExampleCode}
              >
                <TermDefinitionCard {...termDefinitionCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="TranslationVariantCard"
                description="A translation variant card for multilingual Catholic terminology."
                code={translationVariantCardExampleCode}
              >
                <TranslationVariantCard {...translationVariantCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="SemanticRelationGraph"
                description="A composed graph interface showing entities and relationships together."
                code={semanticRelationGraphExampleCode}
              >
                <SemanticRelationGraph {...semanticRelationGraphExample} />
              </ComponentBlock>

              <ComponentBlock
                title="EntityCard"
                description="A compact card for a Catholic semantic entity."
                code={entityCardExampleCode}
              >
                <EntityCard {...entityCardExample} />
              </ComponentBlock>

              <ComponentBlock
                title="EntityRelationshipList"
                description="A readable list of semantic relationships between Catholic entities."
                code={entityRelationshipListExampleCode}
              >
                <EntityRelationshipList {...entityRelationshipListExample} />
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

      </div>
    </main>
  );
}

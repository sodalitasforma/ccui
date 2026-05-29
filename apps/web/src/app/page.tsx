import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
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
  Table,
  TableWrapper,
  TBody,
  TD,
  TH,
  THead,
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  TR,
  Tag,
  Text,
} from "../../../../packages/primitives/src";

import {
  AnnouncementBanner,
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
  DonationCallout,
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
  Breadcrumb,
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
} from "../../../../packages/catholic/src";

import {
  accordionExamples,
  announcementBannerExample,
  buttonExamples,
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
  donationCalloutExample,
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
} from "./docs/examples";
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
  donationCalloutExampleCode,
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
} from "./docs/codegen";

import colors from "../../../../packages/tokens/src/colors.json";
import liturgicalColors from "../../../../packages/tokens/src/liturgical-colors.json";

type Primitive = {
  name: string;
  description: string;
  status: "Added";
  category: "Layout" | "Typography" | "Surface" | "Action" | "Forms" | "Data" | "Media";
};

const primitives: Primitive[] = [
  { name: "Container", description: "Centers page content at stable institutional widths.", status: "Added", category: "Layout" },
  { name: "Section", description: "Applies page, subtle, parchment, raised, or dark surfaces.", status: "Added", category: "Layout" },
  { name: "Stack", description: "Vertical rhythm using spacing tokens.", status: "Added", category: "Layout" },
  { name: "Cluster", description: "Inline wrapping groups for actions, metadata, and nav.", status: "Added", category: "Layout" },
  { name: "Grid", description: "Responsive card and directory layouts.", status: "Added", category: "Layout" },
  { name: "Text", description: "Body copy with text-safe semantic tones.", status: "Added", category: "Typography" },
  { name: "Heading", description: "Serif, document, interface, and inscriptional heading styles.", status: "Added", category: "Typography" },
  { name: "Eyebrow", description: "Uppercase institutional section labels.", status: "Added", category: "Typography" },
  { name: "Card", description: "Restrained raised content surface.", status: "Added", category: "Surface" },
  { name: "Panel", description: "Grouped institutional module surface.", status: "Added", category: "Surface" },
  { name: "Divider", description: "Subtle, strong, gold, and active separators.", status: "Added", category: "Surface" },
  { name: "Notice", description: "Official, liturgical, warning, danger, success, and info notices.", status: "Added", category: "Surface" },
  { name: "Button", description: "Primary, secondary, gold, ghost, and danger actions.", status: "Added", category: "Action" },
  { name: "Link", description: "Brown-first institutional links.", status: "Added", category: "Action" },
  { name: "Badge", description: "Compact status, season, and category labels.", status: "Added", category: "Action" },
  { name: "Tag", description: "Lightweight filter and metadata labels.", status: "Added", category: "Action" },
  { name: "SearchInput", description: "Search field for directories and archives.", status: "Added", category: "Forms" },
  { name: "Select", description: "Native select styled for filters and language controls.", status: "Added", category: "Forms" },
  { name: "FilterBar", description: "Composed search/filter/action row.", status: "Added", category: "Forms" },
  { name: "Tabs", description: "News, calendar, and section switching.", status: "Added", category: "Data" },
  { name: "Accordion", description: "Disclosure sections for menus and structured details.", status: "Added", category: "Data" },
  { name: "Table", description: "Dense institutional records and metadata.", status: "Added", category: "Data" },
  { name: "Timeline", description: "Historical, sacramental, and project chronology.", status: "Added", category: "Data" },
  { name: "EmptyState", description: "Sober blank states for unpublished records.", status: "Added", category: "Data" },
  { name: "IconFrame", description: "Restrained framed icon container.", status: "Added", category: "Media" },
  { name: "MediaFrame", description: "Formal image, video, and hero media frame.", status: "Added", category: "Media" },
];

const categories = ["Layout", "Typography", "Surface", "Action", "Forms", "Data", "Media"] as const;

const rawColors = colors.color.raw as Record<string, string>;
const semanticColors = colors.color.semantic as Record<string, string>;

function resolveColor(value: string) {
  const match = value.match(/^\{color\.raw\.(.+)\}$/);
  if (!match) return value;
  return rawColors[match[1]] || value;
}

function Code({ children }: { children: string }) {
  return <code className="docs-code">{children}</code>;
}

function ComponentBlock({
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
    <section className="docs-block">
      <Stack gap="sm">
        <Cluster justify="between" align="start">
          <Stack gap="xs">
            <Heading level={2} size="xl" family="interface">
              {title}
            </Heading>
            <Text tone="muted">{description}</Text>
          </Stack>
          <Badge variant="success">Added</Badge>
        </Cluster>

        <Card padding="lg" border="subtle" className="docs-preview">
          {children}
        </Card>

        <pre className="docs-pre">
          <code>{code}</code>
        </pre>
      </Stack>
    </section>
  );
}

function ColorRow({ name, value }: { name: string; value: string }) {
  const resolved = resolveColor(value);

  return (
    <div className="docs-token-row">
      <div className="docs-color-chip" style={{ background: resolved }} aria-hidden="true" />
      <div>
        <Text as="p" size="sm">
          {name}
        </Text>
        <Text as="p" size="xs" tone="muted">
          {value}
        </Text>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="docs-shell">
      <aside className="docs-sidebar">
        <Stack gap="lg">
          <Stack gap="xs">
            <Text as="p" size="md">
              Forma
            </Text>
            <Text as="p" size="xs" tone="muted">
              Catholic UI Kit
            </Text>
          </Stack>

          <nav className="docs-nav" aria-label="Documentation">
            <a href="#introduction">Introduction</a>
            <a href="#colors">Colors</a>
            <a href="#components">Components</a>
            <a href="#examples">Examples</a>
            <a href="#liturgical">Liturgical</a>
          </nav>

          <Divider />

          <Stack gap="xs">
            <a className="docs-nav-small" href="#examples">Phase 2 primitives</a>
            <a className="docs-nav-small" href="#institutional">Phase 3 institutional</a>
            <a className="docs-nav-small" href="#parish-schedules">Phase 4 parish schedules</a>
            <a className="docs-nav-small" href="#liturgical-identity">Phase 4 liturgical identity</a>
            <a className="docs-nav-small" href="#parish-content">Phase 4 parish content</a>
            <a className="docs-nav-small" href="#church-documents">Phase 5 documents</a>
            <a className="docs-nav-small" href="#document-archive-mechanics">Phase 5 archive mechanics</a>
            <a className="docs-nav-small" href="#source-citation-scripture">Phase 5 sources</a>
            <a className="docs-nav-small" href="#directory-infrastructure">Phase 6 directories</a>
            <a className="docs-nav-small" href="#specific-directories">Phase 6 specific directories</a>
            <a className="docs-nav-small" href="#news-calendar">Phase 7 news/calendar</a>
            <a className="docs-nav-small" href="#media-components">Phase 7 media</a>
            <a className="docs-nav-small" href="#catholic-infrastructure-projects">Phase 8 infrastructure</a>
            <a className="docs-nav-small" href="#ontology-schema-components">Phase 8 ontology/schema</a>
            <a className="docs-nav-small" href="#liturgical">Liturgical color tokens</a>
          </Stack>
        </Stack>
      </aside>

      <div className="docs-main">
        <Section id="introduction" surface="page" spacing="lg">
          <Container size="lg">
            <Stack gap="lg">
              <Cluster gap="sm">
                <Badge variant="gold">v0.0.1</Badge>
                <Tag variant="brown">Phase 2 complete</Tag>
                <Tag variant="active">26 primitives</Tag>
              </Cluster>

              <Stack gap="sm">
                <Heading level={1} size="4xl" family="display">
                  Components
                </Heading>
                <Text size="lg" tone="secondary" className="docs-lede">
                  Beautiful, accessible, token-bound primitives for Catholic
                  institutions. Built from a Vatican-informed visual grammar,
                  corrected into a reusable design system.
                </Text>
              </Stack>

              <Cluster gap="sm">
                <Button>Get started</Button>
                <Button variant="secondary">View registry</Button>
              </Cluster>
            </Stack>
          </Container>
        </Section>

        <Section id="colors" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Eyebrow>Foundations</Eyebrow>
                <Heading level={2} size="2xl">
                  Colors
                </Heading>
                <Text tone="muted">
                  Vatican-derived institutional colors, corrected into semantic
                  tokens for accessible Catholic interfaces.
                </Text>
              </Stack>

              <Grid columns="2" gap="lg">
                <Panel surface="raised" padding="md">
                  <Stack gap="md">
                    <Heading level={3} size="lg" family="interface">
                      Semantic colors
                    </Heading>
                    <Stack gap="xs">
                      {Object.entries(semanticColors)
                        .slice(0, 14)
                        .map(([name, value]) => (
                          <ColorRow key={name} name={name} value={String(value)} />
                        ))}
                    </Stack>
                  </Stack>
                </Panel>

                <Panel surface="raised" padding="md">
                  <Stack gap="md">
                    <Heading level={3} size="lg" family="interface">
                      Raw palette
                    </Heading>
                    <Stack gap="xs">
                      {Object.entries(rawColors)
                        .slice(0, 14)
                        .map(([name, value]) => (
                          <ColorRow key={name} name={name} value={String(value)} />
                        ))}
                    </Stack>
                  </Stack>
                </Panel>
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section id="examples" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Show, don’t tell</Eyebrow>
                <Heading level={2} size="2xl">
                  Examples
                </Heading>
              </Stack>

              <ComponentBlock
                title="Button"
                description="Primary, secondary, gold, ghost, and danger actions."
                code={buttonExamplesCode}
              >
                <Cluster gap="sm">
                  {buttonExamples.map((button) => (
                    <Button key={button.label} variant={button.variant}>
                      {button.label}
                    </Button>
                  ))}
                </Cluster>
              </ComponentBlock>

              <ComponentBlock
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

              <ComponentBlock
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
                title="Timeline"
                description="A vertical sequence for process steps, project history, sacramental preparation, or institutional chronology."
                code={timelineExamplesCode}
              >
                <Timeline>
                  {timelineExamples.map((item) => (
                    <TimelineItem key={item.title}>
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
                  ))}
                </Timeline>
              </ComponentBlock>

              <ComponentBlock
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

        <Section id="liturgical" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="sm">
                <Eyebrow>Foundations</Eyebrow>
                <Heading level={2} size="2xl">
                  Liturgical color tokens
                </Heading>
              </Stack>

              <Grid columns="2" gap="md">
                {liturgicalColors.liturgicalColors.map((item) => (
                  <Card key={item.token} padding="md" border="subtle">
                    <Cluster align="start">
                      <div
                        className="docs-liturgical-dot"
                        style={{
                          background: `var(--forma-${item.token.replace(".", "-")})`,
                        }}
                        aria-hidden="true"
                      />
                      <Stack gap="xs">
                        <Text as="p" size="md">
                          {item.name}
                        </Text>
                        <Text as="p" size="xs" tone="muted">
                          {item.token}
                        </Text>
                        <Text as="p" size="sm" tone="secondary">
                          {item.use}
                        </Text>
                      </Stack>
                    </Cluster>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>


        <Section id="institutional" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 3</Eyebrow>
                <Heading level={2} size="2xl">
                  Institutional components
                </Heading>
                <Text tone="muted">
                  Components for parishes, dioceses, chancery offices, Catholic schools, ministries, foundations, and public-facing Church institutions.
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
                  utilityItems={[...institutionalHeaderExample.utilityItems]}
                  languages={[...institutionalHeaderExample.languages]}
                  searchAction={institutionalHeaderExample.searchAction}
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

        <Section id="parish-schedules" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="lg">
              <Stack gap="xs">
                <Eyebrow tone="gold">Phase 4</Eyebrow>
                <Heading level={2} size="2xl">
                  Parish schedule components
                </Heading>
                <Text tone="secondary">
                  Schedule components are built from existing primitives and shaped for future CDCF data sources such as liturgical calendars, parish datasets, and public Catholic APIs.
                </Text>
              </Stack>

              <Grid columns="1" gap="lg">
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
              </Grid>
            </Stack>
          </Container>
        </Section>

        <Section id="liturgical-identity" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 4</Eyebrow>
                <Heading level={2} size="2xl">
                  Liturgical identity components
                </Heading>
                <Text tone="muted">
                  Components for displaying liturgical days, seasons, colors, feast days, and reading references from future CDCF data sources.
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

        <Section id="parish-content" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 4</Eyebrow>
                <Heading level={2} size="2xl">
                  Parish content and action components
                </Heading>
                <Text tone="muted">
                  Components for prayer, announcements, bulletins, ministries, giving, and parish contact details.
                </Text>
              </Stack>

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
                title="DonationCallout"
                description="A giving callout for parish campaigns, restoration funds, and recurring support."
                code={donationCalloutExampleCode}
              >
                <DonationCallout {...donationCalloutExample} />
              </ComponentBlock>

              <ComponentBlock
                title="ParishContactCard"
                description="A parish contact composition reusing ContactBlock, OfficeHours, and LocationBlock."
                code={parishContactCardExampleCode}
              >
                <ParishContactCard {...parishContactCardExample} />
              </ComponentBlock>
            </Stack>
          </Container>
        </Section>

        <Section id="church-documents" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 5</Eyebrow>
                <Heading level={2} size="2xl">
                  Church document identity components
                </Heading>
                <Text tone="muted">
                  Components for Church documents, official notices, Vatican-style archives, citations, and canonical source display.
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
            </Stack>
          </Container>
        </Section>

        <Section id="document-archive-mechanics" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 5</Eyebrow>
                <Heading level={2} size="2xl">
                  Document body and archive mechanics
                </Heading>
                <Text tone="muted">
                  Components for anchored paragraphs, footnotes, related documents, archive results, downloads, and file indicators.
                </Text>
              </Stack>

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
            </Stack>
          </Container>
        </Section>

        <Section id="source-citation-scripture" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 5</Eyebrow>
                <Heading level={2} size="2xl">
                  Source, citation, prayer, and scripture components
                </Heading>
                <Text tone="muted">
                  Components for canonical sources, citation trails, official notices, prayers, and Bible passages.
                </Text>
              </Stack>

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
            </Stack>
          </Container>
        </Section>

        <Section id="directory-infrastructure" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 6</Eyebrow>
                <Heading level={2} size="2xl">
                  Directory infrastructure components
                </Heading>
                <Text tone="muted">
                  Components for Vatican-style Catholic directories, filters, date ranges, names, and institutional record lists.
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
            </Stack>
          </Container>
        </Section>

        <Section id="specific-directories" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 6</Eyebrow>
                <Heading level={2} size="2xl">
                  Specific Catholic directory components
                </Heading>
                <Text tone="muted">
                  Thin Catholic-specific wrappers around the shared directory infrastructure.
                </Text>
              </Stack>

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

        <Section id="news-calendar" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 7</Eyebrow>
                <Heading level={2} size="2xl">
                  News and calendar components
                </Heading>
                <Text tone="muted">
                  Components for parish notices, diocesan newsrooms, public calendars, and institutional communication.
                </Text>
              </Stack>

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
            </Stack>
          </Container>
        </Section>

        <Section id="media-components" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 7</Eyebrow>
                <Heading level={2} size="2xl">
                  Media components
                </Heading>
                <Text tone="muted">
                  Components for photo galleries, videos, media archives, Vatican News links, CMS records, and database-provided media URLs.
                </Text>
              </Stack>

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
            </Stack>
          </Container>
        </Section>

        <Section id="catholic-infrastructure-projects" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 8</Eyebrow>
                <Heading level={2} size="2xl">
                  Catholic infrastructure project components
                </Heading>
                <Text tone="muted">
                  These components are an interface layer for Catholic open-source infrastructure: projects, APIs, datasets, repositories, standards, and machine-readable resources. They complement CDCF-style work without redesigning an existing project website.
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
            </Stack>
          </Container>
        </Section>

        <Section id="ontology-schema-components" surface="page" spacing="md">
          <Container size="lg">
            <Stack gap="xl">
              <Stack gap="sm">
                <Eyebrow>Phase 8</Eyebrow>
                <Heading level={2} size="2xl">
                  Ontology and schema components
                </Heading>
                <Text tone="muted">
                  Components for making Catholic semantic infrastructure legible: namespaces, ontology classes, properties, definitions, translations, and review status.
                </Text>
              </Stack>

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
            </Stack>
          </Container>
        </Section>

      </div>
    </main>
  );
}

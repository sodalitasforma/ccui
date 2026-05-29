# Roadmap

## Phase 0 — Public infrastructure foundation

- ✅ Repository structure
- ✅ README, license, contribution, security, governance, and roadmap files
- ✅ Initial component registry
- ✅ Initial design token files
- ✅ Local inspection workflow for reference sites

## Phase 1 — Visual grammar

- ✅ Vatican/Holy See reference audit
- ✅ Vatican-derived institutional color tokens
- ✅ Typography system
- ✅ Parchment, paper, brown, ink, and gold tokens
- ✅ Liturgical color tokens
- ✅ Radius, border, and shadow tokens
- ✅ Accessibility contrast review

## Phase 2 — Core primitives

These are the minimum building blocks needed before Catholic-specific components become useful.

- ✅ Container
- ✅ Section
- ✅ Stack
- ✅ Cluster
- ✅ Grid
- ✅ Card
- ✅ Panel
- ✅ Divider
- ✅ Text
- ✅ Heading
- ✅ Eyebrow
- ✅ Button
- ✅ Link
- ✅ Badge
- ✅ Tag
- ✅ Tabs
- ✅ Accordion
- ✅ SearchInput
- ✅ Select
- ✅ FilterBar
- ✅ Table
- ✅ Timeline
- ✅ EmptyState
- ✅ Notice
- ✅ IconFrame
- ✅ MediaFrame

## Phase 3 — Institutional components

These support parishes, dioceses, chancery offices, Catholic schools, ministries, foundations, and public-facing Church institutions.

- InstitutionalHeader
- InstitutionalFooter
- PrimaryNav
- UtilityNav
- LanguageNav
- FullscreenMenu
- SearchTool
- Breadcrumb
- PageHeader
- Directory
- DirectoryCard
- ContactBlock
- OfficeHours
- LocationBlock
- StaffProfile
- ClergyProfile
- AnnouncementBanner
- DocumentList
- DocumentCard
- ResourceLink
- EventList
- EventCard

## Phase 4 — Parish and liturgical components

These are the first Catholic-native components churches will actually need.

- MassScheduleBlock
- MassTimeRow
- ConfessionScheduleBlock
- AdorationScheduleBlock
- SacramentScheduleBlock
- HolyDayScheduleBlock
- ExceptionNotice
- LiturgicalDayCard
- LiturgicalSeasonBadge
- LiturgicalColorDot
- FeastDayHero
- ReadingReference
- PrayerCard
- ParishAnnouncementCard
- BulletinCard
- MinistryCard
- DonationCallout
- ParishContactCard

## Phase 5 — Documents, archives, and magisterium

These support Church documents, diocesan records, Vatican-style archives, official notices, citations, and canonical source display.

- ChurchDocumentHeader
- ChurchDocumentCard
- DocumentCitation
- DocumentMetadata
- DocumentAuthorityBadge
- DocumentTypeBadge
- ParagraphAnchor
- FootnoteList
- SourceCard
- CitationTrail
- RelatedDocuments
- ArchiveSearchResult
- DownloadLink
- FileTypeIcon
- CanonicalReference
- OfficialNoticeCard
- PrayerBlock
- BiblePassageCard

## Phase 6 — Directories

The Vatican homepage strongly suggests directory primitives as first-class Catholic infrastructure.

- InstitutionalDirectory
- DirectoryFilter
- DateRangeLabel
- PontiffDirectory
- PontiffCard
- CenturyFilter
- NameFilter
- ClergyDirectory
- ParishDirectory
- SchoolDirectory
- OfficeDirectory
- SaintDirectory

## Phase 7 — Media, news, and calendar

These support parish notices, diocesan newsrooms, Vatican-style media pages, public calendars, and institutional communication.

- NewsCard
- NewsList
- CalendarTabs
- CalendarItem
- PhotoGalleryCard
- VideoCard
- MediaCard
- FeaturedStory
- PressReleaseCard
- PressOfficeNotice

## Phase 8 — CDCF project mappings

These components map Forma to Catholic Digital Commons Foundation-style projects, APIs, ontologies, datasets, and semantic infrastructure.

- ProjectCard
- ProjectStatusBadge
- RepositoryLink
- ContributorList
- DatasetCard
- ApiEndpointCard
- OntologyClassCard
- OntologyPropertyTable
- NamespaceBadge
- ReviewStatusBadge
- CanonicalSourceCard
- SemanticRelationGraph
- EntityCard
- EntityRelationshipList
- TermDefinitionCard
- TranslationVariantCard
- AuthorityLevelBadge
- ProvenanceTrail
- MachineReadableBadge

Initial mappings:

- Liturgical Calendar API → LiturgicalDayCard / LiturgicalSeasonBadge / CalendarItem
- Bible API → BiblePassageCard / ReadingReference
- Catholic Semantic Canon → SourceCard / CitationTrail / CanonicalSourceCard / AuthorityLevelBadge
- OntoKit → OntologyClassCard / OntologyPropertyTable / NamespaceBadge / ReviewStatusBadge
- Catholic datasets → DatasetCard / EntityCard / EntityRelationshipList
- Open-source projects → ProjectCard / RepositoryLink / ContributorList

## Phase 9 — Gallery and documentation

- Landing page
- Component gallery
- Token gallery
- Usage examples
- GitHub-backed registry display
- Component status display
- Installation documentation
- Accessibility notes

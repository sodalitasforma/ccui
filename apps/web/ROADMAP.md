# Roadmap


## Current operating method — landing-page-driven system refinement

Forma is now moving from component inventory to composed Catholic interfaces.

The landing page is the proving ground. It must be built from the real cascade:

tokens → primitives → Catholic components → landing page / gallery → CDCF implementations

As the landing page is composed, any missing capability should be pushed down into the reusable system:

- If a visual decision repeats, it should become a token or semantic token.
- If a layout pattern repeats, it should become a primitive or primitive prop.
- If a Catholic-specific behavior repeats, it should become a Catholic component prop or new Catholic component.
- If the homepage needs a one-off workaround, pause and decide whether the need belongs lower in the cascade.
- App-level CSS should be limited to page composition, not component styling.
- The component gallery remains the proof surface for the full component inventory.
- The cascade audit must continue to pass with no hard-coded color regressions.

The immediate objective is to finish the landing page, using only Forma tokens, primitives, and Catholic components, while improving the underlying system whenever the page reveals a reusable need.

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
- ✅ FormaSignalBell

## Phase 3 — Institutional components

These support parishes, dioceses, chancery offices, Catholic schools, ministries, foundations, and public-facing Church institutions.

- ✅ InstitutionalHeader
- ✅ InstitutionalFooter
- ✅ PrimaryNav
- ✅ UtilityNav
- ✅ LanguageNav
- ✅ FullscreenMenu
- ✅ SearchTool
- ✅ Breadcrumb
- ✅ PageHeader
- ✅ Directory
- ✅ DirectoryCard
- ✅ ContactBlock
- ✅ OfficeHours
- ✅ LocationBlock
- ✅ StaffProfile
- ✅ ClergyProfile
- ✅ AnnouncementBanner
- ✅ DocumentList
- ✅ DocumentCard
- ✅ ResourceLink
- ✅ EventList
- ✅ EventCard

Phase 3 follow-up polish:

- Make LanguageNav support a Vatican-style spelled-out language dropdown.
- ✅ Improve InstitutionalHeader examples so language, utility, search, and primary navigation are visually separable.
- ✅ Add component documentation examples with one preview and one accurate code block per component.
- ✅ Avoid sample-page blobs inside the docs page unless presented as a full-page composition example.

## Phase 4 — Parish and liturgical components

These are the first Catholic-native components churches will actually need.

Phase 4 should also absorb the parish-specific refinements discovered during Phase 3 documentation review:

- Show multiple Notice / ExceptionNotice variants with matching code examples.
- Add status indicators and action affordances where parish tables need them.
- Ensure schedule tables can show cancellation, moved location, livestream, confession available, and exception states.

- Build parish/liturgical components from existing tokens, primitives, and institutional components where appropriate.

- Add shared Catholic data types before adding visual components.

- Shape component props so they can later consume Liturgical Calendar API, Bible API, Catholic Semantic Canon, OntoKit, and Catholic datasets.

- Avoid one-off CSS unless the style becomes a reusable token or component pattern.

- Docs examples must use shared example data and generated code blocks, audited by the docs-example script.

- ✅ MassScheduleBlock
- ✅ MassTimeRow
- ✅ ConfessionScheduleBlock
- ✅ AdorationScheduleBlock
- ✅ SacramentScheduleBlock
- ✅ HolyDayScheduleBlock
- ✅ ExceptionNotice
- ✅ LiturgicalDayCard
- ✅ LiturgicalSeasonBadge
- ✅ LiturgicalColorDot
- ✅ FeastDayHero
- ✅ ReadingReference
- ✅ PrayerCard
- ✅ ParishAnnouncementCard
- ✅ BulletinCard
- ✅ MinistryCard
- ✅ DonationCallout
- ✅ ParishContactCard
- ✅ ParishNotificationBell
- ✅ AutoTitheCard
- ✅ MassScheduleBlock action slot

## Phase 5 — Documents, archives, and magisterium

These support Church documents, diocesan records, Vatican-style archives, official notices, citations, and canonical source display.

Phase 5 should include a dedicated document/media treatment for papal letters, encyclicals, apostolic letters, diocesan decrees, parish bulletins, official PDFs, source citations, and downloadable files.

- ✅ ChurchDocumentHeader
- ✅ ChurchDocumentCard
- ✅ DocumentCitation
- ✅ DocumentMetadata
- ✅ DocumentAuthorityBadge
- ✅ DocumentTypeBadge
- ✅ ParagraphAnchor
- ✅ FootnoteList
- ✅ SourceCard
- ✅ CitationTrail
- ✅ RelatedDocuments
- ✅ ArchiveSearchResult
- ✅ DownloadLink
- ✅ FileTypeIcon
- ✅ CanonicalReference
- ✅ OfficialNoticeCard
- ✅ PrayerBlock
- ✅ BiblePassageCard

## Phase 6 — Directories

The Vatican homepage strongly suggests directory primitives as first-class Catholic infrastructure.

- ✅ InstitutionalDirectory
- ✅ DirectoryFilter
- ✅ DateRangeLabel
- ✅ PontiffDirectory
- ✅ PontiffCard
- ✅ CenturyFilter
- ✅ NameFilter
- ✅ ClergyDirectory
- ✅ ParishDirectory
- ✅ SchoolDirectory
- ✅ OfficeDirectory
- ✅ SaintDirectory

## Phase 7 — Media, news, and calendar

These support parish notices, diocesan newsrooms, Vatican-style media pages, public calendars, and institutional communication.

Phase 7 should support real embedded media sources. Media examples should make it clear whether media comes from a database, a CMS, YouTube, Vatican News, or another public website URL.

- ✅ NewsCard
- ✅ NewsList
- ✅ CalendarTabs
- ✅ CalendarItem
- ✅ PhotoGalleryCard
- ✅ VideoCard
- ✅ MediaCard
- ✅ FeaturedStory
- ✅ PressReleaseCard
- ✅ PressOfficeNotice

## Phase 8 — CDCF project mappings

These components map Forma to Catholic Digital Commons Foundation-style projects, APIs, ontologies, datasets, and semantic infrastructure.

- ✅ ProjectCard
- ✅ ProjectStatusBadge
- ✅ RepositoryLink
- ✅ ContributorList
- ✅ DatasetCard
- ✅ ApiEndpointCard
- ✅ OntologyClassCard
- ✅ OntologyPropertyTable
- ✅ NamespaceBadge
- ✅ ReviewStatusBadge
- ✅ CanonicalSourceCard
- ✅ SemanticRelationGraph
- ✅ EntityCard
- ✅ EntityRelationshipList
- ✅ TermDefinitionCard
- ✅ TranslationVariantCard
- ✅ AuthorityLevelBadge
- ✅ ProvenanceTrail
- ✅ MachineReadableBadge

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

Documentation polish backlog:

- ✅ Rename the current token section to Colors.
- ✅ Remove the standalone component index section unless it becomes a compact sidebar or registry table.
- ✅ Make docs examples show exactly what each component is, with one component preview and one matching code block.
- ✅ Make code blocks visually distinct from component surfaces.
- Ensure every interactive primitive example actually works: Tabs, Accordion, dropdowns, filters, and future media inputs.
- ✅ Add tasteful accordion indicators, such as plus/minus or chevron states.
- ✅ Add table examples with status indicators, actions, and realistic institutional data.
- ✅ Avoid hard-coded demo-only behavior where a real prop, URL, data object, or registry entry should drive the example.
- ✅ Add programmatic docs-example audit to detect hard-coded or drifting examples.
- ✅ Generate all current docs examples from shared example data.

## Mature documentation outcome

Forma should eventually move from shared example data to source-backed examples:

- Each docs example should live as a real `.tsx` example file.
- The docs page should render that real example file as the live preview.
- The displayed code block should be read directly from that same source file.
- The docs audit should verify that every component example has a source-backed preview and code block.
- This prevents the documentation from drifting away from the actual components.

## Current checkpoint — landing page as system proof

- ✅ Homepage split from component gallery.
- ✅ Landing page now composes real Forma primitives and Catholic components.
- ✅ Parish interface preview added using InstitutionalHeader, FeastDayHero, LiturgicalDayCard, MassScheduleBlock, AutoTitheCard, AnnouncementBanner, EventCard, ContactBlock, and InstitutionalFooter.
- ✅ New primitive added: FormaSignalBell.
- ✅ New Catholic components added: ParishNotificationBell and AutoTitheCard.
- ✅ MassScheduleBlock updated with an action slot after the homepage revealed the need for schedule-level actions.
- ✅ Typecheck passes.
- ✅ Production build passes.
- ✅ Cascade audit passes.
- ✅ Hard-coded color audit remains clean across primitives.css, catholic.css, and globals.css.

Next landing-page work:

- Improve the landing page story so it clearly explains why shadcn/ui is insufficient for Catholic institutions.
- Make the hero more specific to CDCF, parishes, the magisterium, Catholic datasets, and source-backed infrastructure.
- Reduce any remaining app-level styling that should belong to primitives or Catholic components.
- Add one or two stronger CDCF/project infrastructure compositions beneath the parish composition.
- Keep updating lower-level components whenever the page reveals a reusable pattern.

## Cathedral Basilica parish parity work

Forma is now using the Cathedral Basilica of St. Francis of Assisi homepage as the first real parish parity target. The objective is to represent the same parish information architecture with Forma tokens, primitives, and Catholic components.

See `apps/web/CATHEDRAL_PARITY_CHECKLIST.md`.

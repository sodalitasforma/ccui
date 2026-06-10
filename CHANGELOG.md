# Changelog

All notable changes to Catholic Commons UI will be documented here.

This project uses semantic versioning.

- **Major** releases are reserved for stable public API changes and breaking changes.
- **Minor** releases add components, primitives, documentation surfaces, package capabilities, templates, or CLI features.
- **Patch** releases fix bugs, improve documentation, polish behavior, or make non-breaking refinements.

## Unreleased

### Added

- Added `@catholiccommons/ui`, an umbrella package that re-exports primitives, Catholic components, and icons from a single public entrypoint.
- Added `@catholiccommons/ui/styles.css`, a single stylesheet import for Catholic Commons UI tokens and component styles.
- Added a Vite consumer smoke test that verifies the documented `@catholiccommons/ui` install/import path builds successfully.

### Changed

- Updated installation docs to use the umbrella package path: `pnpm add @catholiccommons/ui`.
- Simplified installation docs around one package install, one stylesheet import, and one component import source.
- Removed CLI-first installation guidance from the docs page until the CLI path is intentionally supported.

- Simplified public repository documentation.
- Renamed the repository to `sodalitasforma/ccui`.
- Updated homepage positioning copy and repository links.
- Replaced Saint Anselm demo references with Saint Peter.
- Refined mobile viewport, iPhone safe-area, docs hero, and dropdown behavior.

## 0.0.1

### Added

- Initial Catholic Commons UI monorepo.
- Documentation app.
- Design tokens package.
- Primitive components package.
- Catholic components package.
- Icons package.
- Component gallery.
- Colors, typography, icons, docs, and templates routes.
- Verification scripts for icons, Catholic package exports, theme tokens, docs search anchors, CSS contracts, lint, typecheck, build, and audit.
- Mobile audit tooling.

### Changed

- Moved from the original project naming toward Catholic Commons UI / CCUI.
- Expanded the system from early component inventory into tokens, primitives, Catholic components, icons, docs, and package boundaries.

## Commit history appendix

This appendix is generated from the current Git history and is included until the project begins cutting tagged releases.

- `9ba68ef` Initialize design system
- `079e719` Add foundational design tokens
- `c6f234e` Derive core tokens from Vatican homepage
- `bc50169` Ignore local inspection artifacts
- `cf4db2a` Mark completed roadmap items
- `f8a76cb` Add accessibility contrast review
- `f560523` Add Playwright for rendered accessibility audits
- `b006572` Remove temporary Playwright audit dependency
- `1d3abdc` Add first wave of core primitives
- `958e9b0` Update web roadmap
- `4e0de53` Add second wave of core primitives
- `d74a2c5` Add third wave of core primitives
- `d337e77` Add fourth wave of core primitives
- `87ad39a` Mark core primitives complete in roadmap
- `2371256` Add token and primitive gallery homepage
- `0e33648` Refine homepage into component docs gallery
- `edc08a4` Mark docs-only scaffolding for extraction
- `4c28da9` Add first wave of institutional components
- `1c775f9` Add second wave of institutional components
- `a55213b` Add third wave of institutional components
- `70845ed` Show institutional components on docs homepage
- `83d6b71` Make docs examples interactive
- `639b4f8` Update roadmap with documentation and component polish
- `7948dff` Simplify docs homepage structure
- `dd77b69` Generate key docs examples from shared data
- `9af8872` Polish docs code block styling
- `53acc8b` Generate more primitive docs from shared data
- `00a0fb5` Generate institutional docs from shared data
- `35ff277` Update roadmap with docs progress and mature outcome
- `b615c16` Add first wave of parish schedule components
- `1e89803` Document parish schedule components with shared examples
- `feb2f8d` Add liturgical identity components
- `ecb32ac` Organize docs homepage by roadmap phase
- `9f919f0` Add parish content components with docs
- `921df52` Add church document identity components with docs
- `836a6a6` Add document archive mechanics with docs
- `6ce5f63` Add source and scripture components with docs
- `1b2edc1` Mark parish and document phases complete
- `01d08b1` Add directory infrastructure components with docs
- `caed9fe` Add specific Catholic directory components with docs
- `057b15d` Mark directory phase complete
- `fcb7e2f` Add news and calendar components with docs
- `95feb57` Add media components with docs
- `4c718d0` Mark media and calendar phase complete
- `cc8c12b` Add Catholic infrastructure project components with docs
- `9e1df9c` Add ontology and schema components with docs
- `e4d1288` Add canonical provenance components with docs
- `25f69b6` Add entity graph components with docs
- `166bddd` Mark CDCF mapping phase complete
- `8ce0f67` Add design system cascade canary script
- `acfb19c` Tokenize hard-coded overlay colors
- `8abef5a` Split landing page from component gallery
- `64f1be5` Checkpoint before Catholic Commons UI rename
- `4073359` Rename public brand copy to Catholic Commons UI
- `37700c4` Rename package metadata and displayed imports to CCUI
- `61dd6e7` Rename app sidebar to CCUI
- `3e3235b` Clean up remaining CCUI prose references
- `9c2e625` Migrate implementation namespace to CCUI
- `1cd9074` Simplify homepage footer
- `35abdf9` Refine docs installation page UX
- `e52b5e6` Refine CCUI installation docs
- `fea3a56` Fix local workspace package resolution
- `48b337b` Expose package CSS entrypoints
- `b1421d2` Add external consumer package smoke test
- `d5a3a6e` Export friendly table primitive aliases
- `3d4619b` Make package CSS self sufficient
- `f84a028` Make package cascade self sufficient
- `3b71931` Enforce package CSS selector contract
- `a843179` Fix font family token validity
- `8f157c4` Fix external gallery TableWrapper import
- `12d2f0a` Add external consumer gallery boundary audit
- `979a949` Make package layout independent of app reset
- `73c76af` Prevent Catholic CSS from overriding primitive layout
- `3505d80` Prepare Catholic Commons UI for technical review
- `4747e66` Add concise project README
- `1fb2b48` Replace generated app README
- `acd7152` Add package README files
- `9fb35a2` Add technical review notes
- `e1db94c` Add component maturity audit inventory
- `83af54d` Classify component maturity levels
- `fd0fdab` Add contribution guidelines
- `4b5ec7f` Remove local agent instruction files
- `6a8a017` Clean public documentation surface
- `5de9907` Fix public documentation text artifacts
- `ddd6b1d` Compress image and remove internal scaffolding
- `c8190ee` Ignore local internal working files
- `94940e3` Remove docs footer navigation buttons
- `5d8d0f1` Update app favicon and ignore local app files
- `0e8d9c1` Fix local deployment ignore pattern
- `21da294` Remove unreleased CLI documentation
- `ea71889` Prepare packages for public publishing
- `875c1f8` Add initial CCUI CLI package
- `c678782` Add CLI init config command
- `29ecf62` Add CLI component registry guidance
- `d01e8a6` Make CLI add create component wrappers
- `b4273bf` Document working CLI usage
- `36cf19a` Add CLI installation documentation
- `06f2c85` Rename npm packages to Catholic Commons scope
- `5989423` Use verified npm exec command for CLI docs
- `a08b040` Use shadcn-style CLI command in docs
- `aeac7fe` Add unscoped Catholic Commons CLI package
- `9bd5457` Remove generated files from unscoped CLI package
- `ae5cc57` Restructure installation docs around CLI setup
- `3129297` Align docs navigation with shadcn-style structure
- `37e74a2` Fix docs sidebar duplicate keys and anchors
- `6c2d507` Add copy buttons to installation code blocks
- `3ddad65` Add primitive copy icon and icon button support
- `aba0987` Repair primitive CSS contract audit
- `158fd36` Split primitive CSS into importable style modules
- `5256a1b` Audit primitive and Catholic CSS contracts
- `36d2889` Remove primitive-only CSS contract audit
- `19d93fb` Audit docs search anchors
- `a948611` Move misplaced primitive CSS rules to owning files
- `5b2ac06` Split Catholic CSS into package style modules
- `0c400e1` Update foundation tokens and typography primitives
- `082e9ed` Add docs page actions dropdown
- `d0cb90a` Update docs navigation search and examples
- `52ac508` Add colors page and expand typography docs
- `3bdb093` Polish homepage and documentation search UI
- `23e6426` Remove top badges from foundation docs pages
- `302b8e4` Move icons to top-level sidebar nav
- `ba186af` Add icons roadmap page
- `cac34c0` Add Catholic Commons icons package foundation
- `bfad9b7` Show live icons on icons page
- `ea99695` Add icon metadata registry
- `d8f7c04` Use icon registry on icons page
- `3f09a03` Add semantic state and dark theme tokens
- `afaedf9` Wire primitive button states to semantic tokens
- `8fb7fd3` Wire primitive tab and dropdown states to semantic tokens
- `8dbf290` Add icon state specimens
- `ee8dc11` Polish icon state visuals
- `2fa87f1` Add contextual icon optical weight
- `3f14fde` Wire primitive form states to semantic tokens
- `430c715` Clean remaining primitive form state tokens
- `e780009` Wire docs navigation states to semantic tokens
- `0fd5f9c` Clean docs nav token scope
- `90b9f2a` Add state token specimens
- `b84c277` Add icons package audit
- `a54daa3` Add searchable icons gallery
- `c3fdda6` Add copied feedback to icon gallery
- `547b560` Polish icon gallery card grid
- `202e3da` Polish icon gallery card grid
- `b4ab76f` Merge branch 'polish/icon-gallery-card-grid'
- `c13ad1f` Add theme specimens to colors page
- `12cd35e` Improve dark control token contrast
- `11e1ba4` Improve dark button and badge states
- `9c9e8de` Add theme token audit
- `2e64519` Add standard check gate
- `7e3cb80` Add primitive theme specimens
- `9416928` Improve dark primitive specimen contrast
- `95b6a52` Polish dark doc search contrast
- `b419cc4` Add chevron down icon to controls
- `082d68e` Add Catholic theme specimens
- `f94397e` Improve Catholic dark theme contrast
- `fec0163` Document theme application path
- `3e372c7` Consolidate church document dark styles
- `dc82e00` Add Catholic package audit
- `4f3a98e` Remove unused Catholic audit import
- `80777a8` Expand first Catholic Commons icon set
- `f9c2128` Revert "Expand first Catholic Commons icon set"
- `2992511` Add common interface icons
- `c16581b` Polish icon gallery and remove weak icons
- `3fc103d` Fix icon hover card behavior
- `05c6375` Remove stale icon sidebar links
- `03fa835` Remove stale color and component gallery sections
- `e5f4ac4` Expand docs system, icons, mobile audit, and shared primitives
- `bf46222` Harden mobile viewport and iPhone safe-area background
- `4ce26b6` Polish docs mobile hero and dropdown layout
- `bfec7d7` Match docs hero mobile heading scale
- `3524113` Replace Saint Anselm demo references with Saint Peter
- `9622616` Clarify homepage positioning and repository link
- `5bf6e06` Simplify public repository documentation

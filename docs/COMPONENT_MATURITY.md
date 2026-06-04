# Component Maturity

Catholic Commons UI should distinguish between stable candidates, experimental components, and demo-only patterns.

## Stable candidate

A stable candidate is broadly reusable, typed, documented, and unlikely to need major API changes.

Examples to review as possible stable candidates:

- `MassScheduleBlock`
- `ConfessionScheduleBlock`
- `AdorationScheduleBlock`
- `HolyDayScheduleBlock`
- `LiturgicalDayCard`
- `LiturgicalSeasonBadge`
- `ParishAnnouncementCard`
- `ChurchDocumentCard`
- `ChurchDocumentHeader`
- `DocumentCitation`
- `DocumentMetadata`
- `SourceCard`
- `CanonicalReference`

## Experimental

Experimental components may be useful but need more review before becoming stable API.

Examples to review as experimental:

- `AuthorityLevelBadge`
- `CanonicalSourceCard`
- `SemanticRelationGraph`
- `EntityCard`
- `EntityRelationshipList`
- `TranslationVariantCard`
- `ProvenanceTrail`
- `ProjectDonationCallout`
- `TitheIcon`
- `ParishNotificationBell`

## Demo-only

Demo-only components or examples are useful for showing direction but should not be treated as public API.

## Review question

Which components should become stable API, which should remain experimental, and which should be removed or moved into examples?

## Component inventory

A component-by-component maturity audit is maintained in:

```text
docs/component-maturity-audit.csv
```

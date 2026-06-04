# Parish Reference Checklist

This checklist tracks the work required to make Catholic Commons UI capable of furnishing a full parish homepage reference implementation using Catholic Commons UI tokens, primitives, and Catholic components.

## Goal

Build a parish homepage reference implementation with strong structure, hierarchy, accessibility, maintainability, and Catholic-native components.

## Existing Catholic Commons UI coverage

- [x] InstitutionalHeader for parish navigation
- [x] PrimaryNav / UtilityNav / LanguageNav for navigation layers
- [x] MassScheduleBlock and MassTimeRow for Mass schedules
- [x] ConfessionScheduleBlock for confession schedule
- [x] SacramentScheduleBlock for sacramental instructions
- [x] ContactBlock for parish office information
- [x] OfficeHours for parish office hours
- [x] LocationBlock for address/location
- [x] DonationCallout and AutoTitheCard for online giving
- [x] ChurchDocumentCard for official Church documents
- [x] DocumentList / DocumentCard / DownloadLink / FileTypeIcon for PDFs and downloads
- [x] OfficialNoticeCard for institutional notices
- [x] InstitutionalDirectory / DirectoryCard / SchoolDirectory for related institutions
- [x] BiblePassageCard for Scripture quotation
- [x] NewsCard / NewsList / FeaturedStory for news and perspectives
- [x] InstitutionalFooter for footer links and contact information

## Missing components to build

- [x] ParishHero
- [x] ParishHistoryTimeline
- [x] MinistryDirectoryBlock
- [x] ParishFormLinks
- [x] SeasonalScheduleBlock
- [x] SacramentalPreparationBlock
- [x] ParishMegaNav
- [x] ParishQuickLinks
- [x] WorshipAidCard
- [x] LanguageDocumentLinks
- [x] SafeguardingNotice
- [x] VisitorInfoBlock
- [x] SocialLinks
- [x] ExternalCatholicResourceCard

## Existing components to develop further

- [x] InstitutionalHeader: nested nav groups / dropdowns / mega menu. Interim coverage added through ParishMegaNav.
- [x] DocumentCard: language, authority, date, source, and file metadata
- [x] ChurchDocumentCard: bilingual document pairs
- [x] MassScheduleBlock: anticipated Mass, livestream emphasis, last-updated/source metadata
- [x] ConfessionScheduleBlock: prompt-end notes and exception states
- [x] SacramentScheduleBlock: contact role, lead time, appointment required, registration link
- [x] OfficeHours: closure notes, split daily sessions, event disruption notes
- [x] InstitutionalDirectory: relationship type, ecumenical partner, school, diocese, external institution

## Cathedral homepage sections to represent

- [x] Main parish navigation
- [x] Parish/cathedral identity hero
- [x] Worship aid downloads
- [x] Archbishop letter in English and Spanish
- [x] Quick links: Mass Times, Bulletin, Registrations, Virtus Online
- [x] Explore Our Church cards
- [x] Parish office address and hours
- [x] Cathedral and gift shop visitor hours
- [x] Parking note
- [x] Mass schedule
- [x] Confession schedule
- [x] Baptism, Marriage, Anointing instructions
- [x] Social links
- [x] Report Abuse / Independent Audit
- [x] Ecumenical committee partner churches
- [x] Archdiocese and Catholic schools
- [x] Scripture quote
- [x] Online giving
- [x] Daily readings
- [x] Catholic news and perspectives
- [x] Footer contact and links

## Implementation order

1. ParishQuickLinks
2. WorshipAidCard
3. LanguageDocumentLinks
4. SafeguardingNotice
5. VisitorInfoBlock
6. SocialLinks
7. ExternalCatholicResourceCard
8. ParishHero
9. Upgrade InstitutionalHeader for nested parish navigation
10. Replace the landing-page parish preview with a fuller Cathedral Basilica-style composition


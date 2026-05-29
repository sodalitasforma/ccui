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
  prayerCardExample,
  parishContactCardExample,
  parishAnnouncementCardExample,
  ministryCardExample,
  donationCalloutExample,
  bulletinCardExample,
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
} from "./examples";

function prop(name: string, value: unknown) {
  if (value === undefined || value === false || value === null) return "";
  if (value === true) return ` ${name}`;
  return ` ${name}="${String(value)}"`;
}

function objectArrayCode(items: readonly { label: string; href: string; current?: boolean }[]) {
  return `[\n${items
    .map(
      (item) =>
        `    { label: "${item.label}", href: "${item.href}"${item.current ? ", current: true" : ""} }`
    )
    .join(",\n")}\n  ]`;
}

function valueCode(value: unknown): string {
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (value === null) return "null";
  if (Array.isArray(value)) return arrayCode(value);
  if (typeof value === "object") return objectCode(value as Record<string, unknown>);
  return "undefined";
}

function objectCode(item: Record<string, unknown>): string {
  const entries = Object.entries(item)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}: ${valueCode(value)}`);

  return `{ ${entries.join(", ")} }`;
}

function arrayCode(items: readonly unknown[]): string {
  return `[\n${items.map((item) => `  ${valueCode(item)}`).join(",\n")}\n]`;
}


function stringArrayCode(items: readonly string[]) {
  return `[${items.map((item) => `"${item}"`).join(", ")}]`;
}

export const buttonExamplesCode = buttonExamples
  .map((button) =>
    `<Button${prop("variant", button.variant)}>${button.label}</Button>`
  )
  .join("\n");

export const noticeExamplesCode =
  `<Stack gap="sm">\n` +
  noticeExamples
    .map((notice) => `  <Notice variant="${notice.variant}">${notice.children}</Notice>`)
    .join("\n") +
  `\n</Stack>`;

export const filterBarExampleCode =
`<FilterBar>
  <SearchInput placeholder="${filterBarExample.searchPlaceholder}" />
  <Select aria-label="Office filter">
    <option>${filterBarExample.selectLabel}</option>
  </Select>
  <Button size="sm">${filterBarExample.buttonLabel}</Button>
</FilterBar>`;

export const tabExamplesCode =
  `<Tabs>\n  <TabList>\n` +
  tabExamples.map((tab) => `    <Tab>${tab.label}</Tab>`).join("\n") +
  `\n  </TabList>\n` +
  tabExamples
    .map(
      (tab, index) => `  <TabPanel index={${index}}>
    <Text tone="secondary">${tab.content}</Text>
  </TabPanel>`
    )
    .join("\n") +
  `\n</Tabs>`;

export const accordionExamplesCode =
  `<Accordion>\n` +
  accordionExamples
    .map(
      (item) => `  <AccordionItem${item.defaultOpen ? " defaultOpen" : ""}>
    <AccordionTrigger>${item.title}</AccordionTrigger>
    <AccordionContent>
      <Text tone="secondary">${item.content}</Text>
    </AccordionContent>
  </AccordionItem>`
    )
    .join("\n") +
  `\n</Accordion>`;

export const tableExampleCode =
`<TableWrapper>
  <Table>
    <THead>
      <TR>
        <TH>Office</TH>
        <TH>Status</TH>
        <TH>Next step</TH>
      </TR>
    </THead>
    <TBody>
${tableRows
  .map(
    (row) => `      <TR>
        <TD>${row.office}</TD>
        <TD><Badge variant="${row.statusVariant}">${row.status}</Badge></TD>
        <TD><Button size="sm" variant="${row.actionVariant}">${row.action}</Button></TD>
      </TR>`
  )
  .join("\n")}
    </TBody>
  </Table>
</TableWrapper>`;

export const timelineExamplesCode =
  `<Timeline>\n` +
  timelineExamples
    .map(
      (item) => `  <TimelineItem>
    <Text size="xs" tone="goldText">${item.meta}</Text>
    <Heading level={3} size="sm">${item.title}</Heading>
    <Text tone="secondary">${item.description}</Text>
  </TimelineItem>`
    )
    .join("\n") +
  `\n</Timeline>`;

export const mediaFrameExampleCode =
`<MediaFrame ratio="video" surface="dark">
  <iframe
    src="${mediaFrameExample.src}"
    title="${mediaFrameExample.title}"
    allowFullScreen
  />
</MediaFrame>`;

export const emptyStateExampleCode =
`<EmptyState>
  <Stack gap="sm">
    <Heading level={3} size="md">${emptyStateExample.title}</Heading>
    <Text tone="secondary">${emptyStateExample.description}</Text>
    <Button variant="secondary">${emptyStateExample.actionLabel}</Button>
  </Stack>
</EmptyState>`;

export const institutionalHeaderExampleCode =
`<InstitutionalHeader
  title="${institutionalHeaderExample.title}"
  subtitle="${institutionalHeaderExample.subtitle}"
  primaryItems={${objectArrayCode(institutionalHeaderExample.primaryItems)}}
  utilityItems={${objectArrayCode(institutionalHeaderExample.utilityItems)}}
  languages={${objectArrayCode(institutionalHeaderExample.languages)}}
  searchAction="${institutionalHeaderExample.searchAction}"
/>`;

export const pageHeaderExampleCode =
`<PageHeader
  eyebrow="${pageHeaderExample.eyebrow}"
  title="${pageHeaderExample.title}"
  description="${pageHeaderExample.description}"
  breadcrumbs={${objectArrayCode(pageHeaderExample.breadcrumbs)}}
/>`;

export const announcementBannerExampleCode =
`<AnnouncementBanner
  badge="${announcementBannerExample.badge}"
  title="${announcementBannerExample.title}"
  description="${announcementBannerExample.description}"
  href="${announcementBannerExample.href}"
/>`;

export const directoryExampleCode =
`<Directory title="${directoryExample.title}" description="${directoryExample.description}">
${directoryExample.cards
  .map(
    (card) => `  <DirectoryCard
    eyebrow="${card.eyebrow}"
    title="${card.title}"
    description="${card.description}"
    meta="${card.meta}"
${"status" in card ? `    status="${card.status}"\n` : ""}    href="${card.href}"
  />`
  )
  .join("\n")}
</Directory>`;

export const contactBlockExampleCode =
`<ContactBlock
  title="${contactBlockExample.title}"
  phone="${contactBlockExample.phone}"
  email="${contactBlockExample.email}"
  website="${contactBlockExample.website}"
  addressLines={${stringArrayCode(contactBlockExample.addressLines)}}
/>`;

export const officeHoursExampleCode =
`<OfficeHours
  items={[
${officeHoursExample.items
  .map(
    (item) =>
      `    { days: "${item.days}", hours: "${item.hours}"${"note" in item ? `, note: "${item.note}"` : ""} }`
  )
  .join(",\n")}
  ]}
/>`;

export const locationBlockExampleCode =
`<LocationBlock
  addressLines={${stringArrayCode(locationBlockExample.addressLines)}}
  mapHref="${locationBlockExample.mapHref}"
  note="${locationBlockExample.note}"
/>`;

export const staffAndClergyExampleCode =
`<StaffProfile
  name="${staffProfileExample.name}"
  position="${staffProfileExample.position}"
  department="${staffProfileExample.department}"
  email="${staffProfileExample.email}"
  phone="${staffProfileExample.phone}"
/>

<ClergyProfile
  name="${clergyProfileExample.name}"
  title="${clergyProfileExample.title}"
  assignment="${clergyProfileExample.assignment}"
  orderOrPostnominals="${clergyProfileExample.orderOrPostnominals}"
  email="${clergyProfileExample.email}"
/>`;

export const documentListExampleCode =
`<DocumentList title="${documentListExample.title}" description="${documentListExample.description}">
  <DocumentCard
    title="${documentListExample.document.title}"
    documentType="${documentListExample.document.documentType}"
    authority="${documentListExample.document.authority}"
    date="${documentListExample.document.date}"
    fileType="${documentListExample.document.fileType}"
    href="${documentListExample.document.href}"
    description="${documentListExample.document.description}"
  />
  <ResourceLink
    title="${documentListExample.resource.title}"
    description="${documentListExample.resource.description}"
    meta="${documentListExample.resource.meta}"
    href="${documentListExample.resource.href}"
    variant="${documentListExample.resource.variant}"
  />
</DocumentList>`;

export const eventListExampleCode =
`<EventList title="${eventListExample.title}" description="${eventListExample.description}">
${eventListExample.events
  .map(
    (event) => `  <EventCard
    title="${event.title}"
    date="${event.date}"
    time="${event.time}"
    location="${event.location}"
    category="${event.category}"
${"description" in event ? `    description="${event.description}"\n` : ""}    href="${event.href}"
  />`
  )
  .join("\n")}
</EventList>`;

export const institutionalFooterExampleCode =
`<InstitutionalFooter
  title="${institutionalFooterExample.title}"
  description="${institutionalFooterExample.description}"
  links={${objectArrayCode(institutionalFooterExample.links)}}
/>`;

function scheduleTimeCode(item: {
  time: string;
  label?: string;
  language?: string;
  location?: string;
  livestreamHref?: string;
  note?: string;
  status?: string;
}) {
  const props = [
    `time="${item.time}"`,
    item.label ? `label="${item.label}"` : null,
    item.language ? `language="${item.language}"` : null,
    item.location ? `location="${item.location}"` : null,
    item.livestreamHref ? `livestreamHref="${item.livestreamHref}"` : null,
    item.note ? `note="${item.note}"` : null,
    item.status ? `status="${item.status}"` : null,
  ].filter(Boolean);

  return `{
      ${props.join(",\n      ")}
    }`;
}

function scheduleBlockCode(componentName: string, example: {
  title: string;
  subtitle?: string;
  badge?: string;
  sacrament?: string;
  days: readonly {
    day: string;
    date?: string;
    times: readonly {
      time: string;
      label?: string;
      language?: string;
      location?: string;
      livestreamHref?: string;
      note?: string;
      status?: string;
    }[];
  }[];
  exceptions?: readonly {
    title: string;
    description?: string;
    date?: string;
    severity?: string;
  }[];
  source?: {
    label: string;
    href?: string;
    authorityLevel?: string;
  };
}) {
  const topProps = [
    `title="${example.title}"`,
    example.subtitle ? `subtitle="${example.subtitle}"` : null,
    example.badge && componentName === "MassScheduleBlock" ? `badge="${example.badge}"` : null,
    example.sacrament && componentName === "SacramentScheduleBlock" ? `sacrament="${example.sacrament}"` : null,
  ].filter(Boolean);

  const daysCode =
    `[\n` +
    example.days
      .map(
        (day) => `  {
    day: "${day.day}"${day.date ? `,\n    date: "${day.date}"` : ""},
    times: [
${day.times.map((item) => `      ${scheduleTimeCode(item)}`).join(",\n")}
    ],
  }`
      )
      .join(",\n") +
    `\n]`;

  const exceptionsCode = example.exceptions?.length
    ? `\n  exceptions={[\n${example.exceptions
        .map(
          (item) => `    {
      title: "${item.title}"${item.description ? `,\n      description: "${item.description}"` : ""}${item.date ? `,\n      date: "${item.date}"` : ""}${item.severity ? `,\n      severity: "${item.severity}"` : ""}
    }`
        )
        .join(",\n")}\n  ]}`
    : "";

  const sourceCode = example.source
    ? `\n  source={{ label: "${example.source.label}", href: "${example.source.href ?? "#"}"${example.source.authorityLevel ? `, authorityLevel: "${example.source.authorityLevel}"` : ""} }}`
    : "";

  return `<${componentName}
  ${topProps.join("\n  ")}
  days={${daysCode}}${exceptionsCode}${sourceCode}
/>`;
}

export const massScheduleExampleCode = scheduleBlockCode("MassScheduleBlock", massScheduleExample);
export const confessionScheduleExampleCode = scheduleBlockCode("ConfessionScheduleBlock", confessionScheduleExample);
export const adorationScheduleExampleCode = scheduleBlockCode("AdorationScheduleBlock", adorationScheduleExample);
export const sacramentScheduleExampleCode = scheduleBlockCode("SacramentScheduleBlock", sacramentScheduleExample);
export const holyDayScheduleExampleCode = scheduleBlockCode("HolyDayScheduleBlock", holyDayScheduleExample);

export const liturgicalDayExampleCode =
`<LiturgicalDayCard
  title="${liturgicalDayExample.title}"
  date="${liturgicalDayExample.date}"
  season="${liturgicalDayExample.season}"
  color="${liturgicalDayExample.color}"
  rank="${liturgicalDayExample.rank}"
  description="${liturgicalDayExample.description}"
  readings={${arrayCode(liturgicalDayExample.readings)}}
  source={{ label: "${liturgicalDayExample.source.label}", href: "${liturgicalDayExample.source.href}", authorityLevel: "${liturgicalDayExample.source.authorityLevel}" }}
/>`;

export const feastDayHeroExampleCode =
`<FeastDayHero
  title="${feastDayHeroExample.title}"
  date="${feastDayHeroExample.date}"
  season="${feastDayHeroExample.season}"
  color="${feastDayHeroExample.color}"
  rank="${feastDayHeroExample.rank}"
  description="${feastDayHeroExample.description}"
  actionHref="${feastDayHeroExample.actionHref}"
  actionLabel="${feastDayHeroExample.actionLabel}"
  source={{ label: "${feastDayHeroExample.source.label}", href: "${feastDayHeroExample.source.href}", authorityLevel: "${feastDayHeroExample.source.authorityLevel}" }}
/>`;

export const readingReferenceExampleCode =
`<ReadingReference
  label="${readingReferenceExample.label}"
  citation="${readingReferenceExample.citation}"
  book="${readingReferenceExample.book}"
  chapter={${readingReferenceExample.chapter}}
  verses="${readingReferenceExample.verses}"
  translation="${readingReferenceExample.translation}"
  source={{ label: "${readingReferenceExample.source.label}", href: "${readingReferenceExample.source.href}", authorityLevel: "${readingReferenceExample.source.authorityLevel}" }}
/>`;

export const liturgicalSeasonBadgeExampleCode =
`<LiturgicalSeasonBadge
  season="${liturgicalSeasonBadgeExample.season}"
  color="${liturgicalSeasonBadgeExample.color}"
/>`;

export const liturgicalColorDotExampleCode =
`<LiturgicalColorDot
  color="${liturgicalColorDotExample.color}"
  label="${liturgicalColorDotExample.label}"
/>`;

export const prayerCardExampleCode =
`<PrayerCard
  title="${prayerCardExample.title}"
  text="${prayerCardExample.text}"
  tradition="${prayerCardExample.tradition}"
  language="${prayerCardExample.language}"
  source={{ label: "${prayerCardExample.source.label}", href: "${prayerCardExample.source.href}", authorityLevel: "${prayerCardExample.source.authorityLevel}" }}
/>`;

export const parishAnnouncementCardExampleCode =
`<ParishAnnouncementCard
  title="${parishAnnouncementCardExample.title}"
  description="${parishAnnouncementCardExample.description}"
  date="${parishAnnouncementCardExample.date}"
  severity="${parishAnnouncementCardExample.severity}"
  href="${parishAnnouncementCardExample.href}"
/>`;

export const bulletinCardExampleCode =
`<BulletinCard
  title="${bulletinCardExample.title}"
  date="${bulletinCardExample.date}"
  description="${bulletinCardExample.description}"
  href="${bulletinCardExample.href}"
  fileType="${bulletinCardExample.fileType}"
/>`;

export const ministryCardExampleCode =
`<MinistryCard
  title="${ministryCardExample.title}"
  description="${ministryCardExample.description}"
  category="${ministryCardExample.category}"
  leader="${ministryCardExample.leader}"
  meetingTime="${ministryCardExample.meetingTime}"
  href="${ministryCardExample.href}"
/>`;

export const donationCalloutExampleCode =
`<DonationCallout
  title="${donationCalloutExample.title}"
  description="${donationCalloutExample.description}"
  amountLabel="${donationCalloutExample.amountLabel}"
  actionLabel="${donationCalloutExample.actionLabel}"
  actionHref="${donationCalloutExample.actionHref}"
  secondaryLabel="${donationCalloutExample.secondaryLabel}"
  secondaryHref="${donationCalloutExample.secondaryHref}"
/>`;

export const parishContactCardExampleCode =
`<ParishContactCard
  title="${parishContactCardExample.title}"
  phone="${parishContactCardExample.phone}"
  email="${parishContactCardExample.email}"
  website="${parishContactCardExample.website}"
  addressLines={${arrayCode(parishContactCardExample.addressLines)}}
  officeHours={${arrayCode(parishContactCardExample.officeHours)}}
  mapHref="${parishContactCardExample.mapHref}"
  locationNote="${parishContactCardExample.locationNote}"
/>`;

export const churchDocumentHeaderExampleCode =
`<ChurchDocumentHeader
  title="${churchDocumentExample.title}"
  subtitle="${churchDocumentExample.subtitle}"
  citation="${churchDocumentExample.citation}"
  documentType="${churchDocumentExample.documentType}"
  authority="${churchDocumentExample.authority}"
  authorityLabel="${churchDocumentExample.authorityLabel}"
  date="${churchDocumentExample.date}"
  language="${churchDocumentExample.language}"
  description="${churchDocumentExample.description}"
  href="${churchDocumentExample.href}"
  source={{ label: "${churchDocumentExample.source.label}", href: "${churchDocumentExample.source.href}", authorityLevel: "${churchDocumentExample.source.authorityLevel}" }}
/>`;

export const churchDocumentCardExampleCode =
`<ChurchDocumentCard
  title="${churchDocumentExample.title}"
  subtitle="${churchDocumentExample.subtitle}"
  citation="${churchDocumentExample.citation}"
  documentType="${churchDocumentExample.documentType}"
  authority="${churchDocumentExample.authority}"
  authorityLabel="${churchDocumentExample.authorityLabel}"
  date="${churchDocumentExample.date}"
  language="${churchDocumentExample.language}"
  description="${churchDocumentExample.description}"
  href="${churchDocumentExample.href}"
  source={{ label: "${churchDocumentExample.source.label}", href: "${churchDocumentExample.source.href}", authorityLevel: "${churchDocumentExample.source.authorityLevel}" }}
/>`;

export const documentMetadataExampleCode =
`<DocumentMetadata
  items={${arrayCode(churchDocumentMetadataExample.items)}}
/>`;

export const documentAuthorityBadgeExampleCode =
`<DocumentAuthorityBadge
  authority="${documentAuthorityBadgeExample.authority}"
  label="${documentAuthorityBadgeExample.label}"
/>`;

export const documentTypeBadgeExampleCode =
`<DocumentTypeBadge
  documentType="${documentTypeBadgeExample.documentType}"
/>`;

export const documentCitationExampleCode =
`<DocumentCitation
  label="${documentCitationExample.label}"
  citation="${documentCitationExample.citation}"
/>`;

export const paragraphAnchorExampleCode =
`<ParagraphAnchor
  id="${paragraphAnchorExample.id}"
  number="${paragraphAnchorExample.number}"
  href="${paragraphAnchorExample.href}"
>
  ${paragraphAnchorExample.children}
</ParagraphAnchor>`;

export const footnoteListExampleCode =
`<FootnoteList
  title="${footnoteListExample.title}"
  items={${arrayCode(footnoteListExample.items)}}
/>`;

export const relatedDocumentsExampleCode =
`<RelatedDocuments
  title="${relatedDocumentsExample.title}"
  documents={${arrayCode(relatedDocumentsExample.documents)}}
/>`;

export const archiveSearchResultExampleCode =
`<ArchiveSearchResult
  title="${archiveSearchResultExample.title}"
  subtitle="${archiveSearchResultExample.subtitle}"
  documentType="${archiveSearchResultExample.documentType}"
  authority="${archiveSearchResultExample.authority}"
  authorityLabel="${archiveSearchResultExample.authorityLabel}"
  date="${archiveSearchResultExample.date}"
  language="${archiveSearchResultExample.language}"
  excerpt="${archiveSearchResultExample.excerpt}"
  href="${archiveSearchResultExample.href}"
  source={{ label: "${archiveSearchResultExample.source.label}", href: "${archiveSearchResultExample.source.href}", authorityLevel: "${archiveSearchResultExample.source.authorityLevel}" }}
/>`;

export const downloadLinkExampleCode =
`<DownloadLink
  label="${downloadLinkExample.label}"
  href="${downloadLinkExample.href}"
  fileType="${downloadLinkExample.fileType}"
  fileSize="${downloadLinkExample.fileSize}"
  description="${downloadLinkExample.description}"
/>`;

export const fileTypeIconExampleCode =
`<FileTypeIcon fileType="${fileTypeIconExample.fileType}" />`;

export const sourceCardExampleCode =
`<SourceCard
  title="${sourceCardExample.title}"
  description="${sourceCardExample.description}"
  authority="${sourceCardExample.authority}"
  authorityLabel="${sourceCardExample.authorityLabel}"
  sourceType="${sourceCardExample.sourceType}"
  href="${sourceCardExample.href}"
  citation="${sourceCardExample.citation}"
/>`;

export const citationTrailExampleCode =
`<CitationTrail
  title="${citationTrailExample.title}"
  items={${arrayCode(citationTrailExample.items)}}
/>`;

export const canonicalReferenceExampleCode =
`<CanonicalReference
  label="${canonicalReferenceExample.label}"
  value="${canonicalReferenceExample.value}"
  system="${canonicalReferenceExample.system}"
  href="${canonicalReferenceExample.href}"
  description="${canonicalReferenceExample.description}"
/>`;

export const officialNoticeCardExampleCode =
`<OfficialNoticeCard
  title="${officialNoticeCardExample.title}"
  description="${officialNoticeCardExample.description}"
  date="${officialNoticeCardExample.date}"
  authority="${officialNoticeCardExample.authority}"
  authorityLabel="${officialNoticeCardExample.authorityLabel}"
  documentType="${officialNoticeCardExample.documentType}"
  href="${officialNoticeCardExample.href}"
/>`;

export const prayerBlockExampleCode =
`<PrayerBlock
  title="${prayerBlockExample.title}"
  text="${prayerBlockExample.text}"
  language="${prayerBlockExample.language}"
  source={{ label: "${prayerBlockExample.source.label}", href: "${prayerBlockExample.source.href}", authorityLevel: "${prayerBlockExample.source.authorityLevel}" }}
/>`;

export const biblePassageCardExampleCode =
`<BiblePassageCard
  reference="${biblePassageCardExample.reference}"
  text="${biblePassageCardExample.text}"
  translation="${biblePassageCardExample.translation}"
  book="${biblePassageCardExample.book}"
  chapter={${biblePassageCardExample.chapter}}
  verses="${biblePassageCardExample.verses}"
  source={{ label: "${biblePassageCardExample.source.label}", href: "${biblePassageCardExample.source.href}", authorityLevel: "${biblePassageCardExample.source.authorityLevel}" }}
/>`;

export const directoryFilterExampleCode =
`<DirectoryFilter
  searchPlaceholder="${directoryFilterExample.searchPlaceholder}"
  searchName="${directoryFilterExample.searchName}"
  categoryLabel="${directoryFilterExample.categoryLabel}"
  categoryName="${directoryFilterExample.categoryName}"
  categories={${arrayCode(directoryFilterExample.categories)}}
  actionLabel="${directoryFilterExample.actionLabel}"
/>`;

export const dateRangeLabelExampleCode =
`<DateRangeLabel
  label="${dateRangeLabelExample.label}"
  startDate="${dateRangeLabelExample.startDate}"
  endDate="${dateRangeLabelExample.endDate}"
/>`;

export const centuryFilterExampleCode =
`<CenturyFilter
  label="${centuryFilterExample.label}"
  name="${centuryFilterExample.name}"
  centuries={${arrayCode(centuryFilterExample.centuries)}}
/>`;

export const nameFilterExampleCode =
`<NameFilter
  name="${nameFilterExample.name}"
  placeholder="${nameFilterExample.placeholder}"
/>`;

export const institutionalDirectoryExampleCode =
`<InstitutionalDirectory
  title="${institutionalDirectoryExample.title}"
  description="${institutionalDirectoryExample.description}"
  items={${arrayCode(institutionalDirectoryExample.items)}}
  filter={<DirectoryFilter {...directoryFilterExample} />}
/>`;

export const pontiffDirectoryExampleCode =
`<PontiffDirectory
  title="${pontiffDirectoryExample.title}"
  description="${pontiffDirectoryExample.description}"
  centuries={${arrayCode(pontiffDirectoryExample.centuries)}}
  pontiffs={${arrayCode(pontiffDirectoryExample.pontiffs)}}
/>`;

export const pontiffCardExampleCode =
`<PontiffCard
  title="${pontiffCardExample.title}"
  description="${pontiffCardExample.description}"
  pontificateStart="${pontiffCardExample.pontificateStart}"
  pontificateEnd="${pontiffCardExample.pontificateEnd}"
  century="${pontiffCardExample.century}"
  meta="${pontiffCardExample.meta}"
  status="${pontiffCardExample.status}"
  href="${pontiffCardExample.href}"
/>`;

export const clergyDirectoryExampleCode =
`<ClergyDirectory
  title="${clergyDirectoryExample.title}"
  description="${clergyDirectoryExample.description}"
  clergy={${arrayCode(clergyDirectoryExample.clergy)}}
/>`;

export const parishDirectoryExampleCode =
`<ParishDirectory
  title="${parishDirectoryExample.title}"
  description="${parishDirectoryExample.description}"
  parishes={${arrayCode(parishDirectoryExample.parishes)}}
/>`;

export const schoolDirectoryExampleCode =
`<SchoolDirectory
  title="${schoolDirectoryExample.title}"
  description="${schoolDirectoryExample.description}"
  schools={${arrayCode(schoolDirectoryExample.schools)}}
/>`;

export const officeDirectoryExampleCode =
`<OfficeDirectory
  title="${officeDirectoryExample.title}"
  description="${officeDirectoryExample.description}"
  offices={${arrayCode(officeDirectoryExample.offices)}}
/>`;

export const saintDirectoryExampleCode =
`<SaintDirectory
  title="${saintDirectoryExample.title}"
  description="${saintDirectoryExample.description}"
  centuries={${arrayCode(saintDirectoryExample.centuries)}}
  saints={${arrayCode(saintDirectoryExample.saints)}}
/>`;

export const newsCardExampleCode =
`<NewsCard
  title="${newsCardExample.title}"
  description="${newsCardExample.description}"
  date="${newsCardExample.date}"
  category="${newsCardExample.category}"
  href="${newsCardExample.href}"
  source={{ label: "${newsCardExample.source.label}", href: "${newsCardExample.source.href}", authorityLevel: "${newsCardExample.source.authorityLevel}" }}
/>`;

export const newsListExampleCode =
`<NewsList
  title="${newsListExample.title}"
  description="${newsListExample.description}"
  items={${arrayCode(newsListExample.items)}}
/>`;

export const calendarItemExampleCode =
`<CalendarItem
  title="${calendarItemExample.title}"
  date="${calendarItemExample.date}"
  time="${calendarItemExample.time}"
  location="${calendarItemExample.location}"
  category="${calendarItemExample.category}"
  description="${calendarItemExample.description}"
  href="${calendarItemExample.href}"
/>`;

export const calendarTabsExampleCode =
`<CalendarTabs
  upcoming={${arrayCode(calendarTabsExample.upcoming)}}
  liturgical={${arrayCode(calendarTabsExample.liturgical)}}
  meetings={${arrayCode(calendarTabsExample.meetings)}}
/>`;

export const featuredStoryExampleCode =
`<FeaturedStory
  eyebrow="${featuredStoryExample.eyebrow}"
  title="${featuredStoryExample.title}"
  description="${featuredStoryExample.description}"
  date="${featuredStoryExample.date}"
  category="${featuredStoryExample.category}"
  href="${featuredStoryExample.href}"
  source={{ label: "${featuredStoryExample.source.label}", href: "${featuredStoryExample.source.href}", authorityLevel: "${featuredStoryExample.source.authorityLevel}" }}
/>`;

export const pressReleaseCardExampleCode =
`<PressReleaseCard
  title="${pressReleaseCardExample.title}"
  description="${pressReleaseCardExample.description}"
  date="${pressReleaseCardExample.date}"
  category="${pressReleaseCardExample.category}"
  office="${pressReleaseCardExample.office}"
  href="${pressReleaseCardExample.href}"
  source={{ label: "${pressReleaseCardExample.source.label}", href: "${pressReleaseCardExample.source.href}", authorityLevel: "${pressReleaseCardExample.source.authorityLevel}" }}
/>`;

export const pressOfficeNoticeExampleCode =
`<PressOfficeNotice
  title="${pressOfficeNoticeExample.title}"
  description="${pressOfficeNoticeExample.description}"
  date="${pressOfficeNoticeExample.date}"
  office="${pressOfficeNoticeExample.office}"
  severity="${pressOfficeNoticeExample.severity}"
  href="${pressOfficeNoticeExample.href}"
/>`;

export const mediaCardExampleCode =
`<MediaCard
  title="${mediaCardExample.title}"
  description="${mediaCardExample.description}"
  date="${mediaCardExample.date}"
  category="${mediaCardExample.category}"
  href="${mediaCardExample.href}"
  media={${objectCode(mediaCardExample.media)}}
/>`;

export const videoCardExampleCode =
`<VideoCard
  title="${videoCardExample.title}"
  description="${videoCardExample.description}"
  date="${videoCardExample.date}"
  category="${videoCardExample.category}"
  href="${videoCardExample.href}"
  duration="${videoCardExample.duration}"
  media={${objectCode(videoCardExample.media)}}
/>`;

export const photoGalleryCardExampleCode =
`<PhotoGalleryCard
  title="${photoGalleryCardExample.title}"
  description="${photoGalleryCardExample.description}"
  date="${photoGalleryCardExample.date}"
  category="${photoGalleryCardExample.category}"
  href="${photoGalleryCardExample.href}"
  photos={${arrayCode(photoGalleryCardExample.photos)}}
/>`;

export const projectStatusBadgeExampleCode =
`<ProjectStatusBadge
  status="${projectStatusBadgeExample.status}"
  label="${projectStatusBadgeExample.label}"
/>`;

export const repositoryLinkExampleCode =
`<RepositoryLink
  href="${repositoryLinkExample.href}"
  provider="${repositoryLinkExample.provider}"
  language="${repositoryLinkExample.language}"
  license="${repositoryLinkExample.license}"
  openIssues={${repositoryLinkExample.openIssues}}
/>`;

export const contributorListExampleCode =
`<ContributorList
  title="${contributorListExample.title}"
  contributors={${arrayCode(contributorListExample.contributors)}}
/>`;

export const projectCardExampleCode =
`<ProjectCard
  title="${projectCardExample.title}"
  description="${projectCardExample.description}"
  projectType="${projectCardExample.projectType}"
  status="${projectCardExample.status}"
  href="${projectCardExample.href}"
  repository={${objectCode(projectCardExample.repository)}}
  standardHref="${projectCardExample.standardHref}"
  contributors={${arrayCode(projectCardExample.contributors)}}
  tags={${arrayCode(projectCardExample.tags)}}
/>`;

export const datasetCardExampleCode =
`<DatasetCard
  title="${datasetCardExample.title}"
  description="${datasetCardExample.description}"
  coverage="${datasetCardExample.coverage}"
  format="${datasetCardExample.format}"
  license="${datasetCardExample.license}"
  version="${datasetCardExample.version}"
  source={{ label: "${datasetCardExample.source.label}", href: "${datasetCardExample.source.href}", authorityLevel: "${datasetCardExample.source.authorityLevel}" }}
  machineReadable={${datasetCardExample.machineReadable}}
  href="${datasetCardExample.href}"
/>`;

export const apiEndpointCardExampleCode =
`<ApiEndpointCard
  method="${apiEndpointCardExample.method}"
  path="${apiEndpointCardExample.path}"
  description="${apiEndpointCardExample.description}"
  responseFormat="${apiEndpointCardExample.responseFormat}"
  authentication="${apiEndpointCardExample.authentication}"
  version="${apiEndpointCardExample.version}"
  exampleHref="${apiEndpointCardExample.exampleHref}"
/>`;

export const namespaceBadgeExampleCode =
`<NamespaceBadge
  namespace="${namespaceBadgeExample.namespace}"
  label="${namespaceBadgeExample.label}"
/>`;

export const reviewStatusBadgeExampleCode =
`<ReviewStatusBadge
  status="${reviewStatusBadgeExample.status}"
  label="${reviewStatusBadgeExample.label}"
/>`;

export const ontologyPropertyTableExampleCode =
`<OntologyPropertyTable
  properties={${arrayCode(ontologyPropertyTableExample.properties)}}
/>`;

export const ontologyClassCardExampleCode =
`<OntologyClassCard
  className="${ontologyClassCardExample.className}"
  namespace="${ontologyClassCardExample.namespace}"
  label="${ontologyClassCardExample.label}"
  description="${ontologyClassCardExample.description}"
  reviewStatus="${ontologyClassCardExample.reviewStatus}"
  properties={${arrayCode(ontologyClassCardExample.properties)}}
  source={{ label: "${ontologyClassCardExample.source.label}", href: "${ontologyClassCardExample.source.href}", authorityLevel: "${ontologyClassCardExample.source.authorityLevel}" }}
/>`;

export const termDefinitionCardExampleCode =
`<TermDefinitionCard
  term="${termDefinitionCardExample.term}"
  definition="${termDefinitionCardExample.definition}"
  namespace="${termDefinitionCardExample.namespace}"
  reviewStatus="${termDefinitionCardExample.reviewStatus}"
  source={{ label: "${termDefinitionCardExample.source.label}", href: "${termDefinitionCardExample.source.href}", authorityLevel: "${termDefinitionCardExample.source.authorityLevel}" }}
/>`;

export const translationVariantCardExampleCode =
`<TranslationVariantCard
  term="${translationVariantCardExample.term}"
  language="${translationVariantCardExample.language}"
  variant="${translationVariantCardExample.variant}"
  note="${translationVariantCardExample.note}"
  source={{ label: "${translationVariantCardExample.source.label}", href: "${translationVariantCardExample.source.href}", authorityLevel: "${translationVariantCardExample.source.authorityLevel}" }}
/>`;

export const authorityLevelBadgeExampleCode =
`<AuthorityLevelBadge
  authorityLevel="${authorityLevelBadgeExample.authorityLevel}"
  label="${authorityLevelBadgeExample.label}"
/>`;

export const machineReadableBadgeExampleCode =
`<MachineReadableBadge
  status="${machineReadableBadgeExample.status}"
  label="${machineReadableBadgeExample.label}"
/>`;

export const canonicalSourceCardExampleCode =
`<CanonicalSourceCard
  title="${canonicalSourceCardExample.title}"
  description="${canonicalSourceCardExample.description}"
  authorityLevel="${canonicalSourceCardExample.authorityLevel}"
  sourceType="${canonicalSourceCardExample.sourceType}"
  href="${canonicalSourceCardExample.href}"
  citation="${canonicalSourceCardExample.citation}"
  reviewStatus="${canonicalSourceCardExample.reviewStatus}"
  machineReadable="${canonicalSourceCardExample.machineReadable}"
/>`;

export const provenanceTrailExampleCode =
`<ProvenanceTrail
  title="${provenanceTrailExample.title}"
  steps={${arrayCode(provenanceTrailExample.steps)}}
/>`;

export const entityCardExampleCode =
`<EntityCard
  id="${entityCardExample.id}"
  title="${entityCardExample.title}"
  entityType="${entityCardExample.entityType}"
  description="${entityCardExample.description}"
  href="${entityCardExample.href}"
  authorityLevel="${entityCardExample.authorityLevel}"
  reviewStatus="${entityCardExample.reviewStatus}"
  machineReadable="${entityCardExample.machineReadable}"
/>`;

export const entityRelationshipListExampleCode =
`<EntityRelationshipList
  title="${entityRelationshipListExample.title}"
  entities={${arrayCode(entityRelationshipListExample.entities)}}
  relationships={${arrayCode(entityRelationshipListExample.relationships)}}
/>`;

export const semanticRelationGraphExampleCode =
`<SemanticRelationGraph
  title="${semanticRelationGraphExample.title}"
  description="${semanticRelationGraphExample.description}"
  entities={${arrayCode(semanticRelationGraphExample.entities)}}
  relationships={${arrayCode(semanticRelationGraphExample.relationships)}}
/>`;

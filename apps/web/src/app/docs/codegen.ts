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

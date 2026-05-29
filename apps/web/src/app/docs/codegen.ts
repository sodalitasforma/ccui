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

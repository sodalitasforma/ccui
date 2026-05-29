import {
  accordionExamples,
  buttonExamples,
  emptyStateExample,
  filterBarExample,
  mediaFrameExample,
  noticeExamples,
  tabExamples,
  tableRows,
  timelineExamples,
} from "./examples";

function prop(name: string, value: unknown) {
  if (value === undefined || value === false || value === null) return "";
  if (value === true) return ` ${name}`;
  return ` ${name}="${String(value)}"`;
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

export const mediaFrameExampleCode =
`<MediaFrame ratio="video" surface="dark">
  <iframe
    src="${mediaFrameExample.src}"
    title="${mediaFrameExample.title}"
    allowFullScreen
  />
</MediaFrame>`;

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

export const emptyStateExampleCode =
`<EmptyState>
  <Stack gap="sm">
    <Heading level={3} size="md">${emptyStateExample.title}</Heading>
    <Text tone="secondary">${emptyStateExample.description}</Text>
    <Button variant="secondary">${emptyStateExample.actionLabel}</Button>
  </Stack>
</EmptyState>`;

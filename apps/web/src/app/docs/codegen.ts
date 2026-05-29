import {
  accordionExamples,
  buttonExamples,
  mediaFrameExample,
  noticeExamples,
  tableRows,
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

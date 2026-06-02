import type { ComponentPropsWithoutRef } from "react";
import { Stack, Text } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { ChurchDocumentCard } from "./church-document-card";
import type { RelatedDocumentData } from "./types";

type RelatedDocumentsProps = {
  title?: string;
  documents: readonly RelatedDocumentData[];
} & ComponentPropsWithoutRef<"section">;

export function RelatedDocuments({
  title = "Related documents",
  documents,
  className,
  ...props
}: RelatedDocumentsProps) {
  return (
    <section className={cx("ccui-related-documents", className)} {...props}>
      <Stack gap="md">
        <Text as="h3" size="lg" className="ccui-related-documents__title">
          {title}
        </Text>
        <Stack gap="sm">
          {documents.map((document) => (
            <ChurchDocumentCard
              key={`${document.title}-${document.date ?? ""}`}
              {...document}
              description={document.relationship ?? document.description}
            />
          ))}
        </Stack>
      </Stack>
    </section>
  );
}

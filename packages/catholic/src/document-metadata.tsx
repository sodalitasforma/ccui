import type { ComponentPropsWithoutRef } from "react";
import { Cluster, Link, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { ChurchDocumentMetadataItem } from "./types";

type DocumentMetadataProps = {
  items: readonly ChurchDocumentMetadataItem[];
} & ComponentPropsWithoutRef<"dl">;

export function DocumentMetadata({
  items,
  className,
  ...props
}: DocumentMetadataProps) {
  return (
    <dl className={cx("ccui-document-metadata", className)} {...props}>
      {items.map((item) => (
        <div className="ccui-document-metadata__item" key={`${item.label}-${item.value}`}>
          <dt>
            <Text as="span" size="xs" tone="muted">
              {item.label}
            </Text>
          </dt>
          <dd>
            {item.href ? (
              <Link href={item.href}>{item.value}</Link>
            ) : (
              <Text as="span" size="sm">
                {item.value}
              </Text>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

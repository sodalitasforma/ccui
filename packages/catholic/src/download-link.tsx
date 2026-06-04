import type { ComponentPropsWithoutRef } from "react";
import { Card, Cluster, Link, Stack, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import { FileTypeIcon } from "./file-type-icon";
import type { DownloadLinkData } from "./types";

type DownloadLinkProps = DownloadLinkData & ComponentPropsWithoutRef<"a">;

export function DownloadLink({
  label,
  href,
  fileType,
  fileSize,
  description,
  className,
  ...props
}: DownloadLinkProps) {
  return (
    <Card
      as="a"
      href={href}
      padding="md"
      border="subtle"
      className={cx("ccui-download-link", className)}
      {...props}
    >
      <Cluster align="center" gap="sm">
        <FileTypeIcon fileType={fileType} />
        <Stack gap="xs">
          <Text as="span" className="ccui-download-link__label">
            {label}
          </Text>
          <Cluster gap="xs">
            <Text as="span" size="xs" tone="muted">
              {fileType.toUpperCase()}
            </Text>
            {fileSize ? (
              <Text as="span" size="xs" tone="muted">
                {fileSize}
              </Text>
            ) : null}
          </Cluster>
          {description ? (
            <Text as="span" size="sm" tone="secondary">
              {description}
            </Text>
          ) : null}
        </Stack>
      </Cluster>
    </Card>
  );
}

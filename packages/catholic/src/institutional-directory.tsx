import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Stack } from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import { Directory } from "./directory";
import { DirectoryCard } from "./directory-card";
import type { DirectoryEntityData } from "./types";

type InstitutionalDirectoryProps = {
  title: string;
  description?: string;
  items: readonly DirectoryEntityData[];
  filter?: ReactNode;
} & ComponentPropsWithoutRef<"section">;

export function InstitutionalDirectory({
  title,
  description,
  items,
  filter,
  className,
  ...props
}: InstitutionalDirectoryProps) {
  return (
    <section className={cx("forma-institutional-directory", className)} {...props}>
      <Stack gap="md">
        {filter}
        <Directory title={title} description={description}>
          {items.map((item) => (
            <DirectoryCard
              key={`${item.title}-${item.meta ?? ""}`}
              eyebrow={item.eyebrow}
              title={item.title}
              description={item.description}
              meta={item.meta}
              status={item.status}
              href={item.href}
            />
          ))}
        </Directory>
      </Stack>
    </section>
  );
}

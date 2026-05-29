import type { ComponentPropsWithoutRef } from "react";
import { DocumentCard } from "./document-card";
import type { BulletinData } from "./types";

type BulletinCardProps = BulletinData & ComponentPropsWithoutRef<"article">;

export function BulletinCard({
  title,
  date,
  description,
  href,
  fileType = "PDF",
  ...props
}: BulletinCardProps) {
  return (
    <DocumentCard
      title={title}
      description={description}
      date={date}
      fileType={fileType}
      href={href}
      {...props}
    />
  );
}

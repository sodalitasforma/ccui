import type { ComponentPropsWithoutRef } from "react";
import { Cluster, Link, Text } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { ParagraphAnchorData } from "./types";

type ParagraphAnchorProps = ParagraphAnchorData &
  Omit<ComponentPropsWithoutRef<"div">, "children">;

export function ParagraphAnchor({
  id,
  number,
  children,
  href,
  className,
  ...props
}: ParagraphAnchorProps) {
  return (
    <div id={id} className={cx("ccui-paragraph-anchor", className)} {...props}>
      <Cluster align="start" gap="sm">
        {number ? (
          <Link href={href ?? `#${id}`} className="ccui-paragraph-anchor__number">
            {number}
          </Link>
        ) : null}
        <Text as="p" className="ccui-paragraph-anchor__text">
          {children}
        </Text>
      </Cluster>
    </div>
  );
}

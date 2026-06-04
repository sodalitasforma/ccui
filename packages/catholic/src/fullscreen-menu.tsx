import type { ComponentPropsWithoutRef } from "react";
import { Button, Cluster, Container, Heading, Stack } from "@catholiccommons/primitives";
import { cx } from "@catholiccommons/primitives";
import type { NavItem } from "./types";

type FullscreenMenuProps = {
  open?: boolean;
  title?: string;
  primaryItems?: NavItem[];
  secondaryItems?: NavItem[];
  onCloseLabel?: string;
} & ComponentPropsWithoutRef<"div">;

export function FullscreenMenu({
  open = false,
  title = "Menu",
  primaryItems = [],
  secondaryItems = [],
  onCloseLabel = "Close",
  className,
  ...props
}: FullscreenMenuProps) {
  return (
    <div
      className={cx("ccui-fullscreen-menu", open && "is-open", className)}
      hidden={!open}
      {...props}
    >
      <Container size="xl">
        <Stack gap="xl">
          <Cluster justify="between">
            <Heading level={2} size="2xl" family="inscription">
              {title}
            </Heading>
            <Button variant="secondary" size="sm">
              {onCloseLabel}
            </Button>
          </Cluster>

          <div className="ccui-fullscreen-menu__grid">
            <nav aria-label="Primary menu" className="ccui-fullscreen-menu__primary">
              {primaryItems.map((item) => (
                <a key={`${item.label}-${item.href}`} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <nav aria-label="Secondary menu" className="ccui-fullscreen-menu__secondary">
              {secondaryItems.map((item) => (
                <a key={`${item.label}-${item.href}`} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

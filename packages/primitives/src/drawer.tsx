"use client";

import type {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  MouseEvent,
  ReactNode,
} from "react";
import { createContext, useContext, useId, useMemo, useState } from "react";
import { cx } from "./utils";

type DrawerSide = "left" | "right";

type DrawerContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  panelId: string;
  side: DrawerSide;
};

const DrawerContext = createContext<DrawerContextValue | null>(null);

function useDrawerContext(component: string) {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error(`${component} must be used inside Drawer.`);
  }

  return context;
}

export type DrawerProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: DrawerSide;
  children: ReactNode;
};

export function Drawer({
  open,
  defaultOpen = false,
  onOpenChange,
  side = "left",
  children,
}: DrawerProps) {
  const generatedId = useId();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const controlled = open !== undefined;
  const actualOpen = controlled ? open : uncontrolledOpen;

  function setOpen(nextOpen: boolean) {
    if (!controlled) {
      setUncontrolledOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  }

  const value = useMemo(
    () => ({
      open: actualOpen,
      setOpen,
      panelId: `ccui-drawer-${generatedId}`,
      side,
    }),
    [actualOpen, generatedId, side]
  );

  return (
    <DrawerContext.Provider value={value}>
      {children}
    </DrawerContext.Provider>
  );
}

export type DrawerTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DrawerTrigger({
  className,
  onClick,
  ...props
}: DrawerTriggerProps) {
  const { open, setOpen, panelId } = useDrawerContext("DrawerTrigger");

  return (
    <button
      type="button"
      aria-controls={panelId}
      aria-expanded={open}
      className={cx("ccui-drawer-trigger", className)}
      onClick={(event) => {
        onClick?.(event);
        setOpen(true);
      }}
      {...props}
    />
  );
}

export type DrawerOverlayProps = ComponentPropsWithoutRef<"button">;

export function DrawerOverlay({
  className,
  onClick,
  ...props
}: DrawerOverlayProps) {
  const { open, setOpen } = useDrawerContext("DrawerOverlay");

  return (
    <button
      type="button"
      aria-label="Close drawer"
      className={cx("ccui-drawer-overlay", className)}
      data-open={open ? "true" : "false"}
      onClick={(event) => {
        onClick?.(event);
        setOpen(false);
      }}
      {...props}
    />
  );
}

export type DrawerPanelProps = ComponentPropsWithoutRef<"aside"> & {
  closeOnLinkClick?: boolean;
};

export function DrawerPanel({
  className,
  closeOnLinkClick = true,
  onClick,
  children,
  ...props
}: DrawerPanelProps) {
  const { open, setOpen, panelId, side } = useDrawerContext("DrawerPanel");

  function handleClick(event: MouseEvent<HTMLElement>) {
    onClick?.(event);

    if (!closeOnLinkClick) return;

    const target = event.target;

    if (target instanceof HTMLElement && target.closest("a")) {
      setOpen(false);
    }
  }

  return (
    <aside
      id={panelId}
      className={cx("ccui-drawer-panel", className)}
      data-open={open ? "true" : "false"}
      data-side={side}
      onClick={handleClick}
      {...props}
    >
      {children}
    </aside>
  );
}

export type DrawerCloseProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DrawerClose({
  className,
  onClick,
  ...props
}: DrawerCloseProps) {
  const { setOpen } = useDrawerContext("DrawerClose");

  return (
    <button
      type="button"
      className={cx("ccui-drawer-close", className)}
      onClick={(event) => {
        onClick?.(event);
        setOpen(false);
      }}
      {...props}
    />
  );
}

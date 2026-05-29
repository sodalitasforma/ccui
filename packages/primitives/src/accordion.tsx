"use client";

import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import { cx } from "./utils";

type AccordionItemContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerId: string;
  panelId: string;
};

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null);

function useAccordionItemContext() {
  return useContext(AccordionItemContext);
}

type AccordionProps<T extends ElementType = "div"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function Accordion<T extends ElementType = "div">({
  as,
  className,
  ...props
}: AccordionProps<T>) {
  const Component = as || "div";
  return <Component className={cx("forma-accordion", className)} {...props} />;
}

type AccordionItemProps<T extends ElementType = "div"> = {
  as?: T;
  defaultOpen?: boolean;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

export function AccordionItem<T extends ElementType = "div">({
  as,
  defaultOpen = false,
  className,
  children,
  ...props
}: AccordionItemProps<T>) {
  const Component = as || "div";
  const [open, setOpen] = useState(defaultOpen);
  const reactId = useId();
  const triggerId = `forma-accordion-trigger-${reactId}`;
  const panelId = `forma-accordion-panel-${reactId}`;

  const value = useMemo(
    () => ({ open, setOpen, triggerId, panelId }),
    [open, triggerId, panelId]
  );

  return (
    <AccordionItemContext.Provider value={value}>
      <Component className={cx("forma-accordion-item", className)} {...props}>
        {children}
      </Component>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = {
  open?: boolean;
} & ComponentPropsWithoutRef<"button">;

export function AccordionTrigger({
  open,
  className,
  type = "button",
  onClick,
  ...props
}: AccordionTriggerProps) {
  const context = useAccordionItemContext();
  const isOpen = context ? context.open : Boolean(open);

  return (
    <button
      id={context?.triggerId}
      className={cx("forma-accordion-trigger", isOpen && "is-open", className)}
      type={type}
      aria-expanded={isOpen}
      aria-controls={context?.panelId}
      onClick={(event) => {
        context?.setOpen(!isOpen);
        onClick?.(event);
      }}
      {...props}
    />
  );
}

type AccordionContentProps<T extends ElementType = "div"> = {
  as?: T;
  open?: boolean;
} & ComponentPropsWithoutRef<T>;

export function AccordionContent<T extends ElementType = "div">({
  as,
  open,
  className,
  ...props
}: AccordionContentProps<T>) {
  const Component = as || "div";
  const context = useAccordionItemContext();
  const isOpen = context ? context.open : Boolean(open);

  return (
    <Component
      id={context?.panelId}
      className={cx("forma-accordion-content", isOpen && "is-open", className)}
      role="region"
      aria-labelledby={context?.triggerId}
      hidden={!isOpen}
      {...props}
    />
  );
}

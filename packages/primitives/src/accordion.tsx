import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "./utils";

type AccordionProps<T extends ElementType = "div"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

type AccordionItemProps<T extends ElementType = "div"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

type AccordionTriggerProps = {
  open?: boolean;
} & ComponentPropsWithoutRef<"button">;

type AccordionContentProps<T extends ElementType = "div"> = {
  as?: T;
  open?: boolean;
} & ComponentPropsWithoutRef<T>;

export function Accordion<T extends ElementType = "div">({
  as,
  className,
  ...props
}: AccordionProps<T>) {
  const Component = as || "div";

  return <Component className={cx("forma-accordion", className)} {...props} />;
}

export function AccordionItem<T extends ElementType = "div">({
  as,
  className,
  ...props
}: AccordionItemProps<T>) {
  const Component = as || "div";

  return <Component className={cx("forma-accordion-item", className)} {...props} />;
}

export function AccordionTrigger({
  open = false,
  className,
  type = "button",
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <button
      type={type}
      aria-expanded={open}
      className={cx("forma-accordion-trigger", className)}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="forma-accordion-icon">
        {open ? "−" : "+"}
      </span>
    </button>
  );
}

export function AccordionContent<T extends ElementType = "div">({
  as,
  open = false,
  className,
  ...props
}: AccordionContentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      hidden={!open}
      className={cx("forma-accordion-content", className)}
      {...props}
    />
  );
}

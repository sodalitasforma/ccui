import type {
  DetailsHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";
import { cx } from "./utils";

export type AccordionProps = HTMLAttributes<HTMLDivElement>;

export function Accordion({ className, children, ...props }: AccordionProps) {
  return (
    <div className={cx("forma-accordion", className)} {...props}>
      {children}
    </div>
  );
}

export type AccordionItemProps = DetailsHTMLAttributes<HTMLDetailsElement> & {
  defaultOpen?: boolean;
};

export function AccordionItem({
  className,
  children,
  defaultOpen,
  ...props
}: AccordionItemProps) {
  return (
    <details
      className={cx("forma-accordion-item", className)}
      open={defaultOpen}
      {...props}
    >
      {children}
    </details>
  );
}

export type AccordionTriggerProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <summary className={cx("forma-accordion-trigger", className)} {...props}>
      <span className="forma-accordion-trigger__label">{children}</span>
      <span className="forma-accordion-icon" aria-hidden="true" />
    </summary>
  );
}

export type AccordionContentProps = HTMLAttributes<HTMLDivElement>;

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <div className={cx("forma-accordion-content", className)} {...props}>
      {children}
    </div>
  );
}

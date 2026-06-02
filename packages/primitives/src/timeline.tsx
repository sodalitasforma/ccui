import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import { cx } from "./utils";

export type TimelineProps = HTMLAttributes<HTMLDivElement> & {
  currentStep?: number;
};

export function Timeline({
  className,
  children,
  currentStep,
  ...props
}: TimelineProps) {
  const resolvedChildren =
    typeof currentStep === "number"
      ? Children.map(children, (child) => {
          if (!isValidElement<TimelineItemProps>(child)) return child;

          const step = child.props.step;

          if (typeof step !== "number" || child.props.status) return child;

          const status =
            step < currentStep
              ? "complete"
              : step === currentStep
                ? "current"
                : "upcoming";

          return cloneElement(child as ReactElement<TimelineItemProps>, {
            status,
          });
        })
      : children;

  return (
    <div className={cx("forma-timeline", className)} {...props}>
      {resolvedChildren}
    </div>
  );
}

export type TimelineItemStatus = "complete" | "current" | "upcoming";

export type TimelineItemProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  step?: number;
  status?: TimelineItemStatus;
  icon?: ReactNode;
};

export function TimelineItem({
  className,
  children,
  step,
  status,
  icon,
  ...props
}: TimelineItemProps) {
  return (
    <div
      className={cx(
        "forma-timeline-item",
        status ? `forma-timeline-item--${status}` : undefined,
        className,
      )}
      data-step={step}
      data-status={status}
      {...props}
    >
      <div className="forma-timeline-marker" aria-hidden="true">
        {icon ?? (typeof step === "number" ? step : null)}
      </div>

      <div className="forma-timeline-content">{children}</div>
    </div>
  );
}

export type TimelineMarkerProps = HTMLAttributes<HTMLDivElement>;

export function TimelineMarker({
  className,
  children,
  ...props
}: TimelineMarkerProps) {
  return (
    <div className={cx("forma-timeline-marker", className)} {...props}>
      {children}
    </div>
  );
}

export type TimelineContentProps = HTMLAttributes<HTMLDivElement>;

export function TimelineContent({
  className,
  children,
  ...props
}: TimelineContentProps) {
  return (
    <div className={cx("forma-timeline-content", className)} {...props}>
      {children}
    </div>
  );
}

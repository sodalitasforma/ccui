import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./utils";

type TableDensity = "compact" | "normal" | "spacious";

type TableProps = {
  density?: TableDensity;
} & ComponentPropsWithoutRef<"table">;

type TableWrapperProps = ComponentPropsWithoutRef<"div">;

export function TableWrapper({ className, ...props }: TableWrapperProps) {
  return <div className={cx("forma-table-wrapper", className)} {...props} />;
}

export function Table({ density = "normal", className, ...props }: TableProps) {
  return (
    <table
      className={cx("forma-table", `forma-table--density-${density}`, className)}
      {...props}
    />
  );
}

export function THead({ className, ...props }: ComponentPropsWithoutRef<"thead">) {
  return <thead className={cx("forma-table-head", className)} {...props} />;
}

export function TBody({ className, ...props }: ComponentPropsWithoutRef<"tbody">) {
  return <tbody className={cx("forma-table-body", className)} {...props} />;
}

export function TR({ className, ...props }: ComponentPropsWithoutRef<"tr">) {
  return <tr className={cx("forma-table-row", className)} {...props} />;
}

export function TH({ className, ...props }: ComponentPropsWithoutRef<"th">) {
  return <th className={cx("forma-table-header", className)} {...props} />;
}

export function TD({ className, ...props }: ComponentPropsWithoutRef<"td">) {
  return <td className={cx("forma-table-cell", className)} {...props} />;
}

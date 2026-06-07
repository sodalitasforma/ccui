import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "./utils";

export type ThemeToggleTheme = "light" | "dark";

export type ThemeToggleProps = {
  theme: ThemeToggleTheme;
  lightIcon: ReactNode;
  darkIcon: ReactNode;
  lightLabel?: string;
  darkLabel?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "aria-label">;

export function ThemeToggle({
  theme,
  lightIcon,
  darkIcon,
  lightLabel = "Switch to light mode",
  darkLabel = "Switch to dark mode",
  className,
  ...props
}: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? lightLabel : darkLabel}
      aria-pressed={isDark}
      className={cx("ccui-theme-toggle", className)}
      {...props}
    >
      {isDark ? darkIcon : lightIcon}
    </button>
  );
}

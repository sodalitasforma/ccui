"use client";

import { useState } from "react";
import { ThemeToggle } from "@catholiccommons/primitives";
import { MoonIcon, SunIcon } from "@catholiccommons/icons";

type Theme = "light" | "dark";

function getDocumentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeTestToggle() {
  const [theme, setTheme] = useState<Theme>(getDocumentTheme);

  function toggleTheme() {
    const currentTheme = getDocumentTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }

  return (
    <ThemeToggle
      theme={theme}
      lightIcon={<SunIcon size="sm" />}
      darkIcon={<MoonIcon size="sm" />}
      onClick={toggleTheme}
    />
  );
}

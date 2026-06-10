"use client";

import { useMemo, useState } from "react";
import {
  CheckIcon,
  CopyIcon,
  DropdownItem,
  DropdownSplit,
} from "@catholiccommons/primitives";

type DocsPageActionsProps = {
  url: string;
};

function buildAssistantPrompt(url: string) {
  return `I'm looking at this Catholic Commons UI documentation: ${url}.
Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`;
}

function cleanText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function inlineMarkdown(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent || "";
  }

  if (!(node instanceof HTMLElement)) return "";

  if (
    node.classList.contains("ccui-dropdown-split") ||
    node.classList.contains("docs-code-copy") ||
    node.tagName.toLowerCase() === "button"
  ) {
    return "";
  }

  const tag = node.tagName.toLowerCase();

  if (tag === "code" && node.parentElement?.tagName.toLowerCase() !== "pre") {
    return ` \`${cleanText(node.textContent || "")}\` `;
  }

  if (tag === "strong" || tag === "b") {
    return `**${cleanText(Array.from(node.childNodes).map(inlineMarkdown).join(""))}**`;
  }

  if (tag === "em" || tag === "i") {
    return `_${cleanText(Array.from(node.childNodes).map(inlineMarkdown).join(""))}_`;
  }

  if (tag === "a") {
    const label = cleanText(Array.from(node.childNodes).map(inlineMarkdown).join(""));
    const href = node.getAttribute("href");
    return href && label ? `[${label}](${href})` : label;
  }

  return Array.from(node.childNodes).map(inlineMarkdown).join("");
}

function codeLanguageFor(code: string) {
  const trimmed = code.trim();

  if (
    trimmed.startsWith("pnpm ") ||
    trimmed.includes("\npnpm ") ||
    trimmed.startsWith("npm ") ||
    trimmed.startsWith("npx ")
  ) {
    return "bash";
  }

  if (
    trimmed.includes("import ") ||
    trimmed.includes("export ") ||
    trimmed.includes("from ")
  ) {
    return "tsx";
  }

  return "";
}

function directTextFrom(selector: string, element: HTMLElement) {
  const target = element.querySelector(selector);
  return target ? cleanText(inlineMarkdown(target)) : "";
}

function setupOptionsMarkdown(element: HTMLElement): string[] {
  const options = Array.from(element.querySelectorAll(".docs-install-option"));

  if (!options.length) return [];

  return options.flatMap((option) => {
    if (!(option instanceof HTMLElement)) return [];

    const title = directTextFrom(".docs-install-option__title", option);
    const description = directTextFrom("p", option);
    const badge = directTextFrom(".ccui-badge", option);

    if (!title) return [];

    const prefix = badge ? `- **${title}** — ${badge}:` : `- **${title}**:`;
    return [description ? `${prefix} ${description}` : prefix];
  });
}

function blockMarkdown(node: Element): string[] {
  if (!(node instanceof HTMLElement)) return [];

  if (
    node.classList.contains("ccui-dropdown-split") ||
    node.classList.contains("docs-code-disclosure") ||
    node.classList.contains("docs-floating-search") ||
    node.classList.contains("docs-sidebar") ||
    node.tagName.toLowerCase() === "button"
  ) {
    return [];
  }

  if (node.classList.contains("docs-install-recommendation")) {
    const text = cleanText(inlineMarkdown(node));
    return text ? [`> ${text}`] : [];
  }

  if (node.classList.contains("docs-install-options")) {
    return setupOptionsMarkdown(node);
  }

  const tag = node.tagName.toLowerCase();

  if (/^h[1-6]$/.test(tag)) {
    const level = Number(tag.slice(1));
    const text = cleanText(inlineMarkdown(node));
    return text ? [`${"#".repeat(level)} ${text}`] : [];
  }

  if (tag === "p") {
    const text = cleanText(inlineMarkdown(node));
    return text ? [text] : [];
  }

  if (tag === "pre") {
    const codeElement = node.querySelector("code");
    const code = (codeElement?.textContent || node.textContent || "").trim();
    const language = codeLanguageFor(code);

    return code ? [`\`\`\`${language}\n${code}\n\`\`\``] : [];
  }

  if (tag === "blockquote") {
    const text = cleanText(inlineMarkdown(node));
    return text ? [`> ${text}`] : [];
  }

  if (tag === "li") {
    const text = cleanText(inlineMarkdown(node));
    return text ? [`- ${text}`] : [];
  }

  if (tag === "ul" || tag === "ol") {
    return Array.from(node.children).flatMap(blockMarkdown);
  }

  return Array.from(node.children).flatMap(blockMarkdown);
}

function currentPageMarkdown() {
  const article = document.querySelector(".docs-install-article");

  if (!article) {
    return `# ${document.title}`;
  }

  return blockMarkdown(article)
    .join("\n\n")
    .replace(/\n\n(- \*\*)/g, "\n\n$1")
    .replace(/ +([,.;:])/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function DocsPageActions({ url }: DocsPageActionsProps) {
  const [copied, setCopied] = useState(false);

  const chatGptUrl = useMemo(
    () => `https://chatgpt.com/?q=${encodeURIComponent(buildAssistantPrompt(url))}`,
    [url]
  );

  const claudeUrl = useMemo(
    () => `https://claude.ai/new?q=${encodeURIComponent(buildAssistantPrompt(url))}`,
    [url]
  );

  async function copyPage() {
    await navigator.clipboard.writeText(currentPageMarkdown() + "\n");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <DropdownSplit
      label={copied ? "Copied" : "Copy Page"}
      actionLabel="Copy page as Markdown"
      iconBefore={copied ? <CheckIcon size="xs" /> : <CopyIcon size="xs" />}
      onAction={copyPage}
    >
      <DropdownItem href={chatGptUrl} target="_blank" rel="noreferrer">
        Open in ChatGPT
      </DropdownItem>
      <DropdownItem href={claudeUrl} target="_blank" rel="noreferrer">
        Open in Claude
      </DropdownItem>
    </DropdownSplit>
  );
}

"use client";

import { useState } from "react";
import { Button, CheckIcon, CopyIcon } from "@catholiccommons/primitives";

type DocsCodeBlockProps = {
  code: string;
  language?: string;
  copyable?: boolean;
  className?: string;
  variant?: "install" | "preview";
  label?: string;
};

export function DocsCodeBlock({
  code,
  language,
  copyable = false,
  className,
  label = "JSX example",
}: DocsCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className={["docs-code-block", className].filter(Boolean).join(" ")}>
      {copyable ? (
        <div className="docs-code-block__toolbar">
          <span className="docs-code-block__label">{label}</span>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="docs-code-block__copy"
            onClick={copyCode}
            aria-label={copied ? "Copied code" : "Copy code"}
          >
            {copied ? <CheckIcon size="sm" /> : <CopyIcon size="sm" />}
          </Button>
        </div>
      ) : null}

      <pre className="docs-pre">
        <code data-language={language}>{code}</code>
      </pre>
    </div>
  );
}

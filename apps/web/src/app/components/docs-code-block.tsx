"use client";

import { useState } from "react";
import { Button } from "../../../../../packages/primitives/src";

type DocsCodeBlockProps = {
  code: string;
  language?: string;
  label?: string;
};

export function DocsCodeBlock({ code, language, label = "Copy" }: DocsCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="docs-code-block">
      <pre className="docs-install-code">
        <code data-language={language}>{code}</code>
      </pre>
      <Button
        type="button"
        size="sm"
        variant="secondary"
        className="docs-code-block__copy"
        onClick={copyCode}
        aria-label={`${label} code`}
      >
        {copied ? "Copied" : label}
      </Button>
    </div>
  );
}

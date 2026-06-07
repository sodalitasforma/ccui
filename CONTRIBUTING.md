# Contributing

Catholic Commons UI is currently pre-stable and under review.

## Component additions

New components should include:

- A clear package location
- Typed props
- Token-based styling
- A documentation example
- A maturity classification
- Accessibility review before stable status

## Package placement

Use `packages/primitives` for general UI primitives.

Use `packages/catholic` for Catholic-specific interface patterns.

Use `packages/tokens` for design tokens and CSS variables.

Use `packages/icons` for audited interface icons and icon metadata.

## Maturity levels

Components should be classified as one of:

- `stable-candidate`
- `experimental`
- `demo-only`
- `remove-redesign`

The component maturity audit is maintained at:

```text
docs/component-maturity-audit.csv
```

## Review gate

Before committing changes, run:

```bash
pnpm check
```

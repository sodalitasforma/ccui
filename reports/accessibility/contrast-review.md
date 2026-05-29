# Accessibility Contrast Review

Date: 2026-05-28

Source: `packages/tokens/src/colors.json`

Thresholds:

- AA normal text: 4.5:1
- AA large text: 3:1
- AAA normal text: 7:1

## Semantic token combinations

| Test | Foreground | Background | Ratio | Result | Grade | Usage |
|---|---:|---:|---:|---|---|---|
| Primary text on page | `text-primary` `#240F03` | `surface-page` `#FDF5D8` | 16.80:1 | ✅ PASS | AAA normal / AAA large | Default body text on main page surface. |
| Primary text on subtle surface | `text-primary` `#240F03` | `surface-subtle` `#F4EDDA` | 15.70:1 | ✅ PASS | AAA normal / AAA large | Text inside soft institutional sections. |
| Primary text on parchment surface | `text-primary` `#240F03` | `surface-parchment` `#E8D6BC` | 12.91:1 | ✅ PASS | AAA normal / AAA large | Text on parchment/document-like panels. |
| Secondary text on page | `text-secondary` `#333333` | `surface-page` `#FDF5D8` | 11.57:1 | ✅ PASS | AAA normal / AAA large | Secondary prose or metadata. |
| Muted text on page | `text-muted` `#666666` | `surface-page` `#FDF5D8` | 5.26:1 | ✅ PASS | AA normal / AAA large | Low-emphasis metadata, labels, captions. |
| Primary link on page | `link-primary` `#663300` | `surface-page` `#FDF5D8` | 9.43:1 | ✅ PASS | AAA normal / AAA large | Default institutional links. |
| Active link on page | `link-active` `#663300` | `surface-page` `#FDF5D8` | 9.43:1 | ✅ PASS | AAA normal / AAA large | Active/current navigation link text. |
| Gold text-safe accent on page | `accent-gold-text` `#664D03` | `surface-page` `#FDF5D8` | 7.32:1 | ✅ PASS | AAA normal / AAA large | Accessible gold-family text treatment. |
| Active text-safe accent on page | `accent-active-text` `#663300` | `surface-page` `#FDF5D8` | 9.43:1 | ✅ PASS | AAA normal / AAA large | Accessible active/accent text treatment. |
| Inverse text on dark surface | `text-inverse` `#FFFFFF` | `surface-dark` `#240F03` | 18.35:1 | ✅ PASS | AAA normal / AAA large | White text on dark institutional surface. |
| Primary text on raised surface | `text-primary` `#240F03` | `surface-raised` `#FFFFFF` | 18.35:1 | ✅ PASS | AAA normal / AAA large | Text inside cards. |
| Primary link on raised surface | `link-primary` `#663300` | `surface-raised` `#FFFFFF` | 10.30:1 | ✅ PASS | AAA normal / AAA large | Links inside cards. |

## Raw palette as text on `surface-page`

Background: `surface-page` `#FDF5D8`

| Raw token | Value | Ratio | Result | Grade |
|---|---:|---:|---|---|
| `black` | `#000000` | 19.23:1 | ✅ PASS | AAA normal / AAA large |
| `brown-950` | `#240F03` | 16.80:1 | ✅ PASS | AAA normal / AAA large |
| `ink-900` | `#240F03` | 16.80:1 | ✅ PASS | AAA normal / AAA large |
| `ink-950` | `#171512` | 16.69:1 | ✅ PASS | AAA normal / AAA large |
| `brown-900` | `#4D290C` | 11.74:1 | ✅ PASS | AAA normal / AAA large |
| `ink-800` | `#333333` | 11.57:1 | ✅ PASS | AAA normal / AAA large |
| `ink-700` | `#343A40` | 10.53:1 | ✅ PASS | AAA normal / AAA large |
| `brown-800` | `#5A2E0B` | 10.51:1 | ✅ PASS | AAA normal / AAA large |
| `brown-700` | `#663300` | 9.43:1 | ✅ PASS | AAA normal / AAA large |
| `gray-700` | `#444444` | 8.92:1 | ✅ PASS | AAA normal / AAA large |
| `violet-700` | `#5B3A70` | 8.42:1 | ✅ PASS | AAA normal / AAA large |
| `blue-700` | `#244B77` | 8.19:1 | ✅ PASS | AAA normal / AAA large |
| `ink-600` | `#495057` | 7.49:1 | ✅ PASS | AAA normal / AAA large |
| `gold-700` | `#664D03` | 7.32:1 | ✅ PASS | AAA normal / AAA large |
| `red-700` | `#9F2D2D` | 6.66:1 | ✅ PASS | AA normal / AAA large |
| `blue-600` | `#0A58CA` | 5.90:1 | ✅ PASS | AA normal / AAA large |
| `green-700` | `#2E6B45` | 5.82:1 | ✅ PASS | AA normal / AAA large |
| `ink-500` | `#666666` | 5.26:1 | ✅ PASS | AA normal / AAA large |
| `brown-600` | `#936A3D` | 4.40:1 | ❌ FAIL | Fail normal / AA large |
| `orange-600` | `#DF621C` | 3.26:1 | ❌ FAIL | Fail normal / AA large |
| `gold-600` | `#A88D2B` | 2.95:1 | ❌ FAIL | Fail |
| `rose-500` | `#C97A8B` | 2.90:1 | ❌ FAIL | Fail |
| `gray-500` | `#999999` | 2.61:1 | ❌ FAIL | Fail |
| `gold-500` | `#B69B7E` | 2.41:1 | ❌ FAIL | Fail |
| `gold-400` | `#C5A377` | 2.17:1 | ❌ FAIL | Fail |
| `gold-300` | `#D7BA94` | 1.70:1 | ❌ FAIL | Fail |
| `yellow-500` | `#E9BF40` | 1.60:1 | ❌ FAIL | Fail |
| `gray-400` | `#CCCCCC` | 1.47:1 | ❌ FAIL | Fail |
| `paper-300` | `#DDD4BB` | 1.35:1 | ❌ FAIL | Fail |
| `paper-200` | `#E8D6BC` | 1.30:1 | ❌ FAIL | Fail |
| `gray-300` | `#DDDDDD` | 1.24:1 | ❌ FAIL | Fail |
| `gray-200` | `#E6E6E6` | 1.14:1 | ❌ FAIL | Fail |
| `paper-100` | `#F4EDDA` | 1.07:1 | ❌ FAIL | Fail |
| `gray-50` | `#F7F7F7` | 1.02:1 | ❌ FAIL | Fail |
| `gray-100` | `#F5F5F5` | 1.00:1 | ❌ FAIL | Fail |
| `paper-50` | `#FDF5D8` | 1.00:1 | ❌ FAIL | Fail |

## Findings

- All tested semantic text/background combinations meet WCAG AA for normal text.
- `accent-gold` and `accent-active` are retained as visual accent tokens for borders, icons, dividers, highlights, and large display treatments.
- `accent-gold-text` and `accent-active-text` exist for accessible text usage on light page surfaces.
- Muted text should be used for metadata and captions only after checking against its actual background.
- Future component work should include per-component contrast checks for hover, focus, disabled, selected, and error states.


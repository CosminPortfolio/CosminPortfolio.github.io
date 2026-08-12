---
name: Cosmin Pintilie Portfolio
description: An editorial proofing contact sheet for source-grounded performance-marketing cases.
colors:
  proof-stock: "#f7f7f4"
  paper: "#ffffff"
  paper-muted: "#f0f0ec"
  paper-hover: "#efefe9"
  ink: "#121212"
  text: "#34363a"
  supporting: "#55575b"
  quiet: "#75787d"
  rule: "#b9bab7"
  rule-dark: "#272727"
  cobalt: "#1557d5"
  cobalt-dark: "#0b43b0"
  cobalt-code: "#003f9e"
  safety-orange: "#f0522d"
  orange-ink: "#1b0c06"
  orange-text: "#552012"
  orange-wash: "#fff7f2"
  orange-wash-strong: "#fff4ef"
typography:
  identity:
    fontFamily: "Iowan Old Style, Baskerville, Times New Roman, serif"
    fontSize: "clamp(4rem, 8vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  dossier:
    fontFamily: "Iowan Old Style, Baskerville, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 4vw, 4.4rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  dossier-compact:
    fontFamily: "Iowan Old Style, Baskerville, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 11vw, 3rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  section:
    fontFamily: "Iowan Old Style, Baskerville, Times New Roman, serif"
    fontSize: "clamp(2.3rem, 4vw, 4.2rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  story-heading:
    fontFamily: "Iowan Old Style, Baskerville, Times New Roman, serif"
    fontSize: "clamp(1.65rem, 2.7vw, 2.65rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, Helvetica Neue, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: normal
  body-large:
    fontFamily: "Inter, Helvetica Neue, Arial, Helvetica, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: normal
  label:
    fontFamily: "Inter, Helvetica Neue, Arial, Helvetica, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1.35
    letterSpacing: "0.06em"
  micro:
    fontFamily: "Inter, Helvetica Neue, Arial, Helvetica, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.05em"
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: normal
rounded:
  proof: "0"
spacing:
  hairline: "1px"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  section: "clamp(4rem, 8vw, 7rem)"
components:
  primary-action:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.proof}"
    padding: "0.75rem 1.1rem"
    height: "3rem"
  proof-card:
    backgroundColor: "{colors.proof-stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.proof}"
    padding: "0.55rem"
    height: "8.75rem"
  proof-card-selected:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    rounded: "{rounded.proof}"
    padding: "0.55rem"
    height: "8.75rem"
---

# Design System: Proofing Contact Sheet

## Creative direction

The portfolio behaves like a campaign proof review. All sixteen cases remain visible as numbered proofs while the selected case opens into a full dossier. Source screenshots, configuration logic, tables, limitations, and operating plans are treated as editorial evidence rather than dashboard decoration.

The world is bright and exact: optical proof stock, black ink, cobalt for selection and measured decisions, and safety orange for reviewer marks or the active workflow step. Registration marks and pencil-like annotations are rare framing devices. They never compete with the content.

## Typography

Iowan Old Style or Baskerville carries identity, portfolio headings, and case titles. The serif voice makes the work feel authored and editorial. Operational controls, tables, metadata, and body copy use the neutral sans-serif stack. Monospace is limited to code, schemas, formulas, and match syntax.

Display tracking never goes tighter than -0.04em. Body copy remains within roughly 65–75 characters where the layout permits. Uppercase labels identify evidence; they do not carry explanatory prose.

## Layout

The desktop homepage uses an introduction, a four-discipline control strip, a complete 4×4 proof index, and a selected dossier. The proof index stays visible beside the dossier at wide breakpoints. At medium widths it becomes a full-width 8-column contact sheet; on mobile it becomes two columns and returns to normal document flow.

Case dossiers are native long-form pages. A source limitation sits directly under case metadata. Story sections use a narrow editorial heading column beside a 65–75ch reading column. Tables stay fully visible on desktop and gain a local horizontal scroller only on compact screens.

Toolkit pages reuse the same proof stock, hairline grids, serif section headings, and unrounded controls. The A/B lifecycle uses four complete operating stages; the negative-keyword library exposes all sixteen source lists and their use cases; monthly reporting preserves the full escalation/remediation matrix.

## Interaction and motion

Cobalt marks selection, links, and primary actions. Orange is reserved for the active optimization step, focus, and source-review annotations. Hover states invert a proof or move it to cobalt; they do not introduce shadows, gradients, glass, or rounded SaaS surfaces.

Case changes use one short proof-reveal motion with an exponential ease-out. The default state is already visible, and reduced-motion preferences disable the animation. Keyboard focus remains explicit and high contrast.

## Evidence rules

- Demonstration work is labeled adjacent to the relevant claim.
- Configuration metrics are never presented as live commercial outcomes.
- Screens that contradict the narrative, such as zero-data or paused diagnostics, are removed or replaced with source build evidence.
- Source dashboards retain exact metrics and explanatory context.
- No prepared-by title, invented client access, or unsupported performance claim is introduced.

## Avoid

- Dark terminal aesthetics, neon, gradients, glass, or ambient card shadows.
- Generic icon/heading/text card grids as the primary page structure.
- Pill-heavy controls, rounded SaaS panels, or decorative 3D.
- Artifact/decision summary boxes that compress the case until its build logic loses meaning.
- Hiding source limitations, definitions, or full tables behind hover states.

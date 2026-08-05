---
name: Cosmin Pintilie Portfolio
description: A near-black technical evidence room for performance-marketing decisions, implementation logic, and proof.
colors:
  evidence-ink: "#f7f4fb"
  supporting-ink: "#c9c1d2"
  quiet-ink: "#91899c"
  evidence-ground: "#09090b"
  evidence-panel: "#111015"
  evidence-panel-raised: "#18151d"
  rule-line: "#37303f"
  decision-purple: "#b968e5"
  decision-purple-bright: "#d18af6"
  analysis-blue: "#56a8e9"
  validation-teal: "#55c4c0"
  focus-yellow: "#f5d55f"
typography:
  display:
    fontFamily: "Helvetica Neue, Arial, Helvetica, sans-serif"
    fontSize: "clamp(3.25rem, 6.2vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Helvetica Neue, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 4.7rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Helvetica Neue, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Helvetica Neue, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Helvetica Neue, Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.06em"
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
rounded:
  sharp: "0"
spacing:
  hairline: "1px"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "2rem"
  section: "clamp(4.5rem, 8vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.decision-purple}"
    textColor: "{colors.evidence-ground}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0.75rem 1.1rem"
    height: "3.2rem"
  button-primary-hover:
    backgroundColor: "{colors.decision-purple-bright}"
    textColor: "{colors.evidence-ground}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0.75rem 1.1rem"
    height: "3.2rem"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.evidence-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0.75rem 1.1rem"
    height: "3.2rem"
  case-card:
    backgroundColor: "{colors.evidence-panel-raised}"
    textColor: "{colors.supporting-ink}"
    rounded: "{rounded.sharp}"
    padding: "1.1rem"
    height: "10.5rem"
  case-card-selected:
    backgroundColor: "{colors.decision-purple}"
    textColor: "{colors.evidence-ground}"
    rounded: "{rounded.sharp}"
    padding: "1.1rem"
    height: "10.5rem"
---

# Design System: Cosmin Pintilie Portfolio

## Overview

**Creative North Star: "The Technical Evidence Room"**

The portfolio should feel like entering a carefully prepared evidence room: dark, calm, exact, and arranged so that every claim has nearby context. Large, tightly set headlines establish confidence, while fine rules, structured grids, native tables, code, and platform evidence carry the real authority. The atmosphere is technical without becoming sterile and polished without becoming glossy.

The system is dense by intent but never crowded. Near-black surfaces preserve focus over long technical reads; purple marks decisions and active state, while blue and teal distinguish analysis and validation. Decoration stays subordinate to evidence. Restrained radial light in the page background and one animated route introduce life without turning the work into spectacle.

**Key Characteristics:**

- Near-black evidence-led surfaces with high-contrast, warm-white type.
- Square geometry, fine one-pixel rules, and grid-based information structures.
- Purple for choice and emphasis; blue for analysis; teal for validation and positive signals.
- Oversized, tightly tracked headings paired with compact uppercase labels.
- Flat tonal depth, restrained gradients, and motion that yields to reduced-motion preferences.

## Colors

The palette is a dark analytical field with a single expressive decision color and two restrained semantic signals.

### Primary

- **Decision Purple:** The main active-state and action color. Use it for the primary button, selected discipline or case, route path, and decisive emphasis.
- **Bright Decision Purple:** A lighter companion for hover states, fine outlines, evidence labels, and key numeric emphasis.

### Secondary

- **Analysis Blue:** Marks pipelines, reporting layers, dates, progress, and connective analytical structures.

### Tertiary

- **Validation Teal:** Marks validation, privacy, summary keys, positive results, and small proof signals.
- **Focus Yellow:** Reserved for the visible keyboard focus outline; it is an accessibility signal, not a brand accent.

### Neutral

- **Evidence Ground:** The page field and deepest reading surface.
- **Evidence Panel:** The default card, header, and structural surface.
- **Raised Evidence Panel:** The tonal step for cards, table headers, and grouped evidence.
- **Evidence Ink:** Primary text and high-value labels.
- **Supporting Ink:** Body copy and secondary navigation.
- **Quiet Ink:** Captions, metadata, and lower-emphasis disclosure copy.
- **Rule Line:** The fine divider and border color that organizes information without adding weight.

### Named Rules

**The Signal Hierarchy Rule.** Purple means choice or emphasis, blue means analysis, teal means validation, and yellow means keyboard focus. Do not exchange their roles casually.

**The Evidence Contrast Rule.** Long-form evidence sits on the darkest fields, with supporting copy softened but never pushed below comfortable reading contrast.

## Typography

**Display Font:** Helvetica Neue (with Arial and Helvetica fallbacks)  
**Body Font:** Helvetica Neue (with Arial and Helvetica fallbacks)  
**Label/Mono Font:** Helvetica Neue for labels; the system monospace stack for code and formulas

**Character:** One neo-grotesque family keeps the portfolio direct, credible, and free of ornamental distraction. Hierarchy comes from decisive scale, weight, tracking, and line length; monospace appears only where technical notation benefits from it.

### Hierarchy

- **Display** (700, fluid 3.25–4.75rem, 0.96 line-height): Hero and full-case titles; tightly tracked and balanced across a short measure.
- **Headline** (700, fluid 2.2–4.7rem, 1 line-height): Major section statements and portfolio positioning.
- **Title** (700, fluid 1.35–1.8rem, 1.2 line-height): Gallery headings, content groups, and supporting editorial structure.
- **Body** (400, 1rem, 1.6 line-height): Explanations and technical narrative, typically held to 58–72 characters per line.
- **Label** (800, 0.75rem, 0.06em tracking, uppercase where categorical): Evidence types, dates, metadata keys, disciplines, and states.
- **Code** (400, 0.85rem, 1.7 line-height): Formulas, schemas, implementation snippets, and technical routes.

### Named Rules

**The Compressed Authority Rule.** Large headings use tight line-height and negative tracking; body copy stays open and readable. Never apply display compression to technical prose.

**The Label Discipline Rule.** Uppercase labels are brief and categorical. They identify evidence; they do not carry explanatory sentences.

## Layout

The primary canvas is a centered container capped at 1280px with a 1rem outer gutter on desktop and a 0.625rem gutter on compact screens. Major sections use generous fluid vertical spacing and one-pixel separators. Editorial introductions are usually two-column grids: a strong statement beside a bounded explanation.

The case experience combines a narrow discipline rail with a flexible evidence panel. Inside an open case, section headings occupy a sticky left column while prose, tables, figures, and diagrams occupy the wider right column. Summary grids, evidence cards, and metadata groups use one-pixel gaps over the rule color to create crisp shared dividers instead of independent boxed tiles.

At 1000px, the hero, section headings, discipline browser, and experience layout collapse to one column; discipline tabs become a horizontal strip. At 760px, navigation becomes a menu, the case gallery becomes a horizontally scrollable snap row, evidence structures stack, sticky story headings release into document flow, and side gutters tighten. Tables preserve their useful minimum width and scroll inside their own frame rather than forcing the page to overflow.

**The One Reading Column Rule.** On compact screens, preserve the evidence order and collapse structures into one readable sequence; never shrink technical tables or diagrams until their meaning becomes illegible.

## Elevation & Depth

The system is flat by default and uses no box shadows. Depth comes from three near-black tonal layers, fine shared borders, the occasional purple or green-tinted state surface, and two restrained radial gradients fixed behind the page. Hover states may translate an action upward by 2px, but they do not cast a shadow. The result should feel architectural, not card-stack glossy.

### Named Rules

**The Tonal Depth Rule.** Establish hierarchy with neighboring dark surfaces and one-pixel rules before introducing any decorative effect.

**The No Shadow Rule.** Do not add ambient card shadows. The incumbent world communicates depth through tone, borders, and state color.

## Shapes

The form language is square and measured. Buttons, cards, chips, evidence panels, tables, focus containers, and navigation controls use sharp corners. One-pixel borders and one-pixel grid gaps are the recurring construction method. Circular geometry is reserved for meaningful map stops; it is not a general component style. Images may be offset by a square outline to create a precise, editorial registration-mark effect.

**The Square Evidence Rule.** Evidence containers and interaction controls remain sharp-cornered. Do not soften the system with generic medium-radius cards or pill buttons.

## Components

### Buttons

- **Shape:** Sharp rectangular controls with a one-pixel border and a minimum height of 3.2rem.
- **Primary:** Decision Purple fill with deep ink text and compact, heavy labeling.
- **Hover / Focus:** Hover shifts upward by 2px and brightens the purple; keyboard focus uses the dedicated yellow outline with a 4px offset.
- **Secondary / Quiet / Light:** Secondary uses the raised panel tone, quiet stays transparent, and light reverses to Evidence Ink on dark or purple fields.

### Chips

- **Style:** Small, sharp outlined labels with Bright Decision Purple text, heavy uppercase typography, and compact padding.
- **State:** Chips describe evidence type or category; selection is handled by full discipline tabs and case cards rather than pill toggles.

### Cards / Containers

- **Corner Style:** Sharp corners throughout.
- **Background:** Evidence Panel or Raised Evidence Panel over the Evidence Ground.
- **Shadow Strategy:** No shadows; shared borders and tonal separation provide depth.
- **Border:** One-pixel Rule Line, often implemented as a one-pixel gap over a Rule Line parent.
- **Internal Padding:** Typically 1–1.4rem for dense evidence and fluid 2–4rem for major reading headers.

### Navigation

- **Style:** A sticky, translucent near-black header with a square monogram, muted heavy links, and a bordered résumé action.
- **States:** Links brighten to Evidence Ink on hover or current state. At compact widths, the navigation becomes a bordered vertical menu opened by a square Menu control.

### Discipline Tabs

Discipline tabs are tall, left-aligned evidence selectors. Their default state is transparent over the panel with Supporting Ink; hover adds the raised panel tone; selection fills the whole tab with Decision Purple and deep text. On narrower screens they become a horizontally scrollable four-column strip.

### Case Gallery Cards

Case cards are dense, square selection surfaces with a title, short decision-oriented description, and index. Default cards use the raised panel; hover adds a subtle purple-dark tone; the selected card becomes a solid Decision Purple field. On mobile the row scrolls horizontally with snap alignment, preserving scanability without stacking sixteen selectors above the reader.

### Evidence Reader

The reader is a native-document surface, not an embedded viewer. It begins with an oversized case title, compact metadata, a prominent evidence limitation, and a two-column summary. Technical narrative follows in sticky-heading sections with native tables, code, diagrams, and captioned figures. Figures retain natural detail, while tables and code scroll within bordered frames when necessary.

## Do's and Don'ts

### Do:

- **Do** use one-pixel rules and tonal panel shifts to organize dense evidence.
- **Do** keep demonstrations, evidence limitations, and next steps visually adjacent to the claims they qualify.
- **Do** reserve purple for actions and active state, blue for analytical structure, teal for validation, and yellow for focus.
- **Do** preserve generous space around major headlines while keeping evidence cards compact and information-dense.
- **Do** honor reduced-motion settings and keep keyboard focus clearly visible.

### Don't:

- **Don't** add rounded cards, pill buttons, glossy shadows, glassmorphism, or decorative gradients inside evidence components.
- **Don't** introduce display serifs or ornamental type treatments that compete with technical content.
- **Don't** use the accent palette as decoration or allow multiple semantic colors to compete in the same small component.
- **Don't** compress long-form prose, code, or tables to mimic a dashboard when the content needs a reading surface.
- **Don't** hide evidence limitations in footnotes, hover states, or low-contrast metadata.

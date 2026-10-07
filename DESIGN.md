---
name: CS Society @ Ashoka (AUCSS)
description: The public home and record of the CS Society at Ashoka University. Serious structure, casual culture.
colors:
  primary: "#D80032"
  on-primary: "#ffffff"
  background: "#f7f9fb"
  surface: "#ffffff"
  surface-container-low: "#f2f4f6"
  surface-container: "#eceef0"
  border: "#e2e2e2"
  on-surface: "#191c1e"
  on-surface-variant: "#5d3f3c"
  secondary: "#5e5e5e"
  dot-grid: "#e2e8f0"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
  card-title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-small:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.1em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    fontFeature: "\"tnum\" 1"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"
  2xl: "96px"
  container: "1024px"
  container-wide: "1152px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.surface-container-low}"
  nav-link:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "24px"
  panel:
    backgroundColor: "{colors.surface-container-low}"
    rounded: "{rounded.2xl}"
    padding: "40px"
  event-slot:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  event-slot-pending:
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "0 24px"
  archive-tile:
    backgroundColor: "{colors.surface-container}"
    rounded: "{rounded.lg}"
  invert-band:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.on-primary}"
    padding: "96px 24px"
---

# Design System: CS Society @ Ashoka (AUCSS)

## Overview

**Creative North Star: "The Annotated Record"**

AUCSS presents itself as a well-kept public record with a warm hand in the margins. The structural half (a formal constitution, elections, an archive of events) is carried by a cool off-white ground, a faint engineering dot grid, hairline borders, and bold, tightly tracked Inter headlines that read like the headings of an official document. The casual half lives in the annotations: JetBrains Mono for dates, buttons and navigation, one hot brand red that marks whatever is live or current, and copy that is allowed to be self-aware.

Density is moderate and editorial. Pages are a stack of full-bleed bands separated by 1px rules, each band holding a centred column of 1024px (1152px for image-heavy surfaces like the events wall). Colour is almost entirely neutral; brand red carries interaction, state and "now", never decoration. Depth is flat at rest and appears only as a response to hover. Motion is short, eased, and always disabled under reduced-motion.

The events page is one surface in this world: the current academic year is a wall of slots that fills up as recaps land (red marks the pending slot), and earlier years sit below a hard rule as a smaller grayscale strip that regains colour on hover. That present-in-colour, past-in-grayscale treatment is the system's way of telling time, and it already appears on the home page's recent-event cards.

**Key Characteristics:**
- Off-white ground (`background`) with a 32px radial dot grid on hero and lead bands.
- Inter bold for headings, JetBrains Mono for data, controls and navigation.
- Brand red `#D80032` is binding and rare: interaction, active state, and "current".
- Flat surfaces, hairline `border` rules, soft red glow only on hover.
- Grayscale for the past, colour for the present.
- Reveal-on-scroll and fill-in motion, all killed by `prefers-reduced-motion`.

## Colors

A cool, near-colourless neutral field with a single saturated red that does all the signalling.

### Primary
- **Ashoka Signal Red** (`primary`): the binding brand colour. Filled CTAs (Join Us, Apply now, Learn more), active nav underline, hover text on links and card titles, focus rings, the pending-recap slot on the events wall (dashed at 60% opacity over a 4% red tint), and text selection at 16%. Never a background for large areas; never decorative.

### Neutral
- **Paper Mist** (`background`): page ground on every redesigned route.
- **Clean Sheet** (`surface`): cards, caption plates, table bodies.
- **Faint Ledger** (`surface-container-low`): alternate bands (What we do, Legacy site), footer, panels, table headers, outline-button hover.
- **Ledger Gray** (`surface-container`): image placeholder fill behind archive photos.
- **Hairline** (`border`): every 1px rule, card stroke and band divider.
- **Dot Grid Slate** (`dot-grid`): the 1px dots of the 32px background grid only.
- **Ink** (`on-surface`): headings, primary text, outline-button stroke, and the inverted closing band (Join CTA) background.
- **Warm Umber Ink** (`on-surface-variant`): body copy and nav links; a red-leaning dark brown that keeps long text warm next to the red.
- **Graphite** (`secondary`): metadata, dates, lead paragraphs on Team, the "Past events" archive heading.

### Named Rules
**The Red Means Now Rule.** Brand red marks interaction, the active route, and the current moment (this year's pending recap, a "Save the Date" tag). If an element is neither interactive nor current, it is not red.

**The Neutral Field Rule.** No second accent. Depth and grouping come from the four neutral surfaces and hairline borders, not from additional hues.

## Typography

**Display Font:** Inter (via `--font-inter`, weights 400/500/600/700)
**Label/Mono Font:** JetBrains Mono (via `--font-jetbrains-mono`, weights 400/500/700)

**Character:** Inter at weight 700 with tight tracking gives the documentary, constitutional voice; JetBrains Mono supplies the builder's voice for numbers, controls and navigation. The pairing is the "serious structure, casual culture" positioning set in type.

### Hierarchy
- **Display** (700, 3rem to 4.5rem, line-height 1, -0.025em): the home hero name only.
- **Headline** (700, 2.25rem to 3rem, -0.025em): one page-level h1 per route ("Meet the Society", "This year · 2026–27").
- **Title** (600, 1.875rem): section h2s ("Our Mission", "Core Team", "Past Presidents").
- **Card title** (600, 1.125rem; 0.875 to 0.9375rem in dense archive grids): card and tile headings, turning red on group hover.
- **Body** (400, 1rem, line-height 1.625): explanatory copy in `on-surface-variant`, measure capped around 36 to 42rem. Lead paragraphs step up to 1.125rem.
- **Label** (400, 0.875rem, uppercase, 0.1em tracking): button text and nav links, mono.
- **Data** (400, 0.75rem, tabular figures): dates, academic years, table year cells, mono in `secondary`. Event dates always render as zero-padded `DD/MM/YYYY`.

### Named Rules
**The Mono Is Data Rule.** JetBrains Mono is for things a machine could have printed: dates, years, counts, control labels, navigation. Prose and headings are Inter.

**The One Archive Heading Rule.** A section heading may be set in mono (0.75rem, uppercase, 0.2em tracking, `secondary`) only when it is a real heading that names an archive or index and the section beneath it is a dense grid (the events "Past events" h2). It is the heading itself, not a label stacked above another heading.

## Layout

Pages are vertical stacks of full-width bands. Bands alternate `background` and `surface-container-low` and are divided by a 1px `border` top rule. Standard band padding is 80px vertical (96px for the inverted closing CTA); horizontal gutter is a constant 24px. Content sits in a centred column of 1024px, widening to 1152px on image-led surfaces (home hero, events). Grids collapse from 3 or 4 columns to 1 below 768px; card grid gaps are 24px, the events wall uses 16px rising to 20px, and the archive strip uses 16px horizontal / 32px vertical with 6 columns at 1024px, 3 at 640px, 2 on phones.

The events wall always shows at least 8 slots (two rows of four on desktop) and pads to a full row; empty frames drop to 1 on phones and 3 on tablets. Media keeps fixed aspect ratios: 7:4 for wall slots, 4:3 for archive tiles, 16:9 for event cards, 1:1 for team portraits.

The navbar is sticky, 80px tall, translucent with backdrop blur, and holds the 1152px column.

### Named Rules
**The Hairline Band Rule.** Sections are separated by a single 1px `border` rule and a surface change, never by shadows, gradients or decorative dividers. The hard break between this year and earlier years on the events page is this same rule.

## Elevation & Depth

Flat by default. Surfaces are separated by tonal steps between the four neutrals and hairline borders. Shadow appears only as hover feedback, tinted with brand red, and always paired with a small lift.

### Shadow Vocabulary
- **Red hover glow** (`box-shadow: 0 10px 40px -10px rgba(216, 0, 50, 0.15)`, with `translateY(-4px)` and border shifting to 30% red): cards on hover (What we do, Society Highlights, Core Team).
- **CTA hover halo** (Tailwind `shadow-lg` tinted `primary` at 30%, with `scale(1.05)`): the navbar Join Us button only.

### Named Rules
**The Flat-At-Rest Rule.** Nothing casts a shadow while idle. Depth is a response to the pointer.

## Shapes

Gently rounded, consistent by role. Buttons and tags use a slight 4px corner; media frames, wall slots and archive tiles 8px; caption plates inside photos 6px; cards 12px; large panels and the inverted Team CTA 16px; avatars are circles. Borders are 1px solid `border`; a dashed stroke means "not here yet" (2px dashed red at 60% for a pending recap, 1px dashed ink at 20% for an empty slot). Photos are always clipped to their frame's radius with `object-fit: cover`.

### Named Rules
**The Dashed Means Pending Rule.** Dashed borders are reserved for slots awaiting content. A finished thing is solid.

## Components

### Buttons
Confident, compact, mono-labelled.
- **Shape:** slight corner (4px).
- **Primary:** `primary` fill, `on-primary` text, mono label uppercase 0.1em, 12px x 24px. Hover drops opacity to 0.9 (200ms). The navbar Join Us variant is 8px x 20px and scales to 1.05 with a red halo.
- **Outline:** 1px `on-surface` stroke, `on-surface` text, same label and padding; hover fills `surface-container-low` (or `surface` when sitting on a low band).
- **Text link CTA:** mono uppercase label in `on-surface` with a trailing arrow, turning `primary` on hover ("View all →").
- **Focus:** 2px `primary` ring with 2px offset (4px on archive tiles), no default outline.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** `surface` on `background` or `surface-container-low` bands.
- **Shadow Strategy:** flat; red hover glow per Elevation.
- **Border:** 1px `border`, warming to 30% red on hover.
- **Internal Padding:** 24px for text cards, 16px for media cards.
- Media cards put a rounded 8px image frame on top, title, short body, then a footer row above a hairline: mono date on the left, red arrow on the right that nudges 4px on hover.
- **Panel:** `surface-container-low`, 16px corners, 24px rising to 40px padding, used for grouped content like Faculty Advisors.

### Navigation
- Sticky 80px bar, near-white translucent with backdrop blur, 1px bottom rule. Animated logo left, mono uppercase links (0.875rem, 0.025em) centred with 32px gaps, primary Join Us on the right.
- Links are `on-surface-variant`, turning `primary` on hover; a 2px red underline scales in from the left over 300ms and stays on the active route.
- Below 768px, a three-bar toggle opens a stacked mono list; the active item gets a 2px red bottom border.

### Footer
`surface-container-low` with top rule; Inter black wordmark "AUCSS" left, mono uppercase social links right. A 28px credits strip expands to 64px on hover, cross-fading "Credits" into the designer/maintainer line.

### Event Wall (signature)
The current academic year's recaps as a grid of 7:4 slots with 8px corners.
- **Filled slot:** cover photo in full colour, 1px `border`, with a 95% white caption plate inset 8px from the bottom (6px corners) holding the title (600, 0.875rem) and a mono data date. Photo scales to 1.03 over 700ms on hover; title turns red.
- **Pending slot:** 2px dashed red at 60% over a 4% red tint, centred calendar icon in red, bold title, a 24px hairline, and a short mono uppercase note in `secondary`.
- **Empty slot:** 1px dashed ink at 20%, centred image glyph at 10% ink, hidden from assistive tech.
- **Motion:** slots settle in sequence (opacity 0.4 to 1, 8px rise, scale 0.985 to 1, 700ms, 60ms stagger).

### Archive Strip (signature)
Earlier years below a hard rule: 4:3 photo tiles on `surface-container` with 8px corners, rendered grayscale and regaining colour on hover or keyboard focus (500ms). Title (600, 0.875 to 0.9375rem, two-line clamp with reserved height) and mono data date beneath. Headed by the mono archive h2 described in Typography.

### Data Table
Rounded 12px `surface` container with 1px border; header row in `surface-container-low` with mono uppercase column labels; mono `secondary` year cells; 1px row rules.

## Do's and Don'ts

### Do:
- **Do** keep brand red `#D80032` for interaction, active state and the current moment only (The Red Means Now Rule).
- **Do** separate sections with a 1px `border` rule plus a surface change, at 80px vertical padding.
- **Do** set dates and academic years in JetBrains Mono with tabular figures, dates as zero-padded `DD/MM/YYYY`.
- **Do** show the past in grayscale and restore colour on hover and focus; show the present in full colour.
- **Do** use dashed frames only for slots awaiting real content, and say honestly what is pending.
- **Do** give every reveal or fill-in animation a `prefers-reduced-motion: reduce` override that shows content immediately.
- **Do** use the 32px `dot-grid` radial pattern on lead bands, at 40 to 60% opacity.

### Don't:
- **Don't** add a second accent hue; grouping comes from the neutral surfaces.
- **Don't** put shadows on resting surfaces; the red glow is hover-only.
- **Don't** fill large areas with red; the only large dark area is the `on-surface` closing CTA band.
- **Don't** set body copy or headings in mono, except the single archive-index h2 pattern.
- **Don't** fabricate placeholder imagery or stats; use real photos or posters, or an empty frame.

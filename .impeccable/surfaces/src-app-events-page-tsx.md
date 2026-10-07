---
version: 1
slug: "src-app-events-page-tsx"
primary_target: "src/app/events/page.tsx"
related_targets: []
---

# Events (recaps) surface

Scope: /events. Mode: Persuade (public record for outside audiences; proof the society is active now).
Job: show recaps of events that already happened, this academic year first, unmistakably apart from earlier years. Upcoming events live on the home page, not here.
Content truth: recaps come from src/eventposts/*.mdx. This year (2026–27) has no recaps yet; CS Mixer 2026 is pending (recap after the event). Earlier recaps are Sept 2023 – Apr 2024. User chose the generic label "Past events" and real photos only (posters where no photo exists).
Approved comp: .impeccable/mocks/photowall.png (decision comp, "The Photo Wall"). Its photos are placeholders; its top-right tagline was dropped by the user.

## Direction contract
THESIS: This year is a wall that fills up as events happen; the past is a smaller grayscale strip below a hard break. Refuses the uniform card grid where every year looks the same.
OWN-WORLD: incumbent AUCSS system: off-white ground with dot grid, Inter bold headlines, uppercase JetBrains Mono labels, brand red #D80032 only on the current year (pending slot dashed red, pale pink fill); empty slots are light-gray dashed frames with an image glyph; past photos grayscale, colour on hover.
STORY: visitor sees "This year · 2026–27", understands recaps land here as events happen, sees what is pending, then scans the past record with real dates and opens any recap.
FIRST VIEWPORT: kicker + headline top-left at ~46px; a 4-column, 2-row wall spanning the content width, first slot the red dashed CS Mixer pending card, remaining slots empty frames; the past strip begins just above the fold edge as a 6-column row of grayscale photos with title + mono date.
FORM: Photo Wall, dealt lead of round two (index 6 of 7), seed 96dc30aa.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

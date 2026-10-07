# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: outside audiences — faculty, alumni, recruiters, and people at other universities who meet the society through its website and need to understand what it is, how it is run, and what it has done. Future design decisions optimize for this reader first.

Secondary (confirmed present in the product, not the optimization target): Ashoka students considering joining (the Join flow), and current members returning for events, team info, and learning resources.

## Product Purpose

The official website of the CS Society at Ashoka University (AUCSS): the public home and record of the society. It covers who the society is, how it is governed, the team, an archive of past events, learning resources, and a way to join. Success means an outside visitor leaves with an accurate, credible picture of the society and its activity, and an interested student can find the way in.

## Positioning

Serious structure, casual culture. AUCSS is a formally constituted society (a written constitution, elections, member rights, democratic representation for every CS student at Ashoka) whose day-to-day culture is playful, beginner-friendly, and open to anyone into code and building things, not only CS majors. Both halves are true and both must come through; neither alone is distinctive.

## Operating Context

- Content is maintained by rotating student teams, many with little web experience. `PROJECT_GUIDE.md` is the onboarding document for them.
- Events are authored as MDX files in `src/eventposts/` (frontmatter `title`, `date`, `imgList`, `type`), with thumbnails at `public/img/events/<slug>.png` and galleries under `public/img/events/`.
- The team roster is plain data arrays at the top of `src/app/team/page.tsx`; photos live in `public/team/`.
- The Join form is a standalone HTML page at `public/join-us.html` with its own CDN Tailwind config, separate from the React app.
- Hosted on Vercel (Vercel Analytics installed); the previous site is archived at https://cssoc-archive.vercel.app.

## Capabilities and Constraints

- Stack: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, MDX via gray-matter + remark.
- Routes: `/`, `/about`, `/team`, `/events`, `/events/[slug]`, `/resources`, `/projects`, `/publications`, `/manifesto`, `/newsletter`, `/internships`, `/ashoka-starter-pack`, `/learningcs/*` (~28 topic pages).
- Site is mid-redesign: `/` and `/team` are in the new style; `/about`, `/events`, `/events/[slug]`, `/resources` are old-style; the rest are "under construction" placeholders.
- **Binding:** anything built must stay editable by student beginners — content in plain data, Markdown, or obvious JSX, documented in `PROJECT_GUIDE.md`; no workflows that require design tools or advanced engineering to update.
- Known rough edges: event dates are `DD/MM/YYYY` strings sorted as text; `events/[slug]` mishandles 404s; some images ship `unoptimized`.
- Undecided: content for projects, publications, internships, starter-pack, and learning-resource pages; whether the Join form moves into the React app.

## Brand Commitments

- **Binding:** brand red `#D80032` (the `primary` token in `tailwind.config.ts`) and the CS Society logo (`public/cssoc_logo.jpg`, `public/animated-logo.gif`).
- Name: CS Society at Ashoka University, abbreviated AUCSS; "Ashoka University, Estd. 2014".
- Existing voice: plain, warm, self-aware ("building weird (but cool!) stuff together", "a lot less serious than this website currently sounds"), alongside formal governance language for the constitution.

## Evidence on Hand

- Governance: `public/manifesto.pdf` (constitution).
- Publications: `public/newsletter_23-24.pdf`, `public/ashoka-starter-pack.pdf`.
- Events with write-ups, photos, and videos: Autumn of Code, Academic Societies Fair, Blockchain Workshop, GitHub Workshop, Intro to Notion, Turtle Workshop (`src/eventposts/`, `public/img/events/`); additional photo sets exist for Alumni Connect, Apple, Bash, Gather, PM Club, Research Showcase, and a mess stall.
- Team photos for ~40 members in `public/team/`.
- Socials: GitHub `cs-ashoka`, Instagram `cs.ashoka`, X/Twitter `cs_ashoka`, LinkedIn, email `cs.society@ashoka.edu.in`.
- Absent, must not be fabricated: membership numbers, alumni outcomes, placement or internship stats, testimonials, partner/sponsor logos, and details for upcoming events (e.g. "CS Mixer 2026" date is TBA).

## Product Principles

1. **Credible to an outsider.** A faculty member, alumnus, or recruiter should be able to verify what the society is and has done from real records: constitution, events, team, publications.
2. **Structure and warmth together.** Show the governance without going stiff, and the fun without looking unserious.
3. **Real over aspirational.** Use actual events, photos, and documents; say "coming soon" honestly rather than inventing content.
4. **Maintainable by the next committee.** Every content type must be updatable by a beginner following `PROJECT_GUIDE.md`.
5. **One clear door in.** Interested students should always be one obvious step from joining.

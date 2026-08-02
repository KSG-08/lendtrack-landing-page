# LendTrack — Landing Page

Single-page marketing site for **LendTrack**, built to the finalized spec in
`DESIGN.md`. React + Vite, plain CSS (no UI framework), no runtime dependencies
beyond React.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

## Structure

```
index.html                  page shell, Manrope font, meta
docs/legal/                 canonical legal copy (source of truth)
  PRIVACY_POLICY.md
  TERMS_OF_SERVICE.md
public/assets/
  lendtrack_icon.svg        app mark (nav 38px, footer 36px)
src/
  App.jsx                   page composition + CTA scroll + modal state
  styles.css                design tokens, sections, responsive rules
  components/
    sections.jsx            Nav, Hero, TrustStrip, Features, Screens, Pricing, Footer
    LaunchStatus.jsx        pre-launch roadmap (closing section)
    NotifyCTA.jsx.bak       archived waitlist form — not built, see below
    phones.jsx              app-screen mockups (Active Lendings, New Lending,
                            Lending Details, History)
    LegalModal.jsx          overlay for the two legal docs
    Markdown.jsx            minimal Markdown renderer for docs/legal/
    icons.jsx               shared line icons
```

## Behavior notes

- **No data capture.** The site collects nothing and calls no external service,
  so it can be hosted as pure static files anywhere. The only contact channel is
  the `support@lend-track.com` mailto in the footer and in the roadmap section.
- **Launch roadmap** (`LaunchStatus.jsx`) closes the page in place of the old
  waitlist form. Edit the `STEPS` array to advance it — move `state` along
  `'done'` → `'current'` → `'upcoming'`, keeping exactly one step `'current'`.
  Four across on desktop, a vertical rail at ≤720px.
- **Waitlist (removed).** The old email form is archived at
  `src/components/NotifyCTA.jsx.bak` — it has working validation and
  sending/success/error states but only a simulated submit. If a real waitlist
  is ever wanted, rename it back and point it at an endpoint; the `.btn--ink`,
  `.btn--mint` and `.btn--brand` styles it used are still in `styles.css`.
- **Legal.** The footer links open a modal that renders
  `docs/legal/*.md` directly (imported with Vite's `?raw`), so the Markdown files
  stay the single source of truth. Closes on scrim click, ✕, or `Esc`; body
  scroll locks and focus moves into the dialog.
- **Store badges** are non-interactive signage until the listings exist. At
  launch, swap each `<div class="store-badge store-badge--soon">` in
  `sections.jsx` for an `<a href="…">` with the official badge artwork.
- **Pricing** is a single one-time US$1 in-app purchase — no subscriptions or
  tiers. The card has no button pre-launch; add a store link there once live.
- **App mockups** are HTML/CSS recreations. If real device captures arrive, drop
  them into the same frames in `phones.jsx` (hero 300×612; showcase 252×516 /
  266×544 / 252×516).

## Responsive

Verified with zero horizontal overflow at 320 / 360 / 390 / 414 / 640 / 768 /
820 / 900 / 1024 px.

- **≤ 640px (phones):** the hero mockup is hidden entirely so the headline leads,
  and the showcase drops to the single Lending Details phone.
- **641–900px (tablet):** the hero is one column and the mockup sits *after* the
  hero copy and CTAs; the showcase phones stack vertically.
- **> 900px:** the two-column hero and the three-up showcase.

The features grid steps 3 → 2 → 1, the trust strip 4 → 2 → 1, the roadmap goes
from four-across to a vertical rail at ≤720px, and the legal modal goes
full-bleed on phones. The nav keeps its three anchor links at every width (they
used to collapse because the "Get early access" pill stood in for them).

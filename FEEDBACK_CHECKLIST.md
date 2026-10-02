# UX Designer Feedback Checklist

Status legend: `[ ]` pending · `[x]` done · `[~]` blocked/needs input

## Home Page

- [x] 1. Hero body text length should match Figma — max-w scaled to 602px (753÷1.25), then fine-tuned to 570px per direct follow-up instructions
- [x] 2. Top nav positioning (case study + home) — font Plus Jakarta, size 12 — unified nav top padding (pt-8/sm:38/lg:16) across all 5 pages using Home's original values; font already Plus Jakarta by inheritance; link text size set to 12px
- [x] 3. Top nav should be static/sticky on all pages — covered by #2's positioning fix (consistent in-flow placement across all pages, not sticky/fixed per user's explicit direction)
- [x] 4. Hero section button size — padding/font/gap/tracking scaled by 125% rule, y-padding tightened further, both mobile CTAs set to flex-1, bg-white removed from nav logo circle
- [x] 5. Footer padding mismatch vs Figma (top 113, sides 24, bottom 20) + cut-off words — full pass done: padding scaled per 125% rule, end-message/hover-message restructured and resized, "take me back" + icons resized, mobile-specific gaps/padding/layout fixed (icons added both sides of marquee, full-width flex layout)
- [x] 6. All eyebrow headings should be size 12 (home page scope) — fixed SectionHeading (Latest Work/Work Experience/Visuals) and Hero tagline, both were 10px. Case study pages use their own different eyebrow design (out of scope for this point).
- [x] 7. Live blinker not working — rebuilt as a two-phase radar animation matching the provided Figma/Lottie spec: fast hard-cut flicker (hide-show-hide-show) then a ping ring that expands and fades, looping

## About Section

- [~] 1. Hero text: 6 lines, font size 30, Inter; "Aanchal Singh" size 40 — NOT done as specified (exact 6-line/30px/40px spec not applied). Instead, hand-tuned image size, text column width, vertical position, and background circle placement per exact viewport breakpoint (1200/1450/1536/1600px) so the whole section (image + text + background) looks correct at each size — a different approach than the literal spec given, needs designer sign-off on whether this is acceptable
- [~] 2. Spear/element position not matching — UNCLEAR, NOT DONE. Could not identify what "spear" refers to on this page; needs clarification from designer/user before this can be addressed.
- [x] 3. Photo + hover element size increase; should stop animating on hover — polaroid float animation now pauses on hover of that specific image; portrait/collage width tuned across breakpoints (1200/1450/1600px), text column width and vertical position tuned to match; caps growth past 1536px
- [~] 4. Spacing between sections should be 150 — NOT verified fresh. This was already addressed during the earlier global 125%-scaling pass (150px → 120px applied per viewport across About sections), but not re-checked against this specific designer point. Needs confirmation.
- [x] 5. All eyebrow headings size 12, Plus Jakarta — fixed ClosingCta ("If you're still here —") eyebrow, was 11px; font already Plus Jakarta by inheritance
- [~] 6. "What you can expect from working with me" hover effects + card size mismatch — PARTIALLY DONE. Reworked layout (grid, equal-height cards, flex-based inner content instead of absolute positioning, per-card heading widths), scoped DESIGN-watermark hover color change to only fire on actual card hover (was firing on the whole section), fixed a real bug where the lift animation was snapping instantly instead of animating (Tailwind v4 uses the `translate` CSS property, not `transform`, for -translate-y utilities — transition list didn't include it), tuned lift/duration. STILL BLOCKED: card still has no image-based hover states (only color/text) — needs actual illustration/icon assets for both normal and hover states from designer, plus confirmation of target size.
- [x] 7. DESIGN color not switching — fixed as part of #6: color change was firing on hover of the whole section (including empty space), now scoped to fire only when hovering an actual card
- [x] 8. "If you are still here" section — use SVG image + button — replaced the plain circle div and dot-grid div with the two provided SVGs (scaled ÷1.25, repositioned), added line breaks after "clarity." and "design." for better rhythm. Section's primary/secondary buttons already existed (Link + arrow, underline link).

## Visuals Section

- [x] 1. Body text should be 18px on home + visuals page — home hero description set to 18px on desktop (mobile stays 13px, line-height 26px), visuals page description 18px, "Coming soon..." tiles 14px mobile / 18px desktop. Applied as final rendered size (not ÷1.25). Hero max-width (570px) was tuned for 19px text — line wrap may need a re-check.
- [~] 2. Spacing issue — UNCLEAR, NOT DONE. Point doesn't say which spacing (header-to-grid, tile gaps, page padding); needs clarification from designer.

## Contact Page

- [~] 1. Animation + card size (height/width) not matching — PARTIALLY DONE: the Behance card's hover gradient at the top is not final (approximated from Figma by eye; the exact look still needs matching). Everything else below is done. Cards sized from the 1920px design (row 1: 530/330/464 × 331, row 2: 375/375/574 × 415) as proportional grid columns with a fixed row aspect-ratio, so all cards in a row stay equal height and scale together from 640px up; body capped at 1142px (÷1.25), gaps/icons scaled ÷1.25. Email card now rests 10px low and zooms to center on hover. Download Resume pill rebuilt as a two-row track with a damped rubber-bounce in both directions.

## Case Study

- [x] 1. Top pill not consistent across all case studies — pill resized by 125% rule (px 16.8, py 7.2, 12.8px text, leading-none), pill→H1 gap 64px, hero glow moved to top 260/h 220, pill color/border/dot now follow each case study's separator dot color, hero glow opacity lightened (Zoho/Screener 0.33, NTES/Chase 0.65)
- [x] 2. Everything should use Inter font — case study content wrapper uses Inter (font-display); DM Sans removed; inline fontFamily "Inter" → var(--font-heading). Nav/Footer left as-is per user
- [ ] 3. Heading should be 60px, body text 16px (all case studies) — not applied: font sizes were already reduced (125% rule) so the page looks good at 100% zoom
- [ ] 4. Line width/height should match Figma — not applied: sizes were already reduced (125% rule) so the page looks good at 100% zoom
- [ ] 5. Hero section bottom widget size inconsistent (image to be provided) — unclear which widget; image not provided yet
- [ ] 6. Image size not matching
- [ ] 7. Heading line-width consistent; heading size 48px, body size 14px — not applied: font sizes were already reduced (125% rule) so the page looks good at 100% zoom
- [ ] 8. Rest of images to be taken from designer
- [ ] 9. Side padding should match — not applied: padding already reduced exactly per Figma (125% rule) so it looks the same at 100% zoom
- [x] 10. Zoho: "Design decisions" section + "What I learnt" section — use image as-is — "Design decisions" section replaced with the provided full-width image (repeatable-pattern-detail-ipad.png); "What I learnt" not checked
- [ ] 11. Remove divider line — unclear which divider(s)
- [x] 12. NTES: heuristic evaluation section — use image as-is; visual hierarchy section needs animation — heuristic section replaced with provided full-bleed image, margin above doubled (240/120); visual hierarchy animation not done
- [ ] 13. NTES: missing "Screen Designs" heading — unclear (heading was removed earlier on user's instruction; confirm re-add and placement)
- [x] 14. Hero section color per case study — colors already match, no change needed
- [x] 15. Screener: "old design" heading missing — added "Old Design" label above old design image; "Old Design"/"New Design" labels have 2px gap to image
- [x] 16. Screener: problem + solution sections have wrong images — swapped new-design-mobile.png and new-design-desktop-filters.png (src, size, alt)
- [ ] 17. Screener: illustration section heading wrong, same with component — unclear what is wrong; 2px gap below Illustrations/Components labels applied (matches Old/New Design)
- [x] 18. WhatsApp: card size not consistent — Problem/Goal/Impact cards and Business/User/Technical goals cards replaced with provided images (first capped at max-w 981.6px = 1227÷1.25, centered)
- [x] 19. Thank-you section spacing — check all case studies — other case studies already correct; NTES margin above Thank you reduced by 125px (256 → 131 desktop, 66 mobile) since image already contains 125 spacing
- [ ] 20. Chase + NTES prototype animation not matching — Chase Qualitative Interviews section done (indicator bars 25.6/12.8px active/inactive, 41.2%/64px two-column, heading/description per Figma at 125% scale); NTES animation unclear — images to be provided
- [x] 21. Chase: "Method" section — pagination + dimension issues — two-column 41.2% / 64px gap, heading + description sizes per Figma (125% scale), pagination bars active 25.6px / inactive 12.8px
- [x] 22. Chase: user persona image too big — max-w 673.6px (842÷1.25), centered
- [x] 23. Chase: reflection section is wrong — heading max-w 330.4px (413÷1.25), bottom border removed, spacing below header 56px (70÷1.25)

---

## Open Questions / Conflicts to Resolve With Designer

- Case Study #3 says heading 60px / body 16px, but #7 says heading 48px / body 14px — same target, two different numbers. Need clarification which is correct.
- Case Study #6 says all eyebrow headings should be 12px (Home #6, About #5) — conflicts with the 125%-scale pass just done across all 5 case studies, which set inline eyebrow styles to 8px (scaled from a 10px Figma spec). Need to know if these override that work.
- Case Study #13 (NTES missing "Screen Designs" heading) — this heading was removed earlier this session on the user's own explicit instruction. Need to confirm whether to re-add.
- Case Study #15/17 (Screener "old design"/illustration/component headings) — same pattern: these were recently converted from headings to inline image labels per the user's own instruction. Need to confirm whether that's what "wrong" refers to, or something else.
- Case Study #20 (Chase + NTES prototype animation) — no prototype/video playback currently exists in either case study's code. Need to confirm this is a new feature request, not a regression fix.

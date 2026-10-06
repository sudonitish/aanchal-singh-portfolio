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

**Summary: 12 of 23 done · 11 open** (4 deliberately not applied, 5 need UX input, 2 need assets). Two "done" points have a part still open (#10, #12), and #20 is half done.

All sizes below follow the 125% rule (Figma value ÷ 1.25) so pages look right at 100% browser zoom.

### Done

- [x] 1. Top pill not consistent across all case studies — pill now one size on all 5 (padding 16.8 / 7.2, text 12.8px, line-height 1); border, dot and text take each case study's separator-dot color; 64px gap pill → heading; hero glow repositioned and lightened (Zoho/Screener 0.33, NTES/Chase 0.65, WhatsApp unchanged)
- [x] 2. Everything should use Inter font — all case study content is Inter (DM Sans removed). Nav and Footer unchanged
- [x] 10. Zoho: "Design decisions" section — use image as-is — replaced with the provided full-width image. **Part open:** "What I learnt" section not changed (no image received)
- [x] 12. NTES: heuristic evaluation section — use image as-is — replaced with the provided full-width image; margin above doubled (240px desktop / 120px mobile). **Part open:** "visual hierarchy needs animation" not done (see Needs UX input)
- [x] 14. Hero section color per case study — colors already match, no change needed
- [x] 15. Screener: "old design" heading missing — "Old Design" label added above the old design image; 2px gap to image (same for "New Design")
- [x] 16. Screener: problem + solution sections have wrong images — the desktop-filters and mobile images were swapped into the correct places
- [x] 18. WhatsApp: card size not consistent — Problem/Goal/Impact cards and Business/User/Technical goals cards replaced with the provided images; first set capped at 981.6px (1227 ÷ 1.25) and centered
- [x] 19. Thank-you section spacing — other case studies already correct; NTES margin above "Thank you" reduced by the 125px already in the image (256 → 131px desktop, 66px mobile)
- [x] 21. Chase: "Method" section — pagination + dimensions — two columns 41.2% / 64px gap; heading 19.2px and description 11.2px per Figma; pagination bars 25.6px active / 12.8px inactive, animated width change
- [x] 22. Chase: user persona image too big — max width 673.6px (842 ÷ 1.25), centered
- [x] 23. Chase: reflection section is wrong — heading max width 330.4px (413 ÷ 1.25), bottom line removed, 56px (70 ÷ 1.25) space below header

Also done for Chase (part of the Research section, not a numbered point): the four audience cards were rebuilt from the provided default + hover images with a 0.5s fade on hover.

### Not done — and why

**Not applied on purpose.** All font sizes and paddings were already reduced by the 125% rule so the pages look like the Figma at 100% browser zoom. Applying the literal numbers would make the text and spacing look too big. Please confirm the current sizes are fine.

- [ ] 3. Heading 60px, body text 16px (all case studies) — **Why not done:** current heading is 58px (large screens) and body 14px, already scaled for 100% zoom; also clashes with #7
- [ ] 4. Line width/height should match Figma — **Why not done:** already scaled by the 125% rule; not clear which lines (text line-height or divider lines) are off
- [ ] 7. Heading line-width consistent; heading 48px, body 14px — **Why not done:** gives different numbers from #3 for the same text (60/16 vs 48/14), and sizes are already scaled for 100% zoom
- [ ] 9. Side padding should match — **Why not done:** side padding was already reduced exactly per Figma with the 125% rule, so it should match at 100% zoom

**Needs UX input — the point is unclear.**

- [ ] 5. Hero section bottom widget size inconsistent — **Why not done:** does not say which widget, and the image that was promised has not arrived
- [ ] 6. Image size not matching — **Why not done:** does not say which images or what size they should match
- [ ] 11. Remove divider line — **Why not done:** does not say which divider; there are several kinds (dotted line under the Role/Duration/Tools chips, plain lines between sections)
- [ ] 13. NTES: missing "Screen Designs" heading — **Why not done:** that heading was removed earlier on instruction, so it is not clear whether it should come back or where
- [ ] 17. Screener: illustration + component headings wrong — **Why not done:** does not say what is wrong with them. Only the gap below the "Illustrations" and "Components" labels was set to 2px, to match Old/New Design
- [ ] 20. Chase + NTES prototype animation not matching — **Chase done** (Qualitative Interviews section). **NTES not done:** there is no animation or video on the NTES page today, it is unclear which one is meant, and the images have not arrived

**Waiting on assets.**

- [ ] 8. Rest of images to be taken from designer — **Why not done:** the images have not been received
- Also waiting on assets: the #5 widget image, the #20 NTES animation images, and a Zoho "What I learnt" image (#10)

**Partly done inside a "done" point.**

- #10 Zoho: "What I learnt" section not changed — no image received
- #12 NTES: "visual hierarchy needs animation" not done — no animation spec or images received

---

## Open Questions for UX

1. **Font sizes (#3 vs #7):** #3 says heading 60 / body 16, #7 says heading 48 / body 14. Both were left unapplied because sizes are already reduced for 100% zoom. Which numbers are right, and should they still be scaled ÷ 1.25?
2. **Widget and images (#5, #6):** which hero widget and which images are the wrong size?
3. **Divider (#11):** which divider line should go — the dotted one under the Role/Duration/Tools chips, the plain ones between sections, or one specific line?
4. **NTES "Screen Designs" heading (#13):** put it back? If yes, above which image?
5. **Screener labels (#17):** what is wrong with the "Illustrations" and "Components" labels?
6. **NTES animation (#12, #20):** what animation is wanted for the "visual hierarchy" section and the NTES prototype? Neither has any animation or video in the code today, so this is a new build, not a fix. Please send the images or a recording.
7. **Zoho "What I learnt" (#10):** is there an image to use as-is, like the one used for "Design decisions"?

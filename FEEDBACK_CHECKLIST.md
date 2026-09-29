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

- [ ] 1. Body text should be 18px on home + visuals page
- [ ] 2. Spacing issue

## Contact Page

- [ ] 1. Animation + card size (height/width) not matching

## Case Study

- [ ] 1. Top pill not consistent across all case studies
- [ ] 2. Everything should use Inter font
- [ ] 3. Heading should be 60px, body text 16px (all case studies)
- [ ] 4. Line width/height should match Figma
- [ ] 5. Hero section bottom widget size inconsistent (image to be provided)
- [ ] 6. Image size not matching
- [ ] 7. Heading line-width consistent; heading size 48px, body size 14px
- [ ] 8. Rest of images to be taken from designer
- [ ] 9. Side padding should match
- [ ] 10. Zoho: "Design decisions" section + "What I learnt" section — use image as-is
- [ ] 11. Remove divider line
- [ ] 12. NTES: heuristic evaluation section — use image as-is; visual hierarchy section needs animation
- [ ] 13. NTES: missing "Screen Designs" heading
- [ ] 14. Hero section color per case study
- [ ] 15. Screener: "old design" heading missing
- [ ] 16. Screener: problem + solution sections have wrong images
- [ ] 17. Screener: illustration section heading wrong, same with component
- [ ] 18. WhatsApp: card size not consistent
- [ ] 19. Thank-you section spacing — check all case studies
- [ ] 20. Chase + NTES prototype animation not matching
- [ ] 21. Chase: "Method" section — pagination + dimension issues
- [ ] 22. Chase: user persona image too big
- [ ] 23. Chase: reflection section is wrong

---

## Open Questions / Conflicts to Resolve With Designer

- Case Study #3 says heading 60px / body 16px, but #7 says heading 48px / body 14px — same target, two different numbers. Need clarification which is correct.
- Case Study #6 says all eyebrow headings should be 12px (Home #6, About #5) — conflicts with the 125%-scale pass just done across all 5 case studies, which set inline eyebrow styles to 8px (scaled from a 10px Figma spec). Need to know if these override that work.
- Case Study #13 (NTES missing "Screen Designs" heading) — this heading was removed earlier this session on the user's own explicit instruction. Need to confirm whether to re-add.
- Case Study #15/17 (Screener "old design"/illustration/component headings) — same pattern: these were recently converted from headings to inline image labels per the user's own instruction. Need to confirm whether that's what "wrong" refers to, or something else.
- Case Study #20 (Chase + NTES prototype animation) — no prototype/video playback currently exists in either case study's code. Need to confirm this is a new feature request, not a regression fix.

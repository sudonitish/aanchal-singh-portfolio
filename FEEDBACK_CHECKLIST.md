# UX Designer Feedback Checklist

Status legend: `[ ]` pending · `[x]` done · `[~]` blocked/needs input

## Home Page

- [x] 1. Hero body text length should match Figma — max-w scaled to 602px (753÷1.25) to keep the 3-line wrap at the reduced font size
- [x] 2. Top nav positioning (case study + home) — font Plus Jakarta, size 12 — unified nav top padding (pt-8/sm:38/lg:16) across all 5 pages using Home's original values; font already Plus Jakarta by inheritance; link text size set to 12px
- [x] 3. Top nav should be static/sticky on all pages — covered by #2's positioning fix (consistent in-flow placement across all pages, not sticky/fixed per user's explicit direction)
- [x] 4. Hero section button size — padding/font/gap/tracking scaled by 125% rule, y-padding tightened further, both mobile CTAs set to flex-1, bg-white removed from nav logo circle
- [x] 5. Footer padding mismatch vs Figma (top 113, sides 24, bottom 20) + cut-off words — full pass done: padding scaled per 125% rule, end-message/hover-message restructured and resized, "take me back" + icons resized, mobile-specific gaps/padding/layout fixed (icons added both sides of marquee, full-width flex layout)
- [x] 6. All eyebrow headings should be size 12 — fixed SectionHeading (Latest Work/Work Experience/Visuals), Hero tagline, About ClosingCta eyebrow (all were 10-11px). NOTE: case study pages use a visually different eyebrow design (green #5A7A1A color, different tracking/divider pattern, in InterviewFindings.tsx + BlockRenderer.tsx researchHeader/reflectionHeader) — currently still 10px, needs separate confirmation on whether to unify to 12px or keep as its own system
- [x] 7. Live blinker not working — rebuilt as a two-phase radar animation matching the provided Figma/Lottie spec: fast hard-cut flicker (hide-show-hide-show) then a ping ring that expands and fades, looping

## About Section

- [ ] 1. Hero text: 6 lines, font size 30, Inter; "Aanchal Singh" size 40
- [ ] 2. Spear/element position not matching
- [ ] 3. Photo + hover element size increase; should stop animating on hover
- [ ] 4. Spacing between sections should be 150
- [ ] 5. All eyebrow headings size 12, Plus Jakarta
- [ ] 6. "What you can expect" hover effects + card size mismatch — need both-state images
- [ ] 7. DESIGN color not switching
- [ ] 8. "If you are still here" section — use SVG image + button

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

import type { Block } from "@/lib/content";

export const zohoContent: Block[] = [
  {
    type: "list",
    variant: "chips",
    items: [
      { title: "Client", text: "Dynamic Mavens Consultancy", icon: "client" },
      { title: "Role", text: "UX/UI Designer", icon: "user" },
      { title: "Duration", text: "4 Weeks", icon: "calendar" },
      { title: "Tools", text: "Figma/Claude", icon: "wrench" },
    ],
  },
  {
    type: "divider",
    withDot: true,
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/new-vs-old-design.png",
    alt: "New design vs old design of the Dynamic Mavens Zoho partner site",
    width: 1720,
    height: 800,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Brief",
    title: "From 40 Pages of Copy to a Strategic Interface",
    description:
      "Dynamic Mavens wins clients through a process-first approach: mapping operations before building, documenting decisions, and being honest when Zoho isn't a fit. But their website was built on a generic template that buried their value. I was handed five dense content documents, total 40 pages of text, without any visual hierarchy or layout direction. I translated this wall of copy into a structured interface designed for immediate trust, high scannability, and clear conversion paths.",
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Problem",
    title: "What the old design was doing wrong",
    description:
      "Before starting the redesign, I audited the existing website to understand where users were likely struggling.",
  },
  {
    type: "list",
    items: [
      {
        index: "01",
        title: "Generic messaging",
        text: "The homepage introduced Dynamic Mavens before addressing the problems customers were trying to solve; visitors had to connect the dots themselves.",
      },
      {
        index: "02",
        title: "Difficult to scan",
        text: "Important information was hidden inside long paragraphs and multi-column layouts, making the pages overwhelming to read.",
      },
      {
        index: "03",
        title: "Weak differentiation",
        text: "Dynamic Mavens' strongest competitive advantage, their process-first implementation approach, was buried deep within the content instead of being highlighted early in the experience.",
      },
      {
        index: "04",
        title: "Missing decision support",
        text: "Potential customers comparing Zoho with alternatives such as SAP, Odoo, or standalone tools couldn't find the information they needed to evaluate their options.",
      },
      {
        index: "05",
        title: "Low conversion focus",
        text: "The website relied on a single generic “Get in Touch” button while many businesses preferred quicker communication through WhatsApp.",
      },
      {
        index: "06",
        title: "Inconsistent page structure",
        text: "Each service page presented information differently, making it harder for users to compare solutions and creating unnecessary design maintenance.",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "list",
    variant: "plainCards",
    items: [
      {
        title: "Business Goals",
        text: "The website needed to do more than just inform: increase consultation bookings, generate more WhatsApp enquiries, position Dynamic Mavens as a trusted Zoho implementation partner, improve search visibility through structured content, and create a scalable page system for future services.",
      },
      {
        title: "User Goals",
        text: "Users needed clarity before commitment: understand which Zoho solution fits their business needs, compare available solutions with confidence, learn the implementation process, build trust in Dynamic Mavens' expertise, and contact the team with minimal effort.",
      },
    ],
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/business-user-goals.png",
    alt: "Business goals and user goals shown on the redesigned landing page",
    width: 1720,
    height: 660,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Information Architecture",
    title: "Designing the Website as a Conversion Funnel",
    description:
      "The five pages aren't siblings - they're a funnel with two distinct jobs, and I structured them as a hub-and-spoke: the landing page acts as a problem-recognition router, not a hard sell. It leads with the connectivity gap thesis, frames it in operational terms, and gives four choice cards (ERP, POS, One, Solutions) to split intent. Below the fold content only exists to catch undecided visitors with approach, integrations, proof, and FAQs.",
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/sitemap-diagram.png",
    alt: "Sitemap: DMC Zoho Landing Page branching into Zoho ERP, Zoho One, Zoho POS, and Zoho Solutions, converging on Consultation + WhatsApp",
    width: 700,
    height: 524,
  },
  {
    type: "quote",
    quotes: [
      "The work wasn't about designing five different pages. It was realizing that every service represented a different decision journey — and giving each one the persuasion it needed to earn the conversion.",
    ],
  },
  {
    type: "paragraph",
    text: "The CTA strategy uses two parallel channels: a free consultation as the primary action and WhatsApp as a persistent secondary. In India and the UAE, SMB owners treat WhatsApp as their business channel, making it a faster, lower-friction alternative to forms. Elevating WhatsApp from a footer link to a core CTA is a strategic market play, not a visual design tweak.",
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Insight",
    title: "Finding a Repeatable Pattern",
    description:
      "While reviewing all five content documents, I noticed they followed nearly the same structure — business problem, product introduction, features, benefits, comparison tables, implementation process, FAQs, call to action. Rather than designing four different service pages, I built one flexible page template that could be reused across every Zoho solution.",
  },
  {
    type: "list",
    variant: "plainCards",
    items: [
      {
        title: "Consistent user experience",
        text: "Users can navigate any service page without relearning the layout.",
      },
      {
        title: "Faster design process",
        text: "Once the framework was established, designing the remaining pages became significantly faster.",
      },
      {
        title: "Easier maintenance",
        text: "Future services can reuse the same structure, reducing both design and development effort.",
      },
    ],
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/old-design-laptop.png",
    alt: "The old Dynamic Mavens website shown on a laptop",
    width: 991,
    height: 744,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "Design Decisions",
    title: "The decisions, and what each one traded away",
  },
  {
    type: "list",
    variant: "chips",
    items: [
      { title: "Start with the User's Problem", text: "" },
      { title: "Turn Dense Content into Scannable Sections", text: "" },
      { title: "Make Comparison Tables a Primary Feature", text: "" },
      { title: "Build Trust Through Process", text: "" },
      { title: "Improve Conversion with Dual CTAs", text: "" },
      { title: "Design Mobile First", text: "" },
      { title: "Strengthen Visual Hierarchy", text: "" },
    ],
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/new-design-ipad.png",
    alt: "The redesigned Zoho landing page shown on an iPad",
    width: 1122,
    height: 732,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    eyebrow: "The Solution",
    title: "A Website Designed to Educate, Build Trust, and Convert",
    description:
      "The final solution wasn't just a visual redesign. It was a complete restructuring of how Dynamic Mavens presents its services online. Instead of overwhelming visitors with technical information, the experience now guides users through a clear decision-making journey, helping them understand their problems before introducing the right Zoho solution. The redesign consists of one landing page and four dedicated service pages, all built using a shared design system.",
  },
  {
    type: "heading",
    title: "Landing Page",
    subtitle: "OBJECTIVE",
    description:
      "Introduce the Zoho ecosystem, explain the value of connected business operations, and guide visitors toward the most relevant solution. Highlights: problem-focused hero section, intent-based navigation to service pages, implementation methodology, clear explanation of the Zoho ecosystem, industry-specific use cases, customer trust indicators.",
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/page-landing.png",
    alt: "Landing page design, desktop and mobile",
    width: 991,
    height: 600,
  },
  {
    type: "heading",
    title: "Zoho ERP",
    subtitle: "OBJECTIVE",
    description:
      "Help businesses understand when they need an ERP system and why Zoho ERP is a suitable solution. Highlights: business challenges, ERP overview, feature breakdown, benefits, competitive comparison, implementation process.",
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/page-zoho-erp.png",
    alt: "Zoho ERP service page design, desktop and mobile",
    width: 991,
    height: 600,
  },
  {
    type: "heading",
    title: "Zoho POS",
    subtitle: "OBJECTIVE",
    description:
      "Position Zoho POS as part of a connected retail ecosystem instead of simply billing software. Highlights: retail pain points, GST compliance, hardware compatibility, connected workflows, inventory integration, customer management.",
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/page-zoho-pos.png",
    alt: "Zoho POS service page design, desktop and mobile",
    width: 991,
    height: 600,
  },
  {
    type: "heading",
    title: "Zoho One",
    subtitle: "OBJECTIVE",
    description:
      "Help businesses understand the value of an integrated software ecosystem while reducing concerns about adopting multiple applications. Highlights: business challenges, connected applications, comparison with separate tools, platform overview, phased implementation approach.",
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/page-zoho-one.png",
    alt: "Zoho One service page design, desktop and mobile",
    width: 991,
    height: 600,
  },
  {
    type: "heading",
    title: "Zoho Solutions",
    subtitle: "OBJECTIVE",
    description:
      "Support businesses looking for individual Zoho products while demonstrating how those products fit into a larger ecosystem. Highlights: individual applications, business use cases, integration opportunities, future scalability.",
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/page-zoho-solutions.png",
    alt: "Zoho Solutions service page design, desktop and mobile",
    width: 991,
    height: 600,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "Style Guide",
    description:
      "Brand tone: Premium · Minimal · Enterprise · Trustworthy. Primary platform: Web (1440px) + Mobile (390px). Typography: Cormorant Garamond for expressive display, Instrument Serif for italic moments, DM Sans for interface and body. Grid: 4px base unit, 1440px max container, 80px horizontal gutters, 12 columns on desktop. Core palette: Ink #1A1612, Near Black #211C15, DMC Teal #256780, Terracotta #C4501A, Warm Stone #9A9187, Linen #E8E2D9, Parchment #F1EADD, Ivory #FFFEFB, Solve Section Bg #F8F3E9, Promise Amber #FEE2B3.",
  },
  {
    type: "image",
    src: "/assets/work/zoho-implementation-partner-marketing/style-guide.png",
    alt: "Style guide: colors, typography, spacing and grid",
    width: 1920,
    height: 1372,
  },
  {
    type: "divider",
  },
  {
    type: "list",
    variant: "plainCards",
    items: [
      {
        title: "Before",
        text: "Generic agency website. Product-first messaging. Long paragraphs. Single CTA. Generic page layouts. Hidden implementation process. No product comparisons. Difficult mobile experience. Individual page designs.",
      },
      {
        title: "After",
        text: "Conversion-focused marketing experience. Problem-first storytelling. Scannable content hierarchy. Consultation + WhatsApp CTAs. Dedicated pages for each service. Clear visual methodology. Comparison tables for informed decisions. Mobile-first responsive design. Reusable page system.",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "What I Learned",
    description:
      "Every project offers lessons beyond the final design. This one reinforced three important principles.",
  },
  {
    type: "list",
    items: [
      {
        title: "1. Great content still needs great structure",
        text: "Rather than cutting valuable detail, the goal was to structure the client's existing information so users receive the right information exactly when they need it.",
      },
      {
        title: "2. Systems create more value than individual pages",
        text: "By identifying a shared structure across service pages, I built a reusable framework instead of five isolated screens, providing the client with a scalable foundation that improved consistency and reduced future design effort.",
      },
      {
        title: "3. UX is about supporting business decisions",
        text: "Business owners don't visit implementation websites to admire interfaces. They visit to answer important questions: can this solve my problem? Can I trust this company? What's different about their approach? How do I get started? Every design decision, from information hierarchy to comparison tables and dual CTAs, was made to answer those questions as clearly as possible.",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "Reflection",
    description:
      "Looking back, there are two areas I would improve if the project continued. Validate with users: the content reflected years of experience from the client's sales team, but it wasn't a substitute for direct user research. Conducting interviews with prospective customers would help validate assumptions, refine messaging, and identify unanswered questions earlier in the process.",
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "Final Takeaway",
    description:
      "This project was more than a website redesign. It was an opportunity to transform a collection of content-heavy pages into a scalable digital experience that supports both user needs and business goals. By combining information architecture, reusable design patterns, and conversion-focused UX, I created a flexible system that not only serves current services but can also support future growth with minimal design effort.",
  },
  {
    type: "thankYou",
    text: "Thank you",
    accentColor: "#C4501A",
  },
];

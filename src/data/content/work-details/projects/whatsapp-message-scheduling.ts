import type { Block } from "@/lib/content";

export const whatsappSchedulingContent: Block[] = [
  {
    type: "list",
    items: [
      { title: "Role", text: "UX/UI Designer" },
      { title: "Duration", text: "4 Weeks" },
      { title: "Tools", text: "Figma" },
    ],
  },
  {
    type: "heading",
    title: "Project Overview",
    description:
      "WhatsApp is one of the most widely used messaging platforms globally, serving both personal and professional communication needs. Despite its extensive features, one critical capability is missing; a message scheduling feature. The absence of such a feature creates inefficiencies for users who want to send messages at specific times. This limitation results in missed opportunities, untimely communications and the mental burden of having to remember to send messages.",
  },
  {
    type: "statCards",
    cards: [
      {
        label: "The Problem",
        text: "WhatsApp users struggle to remember to send messages at appropriate times, leading to missed opportunities, awkward timing, and communication stress across different time zones.",
      },
      {
        label: "The Goal",
        text: "Design an intuitive message scheduling feature that integrates seamlessly into WhatsApp's existing interface, allowing users to schedule messages in 3 taps or less.",
      },
      {
        label: "The Impact",
        text: "45% improvement in communication efficiency, 78% user satisfaction rate, and 2.3M messages scheduled in the first month of launch across test markets.",
      },
    ],
  },
  {
    type: "heading",
    title: "My Design Process",
  },
  {
    type: "list",
    items: [
      { title: "Empathize", text: "Understand your users" },
      { title: "Define", text: "Clarify the problem" },
      { title: "Ideate", text: "Generate ideas" },
      { title: "Prototype", text: "Build solutions" },
      { title: "Test", text: "Validate & learn" },
    ],
  },
  {
    type: "heading",
    eyebrow: "Research",
    title: "Competitive Market Analysis",
    description:
      "I conducted a competitive market analysis of other messaging apps like Telegram and Facebook Messenger, both of which have message scheduling features. The analysis focused on understanding the strengths and weaknesses of these features and identifying opportunities to create a superior user experience within WhatsApp.",
  },
  {
    type: "list",
    items: [
      {
        title: "Telegram",
        text: "Strengths: global reach, strong privacy focus, message scheduling, multi-device sync. Weaknesses: smaller user base, complexity for non-technical users, region-specific restrictions.",
      },
      {
        title: "Facebook Messenger",
        text: "Strengths: large user base, Meta ecosystem integration, interactive features like stickers and games. Weaknesses: intrusive ads, heavy data collection, dependence on Facebook.",
      },
      {
        title: "WeChat",
        text: "Strengths: extensive integrated services including WeChat Pay, massive user base in China. Weaknesses: limited international reach, lack of default encryption, content censorship.",
      },
      {
        title: "Signal",
        text: "Strengths: strong privacy and security with end-to-end encryption by default, endorsed by privacy advocates. Weaknesses: smaller user base, feature bloat, limited customization.",
      },
    ],
  },
  {
    type: "heading",
    title: "User Interviews",
    description:
      "To gain a better understanding of user needs, I conducted user interviews with 5 WhatsApp users, including professionals, students and general users. The interviews focused on their communication habits, the challenges they face with scheduling messages and their expectations of such a feature.",
  },
  {
    type: "list",
    items: [
      {
        title: "Time Zone Confusion",
        text: "Users frequently forget to account for recipients' time zones, resulting in messages sent at 3 AM or during work meetings, causing frustration and reducing response rates.",
      },
      {
        title: "Work-Life Boundaries",
        text: "Users struggle to maintain healthy boundaries, often drafting work messages at night but wanting to send them during business hours to avoid appearing unprofessional or \"always on.\"",
      },
      {
        title: "Forgotten Messages",
        text: "68% of surveyed users reported forgetting to send important messages at the intended time, leading to missed deadlines, forgotten birthday wishes, and professional embarrassment.",
      },
      {
        title: "Workaround Complexity",
        text: "62% use third-party reminder apps or calendar events as workarounds, creating friction and extra steps that often fail due to forgotten app checks or notification dismissal.",
      },
    ],
  },
  {
    type: "heading",
    title: "User Personas",
    description:
      "With the knowledge and insights gained from the interviews, personas were created to understand the unique qualities, preferences and behaviours of the people most likely to benefit from the added feature.",
  },
  {
    type: "heading",
    eyebrow: "34 · Homemaker · Indore, MP",
    title: "Sonia Jain",
    description:
      "Sonia Jain is a full-time homemaker dependent on her spouse's income while she manages household responsibilities, children's schedules, and family communication. She often thinks of important messages she needs to send — whether it's coordinating with her child's teacher or a birthday greeting for a friend — during her busy day. Goals: coordinate children's activities, remind family about important tasks, stay on top of social commitments. Pain points: managing multiple schedules, coordinating across time zones, forgetting to send important reminders.",
  },
  {
    type: "quote",
    quotes: ["Keeping our family and social life organized is a constant juggling act."],
  },
  {
    type: "heading",
    eyebrow: "29 · Marketing Manager · New Delhi",
    title: "Yash Chaudhary",
    description:
      "Yash Chaudhary works as a Marketing Manager for a multinational company. He frequently coordinates with teams across different time zones and uses multiple apps and platforms for work. He often needs to send important work-related messages to colleagues in different parts of the world, making WhatsApp an essential tool for personal and professional communication. Goals: efficient time management, staying on top of professional commitments. Pain points: time zone challenges, finding time to communicate amidst a busy routine.",
  },
  {
    type: "quote",
    quotes: ["Coordinating with my team in different time zones is a constant challenge."],
  },
  {
    type: "heading",
    title: "Points of View",
    description:
      "Busy professionals and individuals need a way to schedule messages on WhatsApp to ensure timely communication without the burden of real-time message management. Their demanding schedules and the complexities of different time zones make it challenging to send messages at appropriate times.",
  },
  {
    type: "heading",
    eyebrow: "How Might We",
    title: "How might we design a message scheduling feature on WhatsApp that allows users to efficiently plan and send messages at appropriate times, reducing their mental load and enhancing communication efficiency without compromising the app's real-time interaction appeal?",
  },
  {
    type: "list",
    items: [
      {
        title: "Business Goals",
        text: "Stand out with a feature competitors lack, attract professionals seeking workflow-friendly tools, strengthen retention and engagement, and foster long-term brand loyalty.",
      },
      {
        title: "User Goals",
        text: "Schedule messages to reduce mental load, manage communication across time zones without manual timing, and have the flexibility to edit, delete, or reschedule messages.",
      },
      {
        title: "Technical Considerations",
        text: "Rely on WhatsApp's end-to-end encryption, ensure long-term UI/UX scalability across Android and iOS, and keep scheduled messages synchronized across multiple devices.",
      },
    ],
  },
  {
    type: "heading",
    title: "User Flow",
    description:
      "I created a user flow chart to show the ways in which users might interact with this new feature. Doing this would help me make sure I include all necessary key frames I would need as I created wireframes for my prototype.",
  },
  { type: "placeholder", label: "User flow diagram" },
  {
    type: "heading",
    title: "Low - Mid Fidelity Wireframes",
    description:
      "I went ahead with drafting annotated low fidelity frames that would help visualise how this new feature would fit in WhatsApp's existing interface.",
  },
  { type: "placeholder", label: "Low - mid fidelity wireframes" },
  {
    type: "heading",
    title: "High Fidelity Frames",
    description:
      "After figuring out how the feature could work as well as placement, I proceeded to design high-fidelity frames. It was imperative that this new feature fit seamlessly into WhatsApp's interface. The same colors, fonts and graphics were used.",
  },
  { type: "placeholder", label: "High fidelity frames" },
  {
    type: "heading",
    title: "Usability Testing & Validation",
    description:
      "I was able to test 5 users remotely. I sent them the prototype link, explained the project background and presented them with a scenario to schedule a reminder message: compose the message as usual, then long-press send to reveal scheduling options; choose a custom date and time with an intuitive picker; then view, edit, or cancel scheduled messages from a dedicated section in the chat info menu.",
  },
  {
    type: "statCards",
    cards: [
      { label: "Task Completion Rate", text: "92%" },
      { label: "Avg. Time to Schedule", text: "8.2s" },
      { label: "Ease of Use Rating", text: "4.7 / 5" },
    ],
  },
  {
    type: "quote",
    quotes: [
      "This is so simple to use. I was done typing my message and scheduling it in less than 60 seconds!",
      "Scheduling a message felt really smooth and quick. I didn't have to think twice—it just worked the way I expected.",
      "I'd definitely use this often. The whole flow is clear, and setting the time took just a few seconds without any confusion.",
    ],
  },
  {
    type: "heading",
    title: "Future Impact",
    description:
      "For future iterations, I recommend adding more customisation options, such as allowing users to set their own presets for recurring messages. This would give users even more control over their communication. Secondly, I would recommend exploring the integration of the scheduling feature with WhatsApp's existing functionalities, such as group chats and media sharing, to further enhance its utility and appeal. Lastly, to ensure users are aware of the new feature, implementing tooltips or a brief onboarding tutorial within the app could help users discover and use the scheduling feature.",
  },
];

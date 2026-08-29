import type { Block } from "@/lib/content";

export const whatsappSchedulingContent: Block[] = [
  {
    type: "list",
    variant: "chips",
    items: [
      { title: "Role", text: "UX/UI Designer", icon: "user" },
      { title: "Duration", text: "4 Weeks", icon: "calendar" },
      { title: "Tools", text: "Figma", icon: "wrench" },
    ],
  },
  {
    type: "divider",
    withDot: true,
  },
  {
    type: "heading",
    title: "Project Overview",
    description:
      "WhatsApp is one of the most widely used messaging platforms globally, serving both personal and professional communication needs. Despite its extensive features, one critical capability is missing; a message scheduling feature. The absence of such a feature creates inefficiencies for users who want to send messages at specific times. This limitation results in missed opportunities, untimely communications and the mental burden of having to remember to send messages.",
  },
  {
    type: "divider",
  },
  {
    type: "statCards",
    cards: [
      {
        label: "The Problem",
        text: "WhatsApp users struggle to remember to send messages at appropriate times, leading to missed opportunities, awkward timing, and communication stress across different time zones.",
        icon: "triangleWarning",
      },
      {
        label: "The Goal",
        text: "Design an intuitive message scheduling feature that integrates seamlessly into WhatsApp's existing interface, allowing users to schedule messages in 3 taps or less.",
        icon: "bolt",
      },
      {
        label: "The Impact",
        text: "45% improvement in communication efficiency, 78% user satisfaction rate, and 2.3M messages scheduled in the first month of launch across test markets.",
        icon: "circleCheck",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "My Design Process",
  },
  {
    type: "image",
    src: "/assets/work/whatsapp-scheduling/design-process-diagram.png",
    alt: "Design process: Empathize, Define, Ideate, Prototype, Test",
    width: 1326,
    height: 367,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "Research",
    subtitle: "COMPETITIVE MARKET ANALYSIS",
    description:
      "I conducted a competitive market analysis of other messaging apps like Telegram and Facebook Messenger, both of which have message scheduling features. The analysis focused on understanding the strengths and weaknesses of these features and identifying opportunities to create a superior user experience within WhatsApp.",
  },
  {
    type: "list",
    variant: "logoCards",
    items: [
      {
        title: "Telegram",
        text: "",
        platform: "telegram",
        strengths: [
          "Global Reach and Accessibility",
          "Strong Focus on Privacy and Security",
          "Channels and Group features",
          "Multi-Device Sync",
          "Desktop and Web Versions",
          "Customization - Users can create and use custom themes, stickers, and GIFs.",
        ],
        weaknesses: [
          "Smaller User Base",
          "Customization Overload",
          "Content Moderation Issues",
          "Inconsistent Notifications",
        ],
        features: [
          "Message scheduling",
          "Voice and video calls",
          "Multimedia Sharing",
          "Group Chats",
          "Business and Customer Interaction",
          "Customization and Personalization",
        ],
      },
      {
        title: "Facebook Messenger",
        text: "",
        platform: "facebook",
        strengths: [
          "Wide range of interactive features like stickers and games.",
          "Large user base",
          "Integration with the Facebook/Meta ecosystem",
        ],
        weaknesses: [
          "Lack of Default Encryption",
          "Intrusive Ads",
          "Dependence on Facebook",
          "Spam and Unwanted Messages",
          "High Data Usage",
          "Privacy Concerns - collects a significant amount of user data.",
        ],
        features: [
          "Voice and video calls",
          "Multimedia Sharing",
          "Group Chats",
          "Business and Customer Interaction",
          "Customization and Personalization",
        ],
      },
      {
        title: "WeChat",
        text: "",
        platform: "wechat",
        strengths: [
          "Extensive range of services, integrated payment system (WeChat Pay)",
          "Enjoys a massive user base in China",
        ],
        weaknesses: [
          "Notification Overload",
          "Limited International Reach (Largest user base is in China)",
          "Data Collection",
          "Privacy concerns - Government Monitoring",
          "Content Censorship",
          "Feature Bloat",
        ],
        features: [
          "Voice and video calls",
          "Multimedia Sharing",
          "Group Chats",
          "Business and Customer Interaction",
          "Customization and Personalization",
        ],
      },
      {
        title: "Signal",
        text: "",
        platform: "signal",
        strengths: [
          "Strong focus on privacy and security with end-to-end encryption for all messages and calls.",
          "Strong endorsement from privacy advocates.",
        ],
        weaknesses: [
          "Smaller User Base",
          "Limited Features",
          "Complexity for Non-Technical Users",
          "Region-Specific Restrictions",
          "File Size sharing Limits",
          "Group Size Limits",
        ],
        features: [
          "Message scheduling",
          "Voice and video calls",
          "Multimedia Sharing",
          "Group Chats",
          "Business and Customer Interaction",
          "Customization and Personalization",
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "User Interviews",
    descriptionLead:
      "To Gain a better understanding of user needs, I conducted user interviews",
    description:
      "with 5 WhatsApp users, including professionals, students and general users. The interviews focused on their communication habits, the challenges they face with scheduling messages and their expectations of such a feature.",
  },
  {
    type: "list",
    variant: "painPointCards",
    items: [
      {
        title: "Time Zone Confusion",
        text: "Users frequently forget to account for recipients' time zones, resulting in messages sent at 3 AM or during work meetings, causing frustration and reducing response rates.",
        painPointIcon: "clock",
      },
      {
        title: "Work-Life Boundaries",
        text: "Users struggle to maintain healthy boundaries, often drafting work messages at night but wanting to send them during business hours to avoid appearing unprofessional or \"always on.\"",
        painPointIcon: "plus",
      },
      {
        title: "Forgotten Messages",
        text: "68% of surveyed users reported forgetting to send important messages at the intended time, leading to missed deadlines, forgotten birthday wishes, and professional embarrassment.",
        painPointIcon: "faceFrown",
      },
      {
        title: "Workaround Complexity",
        text: "62% use third-party reminder apps or calendar events as workarounds, creating friction and extra steps that often fail due to forgotten app checks or notification dismissal.",
        painPointIcon: "code",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "User Personas",
    description:
      "With the knowledge and insights gained from the interviews, personas were created to understand the unique qualities, preferences and behaviours of the people most likely to benefit from the added feature.",
  },
  {
    type: "image",
    src: "/assets/work/whatsapp-scheduling/persona-sonia-jain.png",
    alt: "Persona: Sonia Jain, 34, Homemaker, Indore, MP",
    width: 1429,
    height: 716,
  },
  {
    type: "image",
    src: "/assets/work/whatsapp-scheduling/persona-yash-chaudhary.png",
    alt: "Persona: Yash Chaudhary, 29, Marketing Manager, New Delhi",
    width: 1429,
    height: 716,
  },
  {
    type: "list",
    variant: "plainCards",
    items: [
      {
        title: "Points of View",
        text: "Busy professionals and individuals need a way to schedule messages on WhatsApp to ensure timely communication without the burden of real-time message management. Their demanding schedules and the complexities of different time zones make it challenging to send messages at appropriate times.",
      },
      {
        title: "How Might We",
        text: "How might we design a message scheduling feature on WhatsApp that allows users to efficiently plan and send messages at appropriate times, reducing their mental load and enhancing communication efficiency without compromising the app's real-time interaction appeal?",
      },
    ],
  },
  {
    type: "list",
    variant: "iconCards",
    items: [
      {
        title: "Business Goals",
        text: "",
        icon: "arrowUpRight",
        lines: [
          "Market Differentiation: Stand out by offering a feature competitors lack.",
          "Competitive Advantage: Attract professionals seeking workflow-friendly tools.",
          "Enhanced User Experience: Strengthen user retention and engagement.",
          "User Acquisition: Attracting new users, particularly those who manage communication across time zones.",
          "Brand Loyalty: Fostering brand loyalty by consistently adding features that meet user needs.",
        ],
      },
      {
        title: "User Goals",
        text: "",
        icon: "compass",
        lines: [
          "Convenience: Schedule messages to reduce mental load.",
          "Time zone management: Easily communicate across different time zones.",
          "Time Management: Utilize one app more conveniently, efficiently, especially for users who already use WhatsApp for both personal and professional purposes.",
          "Flexibility: Providing options to edit, delete, or reschedule messages at specific times.",
        ],
      },
      {
        title: "Technical Considerations",
        text: "",
        icon: "creditCard",
        lines: [
          "Message Reliability: Use WhatsApp's end-to-end encryption.",
          "Android/iOS: Long-term UI/UX re-scalability to ensure scheduling flows properly and works across platforms.",
          "Synchronization: Ensuring scheduled message works across multiple devices.",
          "Failed Scheduling: In cases where their scheduled messages fail to be sent, users need easy clarity on retry.",
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "User Flow",
    description:
      "I created a user flow chart to show the ways in which users might interact with this new feature. Doing this would help me make sure I include all necessary key frames I would need as I created wireframes for my prototype.",
  },
  {
    type: "image",
    src: "/assets/work/whatsapp-scheduling/user-flow-diagram.png",
    alt: "User flow diagram for the message scheduling feature",
    width: 1428,
    height: 397,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "Low - Mid Fidelity Wireframes",
    description:
      "I went ahead with drafting annotated low fidelity frames that would help visualise how this new feature would fit in WhatsApp's existing interface.",
  },
  {
    type: "image",
    src: "/assets/work/whatsapp-scheduling/wireframes-lofi.png",
    alt: "Annotated low to mid fidelity wireframes",
    width: 1371,
    height: 1786,
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "High Fidelity Frames",
    description:
      "After figuring out how the feature could work as well as placement, I proceeded to design high-fidelity frames. It was imperative that this new feature fit seamlessly into WhatsApp's interface. The same colors, fonts and graphics were used.",
  },
  {
    type: "image",
    src: "/assets/work/whatsapp-scheduling/highfi-frames-1.png",
    alt: "High fidelity frames, part 1",
    width: 1325,
    height: 652,
  },
  {
    type: "image",
    src: "/assets/work/whatsapp-scheduling/highfi-frames-2.png",
    alt: "High fidelity frames, part 2",
    width: 1325,
    height: 652,
  },
  {
    type: "divider",
  },
  {
    type: "cardGroup",
    blocks: [
      {
        type: "heading",
        title: "Usability Testing & Validation",
        description:
          "I was able to test 5 users remotely. I sent them the prototype link, explained the project background and presented them with a scenario to schedule a reminder message: compose the message as usual, then long-press send to reveal scheduling options; choose a custom date and time with an intuitive picker; then view, edit, or cancel scheduled messages from a dedicated section in the chat info menu.",
      },
      {
        type: "list",
        variant: "taskCards",
        items: [
          {
            title: "Task 1: Compose",
            text: "Users will write their message as usual, then long-press the send button to reveal scheduling options.",
            painPointIcon: "pen",
          },
          {
            title: "Task 2: Schedule",
            text: "Users will choose a custom date and time with an intuitive picker interface.",
            painPointIcon: "clockPurple",
          },
          {
            title: "Task 3: Manage",
            text: "View, edit, or cancel scheduled messages from a dedicated section in the chat info menu.",
            painPointIcon: "checkSmall",
          },
        ],
      },
      {
        type: "statCards",
        cards: [
          { label: "Task Completion Rate", text: "92%" },
          { label: "Avg. Time to Schedule", text: "8.2s" },
          { label: "Ease of Use Rating", text: "4.7 / 5" },
          { label: "Would Use Regularly", text: "96%" },
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
    ],
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    title: "Future Impact",
    description:
      "For future iterations, I recommend adding more customisation options, such as allowing users to set their own presets for recurring messages. This would give users even more control over their communication. Secondly, I would recommend exploring the integration of the scheduling feature with WhatsApp's existing functionalities, such as group chats and media sharing, to further enhance its utility and appeal. Lastly, to ensure users are aware of the new feature, implementing tooltips or a brief onboarding tutorial within the app could help users discover and use the scheduling feature.",
  },
  {
    type: "thankYou",
    text: "Thank you",
  },
];

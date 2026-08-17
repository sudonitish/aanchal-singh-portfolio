import type { Block } from "@/lib/content";

export const whatsappSchedulingContent: Block[] = [
  {
    type: "paragraph",
    text: "WhatsApp is one of the most widely used messaging platforms globally, serving both personal and professional communication needs. Despite its extensive features, one critical capability is missing: the ability to schedule messages for a future time.",
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
    type: "heading",
    eyebrow: "Research",
    title: "Competitive Market Analysis",
    description:
      "I conducted a competitive market analysis of other messaging apps like Telegram and Facebook Messenger, both of which have message scheduling features. The analysis focused on understanding the strengths and gaps of each approach.",
  },
  {
    type: "heading",
    title: "User Interviews",
    description:
      "To gain a better understanding of user needs, I conducted user interviews with 5 WhatsApp users, including professionals, students, and general users. The interviews focused on their communication habits and pain points around message timing.",
  },
  {
    type: "heading",
    title: "User Personas",
    description:
      "With the knowledge and insights gained from the interviews, personas were created to understand the unique qualities, preferences, and behaviours of the people most likely to benefit from the added feature.",
  },
  {
    type: "heading",
    title: "User Flow",
    description:
      "I created a user flow chart to show the ways in which users might interact with this new feature, helping ensure all necessary key frames were included while creating wireframes.",
  },
  {
    type: "heading",
    title: "Low - Mid Fidelity Wireframes",
    description:
      "I went ahead with drafting annotated low fidelity frames that would help visualise how this new feature would fit in WhatsApp's existing interface.",
  },
  {
    type: "heading",
    title: "High Fidelity Frames",
    description:
      "After figuring out how the feature could work as well as placement, I proceeded to design high-fidelity frames. It was imperative that this new feature fit seamlessly into WhatsApp's interface.",
  },
  {
    type: "heading",
    title: "Usability Testing & Validation",
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
      "For future iterations, I recommend adding more customisation options, such as allowing users to set their own presets for recurring messages. This would give users even more control over their communication timing.",
  },
];

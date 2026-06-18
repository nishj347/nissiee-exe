export const roles = [
  "Full-Stack Developer",
  "Product Engineer",
  "Builder of Things",
  "3rd Year CSE",
  "nissiee 🤙",
];

export const speechBubbles = [
  
  "If it works, don't touch it.",
  "Done is better than perfect.",
  "Build projects. Collect stories.",
  "Every bug teaches something.",
  "Create more than you consume.",
  "Ship it. Then improve it.",

];

export const tickerWords = [
  "BUILDING",
  "SHIPPING",
  "ITERATING",
  "BREAKING",
  "FIXING",
  "DEPLOYING",
  "REPEAT",
];

export const services = [
  {
    icon: "⚡",
    title: "Full-Stack Development",
    desc: "React, Node.js, APIs, databases — the whole stack. I ship features end-to-end without needing a handoff meeting.",
    quote: "I build the frontend, backend, and the bugs connecting them.",
  },
  {
    icon: "🧱",
    title: "Product Engineering",
    desc: "I think about what to build before how to build it. Features ship when they solve a real problem, not just because they can.",
    quote: "Turning rough ideas into shipped experiences.",
  },
  {
    icon: "✦",
    title: "UI/UX Thinking",
    desc: "Interfaces that don't make users feel dumb. I obsess over micro-interactions, feedback loops, and whether the button is in the right place.",
    quote: "I care about how things feel, not just how they function.",
  },
  {
    icon: "🔬",
    title: "Problem Solving",
    desc: "C++, DSA, systems thinking. Messy, gnarly problems are more fun than clean ones. The harder the bug, the better the story.",
    quote: "I enjoy difficult problems. Sometimes they enjoy me back.",
  },
];

export const stackCategories = [
  {
    label: "Frontend",
    color: "blue",
    items: [
      { name: "React", tip: "my comfort zone and my prison" },
      { name: "Next.js", tip: "SSR solves problems I didn't know I had" },
      { name: "TypeScript", tip: "like JavaScript, but with trust issues" },
      { name: "Tailwind", tip: "CSS without the existential dread" },
    ],
  },
  {
    label: "Backend",
    color: "cyan",
    items: [
      { name: "Node.js", tip: "async/await my way to victory" },
      { name: "Express", tip: "minimalist, like my sleep schedule" },
      { name: "REST APIs", tip: "JSON all the way down" },
    ],
  },
  {
    label: "Database",
    color: "indigo",
    items: [
      { name: "MongoDB", tip: "JSON all the way down" },
      { name: "MySQL", tip: "relationships, but make them structured" },
      
    ],
  },
  {
    label: "Languages",
    color: "blue",
    items: [
      { name: "JavaScript", tip: "== vs === has cost me 3 hours" },
      { name: "TypeScript", tip: "JavaScript with a safety net" },
      { name: "Python", tip: "for when I want clean code quickly" },
      { name: "C++", tip: "where pointers teach you humility" },
      {name: "java", tip: "it just sounds tasty:)"
      }
    ],
  },
  {
    label: "Tools",
    color: "cyan",
    items: [
      { name: "Git", tip: "trust issues since git reset --hard" },
      { name: "GitHub", tip: "my commit history tells my life story" },
      { name: "VS Code", tip: "my most committed relationship" },
      { name: "Figma", tip: "where designs look better than reality" },
      { name: "Vercel", tip: "git push and pray" },
      { name: "Linux", tip: "I use arch btw (actually ubuntu)" },
      { name: "Postman", tip: "trust but verify your own API" },
    ],
  },
];

export const projects = [
{
num: "01",
category: "AI INTERVIEW PLATFORM",
title: "Mockly",
subtitle: "National Hackathon Winning AI Interview Simulator",


story:
  "An AI-powered interview preparation platform designed to help candidates practice HR and technical interviews in a realistic environment. Mockly conducts adaptive interviews, evaluates responses, and provides detailed feedback to help users improve confidence, communication, and problem-solving skills before facing actual recruiters.",

challenge:
  "Mockly started with a simple question: why is quality interview practice so difficult to access? Most students either practice alone or rely on static question banks that fail to recreate real interview scenarios. To solve this, I built a system capable of conducting dynamic conversations, asking context-aware follow-up questions, evaluating responses, and generating actionable feedback. Building the interview engine, maintaining conversational flow, and making AI feedback genuinely useful were some of the most challenging aspects of the project.",

learnings:
  "This project taught me how to design AI-powered products around user needs rather than technology alone. I gained hands-on experience with prompt engineering, conversational AI, feedback systems, and full-stack product development while understanding the importance of personalization in learning experiences.",

tags: ["React", "FastAPI", "Python", "Gemini AI", "MongoDB"],
repoHref: "#",


},

{
num: "02",
category: "GOVERNMENT INNOVATION",
title: "Call-Karigar",
subtitle: "Connecting Skilled Workers with the People Who Need Them",

story:
  "A digital marketplace that enables users to discover, compare, and book verified local service professionals such as electricians, plumbers, carpenters, and technicians through a single platform.",

challenge:
  "Call-Karigar was developed as a group project for an MP Government innovation challenge aimed at improving access to local skilled workers. The idea emerged from a common problem: finding reliable service providers often depends on personal referrals and informal networks. Our team designed a platform that streamlines service discovery, booking, and communication while building trust through provider verification and transparent information. Creating a smooth booking workflow and designing trust mechanisms for both customers and service providers were among the project's key challenges.",

learnings:
  "Working on Call-Karigar provided valuable experience in collaborative product development, requirement analysis, and marketplace design. The project reinforced an important lesson: in service platforms, trust and user confidence are often more valuable than the number of features offered.",

tags: ["React", "Node.js", "MongoDB", "Express"],
repoHref: "#",

},
];

export const contentPlatforms = [
  {
    icon: "📱",
    eyebrow: "Personal account",
    title: "@nissiee",
    desc: "My personal corner of the internet — building in public, sharing the chaos of student life and shipping side projects, and occasionally posting something that actually goes somewhere.",
    linkLabel: "Follow along →",
    href: "https://www.instagram.com/theycallmenissie/",
  },
  {
    icon: "🎯",
    eyebrow: "Content creation · SSB aspirants community",
    title: "Calm Chase",
    desc: "A community for SSB aspirants. I'm not building this one — I create content for it. Think tips, motivation, and the occasional reality check for people prepping for the Services Selection Board.",
    linkLabel: "See the content →",
    href: "https://www.instagram.com/calm_chase/",
  },
];

// Kept for backward compatibility with older imports.
export const contentCreation = contentPlatforms[1];

export const commitMessages = [
  "fixed bug",
  "fixed bug caused by fixing previous bug",
  "final-final-v2-actual-final",
  "works, don't touch",
  "added feature (removed 3)",
  "why did this even work before",
  "it works on my machine",
  "temp fix (permanent)",
  "TODO: fix this later (lol)",
  "hotfix for hotfix",
];

export const bootLines = [
  { text: "> booting nissiee.exe...", color: "#00ff41" },
  { text: "> loading caffeine dependencies...", color: "#00ff41" },
  { text: "> installing personality.pkg...", color: "#008f24" },
  { text: "> checking production confidence...", color: "#00ff41" },
  {
    text: "> WARNING: confidence may vary after deployment",
    color: "#febc2e",
  },
  { text: "> git status...", color: "#00ff41" },
  { text: "  On branch main", color: "#008f24" },
  { text: "  surprisingly clean (don't question it)", color: "#008f24" },
  { text: "> compiling portfolio...", color: "#00ff41" },
  { text: "> loading 2 projects... ████████████ done", color: "#00ff41" },
  { text: "> initializing personality matrix...", color: "#00ff41" },
  { text: "> ✓ builder_energy: ON", color: "#28c840" },
  { text: "> ✓ sleep_schedule: undefined (as expected)", color: "#28c840" },
  { text: "> ✓ css_arguments: ongoing", color: "#28c840" },
  { text: "> welcome, human.", color: "#a5f3fc" },
];

export const statusItems = [
  { emoji: "📍", text: "India — building from wherever WiFi works" },
  { emoji: "🎓", text: "B.Tech CSE — Year 3" },
  {
    emoji: "🎯",
    text: "Content creator for Calm Chase (SSB aspirants)",
    highlight: "Calm Chase",
  },
  { emoji: "📚", text: "Learning: System Design" },
  { emoji: "🚀", text: "Goal: Build products people actually use" },
];

export const socials = [
  { label: "GitHub", short: "GH", href: "https://github.com/nishj347" },
  { label: "LinkedIn", short: "in", href: "https://www.linkedin.com/in/nishpriya-jain-951165294/" },
  { label: "Email", short: "@", href: "nishj347@gmail.com" },
  { label: "Twitter", short: "𝕏", href: "https://x.com/offx_nish" },
];

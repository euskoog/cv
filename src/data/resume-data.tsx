import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Erik Skoog",
  initials: "ES",
  location: "Omaha, NE, USA",
  locationLink: "https://www.google.com/maps/place/Omaha,+NE",
  about:
    "Full Stack Engineer focused on building AI products through research and development. Constant learner and tinkerer.",
  summary:
    "With 3 years of experience as a Full Stack Engineer, I have a proven track record in building and scaling products from inception to delivery. I am incredibly passionate about AI, LLMs, Machine Learning, and building products. My focus lies in creating high-quality solutions while fostering teamwork and empowerment within my team. I love to research and tinker- constantly learning new technologies and applying them to my work. I'm seeking roles that allow me to continue innovating products through research and development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  contact: {
    email: "euskoog@gmail.com",
    tel: "+15154212171",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/euskoog",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/erik-skoog-744b46187/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/euskoog",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Nebraska-Lincoln",
      degree: "Bachelor of Science in Software Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Medical Solutions",
      link: "https://www.medicalsolutions.com/",
      badges: ["Hybrid"],
      title: "Software Developer",
      start: "2021",
      end: "Current",
      description:
        "Creating innovative AI & Product solutions through iterative research and development. Scaling unique LLM products to automate customer experiences and boost productivity. Technologies: Python, LLMs, TypeScript",
    },
    {
      company: "Spreetail",
      link: "https://www.spreetail.com/",
      badges: ["Remote"],
      title: "Software Engineer Intern",
      start: "May 2020",
      end: "Aug 2020",
      description:
        "Created full-stack product experiences for external stakeholders. Experienced hands-on ownership of critical products. Technologies: React, JavaScript, C#, SQL",
    },
    {
      company: "Girls Code Lincoln",
      link: "https://www.girlscodelincoln.org/",
      badges: ["Volunteer"],
      title: "Teacher",
      start: "2019",
      end: "2022",
      description:
        "Developed curriculum and taught programming. Mentored students in software development. Technologies: HTML, JavaScript, CSS",
    },
  ],
  skills: [
    "LLMs",
    "Machine Learning",
    "AI",
    "Full Stack Development",
    "Python",
    "JavaScript",
    "TypeScript",
    "React/Remix",
    "Node.js",
    "SQL",
  ],
  projects: [
    {
      title: "OpenAI Assistants Link",
      techStack: ["Side Project", "Python", "OpenAI", "LLMs", "FastAPI"],
      description:
        "REST API for connecting to the OpenAI Assistants API and storing base-level evaluations.",
      link: {
        label: "openai-assistants-link",
        href: "https://github.com/euskoog/openai-assistants-link",
      },
    },
    {
      title: "OpenAI Assistants Evals",
      techStack: ["Side Project", "TypeScript", "Remix", "OpenAI", "LLMs"],
      description:
        "Interactive dashboard for analyzing LLM evaluations and usage.",
      link: {
        label: "openai-assistants-evals",
        href: "https://github.com/euskoog/openai-assistants-evals",
      },
    },
    {
      title: "Barvest",
      techStack: ["Game Jam", "Unity", "C#"],
      description: "A 3D platformer game made in 72 hours for Ludum Dare 42.",
      link: {
        label: "barvest",
        href: "https://gidzillo.itch.io/barvest",
      },
    },
    {
      title: "Weevil Warrior",
      techStack: ["Hackathon Project", "ZGB Engine", "C", "OpenMPT"],
      description:
        "A Gameboy game that runs on real hardware, made in 24 hours for UNL Cornhacks 2022. Won 2nd place.",
      link: {
        label: "weevil-warrior",
        href: "https://jadengoter.itch.io/weevil-warrior",
      },
    },
  ],
} as const;

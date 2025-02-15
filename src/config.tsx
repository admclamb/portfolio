import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface Link {
  href: string;
  icon: (props: {
    className?: string;
    size?: SizeProp | undefined;
  }) => ReactNode;
  ariaLabel: string;
}

export const links: Link[] = [
  {
    href: "https://github.com/admclamb",
    icon: ({ className, size }) => (
      <FontAwesomeIcon icon={faGithub} className={className} size={size} />
    ),
    ariaLabel: "Anthony's Github",
  },
  {
    href: "https://www.linkedin.com/in/anthonymclamb/",
    icon: ({ className, size }) => (
      <FontAwesomeIcon icon={faLinkedinIn} className={className} size={size} />
    ),
    ariaLabel: "Anthony's Linkedin",
  },
  {
    href: "adylanmclamb@gmail.com",
    icon: ({ className, size }) => (
      <FontAwesomeIcon icon={faEnvelope} className={className} size={size} />
    ),
    ariaLabel: "Anthony's email",
  },
];

export interface Technology {
  name: string;
  description: string;
  imageUrl: string;
  bgColor: string;
}

export const technologies: Technology[] = [
  {
    name: "Figma",
    description: "Design Tool",
    imageUrl: "/logos/figma-logo.svg",
    bgColor: "bg-[#0ACF83]/20",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/logos/nextjs.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "Supabase",
    description: "Backend tool",
    imageUrl: "/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    name: "Appwrite",
    description: "Backend tool",
    imageUrl: "/logos/appwrite.svg",
    bgColor: "bg-[#F02D65]/20",
  },
];

export const aboutMe = {
  name: "Anthony Mclamb",
  pfp: "/profile-pic.jpeg",
  pfpAlt: "Anthony Mclamb profile picture with family",
};

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  slug: string;
  alt: string;
  categories: Category[];
  projectOwner: string;
  createdAt: Date;
  finishedAt: Date | null;
  githubLink?: string;
  deployedLink?: string;
  showcase?: ProjectImage[];
}

export interface ProjectImage {
  image: string;
  alt: string;
}

export interface Category {
  id: number;
  name: string;
}

export const categories = [
  {
    id: 1,
    name: "TypeScript",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "TailwindCSS",
  },
  {
    id: 4,
    name: "NestJS",
  },
  {
    id: 5,
    name: "Shadcn",
  },
  {
    id: 6,
    name: "JavaScript",
  },
];

export const projects: Project[] = [
  {
    title: "AI Adlibs",
    description: "Web application for creating madlibs",
    fullDescription:
      "Web application that allows users to generate madlibs using AI based on the users prompt. Originally built as a hackathon project and then scaled to 3k users a month. and over 25k generated adlibs.",
    coverImage: "/projects/aiadlibs-mockup.jpg",
    slug: "ai-adlibs",
    alt: "Ai Adlibs Cover Image",
    projectOwner: "Ai Creators",
    categories: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "TailwindCSS",
      },
      {
        id: 4,
        name: "NestJS",
      },

      {
        id: 6,
        name: "JavaScript",
      },
    ],
    createdAt: new Date("2023-03-14T00:00:00Z"),
    finishedAt: null,
    deployedLink: "https://aiadlibs.com/",
    githubLink: "https://github.com/ai-creators/ai-mad-lib-generator",
    // showcase: [
    //   {
    //     image: "/projects/ai-adlibs/landing-page.png",
    //     alt: "Ai adlibs landing page",
    //   },
    // ],
  },
  {
    title: "Algowars",
    description: "Online Competitive Programing Site",
    fullDescription:
      "*BETA* Online competive coding platform that gives users the ability to compete to solve the most algorithm problems as fast as possible.",
    coverImage: "/projects/algowars-mockup.jpg",
    slug: "algowars",
    alt: "Algowars Cover Image",
    projectOwner: "algowars org",
    categories: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "TailwindCSS",
      },
      {
        id: 4,
        name: "NestJS",
      },
      {
        id: 5,
        name: "Shadcn",
      },

      {
        id: 6,
        name: "JavaScript",
      },
    ],
    createdAt: new Date("2024-01-12T00:00:00Z"),
    finishedAt: null,
    githubLink: "https://github.com/algowars/algowars",
  },
  {
    title: "Weatherly",
    description: "Easy-to-use Weather Application",
    fullDescription:
      "User-centric web application that aggregates real-time wehater data to display personalized weather forecasts and insights.",
    coverImage: "/projects/weatherly-preview.png",
    slug: "weatherly",
    alt: "Weatherly Cover Image",
    projectOwner: "Anthony Mclamb",
    deployedLink: "https://weatherly2.netlify.app/",
    githubLink: "https://github.com/admclamb/weatherly",
    categories: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "TailwindCSS",
      },
      {
        id: 4,
        name: "NestJS",
      },

      {
        id: 6,
        name: "JavaScript",
      },
    ],
    createdAt: new Date("2022-04-30T00:00:00Z"),
    finishedAt: null,
  },
  {
    title: "China Garden Ordering Platform",
    description: "Online Restaurant Odering Platform",
    fullDescription:
      "Online ordering platform proof of concept for users having the ability to oder chinese food online for China Garden chinese restaurant in Big Pine Key, Florida.",
    coverImage: "/projects/china-garden-preview.png",
    slug: "china-garden",
    alt: "China Garden Cover Image",
    projectOwner: "Anthony & Zhi",
    categories: [
      {
        id: 2,
        name: "React",
      },
      {
        id: 3,
        name: "TailwindCSS",
      },
      {
        id: 6,
        name: "JavaScript",
      },
    ],
    deployedLink: "https://preview-cgbpk.netlify.app/",
    githubLink: "https://github.com/ZhiZheng0889/china-garden-big-pine",
    createdAt: new Date("2022-06-22T21:00:00.000Z"),
    finishedAt: new Date("2023-09-12T00:00:00Z"),
  },
];

export interface Contribution {
  company: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  link: string;
  imageFallback: string;
}

export const contributions: Contribution[] = [
  {
    company: "Firefox",
    description:
      "Bug fix where moz-card should've been set to false in the constructor.",
    link: "https://bugzilla.mozilla.org/show_bug.cgi?id=1911118",
    imageUrl: "/logos/firefox.png",
    bgColor: "bg-[#3178C6]/20",
    imageFallback: "FF",
  },
  {
    company: "Shadcn",
    imageFallback: "Scn",
    description: "Report bug on documentation page with duplicate hyphens",
    link: "https://github.com/shadcn-ui/ui/issues/4839",
    imageUrl: "/logos/shadcn.png",
    bgColor: "bg-[#000]/20",
  },
  {
    company: "Firefox",
    imageFallback: "FF",
    description:
      "Fix console warning by only getting URL when needed in URL bar.",
    link: "https://bugzilla.mozilla.org/show_bug.cgi?id=1922535",
    imageUrl: "/logos/firefox.png",
    bgColor: "bg-[#3178C6]/20",
  },
];

export interface WorkExperience {
  startDate: Date;
  endDate: Date | null;
  title: string;
  company: string;
  companyLogo: string;
  description: string[];
  fallbackLogo: string;
  companyUrl: string;
}

export interface EducationExperience {
  startDate: Date;
  endDate: Date | null;
  title: string;
  school: string;
  schoolLogo: string;
  fallbackLogo: string;
  description: string[];
}

export const experience: {
  work: WorkExperience[];
  education: EducationExperience[];
} = {
  work: [
    {
      startDate: new Date("2022-08-01T04:17:20.651Z"),
      endDate: new Date("2023-08-01T04:17:20.651Z"),
      title: "Software Engineer Intern",
      description: [
        "Develop upon the retail/consumer banking platform in Angular, TypeScript, Salesforce, Apex, and SOQL.",
        "Engaged in discussions around sprint  and backlog prioritization from a technical perspective.",
      ],
      company: "nCino",
      companyLogo: "logos/ncino-logo.jpeg",
      companyUrl: "https://www.ncino.com/en-US",
      fallbackLogo: "NC",
    },
  ],
  education: [
    {
      startDate: new Date("2021-10-12T04:17:20.651Z"),
      endDate: new Date("2022-05-14T04:17:20.651Z"),
      title: "Full stack web development",
      school: "Thinkful",
      schoolLogo: "/logos/thinkful.png",
      fallbackLogo: "T",
      description: [
        "Became proficient in full-stack web development",
        "Learned HTML, CSS, JavaScript, BootStrap, Express, Nodejs, React, PostgreSQL",
      ],
    },
    {
      startDate: new Date("2019-08-20T04:17:20.651Z"),
      endDate: null,
      title: "Associates in Arts",
      school: "Cape Fear Community College",
      schoolLogo: "/logos/cfcc.png",
      fallbackLogo: "CFCC",
      description: [],
    },
  ],
};

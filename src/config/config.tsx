import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

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
  imageUrl: string | ReactNode;
  bgColor: string;
  link: string;
}

export const contributions: Contribution[] = [
  {
    company: "Firefox",
    description:
      "Bug fix where moz-card should've been set to false in the constructor.",
    link: "https://bugzilla.mozilla.org/show_bug.cgi?id=1911118",
    imageUrl: "/logos/firefox.png",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    company: "Shadcn",
    description: "Report bug on documentation page with duplicate hyphens",
    link: "https://github.com/shadcn-ui/ui/issues/4839",
    imageUrl: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="h-6 w-6"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          ></line>
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          ></line>
        </svg>
      </>
    ),
    bgColor: "bg-[#000]/20",
  },
  {
    company: "Firefox",
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
}

export interface EducationExperience {
  startDate: Date;
  endDate: Date | null;
  title: string;
  school: string;
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
      company: "nCino",
    },
  ],
  education: [
    {
      startDate: new Date("2021-10-12T04:17:20.651Z"), // Corrected the format here
      endDate: new Date("2022-05-14T04:17:20.651Z"),
      title: "Full stack web development",
      school: "Thinkful",
    },
    {
      startDate: new Date("2019-08-20T04:17:20.651Z"), // Corrected the format here
      endDate: null,
      title: "Associates in Science",
      school: "Cape Fear",
    },
  ],
};

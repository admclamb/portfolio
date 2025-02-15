export const routerConfig = {
  root: {
    path: "/",
  },
  about: {
    path: "/about",
  },
  projects: {
    path: "/projects",
    execute: ({ tags }: { tags: string[] }) =>
      `/projects?tags=${encodeURIComponent(tags.join(","))}`,
  },
  contact: {
    path: "/contact",
  },
  contributions: {
    path: "/contributions",
    execute: ({ tags }: { tags: string[] }) =>
      `/contributions?tags=${encodeURIComponent(tags.join(","))}`,
  },
  resume: {
    path: "/resume.pdf",
  },
};

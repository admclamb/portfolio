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
};

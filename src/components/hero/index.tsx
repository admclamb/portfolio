import { ResumeButton } from "@/features/resume/resume-button";
import { TMuted } from "../typography/t-muted";
import { experience, links } from "@/config";

export const Hero = () => {
  return (
    <section className="py-5">
      <span className="text-4xl">👋</span>
      <h2 className="mb-3 title text-4xl">Hello there! I&apos;m Anthony</h2>
      <TMuted className="mb-2">
        I&apos;m a full-stack developer that loves building products and web
        apps
      </TMuted>
      <TMuted className="mb-10">
        I have a year of experience working as a software engineer intern
        <a
          href={experience.work[0].companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-0.5"
        >
          @nCino
        </a>
        , and 2 years building personal projects and contributing to open soure.
      </TMuted>
      <ul className="flex items-center gap-7">
        <li>
          <ResumeButton />
        </li>
        <li>
          <a href={links[0].href} target="_blank" rel="noopener noreferrer">
            {links[0].icon({ size: "xl" })}
          </a>
        </li>
        <li>
          <a href={links[1].href} target="_blank" rel="noopener noreferrer">
            {links[1].icon({ size: "xl" })}
          </a>
        </li>
      </ul>
    </section>
  );
};

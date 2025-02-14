import { ResumeButton } from "@/features/resume/resume-button";
import { TMuted } from "../typography/t-muted";
import { T2 } from "../typography/t2";
import { links } from "@/config";

export const Hero = () => {
  return (
    <section className="py-5">
      <span className="text-4xl">👋</span>
      <T2 className="mb-2">Hello there! I&apos;m Anthony</T2>
      <TMuted className="mb-10">
        I&apos;m a full-stack developer that loves building products and web
        apps.
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

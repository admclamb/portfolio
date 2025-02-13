import { ResumeButton } from "@/features/resume/resume-button";
import { TMuted } from "../typography/t-muted";
import { T2 } from "../typography/t2";

export const Hero = () => {
  return (
    <section className="py-5">
      <span className="text-4xl">👋</span>
      <T2 className="mb-2">Hello there! I&apos;m Anthony</T2>
      <TMuted className="mb-5">
        I&apos;m a full-stack developer that loves building products and web
        apps.
      </TMuted>
      <ul>
        <li>
          <ResumeButton />
        </li>
      </ul>
    </section>
  );
};

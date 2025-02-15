import { routerConfig } from "@/app/router-config";
import { TMuted } from "@/components/typography/t-muted";
import { T2 } from "@/components/typography/t2";
import { buttonVariants } from "@/components/ui/button";
import { contributions } from "@/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeaturedContributionCard } from "./featured-contribution-card";

export const FeaturedContributions = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="title text-2xl sm:text-3xl">Featured Contributions</h2>
          <TMuted>view my featured open source contributions</TMuted>
        </div>
        <Link
          href={routerConfig.contributions.path}
          className={buttonVariants({ variant: "ghost" })}
        >
          view more <ArrowRight />
        </Link>
      </div>
      <ul className="flex flex-col border rounded-xl">
        {contributions.map((contribution) => (
          <li
            key={contribution.description}
            className="border-b last:border-b-0"
          >
            <FeaturedContributionCard contribution={contribution} />
          </li>
        ))}
      </ul>
    </section>
  );
};

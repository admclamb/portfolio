import { routerConfig } from "~/app/router-config";
import { buttonVariants } from "~/components/ui/button";
import { contributions } from "~/config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeaturedContributionCard } from "./featured-contribution-card";

export const FeaturedContributions = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="title text-2xl sm:text-3xl">featured contributions</h2>
          <p className="text-muted-foreground">
            view my featured open source contributions
          </p>
        </div>
        <Link
          href={routerConfig.contributions.path}
          className={buttonVariants({ variant: "ghost" })}
        >
          view more <ArrowRight />
        </Link>
      </div>
      <ul className="flex flex-col rounded-xl border">
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

import { contributions } from "~/config";
import { FeaturedContributionCard } from "./featured-contribution-card";

export const ContributionsList = () => {
  return (
    <ul className="flex flex-col rounded-xl border">
      {contributions.map((contribution) => (
        <li key={contribution.description} className="border-b last:border-b-0">
          <FeaturedContributionCard contribution={contribution} />
        </li>
      ))}
    </ul>
  );
};

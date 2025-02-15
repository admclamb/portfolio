import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Contribution } from "@/config";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AvatarImage } from "@radix-ui/react-avatar";

type ContributionCardProps = {
  contribution: Contribution;
};

export const ContributionCard = ({ contribution }: ContributionCardProps) => {
  return (
    <Card className="rounded-none border-none rounded-xl">
      <CardHeader className="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage src={contribution.imageUrl} />
          <AvatarFallback>{contribution.imageFallback}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{contribution.company}</CardTitle>
          <CardDescription>{contribution.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <a
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "outline" })}
        >
          <FontAwesomeIcon icon={faCodeBranch} />
          View Code
        </a>
      </CardContent>
    </Card>
  );
};

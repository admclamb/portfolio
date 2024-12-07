import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Contribution } from "@/config/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

type ContributionCardProps = {
  contribution: Contribution;
  number?: number;
  className?: string;
};

const ContributionCard = ({
  contribution,
  number,
  className,
}: ContributionCardProps) => {
  return (
    <Card className="relative w-72 p-5 h-[17rem] flex flex-col">
      <div className="flex justify-between items-center gap-3">
        <motion.h3 className="text-lg font-bold tracking-tight">
          {contribution.company}
        </motion.h3>
        <div
          className={`p-1 ${contribution.bgColor} rounded-lg w-fit overflow-hidden`}
        >
          {typeof contribution.imageUrl === "string" ? (
            <Image
              src={contribution.imageUrl}
              width={1000}
              height={1000}
              alt={`${contribution.company} logo`}
              className={`size-8`}
            />
          ) : (
            <div className={`p-1 ${contribution.bgColor}`}>
              {contribution.imageUrl}
            </div>
          )}
        </div>
      </div>

      <motion.p className="text-muted-foreground mt-5">
        {contribution.description}
      </motion.p>
      <motion.a
        href={contribution.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: "link" }),
          "mt-auto pl-0 w-fit"
        )}
      >
        Go To Link <ExternalLink />
      </motion.a>
    </Card>
  );
};

export default ContributionCard;

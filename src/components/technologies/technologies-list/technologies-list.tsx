import { Badge } from "@/components/ui/badge";
import { Category } from "@/config/config";
import React from "react";

type TechnologiesListProps = {
  techStack: Category[];
};
const TechnologiesList = ({ techStack }: TechnologiesListProps) => {
  return (
    <ul className="flex flex-wrap items-center gap-2.5 max-w-sm">
      {techStack.map((tech) => (
        <li key={tech.id}>
          <Badge>{tech.name}</Badge>
        </li>
      ))}
    </ul>
  );
};

export default TechnologiesList;

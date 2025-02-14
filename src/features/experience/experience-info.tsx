"use client";

import { Card } from "@/components/ui/card";
import { experience } from "@/config";
import dayjs from "dayjs";
export const ExperienceInfo = () => {
  return (
    <Card className="p-0 bg-red-500">
      <ul className="border-l ml-10">
        {experience.work.map((experience) => (
          <li key={experience.title + experience.company} className="py-3">
            <p className="text-sm text-muted-foreground">
              {dayjs(experience.startDate).format("MMM YYYY")} -{" "}
              {dayjs(experience.endDate).format("MMM YYYY")}
            </p>
            <p>{experience.title}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { experience } from "@/config";
import dayjs from "dayjs";
export const ExperienceInfo = () => {
  return (
    <Card className="p-0">
      <ul className="border-l ml-10">
        {experience.work.map((experience) => (
          <li
            key={experience.title + experience.company}
            className="py-3 ml-10 relative"
          >
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -left-[9%] top-5"
            >
              <Avatar>
                <AvatarImage src={experience.companyLogo} />
                <AvatarFallback>{experience.fallbackLogo}</AvatarFallback>
              </Avatar>
            </a>
            <p className="text-sm text-muted-foreground">
              {dayjs(experience.startDate).format("MMM YYYY")} -{" "}
              {dayjs(experience.endDate).format("MMM YYYY")}
            </p>
            <p className="font-bold">{experience.company}</p>
            <p className="text-muted-foreground text-sm mb-3">
              {experience.title}
            </p>
            <ul className="text-sm text-muted-foreground list-disc ml-3">
              {experience.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Card>
  );
};

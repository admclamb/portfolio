import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card } from "~/components/ui/card";
import { experience } from "~/config";
import dayjs from "dayjs";
export const ExperienceInfo = () => {
  return (
    <Card className="p-0">
      <ul className="ml-10 border-l">
        {experience.work.map((experience) => (
          <li
            key={experience.title + experience.company}
            className="relative ml-10 py-3"
          >
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full"
            >
              <Avatar className="size-12">
                <AvatarImage
                  src={experience.companyLogo}
                  alt={`${experience.company} logo`}
                />
                <AvatarFallback>{experience.fallbackLogo}</AvatarFallback>
              </Avatar>
            </a>
            <p className="text-sm text-muted-foreground">
              {dayjs(experience.startDate).format("MMM YYYY")} -{" "}
              {experience.endDate
                ? dayjs(experience.endDate).format("MMM YYYY")
                : "Current"}
            </p>
            <p className="font-bold">{experience.company}</p>
            <p className="mb-3 text-sm text-muted-foreground">
              {experience.title}
            </p>
            <ul className="ml-3 list-disc text-sm text-muted-foreground">
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

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card } from "~/components/ui/card";
import { experience } from "~/config";
import dayjs from "dayjs";

export const EducationInfo = () => {
  return (
    <Card className="p-0">
      <ul className="ml-10 border-l">
        {experience.education.map((ed) => (
          <li key={ed.school} className="relative ml-10 py-3">
            <span className="absolute -left-16 top-4 flex items-center justify-center rounded-full">
              <Avatar className="size-12">
                <AvatarImage src={ed.schoolLogo} alt={ed.title} />
                <AvatarFallback>{ed.fallbackLogo}</AvatarFallback>
              </Avatar>
            </span>

            <p className="text-sm text-muted-foreground">
              {dayjs(ed.startDate).format("MMM YYYY")} -{" "}
              {ed.endDate ? dayjs(ed.endDate).format("MMM YYYY") : "Current"}
            </p>
            <p className="font-bold">{ed.school}</p>
            <p className="mb-3 text-sm text-muted-foreground">{ed.title}</p>
            <ul className="ml-3 list-disc text-sm text-muted-foreground">
              {ed.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Card>
  );
};

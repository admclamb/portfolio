import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceInfo } from "./experience-info";
import { EducationInfo } from "./education-info";

export const ExperienceCard = () => {
  return (
    <Tabs defaultValue="experience" className="w-full flex flex-col gap-1">
      <TabsList className="flex w-full">
        <TabsTrigger value="experience" className="flex-1">
          Experience
        </TabsTrigger>
        <TabsTrigger value="education" className="flex-1">
          Education
        </TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <ExperienceInfo />
      </TabsContent>
      <TabsContent value="education">
        <EducationInfo />
      </TabsContent>
    </Tabs>
  );
};

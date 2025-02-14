import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceInfo } from "./experience-info";

export const ExperienceCard = () => {
  return (
    <div className="w-[23rem]">
      <Tabs defaultValue="experience" className="w-full">
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
        <TabsContent value="education"></TabsContent>
      </Tabs>
    </div>
  );
};

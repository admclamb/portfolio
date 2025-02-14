import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ExperienceCard = () => {
  return (
    <div className="w-[23rem]">
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="experience"></TabsContent>
        <TabsContent value="education"></TabsContent>
      </Tabs>
    </div>
  );
};

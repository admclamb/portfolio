import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { EducationInfo } from "./education-info";
import { ExperienceInfo } from "./experience-info";

export default function ExperienceCard() {
  return (
    <Tabs defaultValue="experience">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <ExperienceInfo />
      </TabsContent>
      <TabsContent value="education">
        <EducationInfo />
      </TabsContent>
    </Tabs>
  );
}

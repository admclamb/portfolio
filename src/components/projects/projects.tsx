"use client";

import React from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";
import ProjectCard from "./project-card/project-card";
import { projects } from "@/config/config";
import { motion } from "framer-motion";

const Projects = () => {
  const cards = projects.map((project, index) => (
    <ProjectCard key={project.title} project={project} index={index} />
  ));

  return (
    <div className="py-16 sm:py-24 min-h-[60vh]">
      <div className="space-y-4 mb-10 container mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
        >
          I&apos;ve built various projects in the past to improve my programming
          skills. Here are some of my projects.
        </motion.p>
      </div>

      <Carousel items={cards} />
    </div>
  );
};

export default Projects;

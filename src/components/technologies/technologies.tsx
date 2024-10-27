"use client";

import { technologies } from "@/config/config";
import { motion } from "framer-motion";
import React from "react";
import TechnologyCard from "./technology-card/technology-card";

const Technologies = () => {
  return (
    <div
      className="container mx-auto relative z-10 py-16 sm:py-24 min-h-[60vh]"
      id="about"
    >
      <div className="space-y-4 mb-10">
        <motion.h2
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          Current technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
        >
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4"
      >
        {technologies.map((cardItem) => (
          <TechnologyCard
            key={cardItem.name}
            name={cardItem.name}
            description={cardItem.description}
            imageUrl={cardItem.imageUrl}
            bgColor={cardItem.bgColor}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

"use client";

import { contributions } from "@/config/config";
import { motion } from "framer-motion";
import React from "react";
import ContributionCard from "./contribution-card/contribution-card";

const Contributions = () => {
  return (
    <div className="py-16 sm:py-24 min-h-[60vh] container mx-auto">
      <div className="space-y-4 mb-10 container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
        >
          Contributions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
        >
          I love helping with open source contributions. Here are my most recent
          contributions.
        </motion.p>
      </div>
      <ul className="flex items-center gap-5">
        {contributions.map((contribution) => (
          <li key={contribution.description}>
            <ContributionCard contribution={contribution} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contributions;

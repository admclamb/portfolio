"use client";

import { CardContainer } from "@/components/ui/3d-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutHero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 px-4 text-white"
      >
        <div className="relative max-w-4xl pt-20 sm:pt-24 lg:pt-32 flex flex-col">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Hello I&apos;m Anthony Mclamb 👋
          </h1>
          <p className="text-center text-muted-foreground mt-6 text-lg">
            I&apos;m a full stack developer that loves using new technologies.
            With 3 years of practicing web development, I&apos;ve became
            proficient in HTML, CSS, TypeScript, React, Nodejs, and Expressjs. I
            have experience as a software engineer intern @nCino where I built
            web applications for consumer banking using Angular and Apex
            (practically Java). I&apos;ve also recently started contributing to
            open-source for firefox bugzilla.
          </p>
          <p className="text-center text-muted-foreground mt-6 text-lg">
            When I&apos;m not programming. I&apos;m probably spending time
            playing zombie with my child, or playing Rocket League.
          </p>
        </div>
        <CardContainer className="inter-var absolute -left-[30%] -rotate-12 bottom-0">
          <Image
            src="/projects/aiadlib-preview.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardContainer>
        <CardContainer className="inter-var absolute -right-[30%] -top-[550%] rotate-6 bottom-0">
          <Image
            src="/projects/aiadlib-preview.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardContainer>
      </motion.div>
    </div>
  );
};

export default AboutHero;

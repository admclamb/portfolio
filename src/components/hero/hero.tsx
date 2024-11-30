"use client";

import React from "react";
import Navbar from "../layout/navbar/navbar";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Search } from "lucide-react";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <AuroraBackground className="justify-start">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.0,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 px-4 text-white"
      >
        <div className="max-w-3xl pt-20 sm:pt-24 lg:pt-32 flex flex-col">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Full Stack Developer Based out of Charlotte
          </h1>
          <p className="text-center text-muted-foreground mt-6 text-lg">
            Hi, I'm Anthony, I love building things using computers.
          </p>
          <ul className=" mt-12 flex justify-center items-center gap-3">
            <li className="w-full sm:w-fit">
              <Link
                href="/work"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full sm:w-fit"
                )}
              >
                See my work
              </Link>
            </li>
            <li className="hidden md:block">
              <Button variant="outline" className="flex gap-5">
                <Search />
                <span>Search Portfolio...</span>
                <span className="text-muted-foreground font-semibold ml-10">
                  Ctrl K
                </span>
              </Button>
            </li>
          </ul>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;

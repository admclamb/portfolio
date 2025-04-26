import React from "react";
import HeroActions from "./hero-actions";

export default function hero() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">
        👋
        <br />
        I&apos;m Anthony Mclamb
      </h1>
      <p className="max-w-2xl text-muted-foreground">
        I&apos;m a full-stack developer based out of{" "}
        <span className="text-green-600 underline dark:text-green-400">
          North Carolina
        </span>
        .
      </p>
      <p className="mb-2 max-w-2xl text-muted-foreground">
        I have over a year of experience working as a software engineer in
        banking and cybersecurity. I also have 2 years of building personal
        projects and contributing to open soure.
      </p>
      <HeroActions />
    </section>
  );
}

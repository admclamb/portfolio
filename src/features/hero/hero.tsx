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
        I&apos;m a full-stack developer that loves building products and web
        apps
      </p>
      <p className="max-w-2xl text-muted-foreground">
        I have a year of experience working as a software engineer intern@nCino,
        and 2 years building personal projects and contributing to open soure.
      </p>
      <HeroActions />
    </section>
  );
}

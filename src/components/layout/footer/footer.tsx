import { links } from "@/config/config";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center">
        <p className="font-bold tracking-wide text-center">Anthony Mclamb</p>
        <ul className="flex justify-center gap-3 p-5 text-muted-foreground">
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="projects">Projects</Link>
          </li>
          <li>
            <Link href="contributions">Contributions</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
        <hr className="w-[18rem]" />
        <p className="text-center text-sm text-muted-foreground p-5">
          &copy; 2024 Anthony Mclamb. All rights reserved.
        </p>
        <ul className="flex gap-5 items-center pb-5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-label={link.ariaLabel}
                target="_blank"
                className="text-muted-foreground"
                rel="noopener noreferrer"
              >
                {link.icon({})}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

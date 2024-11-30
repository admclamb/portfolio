import Logo from "@/components/logo/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const NavbarWide = () => {
  return (
    <header className="fixed top-0 z-[50] flex w-full py-5">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 px-3 py-3 gap-5 flex items-center w-fit">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="flex items-center gap-5">
            <li>
              <Link className="p-2" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/contributions">
                Contributions
              </Link>
            </li>
            <li>
              <Link className="p-2" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/cv.pdf"
          className={cn(buttonVariants({ variant: "outline" }), "w-28")}
        >
          View CV
        </Link>
      </nav>
    </header>
  );
};

export default NavbarWide;

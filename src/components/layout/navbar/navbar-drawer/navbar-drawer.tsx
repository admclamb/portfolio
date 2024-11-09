import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import React from "react";
import { navItems } from "../navbar";
import Link from "next/link";

const NavbarDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="md:hidden ml-auto" variant="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-inherit">
        <div className="flex flex-col">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="p-3 hover:text-muted-foreground"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NavbarDrawer;

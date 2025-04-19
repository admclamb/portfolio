/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";
import { Briefcase, GitBranch, Zap } from "lucide-react";
import { routerConfig } from "~/app/router-config";
import { usePathname } from "next/navigation";
import { Logo } from "../logo";
import { SidebarMain } from "./sidebar-main";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const data = {
    navMain: [
      {
        title: "Home",
        url: routerConfig.root.path,
        icon: Zap,
        isActive: pathname === routerConfig.root.path,
      },
      {
        title: "Projects",
        url: routerConfig.projects.path,
        isActive: pathname === routerConfig.projects.path,
        icon: Briefcase,
      },
      {
        title: "Contributions",
        url: routerConfig.contributions.path,
        isActive: pathname === routerConfig.contributions.path,
        icon: GitBranch,
      },
    ],
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="px-4">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

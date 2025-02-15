"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Logo } from "../logo";
import { Briefcase, GitBranch, MessageSquareText, Zap } from "lucide-react";
import { routerConfig } from "@/app/router-config";
import { SidebarMain } from "./sidebar-main";
import { usePathname } from "next/navigation";

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
        title: "About",
        url: routerConfig.about.path,
        icon: MessageSquareText,
        isActive: pathname === routerConfig.about.path,
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
      <SidebarHeader className="px-4 ">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

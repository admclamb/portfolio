import { ComponentProps } from "react";
import { Sidebar, SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../sidebar/app-sidebar";
import { Toaster } from "../ui/sonner";

export interface SidebarProps extends ComponentProps<typeof Sidebar> {
  isOpenedByDefault?: boolean;
}

export const Layout = ({
  children,
  isOpenedByDefault = true,
}: SidebarProps) => {
  return (
    <>
      <SidebarProvider defaultOpen={isOpenedByDefault}>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
      <Toaster />
    </>
  );
};

import { type ComponentProps } from "react";
import { type Sidebar, SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../sidebar/app-sidebar";
import { Toaster } from "../ui/sonner";
import { Footer } from "../footer/footer";

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
        <SidebarInset>
          <div className="flex min-h-screen flex-col">
            <main className="grow px-4">{children}</main>
            <Footer />
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </>
  );
};

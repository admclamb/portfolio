import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type TMuted = {
  children: ReactNode;
  className?: string;
};

export const TMuted = ({ children, className }: TMuted) => {
  return <p className={cn("text-muted-foreground", className)}>{children}</p>;
};

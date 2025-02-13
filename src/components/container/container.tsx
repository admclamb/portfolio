import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children?: ReactNode;
};

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <section className={cn("w-full max-w-3xl mx-auto", className)}>
      {children}
    </section>
  );
};

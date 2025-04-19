import { cn } from "~/lib/utils";
import { type ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children?: ReactNode;
};

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <section className={cn("mx-auto w-full max-w-3xl", className)}>
      {children}
    </section>
  );
};

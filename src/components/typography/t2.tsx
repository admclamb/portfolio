import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type T2Props = {
  children: ReactNode;
  className?: string;
};

export const T2 = ({ children, className }: T2Props) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

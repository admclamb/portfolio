import { ReactNode } from "react";

type T3Props = {
  children: ReactNode;
};

export const T3 = ({ children }: T3Props) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

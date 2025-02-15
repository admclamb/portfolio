import { ReactNode } from "react";

type T1Props = {
  children: ReactNode;
};

export const T1 = ({ children }: T1Props) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-sans">
      {children}
    </h1>
  );
};

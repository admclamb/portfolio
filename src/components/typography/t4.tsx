import { ReactNode } from "react";

type T4Props = {
  children: ReactNode;
};

export const T4Props = ({ children }: T4Props) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight title">
      {children}
    </h4>
  );
};

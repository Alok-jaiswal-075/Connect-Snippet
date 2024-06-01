import { ReactNode } from "react";

export interface props {
  children: ReactNode;
  styles?: string;
}

export default function Card({ children, styles }: props) {
  return (
    <div
      className={`bg-card px-4 md:px-8 py-4 rounded-lg drop-shadow-xl flex flex-col gap-3  ${styles}`}
    >
      {children}
    </div>
  );
}

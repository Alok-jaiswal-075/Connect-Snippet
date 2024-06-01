import { ReactNode } from "react";

export interface props {
  children: ReactNode;
  styles?: string;
}

export default function Heading({ children, styles }: props) {
  return <h1 className={`text-2xl md:text-3xl font-semibold ${styles}`}>{children}</h1>;
}

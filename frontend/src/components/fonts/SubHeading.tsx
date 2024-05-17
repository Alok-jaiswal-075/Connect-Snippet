import { ReactNode } from "react";

export interface props {
  children: ReactNode;
  styles?: string;
}

export default function SubHeading({ children, styles = "" }: props) {
  return <h1 className={`text-xl font-semibold ${styles}`}>{children}</h1>;
}

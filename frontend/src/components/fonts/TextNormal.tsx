import { ReactNode } from "react";

export interface props {
  children: ReactNode;
  styles?: string;
}

export default function TextNormal({ children, styles = "" }: props) {
  return <h1 className={`${styles}`}>{children}</h1>;
}

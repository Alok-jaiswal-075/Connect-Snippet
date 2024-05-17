import { ReactNode } from "react";

export interface props {
  children: ReactNode;
  styles?: string;
}

export default function TextMedium({ children, styles = "" }: props) {
  return <h1 className={`text-md ${styles}`}>{children}</h1>;
}

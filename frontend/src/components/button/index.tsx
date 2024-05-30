import { ReactNode } from "react";

export interface props {
  children: ReactNode;
  styles?: string;
  onClick: () => void;
}

export default function Button({ children, styles = "", onClick }: props) {
  return (
    <button
      className={`bg-button2 cursor-pointer font-bold text-background px-8 py-1 rounded-lg drop-shadow-xl hover:bg-button2-dark duration-300 ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

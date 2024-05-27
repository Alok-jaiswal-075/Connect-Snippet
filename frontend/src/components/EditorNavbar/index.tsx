import { IoSettings, IoCopy, IoPersonSharp } from "react-icons/io5";
import logo from "/public/logo.png";
import Button from "../button";
import CompileButton from "../Editor/CompileButton";

export interface Props {
  setIsOpen: () => void;
  setPanelType: (type: string) => void;
}

export default function EditorNavbar({ setIsOpen, setPanelType }: Props) {
  const handleClick = (type: string) => {
    setIsOpen();

    setPanelType(type);
  };

  return (
    <div className="bg-card px-5 py-2">
      <div className="flex justify-between max-w-[1980px] mx-auto">
        <div className="w-14">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-6 items-center justify-center px-10 py-1 bg-button2 rounded-3xl border">
          <div className="cursor-pointer">
            <IoCopy size={20} color="#25213a" />
          </div>
          <div className="cursor-pointer" onClick={() => handleClick("member")}>
            <IoPersonSharp size={20} color="#25213a" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleClick("setting")}
          >
            <IoSettings size={20} color="#25213a" />
          </div>
        </div>
        <div>
          <CompileButton />
        </div>
      </div>
    </div>
  );
}

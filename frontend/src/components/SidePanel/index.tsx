import Settings from "./Settings";
import Members from "./Members";
import { IoIosCloseCircle } from "react-icons/io";

enum panelTypes {
  MEMBER = "member",
  SETTING = "setting",
  NONE = "none",
}

export interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  type?: string;
}

export default function SlidePanel({
  isOpen,
  setIsOpen,
  type = panelTypes.NONE,
}: Props) {
  const renderComponent = () => {
    if (type === panelTypes.MEMBER) {
      return <Members />;
    } else if (type === panelTypes.SETTING) {
      return <Settings />;
    } else null;
  };

  return (
    <div
      className={`absolute border-t-2 border-background z-10 top-0 right-0 w-[300px] h-full bg-card ${
        !isOpen && "translate-x-[100%]"
      } pl-5 pt-5 duration-200 rounded-l-lg`}
    >
      <div onClick={setIsOpen} className="cursor-pointer mb-2">
        <IoIosCloseCircle size={30} color="#25213a" />
      </div>
      {renderComponent()}
    </div>
  );
}

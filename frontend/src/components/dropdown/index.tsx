import { useEffect, useState } from "react";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

export default function DropDown({ items, selected, setSelected, w }: any) {
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState(items[selected]);

  useEffect(() => {
    setCurrent(items[selected]);
  }, [selected]);

  return (
    <div className="app font-semibold">
      <div
        className={`dropdown mx-auto relative   `}
        style={{ width: `${w}px` }}
      >
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`dropdown-btn cursor-pointer bg-background flex items-center justify-between gap-2 py-2 px-6 border-2  hover:border-button2 rounded-lg text-text duration-200  ${
            isActive ? "border-button2" : "border-transparent"
          } w-full`}
        >
          {current as string}
          <span>{isActive ? <IoCaretUp /> : <IoCaretDown />}</span>
        </div>
        <div
          className={`dropdown-content absolute left-0 w-full shadow-md bg-background rounded-lg text-text ${
            isActive ? "block" : "hidden"
          } z-50`}
        >
          {Object.entries(items).map(([value, text]) => (
            <div
              onClick={() => {
                setSelected(value);
                setIsActive(!isActive);
                setCurrent(text);
              }}
              className="item p-2 cursor-pointer hover:bg-button2 rounded-md px-6 duration-200 hover:text-background "
            >
              {text as string}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

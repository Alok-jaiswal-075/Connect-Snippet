import { useContext } from "react";
import EditorContext from "@/context/editor/EditorContext";
import TextMedium from "../fonts/TextMedium";

function Input() {
  const { stdIn, setStdIn } = useContext(EditorContext);

  return (
    <div className="flex flex-col w-full h-full bg-card text-xl rounded-xl shadow-2xl shadow-cyan-500/20">
      <TextMedium styles="text-button2 font-bold pt-5 pl-6">INPUT</TextMedium>

      <textarea
        name="input"
        id="input"
        className="w-full h-full text-[14px]  bg-background resize-none focus:outline-none  text-[#e0cdde] overflow-y-scroll bg-card  pl-6 pr-4 pb-4 pt-2 text-lg rounded-xl no-scrollbar"
        cols={30}
        rows={5}
        value={stdIn}
        onChange={(e) => setStdIn(e.target.value)}
        spellCheck={false}
        autoCorrect="false"
      />
    </div>
  );
}

export default Input;

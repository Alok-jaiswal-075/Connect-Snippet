import { useContext } from "react";
import EditorContext from "@/context/editor/EditorContext";
import TextMedium from "../fonts/TextMedium";

function Output() {
  const { output } = useContext(EditorContext);
  return (
    <div className="flex flex-col w-full h-full bg-card text-xl rounded-xl shadow-2xl shadow-cyan-500/20">
      <TextMedium styles="text-button2 font-bold pt-5 pl-6">
        OUTPUT
        {output && (
          <div className="flex items-center gap-5 mt-2 text-sm">
            <span>
              <span className="text-white">Time</span> {output.cpuTime} sec
            </span>
            <span>
              <span className="text-white">Mem</span> {output.memory} kB
            </span>
          </div>
        )}
      </TextMedium>
      <textarea
        name="output"
        id="output"
        className="w-full h-full text-[14px]  bg-background resize-none focus:outline-none  text-[#77c288] overflow-y-scroll bg-card  pl-6 pr-4 pb-4 pt-2 text-lg rounded-xl no-scrollbar"
        cols={30}
        rows={8}
        value={output.output}
        readOnly
        spellCheck={false}
      />
    </div>
  );
}

export default Output;

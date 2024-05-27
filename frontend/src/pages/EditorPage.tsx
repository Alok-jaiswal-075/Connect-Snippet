import EditorNavbar from "@/components/EditorNavbar";
import SlidePanel from "@/components/SidePanel";
import CodeRoom from "@/components/Editor";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import EditorContext from "@/context/editor/EditorContext";

export default function () {
  const params = useParams<{ roomId: string }>();
  const { state } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [panelType, setPanelType] = useState("none");
  const { output, stdIn, setStdIn } = useContext(EditorContext);

  const username = state.username;

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handlePanelType = (type: string) => {
    setPanelType(type);
  };

  console.log("roomid", params.roomId);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <EditorNavbar
        setIsOpen={handleSetIsOpen}
        setPanelType={handlePanelType}
      />
      <div className="grid grid-cols-3 gap-4 relative h-full">
        <div className="h-full col-span-2">
          <CodeRoom
            name={username as string}
            roomId={params.roomId as string}
          />
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="flex flex-col w-full h-full">
            <h1 className="p-2 border border-b-0 border-borderPrimary text-textSecondary">
              Input
            </h1>

            <textarea
              name="input"
              id="input"
              className="w-full h-full p-2 text-[14px] font-mono border border-borderPrimary bg-background resize-none focus:outline-none  text-white"
              cols={30}
              rows={5}
              value={stdIn}
              onChange={(e) => setStdIn(e.target.value)}
              spellCheck={false}
              autoCorrect="false"
            />
          </div>

          {/* Output area */}
          {
            <div className="flex flex-col w-full h-full">
              <div className="p-2 border border-b-0 border-borderPrimary text-textSecondary">
                Output
                <div className="flex items-center gap-5 mt-2 text-sm">
                  <span>
                    <span className="text-white">Time</span> {output.cpuTime}{" "}
                    sec
                  </span>
                  <span>
                    <span className="text-white">Mem</span> {output.memory} kB
                  </span>
                </div>
              </div>
              <textarea
                name="output"
                id="output"
                className="w-full h-full p-2 text-[14px] font-mono border border-borderPrimary bg-background resize-none focus:outline-none text-white"
                cols={30}
                rows={8}
                value={output.output}
                readOnly
                spellCheck={false}
              />
            </div>
          }
        </div>

        <SlidePanel
          isOpen={isOpen}
          setIsOpen={handleSetIsOpen}
          type={panelType}
        />
      </div>
    </div>
  );
}

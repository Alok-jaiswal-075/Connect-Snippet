import EditorNavbar from "@/components/EditorNavbar";
import SlidePanel from "@/components/SidePanel";
import CodeRoom from "@/components/Editor";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import Input from "@/components/Editor/Input";
import Output from "@/components/Editor/Output";

export default function () {
  const params = useParams<{ roomId: string }>();
  const { state } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [panelType, setPanelType] = useState("none");

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
      <div className="grid grid-cols-3 gap-4 relative h-full p-8">
        <div className="h-full col-span-2 ">
          <CodeRoom
            name={username as string}
            roomId={params.roomId as string}
          />
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <Input />
          <Output />
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

/* eslint-disable react-refresh/only-export-components */
import EditorNavbar from "@/components/EditorNavbar";
// import SlidePanel from "@/components/SidePanel";
import CodeRoom from "@/components/Editor";
import { useLocation, useParams } from "react-router-dom";
import Input from "@/components/Editor/Input";
import Output from "@/components/Editor/Output";
import { Navigate } from "react-router-dom";

export default function () {
  const params = useParams<{ roomId: string }>();
  const { state } = useLocation();
  // const [panelType, setPanelType] = useState("none");

  if (!state || !params || !params.roomId) {
    return <Navigate to="/" replace />;
  }

  const username = state?.username;

  // const handlePanelType = (type: string) => {
  //   setPanelType(type);
  // };

  console.log("roomid", params.roomId);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <EditorNavbar
      // setIsOpen={handleSetIsOpen}
      // setPanelType={handlePanelType}
      />
      <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4 relative h-full p-4 md:p-8">
        <div className="h-full row-span-2 md:col-span-2">
          <CodeRoom
            name={username as string}
            roomId={params.roomId as string}
          />
        </div>
        <div className="grid row-span-1 grid-cols-2 overflow-hidden gap-4 md:grid-cols-1 md:col-span-1">
          <Input />
          <Output />
        </div>
        {/* <SlidePanel
          isOpen={isOpen}
          setIsOpen={handleSetIsOpen}
          type={panelType}
        /> */}
      </div>
    </div>
  );
}

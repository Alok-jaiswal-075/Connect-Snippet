import logo from "/public/logo.png";
import CompileButton from "../Editor/CompileButton";
import Languages from "../dropdown/Languages";
import FontSize from "../dropdown/FontSize";
import GroupAvatars from "../avatars";
import ShareRoom from "../clipboard";

export interface Props {
  setIsOpen: () => void;
  setPanelType: (type: string) => void;
}

export default function EditorNavbar() {
  return (
    <div className="bg-card px-5 py-2">
      <div className="flex justify-between max-w-[1980px] mx-auto">
        <div className="w-14">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-3">
          <Languages />
          <FontSize />
        </div>
        <GroupAvatars />
        <ShareRoom />
        <div>
          <CompileButton />
        </div>
      </div>
    </div>
  );
}

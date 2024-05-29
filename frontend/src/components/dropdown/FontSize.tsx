import { useContext } from "react";
import EditorContext from "@/context/editor/EditorContext";
import DropDown from "@/components/dropdown";

function FontSize() {
  const { setFontSize, fontSize } = useContext(EditorContext);

  const fontSizes = {
    14: "Font Size: 14",
    16: "Font Size: 16",
    18: "Font Size: 18",
    20: "Font Size: 20",
    22: "Font Size: 22",
    24: "Font Size: 24",
    26: "Font Size: 26",
    28: "Font Size: 28",
    30: "Font Size: 30",
    34: "Font Size: 34",
    38: "Font Size: 38",
  };

  return (
    <DropDown
      selected={fontSize}
      setSelected={setFontSize}
      items={fontSizes}
      w={50}
    />
  );
}

export default FontSize;

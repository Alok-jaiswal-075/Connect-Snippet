import EditorContext from "@/context/editor/EditorContext";
import { useContext } from "react";
export default function Settings() {
  const { setLanguage, language } = useContext(EditorContext);
  return (
    <div className="text-black">
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
        <option value="c">C</option>
        <option value="ruby">Ruby</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>
    </div>
  );
}

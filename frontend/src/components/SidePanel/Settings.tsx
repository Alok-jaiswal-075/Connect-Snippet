import EditorContext from "@/context/editor/EditorContext";
import { useContext } from "react";
export default function Settings() {
  const { setLanguage, language } = useContext(EditorContext);
  return (
    <div className="text-black">
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="typescript">Typescript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
        <option value="c">C</option>
        <option value="ruby">Ruby</option>
        <option value="rust">Rust</option>
        <option value="sql">SQL</option>
        <option value="dart">Dart</option>
        <option value="kotlin">Kotlin</option>
        <option value="php">PHP</option>
        <option value="perl">Perl</option>
      </select>
    </div>
  );
}

import { useContext } from "react";
import EditorContext from "@/context/editor/EditorContext";
import DropDown from "@/components/dropdown";

function Languages() {
  const { setLanguage, language } = useContext(EditorContext);

  const options = {
    javascript: "JavaScript",
    typescript: "Typescript",
    python: "Python",
    java: "Java",
    cpp: "C++",
    c: "C",
    ruby: "Ruby",
    rust: "Rust",
    sql: "SQL",
    dart: "Dart",
    kotlin: "Kotlin",
    php: "PHP",
    perl: "Perl",
  };

  return (
    <DropDown
      selected={language}
      setSelected={setLanguage}
      items={options}
      w={150}
    />
  );
}

export default Languages;

import React, { useState } from "react";
import EditorContext from "./EditorContext";

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [provider, setProvider] = useState<any | null>(null);
  const [users, setUsers] = useState<User[] | null>([]);
  const [language, setLanguage] = useState<string>("javascript");
  const [code, setCode] = useState<string>("");
  const [stdIn, setStdIn] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [fontSize, setFontSize] = useState<number>(16);

  const value: EditorContextValue = {
    provider,
    setProvider,
    users,
    setUsers,
    language,
    setLanguage,
    code,
    setCode,
    stdIn,
    setStdIn,
    output,
    setOutput,
    fontSize,
    setFontSize,
  };

  return (
    <EditorContext.Provider value={value}> {children} </EditorContext.Provider>
  );
};

export default EditorProvider;

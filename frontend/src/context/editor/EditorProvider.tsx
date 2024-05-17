import React, { useState } from "react";
import EditorContext from "./EditorContext";

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [provider, setProvider] = useState<any | null>(null);

  const value: EditorContextValue = { provider, setProvider };

  return (
    <EditorContext.Provider value={value}> {children} </EditorContext.Provider>
  );
};

export default EditorProvider;

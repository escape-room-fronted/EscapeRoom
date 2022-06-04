import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const EditorCodeWindow = ({
  handleViewRoom,
  language,
  code,
  theme,
  onChangeData,
}) => {
  const [value, setValue] = useState(code);
  // console.log("Tema de editor", theme);
  const handleEditorChange = (value) => {
    setValue(value);
    onChangeData("code", value);
    console.log("code", value);
  };

  return (
    <Editor
      className="rounded-md my-3"
      height="280px"
      width="99%"
      language={language.value || "javascript"}
      value={value}
      theme={theme}
      defaultValue="// Hola Mundo"
      //   onChange={handleEditorChange}
    />
  );
};

export default EditorCodeWindow;

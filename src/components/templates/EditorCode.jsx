import React, { useState, useEffect } from "react";
import EditorCodeHeader from "../organisms/EditorCodeHeader";
import EditorCodeWindow from "../organisms/EditorCodeWindow";
import LanguagesDropdown from "../organisms/LanguagesDropdown";
import ThemeDropDown from "../organisms/ThemeDropDown";
import EditorCodeWindowPrint from "../organisms/EditorCodeWindowPrint";
import { defineTheme } from "../../Helpers/monacoThemes";

const EditorCode = ({ handleViewRoom }) => {
  const [language, setLanguage] = useState("vs-dark");
  const [theme, setTheme] = useState("active4d");
  const [code, setCode] = useState("//Hola Mundo");

  useEffect(() => {
    import("monaco-themes/themes/Monokai.json")
      .then((data) => {
        monaco.editor.defineTheme("monokai", data);
        console.log(data);
      })
      .then((res) => console.log(res));
  }, []);

  const handleLanguajeChange = (data) => {
    setLanguage(data.value);
  };
  console.log(theme);

  function handleThemeChange(th) {
    console.log(th);
    setTheme(th);

    if (["light", "vs-dark"].includes(th)) {
      console.log("entro al if");
      setTheme(th);
    } else {
      console.log("entro al else");
      defineTheme(th).then((_) => setTheme(th));
    }
  }
  return (
    <div className="h-full w-100 p-5 bg-gray my-2 ">
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-5 my-3 mb-5">
        <LanguagesDropdown handleLanguajeChange={handleLanguajeChange} />
        <ThemeDropDown handleThemeChange={handleThemeChange} theme={theme} />
      </div>
      <EditorCodeHeader />
      <EditorCodeWindow language={language} theme={theme} code={code} />
      <EditorCodeWindowPrint />
    </div>
  );
};

export default EditorCode;

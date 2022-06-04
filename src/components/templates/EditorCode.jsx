import React, { useState, useEffect } from "react";
import EditorCodeHeader from "../organisms/EditorCodeHeader";
import EditorCodeWindow from "../organisms/EditorCodeWindow";
import LanguagesDropdown from "../organisms/LanguagesDropdown";
import ThemeDropDown from "../organisms/ThemeDropDown";
import EditorCodeWindowPrint from "../organisms/EditorCodeWindowPrint";
import axios from "axios";
import ModalWindowOk from "../atoms/molecules/ModalWindowOk";

const EditorCode = ({ handleViewRoom }) => {
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-dark");
  const [code, setCode] = useState("//Escape room");
  const [processing, setProcessing] = useState(null);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);

  // console.log(import.meta.env.VITE_APP_RAPID_API_URL);
  // console.log(import.meta.env.VITE_APP_RAPID_API_HOST);
  // console.log(import.meta.env.VITE_APP_RAPID_API_KEY);

  // console.log(language);
  const handleLanguajeChange = (data) => {
    setLanguage(data);
  };

  function handleThemeChange(th) {
    setTheme(th);
  }

  const onChangeData = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("Caso no manejado", action, data);
      }
    }
  };

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: import.meta.env.VITE_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("Demasiadas Peticiones", status);
          ModalWindowOk("Se ha excedido las 100 peticiones del Día");
        }
        setProcessing(false);
        console.log("Bloque De Error...", error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: import.meta.env.VITE_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": import.meta.env.VITE_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        ModalWindowOk("Compilado Con exito");
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      ModalWindowOk("Error");
    }
  };
  return (
    <div className="h-full w-100 p-5 bg-gray my-2 ">
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-5 my-3 mb-5">
        <LanguagesDropdown handleLanguajeChange={handleLanguajeChange} />
        <ThemeDropDown handleThemeChange={handleThemeChange} />
      </div>
      <EditorCodeHeader />
      <EditorCodeWindow
        language={language}
        theme={theme}
        code={code}
        onChangeData={onChangeData}
      />
      <EditorCodeWindowPrint
        outputDetails={outputDetails}
        handleCompile={handleCompile}
      />
    </div>
  );
};

export default EditorCode;

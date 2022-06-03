import React from "react";

const EditorCodeWindowPrint = () => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-10">
      <div className="w-25 flex flex-col gap-3">
        <button className="btn-green">Ejecutar Código</button>
        <button className="btn-green">Enviar</button>
      </div>
      <div className="w-3/4 bg-dark rounded-md p-3 text-green-400">
        <p>Ventana de código</p>
      </div>
    </div>
  );
};

export default EditorCodeWindowPrint;

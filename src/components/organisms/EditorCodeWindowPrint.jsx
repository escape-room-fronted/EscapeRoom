import React from "react";

const EditorCodeWindowPrint = ({ outputDetails, handleCompile, handleViewRoom }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <div className="w-full flex flex-row flex-wrap gap-10">
      <div className="w-25 flex flex-col gap-3">
        <button
          className="btn-green"
          onClick={() => {
            handleCompile();
          }}
        >
          Ejecutar Código
        </button>
        <button
          onClick={handleViewRoom}
          className="btn-green">Enviar</button>
      </div>
      <div
        className="w-3/4 bg-dark rounded-md p-3 text-green-400"
        style={{ minHeight: "150px" }}
      >
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </div>
  );
};

export default EditorCodeWindowPrint;

import React, { useState } from "react";

const ModalLoadDataExcel = () => {
  const [viewModal, setViewModal] = useState(false);
  return (
    <>
      <button
        className="btn-yellow"
        onClick={() => {
          setViewModal(!viewModal);
        }}
      >
        Cargar Usuarios
      </button>

      {viewModal && (
        <div className="card__animate justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray outline-none focus:outline-none">
              <div className="text-colortitle font-paragraph flex items-start justify-between p-5 ">
                <h3 className="text-3xl font-semibold text-yellow">
                  Cargar Archivo
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-dark opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="relative p-6 flex-auto">
                {/* aqui iria el form  */}
                <div className="flex justify-center items-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-yellow dark:hover:border-gray-500 dark:hover:bg-gray-600 p-3"
                  >
                    <div className="flex flex-col justify-center items-center pt-2 pb-2">
                      <svg
                        className="mb-3 w-10 h-10 text-white hover:text-yellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="text-dark bg-yellow rounded-sm cursor-pointer"
                    />
                  </label>
                </div>
              </div>
              <div className="text-colortitle font-paragraph flex items-start justify-between p-5">
                <button
                  className="ModalWindowOk text-yellow background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setViewModal(false)}
                >
                  Cerrar
                </button>
                <button
                  className="btn-yellow"
                  type="button"
                  onClick={() => handleSaveButton()}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLoadDataExcel;

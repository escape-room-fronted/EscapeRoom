import React, { useState } from "react";
import { utils, read, writeFile } from "xlsx";
import axios from "../../services/axios";
import useAuth from "../../hooks/useAuth";

const SET_EXCEL = "excel";

const ModalLoadDataExcel = ({handleUpdateTable, handleUpdateListar}) => {
  const [viewModal, setViewModal] = useState(false);
  const { auth } = useAuth();

  const sendDataUsers = async (data) => {
    try {
      const response = await axios.post(SET_EXCEL, JSON.stringify(data), {
        headers: {
          "x-access-token": auth.accesToken,
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      handleUpdateTable(!handleUpdateListar)
    } catch (err) {
      console.log(err);
    }
  };

  function make_cols(datas) {
    let o = [],
      C = utils.decode_range(datas).e.c + 1;
    for (var i = 0; i < C; ++i) o[i] = { name: utils.encode_col(i), key: i };
    return o;
  }
  function handleFileExcel(event) {
    setViewModal(!viewModal);

    const target = event.target;

    if (event.target.name === "file") {
      const reader = new FileReader();
      reader.readAsArrayBuffer(target.files[0]);

      reader.onloadend = function (e) {
        //Convertimos a binarios los datos del excel
        const dataBinary = new Uint8Array(e.target.result);
        //Leemos los datos y los alcenamos en un array
        const workbook = read(dataBinary, { type: "array" });
        //Guardamos el nombre de la hoja en la que estamos, en este caso solo funciona con la primera Hoja
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        // Le pasamos los datos al metodo utils de la libreria que nos crea un json y lo imprimimos por consola
        const allData = utils.sheet_to_json(ws);
        // Por el momento estas propiedades no estan en uso
        // const colums = allData.slice(0, 1);
        // const data = allData.slice(1);
        // const codeColums = make_cols(ws["!ref"]);
        console.log(allData);

        sendDataUsers(allData);
      };
    }
  }

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
                      name="file"
                      required
                      onChange={handleFileExcel}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLoadDataExcel;

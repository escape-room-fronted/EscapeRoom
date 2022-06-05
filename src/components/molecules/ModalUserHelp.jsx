import React, { useState } from "react";
import { AiFillAlert } from "react-icons/ai";

export default function ModalUserHelp({
  handleTimeTips,
  handleNumberQuestions,
  handleUseAnswer,
  dataQuestions,
}) {
  const [showModal, setShowModal] = React.useState(false);
  const [isViewHelp, setIsViewHelp] = useState(false);
  console.log(dataQuestions);

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <a href="#" className="flex gap-4 justify-center">
          <span className="font-semibold font-hind text-lg">HELP</span>
          <span className="text-xl text-gray-400">
            <AiFillAlert />
          </span>
        </a>
      </button>
      {showModal ? (
        <>
          <div className="card__animate justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start font-hind justify-between p-5  rounded-t">
                  <h3 className="text-3xl font-semibold text-yellow">
                    {isViewHelp ? "Respuesta Correcta" : "¿Estás seguro?"}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-white font-hind text-lg leading-relaxed">
                    {isViewHelp
                      ? dataQuestions.correct_answer
                      : "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  {isViewHelp ? (
                    <button
                      className="text-yellow background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        handleNumberQuestions();
                        handleUseAnswer(false);
                        setIsViewHelp(false);
                        handleTimeTips();
                        setShowModal(false);
                      }}
                    >
                      Continuar
                    </button>
                  ) : (
                    <>
                      <button
                        className="text-yellow background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setIsViewHelp(true);
                          handleUseAnswer(true);
                        }}
                      >
                        Sí, acepto
                      </button>
                      <button
                        className=" text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        No
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ModalWindowOk from "../atoms/molecules/ModalWindowOk";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createQuestions } from "../../services/serviceRooms";


export default function ModalFormCreateRoom({ isUpDate, setIsUpDate}) {
  
  const [showModal, setShowModal] = useState(false);
  const { auth } = useAuth();

  function createRoom(values) {
    const data = {};
    data.question = values.question;
    data.incorrect_answers = [values.incorrect_answers1, values.incorrect_answers2, values.incorrect_answers3];
    data.correct_answer = values.correct_answer;
    data.tips = [values.tips1];
   

    console.log(data);
    createQuestions(auth.accesToken, data)
    .then((res)=>{
      console.log(res)
      setIsUpDate(!isUpDate);
      setShowModal(!showModal);
      ModalWindowOk("Se ha creado la pregunta correctamente");
    })
    .catch((err)=>{
      console.log(err)
      setShowModal(!showModal);
      ModalWindowOk("Ha ocurrido un error", icon = "error");
    })
  }


  return (
    <>
      <button
        className="btn-yellow"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Crear Pregunta
      </button>
      {showModal ? (
        <>
          <Formik
            initialValues={{
              question: "",
              incorrect_answers1: "",
              incorrect_answers2: "",
              incorrect_answers3: "",
              correct_answer: "",
              tips1: "",
            }}
            validate={(values) => {
              let errors = {};
              if (!values.question) {
                errors.question = "Ingrese una pregunta";
              } 
              if (!values.incorrect_answers1) {
                errors.incorrect_answers1 = "Ingrese una opción incorrecta";
              }
              if (!values.incorrect_answers2) {
                errors.incorrect_answers2 = "Ingrese una opción incorrecta";
              }
              if (!values.incorrect_answers3) {
                errors.incorrect_answers3 = "Ingrese una opción incorrecta";
              }
              if (!values.correct_answer) {
                errors.correct_answer = "Ingrese la opción correcta";
              }
              if (!values.tips1) {
                errors.itips1 = "Ingrese una pista";
              }
              return errors;
            }}
            onSubmit={(values) => {
              createRoom(values);
            }}
          >
            {({ errors }) => (
              <Form>
                <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray outline-none focus:outline-none">
                      <div className="text-colortitle font-paragraph flex items-start justify-between p-5 ">
                        <h3 className="text-3xl font-semibold text-yellow">
                          Crear Pregunta
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        ></button>
                      </div>
                      <div className="relative p-6 grid grid-cols-2 gap-4">
                        {/* aqui iria el form  */}
                        <div className="mb-6">
                          <label className="block mb-2 font-title text-sm text-white font-semibold">
                            Pregunta
                          </label>
                          <Field
                            textarea="text"
                            name="question"
                            placeholder="Pregunta"
                            className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                          />
                          <ErrorMessage
                            name="question"
                            component={() => (
                              <div className="text-yellow text-sm">
                                {errors.question}
                              </div>
                            )}
                          />
                        </div>
                        <div className="mb-6">
                          <label className="block mb-2 font-title text-sm text-white font-semibold">
                            Opción 1 
                          </label>
                          <Field
                            type="text"
                            name="incorrect_answers1"
                            placeholder="Nombre"
                            className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                          />
                          <ErrorMessage
                            name="incorrect_answers1"
                            component={() => (
                              <div className="text-yellow text-sm">
                                {errors.incorrect_answers1}
                              </div>
                            )}
                          />
                        </div>


                        <div className="mb-6">
                          <label className="block mb-2 font-title text-sm text-white font-semibold">
                            Opción 2 
                          </label>
                          <Field
                            type="text"
                            name="incorrect_answers2"
                            placeholder="Nombre"
                            className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                          />
                          <ErrorMessage
                            name="incorrect_answers2"
                            component={() => (
                              <div className="text-yellow text-sm">
                                {errors.incorrect_answers2}
                              </div>
                            )}
                          />
                        </div>

                        <div className="mb-6">
                          <label className="block mb-2 font-title text-sm text-white font-semibold">
                            Opción 3
                          </label>
                          <Field
                            type="text"
                            name="incorrect_answers3"
                            placeholder="Nombre"
                            className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                          />
                          <ErrorMessage
                            name="incorrect_answers3"
                            component={() => (
                              <div className="text-yellow text-sm">
                                {errors.incorrect_answers3}
                              </div>
                            )}
                          />
                        </div>








                        <div className="mb-6">
                          <label className="block mb-2 font-title text-sm text-white font-semibold">
                            Opción correcta
                          </label>
                          <Field
                            type="text"
                            name="correct_answer"
                            placeholder="opcion correcta"
                            className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                          />
                          <ErrorMessage
                            name="correct_answer"
                            component={() => (
                              <div className="text-yellow text-sm">
                                {errors.correct_answer}
                              </div>
                            )}
                          />
                        </div>

                        <div className="mb-6">
                          <label className="block mb-2 font-title text-sm text-white font-semibold">
                            Tip 
                          </label>
                          <Field
                            type="text"
                            name="tips1"
                            placeholder="Tip"
                            className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                          />
                          <ErrorMessage
                            name="tips1"
                            component={() => (
                              <div className="text-yellow text-sm">
                                {errors.tips1}
                              </div>
                            )}
                          />
                        </div>
                        
                      </div>
                      <div className="text-colortitle font-paragraph flex items-start justify-between p-5">
                        <button
                          className="ModalWindowOk text-yellow background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cerrar
                        </button>
                        <button className="btn-yellow" type="submit">
                          Guardar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <div className="opacity-25 fixed inset-0 z-40 bg-dark"></div>
        </>
      ) : null}
    </>
  );
}

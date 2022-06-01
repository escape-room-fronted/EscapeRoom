import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaPencilAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import ModalWindowOk from "../atoms/molecules/ModalWindowOk";
import { updateDataUsers } from "../../services/serviceUsers";

const ModalFormEdit = ({ data, isUpDate, setIsUpDate }) => {
  const [showModal, setShowModal] = useState(false);
  const { auth } = useAuth();

  const saveDataUser = async (values) => {
    data.name = values.admin_name;
    data.username = values.admin_last_name;

    updateDataUsers(auth.accesToken, data._id, data)
      .then((res) => {
        console.log(res);
        ModalWindowOk("Guardado Con exito");
        setShowModal(false);
        setIsUpDate(!isUpDate);
      })
      .catch((err) => {
        console.log(err);
        ModalWindowOk("Error Al Guardar", (icon = "error"));
        setShowModal(false);
      });
  };
  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        <FaPencilAlt />
      </button>
      {showModal ? (
        <>
          <Formik
            initialValues={{
              admin_name: data.name,
              admin_last_name: data.username,
              admin_email: data.email,
            }}
            validate={(values) => {
              let errors = {};
              if (!values.admin_email) {
                errors.admin_email = "Ingrese un correo electronico.";
              }
              if (!values.admin_name) {
                errors.admin_name = "Ingrese un nombre de usuario.";
              }
              if (!values.admin_last_name) {
                errors.admin_last_name = "Ingrese un nombre completo.";
              }
              return errors;
            }}
            onSubmit={(values) => {
              saveDataUser(values);
            }}
          >
            {({ errors }) => (
              <Form>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray outline-none focus:outline-none">
                      <div className="text-colortitle font-paragraph flex items-start justify-between p-5 ">
                        <h3 className="text-3xl font-semibold text-yellow">
                          Editar Administrador
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        ></button>
                      </div>
                      <div className="relative p-6 flex-auto text-lg">
                        {/* aqui iria el form  */}
                        <div className="mb-6">
                          <label className="block mb-2 font-title text-sm text-white font-semibold">
                            Nombre
                          </label>
                          <Field
                            type="text"
                            name="admin_name"
                            placeholder="Usuario"
                            className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-dark dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                          />
                          <ErrorMessage
                            name="admin_name"
                            component={() => (
                              <div className="text-yellow text-sm">
                                {errors.admin_name}
                              </div>
                            )}
                          />
                        </div>
                        <div className="mb-6">
                          <label className="block mb-2 font-title text-sm text-white font-semibold">
                            Usuario
                          </label>
                          <Field
                            type="text"
                            name="admin_last_name"
                            placeholder="Nombre"
                            className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-dark dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                          />
                          <ErrorMessage
                            name="admin_last_name"
                            component={() => (
                              <div className="text-yellow text-sm">
                                {errors.admin_last_name}
                              </div>
                            )}
                          />
                        </div>

                        <div className="mb-6">
                          <label className="block mb-2 font-title text-sm text-white font-semibold">
                            Email
                          </label>
                          <Field
                            disabled="true"
                            type="email"
                            name="admin_email"
                            placeholder="you@company.com"
                            className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-bglight dark:text-dark dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                          />
                          <ErrorMessage
                            name="admin_email"
                            component={() => (
                              <div className="text-yellow text-sm">
                                {errors.admin_email}
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

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default ModalFormEdit;

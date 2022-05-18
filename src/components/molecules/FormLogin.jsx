import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { isRol, isEmail } from "../../Helpers/helpers";

const LOGIN_URL = "auth/signin";
const GET_USER = "users/getuser";

const FormLogin = () => {
  const { setAuth } = useAuth();
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const getUser = async (tk) => {
    try {
      const response = await axios.get(GET_USER, {
        headers: { "x-access-token": tk },
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const verifyUser = async (formValues) => {
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          email: formValues.email,
          password: formValues.password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const accesToken = response.data.token;
      const dataUser = await getUser(accesToken);
      setAuth({
        id: dataUser._id,
        email: dataUser.email,
        name: dataUser.name,
        userName: dataUser.username,
        rol: isRol(dataUser.roles[0]),
        accesToken,
      });
      document.cookie = `token=${accesToken}; path=/; samesite=strict`;
      // console.log(document.cookie);

      isRol(dataUser.roles[0]) === "user"
        ? navigate("/logic-room")
        : navigate("/");
    } catch (err) {
      console.log(err);
      setIsLogin(true);
      setTimeout(() => {
        setIsLogin(false);
      }, 3000);
    }
  };
  return (
    <div className="">
      <div className=" flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              let errors = {};
              if (!values.email) {
                errors.email = "Ingrese un Correo Electrónico";
              } else if (!isEmail(values.email)) {
                errors.email =
                  "El correo solo puede contener letras, puntos y _";
              }

              if (!values.password) {
                errors.password = "Ingrese una Contraseña";
              }

              return errors;
            }}
            onSubmit={(values, { resetForm }) => {
              verifyUser(values);
            }}
          >
            {({ errors }) => (
              <Form
                className="bg-gray card__form p-10 min-w-full"
                autoComplete="off"
              >
                <h1 className="pb-4 text-end mb-6 text-white hover:text-yellow text-4xl font-hind font-semibold">
                  Login
                </h1>
                <div className="relative z-0 mb-6 w-full group">
                  <Field
                    type="email"
                    name="email"
                    className="block py-2.5 px-0 w-full text-lg text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-light dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-light peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm font-hind text-light dark:text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Correo Electronico
                  </label>
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="text-yellow text-sm">{errors.email}</div>
                    )}
                  />
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <Field
                    type="password"
                    name="password"
                    className="block py-2.5 px-0 w-full text-lg text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-light dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-light peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm font-hind text-light dark:text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Contraseña
                  </label>
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="text-yellow text-sm">
                        {errors.password}
                      </div>
                    )}
                  />
                </div>

                <div className="flex justify-end">
                  <button className="btn-yellow text-sm">Login</button>
                </div>
                {isLogin && (
                  <div className="text-yellow text-sm text-center pt-5">
                    Contraseña o Correo Incorrectos
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;

import React from "react";

const FormLogin = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-gray card__animate p-10 min-w-full">
            <h1 className="pb-4 text-end mb-6 text-white hover:text-yellow text-4xl font-hind font-semibold">
              Login
            </h1>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="name"
                name="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-light dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-light peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm font-hind text-light dark:text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo Electronico
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-light dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-light peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm font-hind text-light dark:text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contraseña
              </label>
            </div>

            <div className="flex justify-end">
              <button className="btn-yellow">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;

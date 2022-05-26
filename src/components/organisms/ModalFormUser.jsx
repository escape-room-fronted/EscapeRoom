import React, { useState, useEffect, useRef } from "react";
import axios from "../../services/axios";
import useAuth from "../../hooks/useAuth";
import ModalWindowOk from "../atoms/molecules/ModalWindowOk";


const CREATE_USER = "users/"

export default function ModalFormUser({isUpDate, setIsUpDate}) {


  const { auth } = useAuth();
  console.log(auth.accesToken);


  const [showModal, setShowModal] = React.useState(false);
 


  const [dato, setDato] =useState([]);
  const name = useRef("");
  const username = useRef("");
  const email = useRef("");
  const [_id, set_Id] = useState("");

  useEffect(() => {
    api();
}, [])

  const endpoint = "users/allusers";

  async function api(){
    axios.get(endpoint, {headers: { "x-access-token": auth.accesToken },})
    .then(res=>{
      const result=res.dato;
      setDato(result);
    })
  }

  const data = {
    name: "",
    username: "",
    email: ""
  }

  function createUser(e){
    e.preventDefault();
    data.name = name.current.value
    data.username = username.current.value 
    data.email = email.current.value
    data.roles = ["user"]

    if(_id){
      console.log("entro a editar");
      axios.put(`${CREATE_USER}${_id}`, data,  {headers: { "x-access-token": auth.accesToken },})
      .then(res =>{
        console.log(res)
      })
    }else{
      console.log("entro a agregar")
      axios.post('auth/signup', JSON.stringify(data),{headers: { "x-access-token": auth.accesToken, "Content-Type": "application/json", },} )
      .then(res =>{
        console.log(res)
        setShowModal(false)
        setIsUpDate(!isUpDate)
        ModalWindowOk("guardado exitoso")
      })
      .catch((err) => console.log(err))
      console.log(data)
    }
    set_Id("");
  }

  

  return (
    <>
      <button
        className="btn-yellow"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Crear Usuario
      </button>
      {showModal ? (
        <>
          <div 
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray outline-none focus:outline-none">
                <div className="text-colortitle font-paragraph flex items-start justify-between p-5 ">
                  <h3 className="text-3xl font-semibold text-yellow">
                    Crear Usuario
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  {/* aqui iria el form  */}
                <div className="mb-6">
                      <label className="block mb-2 font-title text-sm text-white font-semibold">
                        Usuario
                      </label>
                      <input
                        type="text"
                        ref={name}
                        placeholder="Usuario"
                        required
                        className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 font-title text-sm text-white font-semibold">
                        Nombre Completo
                      </label>
                      <input
                        ref={username}
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Nombre"
                        required
                        className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-red dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block mb-2 font-title text-sm text-white font-semibold">
                        Email Address
                      </label>
                      <input
                        ref={email}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                        className="font-title w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-bglight dark:text-colorparagraph dark:placeholder-gray-500 dark:border-red dark:focus:ring-red dark:focus:border-red"
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
                  <button
                    className="btn-yellow"
                    type="button"
                    onClick={(e)=>createUser(e)}
                  > 
                    
                    Guardar
                  </button>
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

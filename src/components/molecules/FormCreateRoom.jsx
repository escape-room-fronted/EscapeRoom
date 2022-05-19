import React, { useState } from 'react'
import ModalWindowOk from '../atoms/molecules/ModalWindowOk'


const FormCreateRoom = () => {

  const[ showModal, setShowModal] = useState(false)

  const handleSaveButton = () => { 
    setShowModal(true)
    ModalWindowOk("guardado exitoso")
  }
  return (

<div className='bg-dark min-h-screen'>
    <div className='pt-32 flex justify-center'>



    <section className="pb-10">
      <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div className="bg-gray card__animate space-y-2 rounded-lg">
          <div className="md:inline-flex space-y-2 md:space-y-0 w-full p-4 items-center">
            <h2 className="md:w-1/3 text-xl font-semibold font-hind text-yellow max-w-sm mx-auto">Pregunta</h2>
            <div className="md:w-2/3 max-w-sm mx-auto">
              <label className="text-sm text-white">Pregunta</label>
              <div className="w-full inline-flex">
              <textarea
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                  />
              </div>
            </div>
          </div>

          <div className="md:inline-flex  md:space-y-0  w-full p-2  items-center">
            <h2 className="md:w-1/3 text-white text-xl pl-2 font-semibold font-hind mx-auto max-w-sm">Opciones</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-2">
              <div>
                <label className="text-sm text-white font-hind">Opcion 1</label>
                <div className="w-full inline-flex">
                  <input
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    placeholder=""/>
                </div>
              </div>
              <div>
                <label className="text-sm text-white font-hind">Opcion 2</label>
                <div className="w-full inline-flex">
                  <input
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    placeholder=""/>
                </div>
              </div>
              <div>
                <label className="text-sm text-white font-hind ">Opcion 3</label>
                <div className="w-full inline-flex">
                  <input
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    placeholder=""/>
                </div>
              </div>
            </div>
          </div>
        

          <div className="md:inline-flex  md:space-y-0  w-full p-2 items-center">
            <h2 className="md:w-1/3 text-white text-xl pl-2 font-semibold font-hind mx-auto max-w-sm">Respuesta</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-2">
              <div>
                <label className="text-sm text-white font-hind ">Respuesta</label>
                <div className="w-full inline-flex">
                  <input
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    placeholder=""/>
                </div>
              </div>
            </div>
          </div>


          <div className="md:inline-flex  md:space-y-0  w-full p-2 items-center">
            <h2 className="md:w-1/3 text-white text-xl pl-2 font-semibold font-hind mx-auto max-w-sm">Pista</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-2">
              <div>
                <label className="text-sm text-white font-hind">Pista</label>
                <div className="w-full inline-flex">
                  <textarea
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    placeholder=""/>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-end pr-8 pb-6'>
          <button className="btn-yellow"
          type="button"
          onClick={() => handleSaveButton() }>Guardar</button>
          </div>
          <hr />
        </div>
      </div>
    </section>

    </div>

    </div>
  )
}

export default FormCreateRoom
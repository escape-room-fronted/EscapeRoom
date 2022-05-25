import React, { useState } from 'react'
import ModalWindowOk from '../atoms/molecules/ModalWindowOk'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormCreateRoom = () => {

  //const[ showModal, setShowModal] = useState(false)
  const[formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (

<div className='bg-dark min-h-screen'>
  <Formik
    initialValues={{
      pregunta: '',
      opcion1: '',
      opcion2: '',
      opcion3: '',
      respuesta: '',
      pista: ''

    }}

    validate={(valores)=>{

      let errores = {};

      if(!valores.pregunta){
        errores.pregunta = 'Llene este campo'
      }

      if(!valores.opcion1){
        errores.opcion1 = 'Llene este campo'
      }

      if(!valores.opcion2){
        errores.opcion2 = 'Llene este campo'
      }

      if(!valores.opcion3){
        errores.opcion3 = 'Llene este campo'
      }

      if(!valores.respuesta){
        errores.respuesta = 'Llene este campo'
      }

      if(!valores.pista){
        errores.pista = 'Llene este campo'
      }

      return errores;
    }}

    onSubmit={(valores, {resetForm}) => {
      resetForm();
      ModalWindowOk("Formulario Guardado con éxito");
      setTimeout(() => cambiarFormularioEnviado(false), 5000);
    }}
  >
  {({errors}) => (

    <div className='pt-32 flex justify-center'>
    <Form className="pb-10">
      <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div className="bg-gray card__animate space-y-2 rounded-lg">
          <div className="md:inline-flex space-y-2 md:space-y-0 w-full p-4 items-center">
            <h2 className="md:w-1/3 text-xl font-semibold font-hind text-yellow max-w-sm mx-auto">Pregunta</h2>
            <div className="md:w-2/3 max-w-sm mx-auto">
              <label className="text-sm text-white">Pregunta</label>
              <div className="w-full inline-flex">
              <Field
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    id='pregunta'
                    name='pregunta'
                    as="textarea"
                    />
              </div>
              <ErrorMessage name='pregunta' component={()=>(
                <div className="error">{errors.pregunta}</div>
              )} />
            </div>
          </div>

          <div className="md:inline-flex  md:space-y-0  w-full p-2  items-center">
            <h2 className="md:w-1/3 text-white text-xl pl-2 font-semibold font-hind mx-auto max-w-sm">Opciones</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-2">
              <div>
                <label className="text-sm text-white font-hind">Opcion 1</label>
                <div className="w-full inline-flex">
                  <Field
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    id='opcion1'
                    name='opcion1'
                    placeholder=""
                    />
                </div>
                <ErrorMessage name='opcion1' component={()=>(
                  <div className="error">{errors.opcion1}</div>
                )} />
              </div>
              <div>
                <label className="text-sm text-white font-hind">Opcion 2</label>
                <div className="w-full inline-flex">
                  <Field
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    id='opcion2'
                    name='opcion2'
                    placeholder=""
                    />
                </div>
                <ErrorMessage name='opcion2' component={()=>(
                  <div className="error">{errors.opcion2}</div>)} />
              </div>
              <div>
                <label className="text-sm text-white font-hind ">Opcion 3</label>
                <div className="w-full inline-flex">
                  <Field
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    id='opcion3'
                    name='opcion3'
                    placeholder=""
                    />
                </div>
                <ErrorMessage name='opcion3' component={()=>(
                  <div className="error">{errors.opcion3}</div>)} />
              </div>
            </div>
          </div>
        

          <div className="md:inline-flex  md:space-y-0  w-full p-2 items-center">
            <h2 className="md:w-1/3 text-white text-xl pl-2 font-semibold font-hind mx-auto max-w-sm">Respuesta</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-2">
              <div>
                <label className="text-sm text-white font-hind ">Respuesta</label>
                <div className="w-full inline-flex">
                  <Field
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    id='respuesta'
                    name='respuesta'
                    placeholder=""
                    />
                </div>
                <ErrorMessage name='respuesta' component={()=>(
                  <div className="error">{errors.respuesta}</div>)} />
              </div>
            </div>
          </div>


          <div className="md:inline-flex  md:space-y-0  w-full p-2 items-center">
            <h2 className="md:w-1/3 text-white text-xl pl-2 font-semibold font-hind mx-auto max-w-sm">Pista</h2>
            <div className="md:w-2/3 mx-auto max-w-sm space-y-2">
              <div>
                <label className="text-sm text-white font-hind">Pista</label>
                <div className="w-full inline-flex">
                  <Field
                    type="text"
                    className="rounded-md w-11/12 focus:outline-none bg-dark focus:text-white p-2"
                    id='pista'
                    name='pista'
                    placeholder=""
                    as="textarea"
                    />
                </div>
                <ErrorMessage name='pista' component={()=>(
                  <div className="error">{errors.pista}</div>)} />
              </div>
            </div>
          </div>
          <div className='flex justify-end pr-8 pb-6'>
          <button className="btn-yellow"
          type="submit">Guardar</button>
          </div>
          <hr />
        </div>
      </div>
    </Form>

    </div>
  )}
    
    </Formik>
    </div>
  )
}

export default FormCreateRoom
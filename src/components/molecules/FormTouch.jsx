import React from 'react'


const FormTouch = () => {
  return (
    <div>
        
        <div className='p-8'>
                <div className='bg-gray card__animate  w-full h-96'>

                <div className='text-white hover:text-yellow text-4xl font-hind font-semibold p-8'>
                    <p>Contáctanos</p>
                </div>

                <form className='px-10'>

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
                    Tu Nombre
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
                    Correo Electronico
                    </label>
                </div>




                <div className="relative z-0 mb-6 w-full group">
                    <input
                    type="message"
                    name="floating_message"
                    className="block py-2.5 px-0 w-full text-sm text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-light dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-light peer"
                    placeholder=" "
                    required
                    />
                    <label
                    htmlFor="floating_email"
                    className="absolute text-sm font-hind text-light dark:text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                    Mensaje
                    </label>
                </div>



                <button className='btn-dark'>Enviar Mensaje</button>


                </form>

                </div>
            </div>
    </div>
  )
}

export default FormTouch
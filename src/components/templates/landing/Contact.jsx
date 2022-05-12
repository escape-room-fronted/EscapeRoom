import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <div className='bg-dark pt-20 pb-20'>


        <div className='sm:p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>

            <div>
                <div className='bg-dark opacity-25 p-8'>
                <iframe
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.220269889314!2d-74.0504978!3d4.6731151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84b11427c2a95e25!2seducamas!5e0!3m2!1ses-419!2sco!4v1652382437017!5m2!1ses-419!2sco"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy">
                </iframe>
                </div>
            </div>

            


            <div className='p-8'>
                <div className='bg-gray card__form  w-full h-96'>

                <div className='text-white hover:text-yellow text-4xl font-hind font-semibold p-8'>
                    <p>Contáctanos</p>
                </div>

                <form className='px-10'>

                    <div className="relative z-0 mb-6 w-full group">
			            <input type="name" name="floating_name" className="block py-2.5 px-0 w-full text-sm text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-light dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-light peer" placeholder=" " required />
			            <label htmlFor="floating_email" className="absolute text-sm font-hind text-light dark:text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tu Nombre</label>
		            </div>

                    
                    <div className="relative z-0 mb-6 w-full group">
			            <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-light dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-light peer" placeholder=" " required />
			            <label htmlFor="floating_email" className="absolute text-sm font-hind text-light dark:text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo Electronico</label>
		            </div>


                    <div className="relative z-0 mb-6 w-full group">
			            <input type="message" name="floating_message" className="block py-2.5 px-0 w-full text-sm text-light bg-transparent border-0 border-b-2 border-light appearance-none dark:text-light dark:border-light dark:focus:border-light focus:outline-none focus:ring-0 focus:border-light peer" placeholder=" " required />
			            <label htmlFor="floating_email" className="absolute text-sm font-hind text-light dark:text-light duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-light peer-focus:dark:text-light peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje</label>
		            </div>


                    <button className='btn-dark'>Enviar Mensaje</button>


                </form>

                </div>
            </div>


        </div>




        



        



    </div>
  )
}

export default Contact
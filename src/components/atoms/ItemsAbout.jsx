import React from 'react'
import { MdLockOutline } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoMdPulse } from 'react-icons/io';

const ItemsAbout = () => {
  return (
    <div className='gap-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center place-items-center place-content-center'>
        

        
        <div>
        <div className='text-white hover:text-yellow text-9xl flex justify-center'>
        <MdLockOutline/>
        </div>
        <div className='text-white text-center text-2xl font-bold py-4'>
                <h2>Estás encerrado</h2>
        </div>


              <div>
                <p className='text-sm text-center text-light'>
                Estás en una habitación encerrado, el contador empezará su cuenta atrás, 
                será el momento para empezar a utilizar tú lógica, resolver los enigmas
                para escapar lo antes posible con éxito.
                </p>
              </div>
        </div>




        <div>
          <div className='text-white hover:text-yellow text-9xl flex justify-center'>
              <AiOutlineClockCircle/>
          </div>
          <div className='text-white text-center text-2xl font-bold py-1'>
                  <h2>El reloj corre...</h2>
          </div>

                <div>
                  <p className='text-sm text-center text-light py-3'>
                  Tienes 60 minutos para escapar, el reloj o contador, nos indicará el tiempo que nos queda 
                  para intentar resolver los enigmas y escapar con éxito.
                  </p>
                </div>
        </div>




        <div>
        <div className='text-white hover:text-yellow text-9xl flex justify-center'>
            <IoMdPulse/>
        </div>
        <div className='text-white text-center text-2xl font-bold py-1'>
                <h2>Siente el ambiente</h2>
        </div>


              <div>
                <p className='text-sm text-center text-light py-3'>
                Uno de los elementos más importantes es el controlador de la sala, 
                el cual nos ayudará mediante pistas, nos dará apoyo cuando estemos bloqueados.
                
                </p>
              </div>
        </div>


     



    </div>
  )
}

export default ItemsAbout
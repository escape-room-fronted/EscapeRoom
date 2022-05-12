import React from 'react'
import { MdLockOutline } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoMdPulse } from 'react-icons/io';


const About = () => {
  return (
    <div className=' p-2'>
        <div className='pt-10 text-center '>
          <h1 className='text-white hover:text-yellow text-5xl font-hind font-semibold'>¿Cómo funciona?</h1>
        </div>


        <div className='gap-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center place-items-center place-content-center pt-20'>



            <div className=''>
              <div className='text-white hover:text-yellow text-9xl flex justify-center'>
                <MdLockOutline/>
              </div>
              
            
              <div className='text-white text-center text-2xl font-bold py-4'>
                <h2>Estás encerrado</h2>
              </div>


              <div>
                <p className='text-sm text-center text-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corporis explicabo beatae culpa suscipit ullam maiores tempora 
                commodi temporibus mollitia quam illo alias eum laborum, 
                adipisci molestias laboriosam rem aut placeat.
                </p>
              </div>
            </div>

            
            <div className=''>
              <div className='text-white hover:text-yellow text-9xl flex justify-center'>
                <AiOutlineClockCircle/>
              </div>
              
            
              <div className='text-white text-center text-2xl font-bold py-4'>
                <h2>El reloj corre...</h2>
              </div>


              <div>
                <p className='text-sm text-center text-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corporis explicabo beatae culpa suscipit ullam maiores tempora 
                commodi temporibus mollitia quam illo alias eum laborum, 
                adipisci molestias laboriosam rem aut placeat.
                </p>
              </div>
            </div>



            <div className=''>
              <div className='text-white hover:text-yellow text-9xl flex justify-center'>
                <IoMdPulse/>
              </div>
              
            
              <div className='text-white text-center text-2xl font-bold py-4'>
                <h2>Siente el ambiente</h2>
              </div>


              <div>
                <p className='text-sm text-center text-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corporis explicabo beatae culpa suscipit ullam maiores tempora 
                commodi temporibus mollitia quam illo alias eum laborum, 
                adipisci molestias laboriosam rem aut placeat.
                </p>
              </div>
            </div>

            



        </div>









    </div>
  )
}

export default About
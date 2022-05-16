import React from 'react'
import SideBarUser from '../molecules/SideBarUser'
import TimeCounter from '../atoms/TimeCounter'
import { MdExtension} from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import ModalUserForm from '../molecules/ModalUserForm';


const LogicPanel = () => {
  return (
    <div className=''>


        <div className="flex flex-row min-h-screen">


          <main className="pt-20 main flex flex-col flex-grow -mr-64 md:mr-0 transition-all duration-150 ease-in">
            
            <div className='flex justify-between justify-items-center pt-4 px-2'>
              <div className='pl-2'>
                <TimeCounter/> 
              </div>
              <div className="my-px p-4 z-20 text-white hover:bg-gray hover:text-yellow">
                <ModalUserForm/>
              </div>
            </div>

            <div className="main-content flex flex-col flex-grow p-4">
           
              <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"></div>
            </div>


            <div className='drop-shadow-2xl py-4 2xl:hidden xl:hidde lg:hidden md:hidden bg-dark'>
            
              <div className='grid gris-cols-2 gap-10 justify-center'>
                <ul className='grid grid-cols-2 gap-4'>

                <div>
                    <li className="rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
                    <a
                        href="#"
                        className="flex gap-4 justify-center">
                    <span className="text-xl text-gray-400">
                    <MdExtension />
                    </span>
                    <span className="font-semibold font-hind text-lg">Lógica</span>
                    </a>
                    </li>
                </div>

                <div>
                    <li className="rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
                    <a
                        href="#"
                        className="flex gap-4 justify-center">
                    <span className="text-xl text-gray-400">
                    <HiCode />
                    </span>
                    <span className="font-semibold font-hind text-lg">Código</span>
                    </a>
                    </li>
                </div>

                </ul>
            </div>
            
        </div>
  
    </main>
        

        <div>
          <SideBarUser/>
        </div>

        


    </div>



  </div>
  )
}

export default LogicPanel
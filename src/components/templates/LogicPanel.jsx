import React from 'react'
import SideBarUser from '../molecules/SideBarUser'
import TimeCounter from '../atoms/TimeCounter'
import { MdExtension} from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import ModalUserHelp from '../molecules/ModalUserHelp';
import CardLogic from '../molecules/CardLogic';
import Questions from '../molecules/Questions';


const LogicPanel = () => {
  return (
    <div>


        <div className="flex flex-row ">


          <main className="pt-20 min-h-screen flex flex-col flex-grow -mr-64 md:mr-0 transition-all duration-150 ease-in">
            
            <div className='flex justify-between justify-items-center pt-4 px-2'>
              <div className='pl-2'>
                <TimeCounter/> 
              </div>
              <div className="my-px p-4 z-20 text-white hover:bg-gray hover:text-yellow">
                <ModalUserHelp/>
              </div>
            </div>

            <div className=" p-4">
              <div className="">
                <div className='flex justify-center'>
                  <CardLogic/>
                </div>
                <div className='flex justify-center pt-10'>
                  <Questions/>
                </div>
              </div>
            </div>


            <div className='drop-shadow-2xl py-4 2xl:hidden xl:hidde lg:hidden md:hidden bg-dark'>
            
              <div className='grid gris-cols-2 gap-10 justify-center'>
                <ul className='grid grid-cols-2 gap-4'>

                <div>
                    <li className="card__animate rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
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
                    <li className="card__animate rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
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
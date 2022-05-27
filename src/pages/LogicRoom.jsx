import React, { useState } from "react";
import TimeCounter from '../components/atoms/TimeCounter'
import ModalUserHelp from '../components/molecules/ModalUserHelp'
import { MdExtension } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import SideBarUser from '../components/molecules/SidebarUser'
import CardAvatarWelcome from "../components/molecules/CardAvatarWelcome";
import CardWelcome from "../components/molecules/CardWelcome"; 
import LogicPanel from '../components/templates/LogicPanel' 
import CodeEditor from "../components/molecules/CodeEditor";




const LogicRoom = () => {

  const [isViewLogicRoom, setIsViewLogicRoom] = useState(1)

  const handleViewRoom = () =>{
      setIsViewLogicRoom(isViewLogicRoom + 1);
  }
  return (
    <div className="bg-dark">
    <div className="flex flex-row ">
      <main className="pt-20 min-h-screen flex flex-col flex-grow -mr-64 md:mr-0 transition-all duration-150 ease-in">
        <div className="flex justify-between justify-items-center pt-4 px-2">
          <div className="pl-2">
            <TimeCounter/>
          </div>
          <div className="my-px p-4 z-20 text-white hover:bg-gray hover:text-yellow">
            <ModalUserHelp />
          </div>
        </div>

        {isViewLogicRoom === 1 && (
            <CardWelcome handleViewRoom={handleViewRoom}/>
        ) }

        {isViewLogicRoom === 2 &&(
            <CardAvatarWelcome handleViewRoom={handleViewRoom}
            isAvatarJuli={true} isTextOne={true}/>  
          )}
        
        {isViewLogicRoom === 3 &&(
          <LogicPanel handleViewRoom={handleViewRoom} />
        )}

        {isViewLogicRoom === 4 &&(
            <CardAvatarWelcome handleViewRoom={handleViewRoom}
            isAvatarLaura={true} isTextTwo={true}/>  
          )}

        {isViewLogicRoom === 5 &&(
            <CardAvatarWelcome handleViewRoom={handleViewRoom}
            isAvatarJuliyLau={true} isTextThree={true}/>  
          )}

        {isViewLogicRoom === 6 &&(
          <CodeEditor handleViewRoom={handleViewRoom} />
        )}

        <div className="drop-shadow-2xl py-4 2xl:hidden xl:hidde lg:hidden md:hidden bg-dark">
          <div className="grid gris-cols-2 gap-10 justify-center">
            <ul className="grid grid-cols-2 gap-4">
              <div>
                <li className="card__animate rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
                  <a href="#" className="flex gap-4 justify-center">
                    <span className="text-xl text-gray-400">
                      <MdExtension />
                    </span>
                    <span className="font-semibold font-hind text-lg">
                      Lógica
                    </span>
                  </a>
                </li>
              </div>

              <div>
                <li className="card__animate rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
                  <a href="#" className="flex gap-4 justify-center">
                    <span className="text-xl text-gray-400">
                      <HiCode />
                    </span>
                    <span className="font-semibold font-hind text-lg">
                      Código
                    </span>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>


      </main>

      <div>
        <SideBarUser />
      </div>
    </div>
  </div>
  );
};

export default LogicRoom;

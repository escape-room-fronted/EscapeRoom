import React from 'react'
import { HiUsers } from 'react-icons/hi';
import { BsHouseFill } from 'react-icons/bs';
import { MdAdminPanelSettings } from 'react-icons/md';
import { BsBoxArrowRight } from 'react-icons/bs';

const SidebarRespAdmin = ({handleShow}) => {
  return (
    <div>
           <div className="drop-shadow-2xl py-4 2xl:hidden xl:hidde lg:hidden md:hidden bg-dark">
          <div className="grid gris-cols-4 gap-10 justify-center">
            <ul className="grid grid-cols-4 gap-4">
              <div>
                <button 
                onClick={() => {handleShow(1)}}
                className="card__animate rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
                  <li className="flex gap-4 justify-center">
                    <span className="text-xl text-yellow hover:text-dark">
                      <HiUsers/>
                    </span>
                  </li>
                </button>
              </div>

              <div>
                <button 
                onClick={() => {handleShow(2)}}
                className="card__animate rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
                  <li className="flex gap-4 justify-center">
                    <span className="text-xl text-yellow hover:text-dark">
                      <BsHouseFill/>
                    </span>
                  </li>
                </button>
              </div>


              <div>
                <button 
                onClick={() => {handleShow(3)}}
                className="card__animate rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
                  <li className="flex gap-4 justify-center">
                    <span className="text-xl text-yellow hover:text-dark">
                      <MdAdminPanelSettings/>
                    </span>
                  </li>
                </button>
              </div>

              <div>
                <button 
                onClick={() => {handleShow(4)}}
                className="card__animate rounded-lg my-px p-4 text-white bg-gray hover:bg-yellow">
                  <li className="flex gap-4 justify-center">
                    <span className="text-xl text-yellow hover:text-dark">
                      <BsBoxArrowRight/>
                    </span>
                  </li>
                </button>
              </div>

            </ul>
          </div>
        </div>
    </div>
  )
}

export default SidebarRespAdmin
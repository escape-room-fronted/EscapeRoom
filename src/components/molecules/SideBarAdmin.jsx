import React from 'react'

const SideBarAdmin = () => {
  return (
    <div>
        <aside className="h-full card__animated sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-dark drop-shadow-2xl">
      
      <div className="pt-32 px-4 py-6">
        <ul className="flex flex-col gap-6 w-full text-white font-hind text-lg">
          
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
               
              </span>
              <span className="ml-3">Usuarios</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
              
              </span>
              <span className="ml-3">Rooms</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                
              </span>
              <span className="ml-3">Admin</span>
             
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-green-400">
               
              </span>
              <span className="ml-3">Cerrar sesión</span>
            </a>
          </li>
          
        </ul>
      </div>
    </aside>
    </div>
  )
}

export default SideBarAdmin
import React from 'react'
import { MdExtension} from 'react-icons/md';
import { HiCode } from 'react-icons/hi';

const SideBarUser = () => {
  return (
    <div className='h-full'>
        <aside className="card__animate h-full pt-20 sidebar w-64 md:shadow transform -translate-y-full md:translate-y-0 transition-transform duration-150 ease-in bg-dark drop-shadow-2xl">
     
    
     <div className="sidebar-content px-4 py-6">
     
         <ul className="flex flex-col w-full">
             



         <div className='pt-28'>
             <li className="my-px p-4 text-white card__animate bg-gray hover:bg-yellow">
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


         <div className='pt-10'>
             <li className="my-px p-4 text-white card__animate bg-gray hover:bg-yellow">
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
  </aside>
    </div>
  )
}

export default SideBarUser
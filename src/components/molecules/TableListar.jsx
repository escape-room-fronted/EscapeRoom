import React from 'react'
import { AiFillEye } from 'react-icons/ai';
import ModalFormUser from '../organisms/ModalFormUser';


const TableListar = () => {
  return (
    <div>    
      
       <h1 className="font-bold pt-2 text-2xl text-yellow">Usuarios</h1> 
       <div className='flex gap-4 justify-end pr-10'>  
            <ModalFormUser />
            <button className="btn-yellow gap-20"
             type="button" > Cargar usuarios </button>

        </div>

        <div className="pt-4 z-0">
 
  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
    <div className="bg-dark text-white overflow-hidden shadow-xl sm:rounded-lg">

      <table className="table-fixed w-full flex grow-1 flex-row sm:flex-col md:flex-col px-4 md:hidden sm:hidden">
        <thead className="flex flex-col gap-y-4 sm:hidden md:hidden w-[50%] items-stretch">
          
          <tr className="bg-yellow text-white flex flex-col border-l-2 border-y-2 border-gray-300">
            <th className="py-2 ... border-b-2 border-yellow">ID</th>
            <th className="py-2 ... h-20 border-b-2 border-yellow">Nombre</th>
            <th className="py-2 ... h-40 border-b-2 border-yellow">Correo electrónico</th>
            <th className="py-2 ... border-b-2 border-yellow">Edad</th>
            <th className="py-2 ... border-b-2 border-yellow">User name</th>
            <th className="py-2 ... border-b-2 border-yellow">Prueba</th>
            <th className="py-2 ... border-b-2 border-yellow">Acciones</th>
          </tr>
         
        </thead>

        <tbody className="flex flex-col text-white bg-dark gap-y-4 md:gap-y-0 sm:gap-y-0 w-full sm:flex-none md:flex-none md:table sm:table">
         
          <tr className="flex flex-col sm:flex-row md:flex-row  border-2 border-gray-300 sm:flex-none md:flex-none md:table md:w-full sm:table sm:w-full ">
            <td className="py-2 pl-4 border-b-2 border-gray-300 ">
             1
            </td>
            <td className="py-2 pl-4 border-b-2 border-gray-300 overflow-scroll h-20 md:h-auto sm:h-auto ">
              Christian
            </td>
            <td className="py-2 pl-4 border-b-2 border-gray-300 overflow-scroll h-40 md:h-auto sm:h-auto">
              christian@gmail.com
            </td>
            <td className="py-2 pl-4 border-b-2 border-gray-300">
             20
            </td>
            <td className="py-2 pl-4 border-b-2 border-gray-300">
              christian10
            </td>
            <td className="py-2 pl-4 border-b-2 border-gray-300">
              true
            </td>
            <td className="py-[0.31rem] pl-4 flex">
              
              <form  method="POST">
                <input type="hidden"Name value=""/>
                <button type="submit" className=" text-yellow px-3 py-2 rounded-sm">
                <AiFillEye/></button>
              </form>
            </td>

          </tr>
        </tbody>
      </table>

      

      <table className="table-fixed w-full hidden md:table sm:table">
        <thead>
          <tr className="bg-yellow text-white text-left">
            <th className="w-8 py-4 pl-2 pr-2 ... ">ID</th>
            <th className="py-4 ...">Nombre</th>
            <th className="w-40 md:w-[15rem] py-4 ...">Correo electrónico</th>
            <th className="py-4 ...">Edad</th>
            <th className="py-4 ...">User name</th>
            <th className="py-4 ...">Prueba</th>
            <th className="py-4 ... ">Acciones</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td className="py-3 px-2">
              1
            </td>
            <td className="p-3">
              christian
            </td>
            <td className="p-3 ">
             christian@gmail.com
            </td>
            <td className="p-3 ">
              20
            </td>
            <td className="p-3 ">
              christian10
            </td>
            <td className="p-3 ">
              true
            </td>
            <td className="p-3 flex flex-wrap" >
              <form action="" method="POST">
                <input type="hidden" />
                <button className=" text-yellow text-xl px-3 py-1 " type="submit" >
                  <AiFillEye/> </button>
              </form>
              
            </td>

          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</div>




    </div>
  )
}

export default TableListar
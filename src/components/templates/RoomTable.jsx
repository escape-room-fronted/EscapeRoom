import React from 'react'
import { Link } from 'react-router-dom'
import SideBarAdmin from '../molecules/SideBarAdmin'
import TableQuestions from '../molecules/TableQuestions'

const RoomTable = () => {
  return (
    <div>
        <div className='pt-20'>
       
        <div className="flex flex-row min-h-screen ">
       
        <SideBarAdmin/>
   
        <main className=" bg-dark flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
           <div className="flex flex-col flex-grow p-4">
              <div className='flex justify-between'>
                <h1 className="font-bold pt-2 text-2xl text-yellow">Rooms</h1>
                <div className='pr-8 pt-4'>
                 <Link to="/create-room">
                 <button className='btn-yellow'>Crear room</button>
                 </Link>
                </div>
              </div>
               
              <TableQuestions/>
               
           </div>
       
        </main>
        </div>
        </div>
    </div>
  )
}

export default RoomTable
import React from 'react'
import SideBarAdmin from '../molecules/SideBarAdmin'

const AdminTable = () => {
  return (
    <div className='pt-20'>
       
    <div className="flex flex-row min-h-screen ">
    
    <SideBarAdmin/>

    <main className=" bg-dark flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <div className="flex flex-col flex-grow p-4">
            <h1 className="font-bold pt-2 text-2xl text-yellow">Administradores</h1>

            
        
            
        </div>
    
    </main>
    </div>
    </div>
  )
}

export default AdminTable
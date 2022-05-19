import React, {useState} from 'react'
import SideBarAdmin from '../components/molecules/SideBarAdmin'
import SidebarRespAdmin from '../components/molecules/SidebarRespAdmin';
import TableListar from '../components/molecules/TableListar';
import TableListarAdmin from '../components/molecules/TableListarAdmin';
import TableQuestions from '../components/molecules/TableQuestions';




const ViewAdmin = () => {
    const [isTable, setIstable] = useState(1);
  return (
    <div>
        <div className='pt-20'>
       
       <div className="flex flex-row min-h-screen ">
       
       <SideBarAdmin handleShow={setIstable}/>
   
       <main className=" bg-dark flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
           <div className="flex flex-col flex-grow p-4">
               
   
                {isTable === 1 && (<TableListar/>)}
                {isTable === 2 && (<TableQuestions/>)}
                {isTable === 3 && (<TableListarAdmin/>)}
                {isTable === 4 && (<div/>)}
           
           </div>


        
          <SidebarRespAdmin handleShow={setIstable}/>
       
       </main>
       </div>
       </div>
    </div>
  )
}

export default ViewAdmin
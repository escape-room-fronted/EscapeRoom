import React, { useState, useEffect } from 'react'
import MUIDataTable from "mui-datatables";
import axios from '../../services/axios';
import ModalFormAdmin from '../organisms/ModalFormAdmin';
import useAuth from '../../hooks/useAuth';


const TableListarAdmin = () => {

const { auth } = useAuth();
console.log(auth.accesToken)

const [admins, setAdmins] = useState()

const endpoint = 'users/alladmins'

const getData = async() => {
    try {
      const response = await axios.get(endpoint, {headers: {"x-access-token": auth.accesToken
    }, }) 
    if (Array.isArray(response.data)){
      setAdmins(response.data)
    }else {
      setAdmins([response.data])
    }
    console.log(response.data)
    } catch (err){
      console.log(err)
    }
}

useEffect( () =>{
  getData()
}, [] )

const colums = [
  {
    name: "_id",
    label: "ID",
  },
  {
    name: "name",
    label: "Name",
  },
  {
    name: "username",
    label: "USER NAME",
  },
  {
    name: "email",
    label: "EMAIL",
  },

]

const options = {
  fixedHeader: false,
  responsive: 'scrollMaxHeight',
}

  return  ( 


<div>
      
       <div className='flex pt-4 gap-4 justify-end pr-10'>  
            <ModalFormAdmin />
        </div>

        <div className="pt-4 z-0">
 
  <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
    <div className="bg-dark text-white overflow-hidden shadow-xl sm:rounded-lg">

{
  admins && (
    <div>
    <MUIDataTable

    title={"Administradores"}
    data={admins}
    columns={colums}
    options={options}

    />
    </div>
  )
}
     
 
    </div>
  </div>
</div>




    </div>



    
  )
}

export default TableListarAdmin
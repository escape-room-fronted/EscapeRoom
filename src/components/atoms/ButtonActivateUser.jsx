import React from 'react'
import useAuth from '../../hooks/useAuth';
import { updateDataUsers } from '../../services/serviceUsers';
import ModalWindowOk from './molecules/ModalWindowOk';

const ButtonActivateUser = ({data, setIsUpDate, isUpDate}) => {

    const { auth } = useAuth();


    const activateUser = () =>{
        data.isLoggedIn = false
        updateDataUsers(auth.accesToken, data._id, data)
      .then((res) => {
        console.log(res);
        ModalWindowOk("Usuario activado");
        setIsUpDate(!isUpDate);
      })
      .catch((err) => {
        console.log(err);
        ModalWindowOk("Usuario no activado");
      });
    }

  return (
    <button
    onClick={() => activateUser()}
     className='btn-yellow'>
        Activar
    </button>
  )
}

export default ButtonActivateUser
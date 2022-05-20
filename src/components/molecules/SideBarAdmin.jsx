import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { logout } from "../../context/auth/authServices";

const SideBarAdmin = ({ handleShow }) => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <aside className="h-full card__animate sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-dark drop-shadow-2xl">
        <div className="pt-32 px-4 py-6">
          <ul className="flex flex-col gap-6 w-full text-white font-semibold font-hind text-lg">
            <button
              onClick={() => {
                handleShow(1);
              }}
              className="card__animate my-px py-6 bg-gray hover:bg-yellow flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <li>
                <span className="flex items-center justify-center text-lg text-gray-400"></span>
                <span className="ml-3">Usuarios</span>
              </li>
            </button>
            <button
              onClick={() => {
                handleShow(2);
              }}
              className="card__animate my-px py-6 bg-gray hover:bg-yellow flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <li>
                <span className="flex items-center justify-center text-lg text-gray-400"></span>
                <span className="ml-3">Rooms</span>
              </li>
            </button>
            <button
              onClick={() => {
                handleShow(3);
              }}
              className="card__animate my-px py-6 bg-gray hover:bg-yellow flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <li>
                <span className="flex items-center justify-center text-lg text-gray-400"></span>
                <span className="ml-3 ">Admin</span>
              </li>
            </button>
            <button
              onClick={() => {
                logout();
                setAuth({});
                navigate("/");
              }}
              className="card__animate my-px py-6 bg-gray hover:bg-yellow flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <li>
                <span className="flex items-center justify-center text-lg text-gray-400"></span>
                <span className="ml-3 ">Cerrar sesión</span>
              </li>
            </button>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBarAdmin;

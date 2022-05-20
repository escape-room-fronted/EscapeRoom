import React, { useState, useEffect } from "react";
import { FaUserAlt, FaBars, FaPlus } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import LinkLogo from "../atoms/LinkLogo";
import NavItems from "../molecules/NavItems";
import { Link } from "react-router-dom";
import { logout } from "../../context/auth/authServices";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  let Links = [
    { name: "Inicio", link: "/#home" },
    { name: "Rooms", link: "/#rooms" },
    { name: "Acerca", link: "/#about" },
    { name: "Contacto", link: "/#contact" },
    { name: "Educamás", link: "/#educamas" },
  ];
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  useEffect(() => {
    window.onscroll = () => {
      setOpen((prev) => {
        !prev;
      });
      setOpenMenu((prev) => {
        !prev;
      });
    };
  }, []);
  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-dark py-7  md:px-13 px-7 mx-auto">
        <LinkLogo path="/" img={logo} alt="logoeducamas" />
        <div className="flex items-center justify-between md:order-2 md:w-full">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden mt-1"
          >
            {open ? (
              <FaPlus className="text-white rotate-45 text-2xl my-2 hover:text-yellow sm:mt-3" />
            ) : (
              <FaBars className="text-white text-2xl my-2 hover:text-yellow sm:mt-3" />
            )}
          </div>
          <div className="md:order-2 my-1 mr-12 lg:mr-2 md:ml-5 flex cursor-pointer">
            <div className="relative">
              <button
                className="block h-8 w-6 overflow-hidden focus:outline-none"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <FaUserAlt className="text-white text-2xl mr-2 hover:text-yellow" />
              </button>

              {openMenu && (
                <div className="absolute right-0 w-40 mt-2 py-2 bg-dark border rounded shadow-xl">
                  <Link
                    to="/login"
                    className="transition-colors duration-200 block px-4 py-2 text-normal text-white rounded hover:bg-yellow hover:text-white"
                  >
                    Login
                  </Link>
                  <div className="py-2">
                    <hr></hr>
                  </div>
                  <Link
                    to="/view-admin"
                    className="transition-colors duration-200 block px-4 py-2 text-normal text-white rounded hover:bg-yellow hover:text-white"
                  >
                    Administrador
                  </Link>
                  <div className="py-2">
                    <hr></hr>
                  </div>
                  <Link
                    to="/logic-room"
                    className="transition-colors duration-200 block px-4 py-2 text-normal text-white rounded hover:bg-yellow hover:text-white"
                  >
                    Usuario
                  </Link>
                  <div className="py-2">
                    <hr></hr>
                  </div>
                  <button
                    className="transition-colors duration-200 block px-4 py-2 text-normal text-white rounded hover:bg-yellow hover:text-white"
                    onClick={() => {
                      logout();
                      setAuth({});
                      navigate("/");
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>
          <NavItems links={Links} isOpen={open} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

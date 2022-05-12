import React, { useState, useEffect } from "react";
import { FaUserAlt, FaBars, FaPlus } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Rooms", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Educamás", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOpen((prev) => {
        !prev;
      });
    };
  }, []);
  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="flex items-center justify-between bg-dark py-7  md:px-13 px-7 mx-auto">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer flex items-center font-hind 
            text-gray-800"
        >
          <img className="mr-3 h-6 sm:h-9" src={logo} alt="logoeducamas" />
        </Link>
        <div className="flex items-center justify-between md:order-2 md:w-full">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? (
              <FaPlus className="text-white rotate-45 text-2xl my-2 hover:text-yellow sm:mt-3" />
            ) : (
              <FaBars className="text-white text-2xl my-2 hover:text-yellow sm:mt-3" />
            )}
          </div>
          <div className="md:order-2 my-1 mr-12 lg:mr-2 md:ml-5 flex cursor-pointer ">
            <FaUserAlt className="text-white text-2xl mr-2 hover:text-yellow" />
            <span className="text-white hover:text-yellow">sign in</span>
          </div>

          <ul
            className={`bg-yellow md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 md:order-1 transition-all duration-300 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white duration-500 font-hind hover:underline underline-offset-8 decoration-yellow"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import LinkNavbar from "../atoms/LinkNavbar";

const NavItems = ({ links, isOpen }) => {
  return (
    <ul
      className={`bg-dark md:flex md:items-center md:pb-0 pb-6 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 md:order-1 transition-all duration-300 ease-in ${
        isOpen ? "top-20 " : "top-[-490px]"
      }`}
    >
      {links.map((link) => (
        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
          <LinkNavbar path={link.link} text={link.name} />
        </li>
      ))}
    </ul>
  );
};

export default NavItems;

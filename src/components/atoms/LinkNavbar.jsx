import React from "react";


const LinkNavbar = ({ path, text }) => {
  return (
    <a
      href={path}
      className="text-white duration-500 font-hind hover:underline underline-offset-8 decoration-yellow"
    >
      {text}
    </a>
  );
};

export default LinkNavbar;

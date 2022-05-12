import React from "react";
import { Link } from "react-router-dom";

const LinkNavbar = ({ path, text }) => {
  return (
    <Link
      to={path}
      className="text-white duration-500 font-hind hover:underline underline-offset-8 decoration-yellow"
    >
      {text}
    </Link>
  );
};

export default LinkNavbar;

import React from "react";
import { Link } from "react-router-dom";

const LinkLogo = ({ path, img, alt }) => {
  return (
    <Link
      to={path}
      className="font-bold text-2xl cursor-pointer flex items-center font-hind 
      text-gray-800"
    >
      <img className="mr-3 h-6 sm:h-9" src={img} alt={alt} />
    </Link>
  );
};

export default LinkLogo;

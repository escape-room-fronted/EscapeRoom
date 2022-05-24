import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-banner bg-cover bg-no-repeat bg-center bg-blend-overlay relative flex items-center"
      style={{ minHeight: "700px" }}
    >
      <div className="absolute top-0 bg-gradient-to-t from-black to-dark opacity-50 w-full h-full"></div>
      <p className="text-white ml-10 text-5xl sm:text-7xl md:text-9xl hover:text-yellow z-30">
        Escapar <br /> <span>en 60 minutos ?</span>
      </p>
    </div>
  );
};

export default Banner;

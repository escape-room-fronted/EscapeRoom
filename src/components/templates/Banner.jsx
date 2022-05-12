import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-haker bg-cover bg-no-repeat bg-center flex items-center justify-start"
      style={{ minHeight: "700px" }}
    >
      <p className="text-white ml-10 text-5xl sm:text-7xl md:text-9xl hover:text-yellow">
        Escape <br /> <span>in 60 mins ?</span>
      </p>
    </div>
  );
};

export default Banner;

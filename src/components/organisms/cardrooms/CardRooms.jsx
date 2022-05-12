import React from "react";
import "./cardrooms.css";
import { FaClock, FaLock, FaRegClock } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
const CardRooms = () => {
  return (
    <div className="flex">
      <div className="max-w-sm bg-gray rounded overflow-hidden shadow-lg py-10 px-8 flex flex-col gap-6 card__room__landing cursor-pointer">
        <div className="flex gap-2">
          <RiLock2Fill className="text-yellow text-xl" />
          <RiLock2Fill className="text-yellow text-xl" />
          <RiLock2Fill className="text-yellow text-xl" />
          <RiLock2Fill className="text-light text-xl" />
          <RiLock2Fill className="text-light text-xl" />
        </div>
        <h3 className="text-white text-4xl font-semibold">Personality</h3>
        <span className="text-white flex gap-3 items-center text-xl">
          <FaRegClock /> <span className="text-light font-medium">60</span>
        </span>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          minima odit eum! Odit, natus quaerat. Blanditiis quia reprehenderit
          excepturi illum.
        </p>
        <button className="text-white my-3">Read More</button>
      </div>
      <div className="flex items-center">
        <div className="card__room__landing__img bg-dark bg-haker bg-cover"></div>
      </div>
    </div>
  );
};

export default CardRooms;

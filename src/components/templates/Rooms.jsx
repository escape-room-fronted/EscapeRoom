import React from "react";
import { FaClock, FaLock } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";

const Rooms = () => {
  return (
    <div className="bg-dark h-full p-10">
      <div className="flex flex-wrap gap-5">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-light p-6">
          <div className="flex gap-2">
            <RiLock2Fill className="text-yellow text-xl" />
            <RiLock2Fill className="text-yellow text-xl" />
            <RiLock2Fill className="text-yellow text-xl" />
            <RiLock2Fill className="text-xl" />
            <RiLock2Fill className="text-xl" />
          </div>
          <h3>Personality</h3>
          <span>Time</span>
          <p>Texto</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

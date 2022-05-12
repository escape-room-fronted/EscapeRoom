import React from "react";
import "./cardrooms.css";
import { FaRegClock } from "react-icons/fa";
import LockItems from "../../molecules/LockItems";
const CardRooms = ({ text, title, position = 0 }) => {
  return (
    <div className="flex">
      <div
        className={`max-w-sm bg-gray rounded overflow-hidden shadow-lg py-10 px-8 flex flex-col gap-6 card__room__landing cursor-pointer ${
          position ? "order-1" : ""
        }`}
      >
        <LockItems />
        <h3 className="text-white text-4xl font-semibold">{title}</h3>
        <span className="text-white flex gap-3 items-center text-xl">
          <FaRegClock /> <span className="text-light font-medium">60</span>
        </span>
        <p className="text-white">{text}</p>
        <button className="text-white my-3 btn-yellow">Read More</button>
      </div>
      <div className={`hidden md:flex items-center`}>
        <div className="card__room__landing__img bg-dark bg-haker bg-cover"></div>
      </div>
    </div>
  );
};

export default CardRooms;

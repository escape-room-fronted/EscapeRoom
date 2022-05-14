import React from "react";
import "./cardroom.css";
import { FaRegClock } from "react-icons/fa";
import LockItems from "../molecules/LockItems";
const CardRoom = ({ text, title, position = 0 }) => {
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
          <FaRegClock /> <span className="text-light font-medium">30</span>
        </span>
        <p className="text-white">{text}</p>
<<<<<<< HEAD:src/components/organisms/cardrooms/CardRooms.jsx
        <button className="btn-yellow">Read More</button>
=======
        <button className="text-white my-3 btn-yellow">Leer más</button>
>>>>>>> 0670068baf1d5ea4b1496478478ca451c246b755:src/components/molecules/CardRoom.jsx
      </div>
      <div className={`hidden md:flex items-center`}>
        <div className="card__room__landing__img bg-dark bg-haker bg-cover"></div>
      </div>
    </div>
  );
};

export default CardRoom;
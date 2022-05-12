import React from "react";
import CardRooms from "../organisms/cardrooms/CardRooms";

const Rooms = () => {
  return (
    <div className="bg-dark h-full p-10">
      <div className="flex flex-wrap gap-5">
        <CardRooms />
      </div>
    </div>
  );
};

export default Rooms;

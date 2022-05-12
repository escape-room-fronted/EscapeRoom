import React from "react";
import CardRooms from "../organisms/cardrooms/CardRooms";

const Rooms = () => {
  let text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur delectus quibusdam repudiandae, similique dolor eveniet sint placeat dignissimos natus quas.";
  return (
    <div className="bg-dark h-full p-10">
      <div className="flex flex-wrap gap-12 flex-col content-center">
        <CardRooms title="Lógica" text={text} />
        <CardRooms title="Código" text={text} position={1} />
      </div>
    </div>
  );
};

export default Rooms;

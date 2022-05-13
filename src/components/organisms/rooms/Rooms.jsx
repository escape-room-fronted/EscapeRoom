import React from "react";
import CardRoom from "../../molecules/CardRoom";


const Rooms = () => {
  let text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur delectus quibusdam repudiandae, similique dolor eveniet sint placeat dignissimos natus quas.";
  return (
    <div id="rooms" className="bg-dark h-full p-10">
      <div className="flex flex-wrap gap-12 flex-col content-center">
        <CardRoom title="Lógica" text={text} />
        <CardRoom title="Código" text={text} position={1} />
      </div>
    </div>
  );
};

export default Rooms;
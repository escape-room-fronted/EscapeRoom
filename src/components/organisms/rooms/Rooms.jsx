import React from "react";
import CardRoom from "../../molecules/CardRoom";
import CardRoomLogic from "../../molecules/CardRoomLogic";


const Rooms = () => {
  let text =
    "Perteneces a un grupo de expertos y te has infiltrado en un instituto.  Te hiciste pasar por un estudiante pero ahora estás encerrado y no puedes salir.";
    
  let text1 = "Necesitas pruebas de que el director está extorcionando, debes programar un equipo que está fallando y evitar otro ataque del hacker. Mientras tanto, tendrás que solucionar los acertijos si quieres salir.";
  return (
    <div id="rooms" className="bg-dark h-full p-10">
      <div className="flex flex-wrap gap-12 flex-col content-center">
        <CardRoomLogic title="Lógica" text={text} />
        <CardRoom title="Código" text={text1} position={1} />
      </div>
    </div>
  );
};

export default Rooms;
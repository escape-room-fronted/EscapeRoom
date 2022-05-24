import React from "react";
import HeadboardCode from "../components/organisms/code/HeadBoardCode";
import ItemsCode from "../components/organisms/code/ItemsCode";

const Code = () => {
  return (
    <div className="bg-dark pt-20 min-h-screen">
      <HeadboardCode />
      <div className="min-h-screen">
        <ItemsCode />
        <div className="text-Rigth px-10 py-4 text-light">
          <h1>Historia del escape</h1>
          <br/>
          <p>
                    
            Necesitas pruebas de que el director está extorcionando, accede a su ordenar personal e intenta borrar todos los archivos robados, averigua donde se esconde.

            El plan consiste en encontrar el código para que puedas acceder al ordenador y borrar todos los archivos robados.
            Posteriormente debes desactivar el equipo y asi evitar otro ataque del hacker.

            Tu misión es resolver los enigmas, pistas y seguir las mecánicas de juego para poder resolver el misterio 
            y encontrar la salida. Recuerda que tan solo dispones de 30 minutos para poder escapar así que deberás 
            ser rápido solucionando la mision.
            

            <br/><br/>

            Reglas del juego:
            <br/><br/>

            1- Tienes 30 minutos para escapar de la habitación!
            Si logras escapar a tiempo felicidades, nos haz desafiado y haz conseguido tu objetivo.
            Pero después de agotado el tiempo, el juego se dará por terminado.
            <br/><br/>
            2- La clave para salir de la sala será resolver pruebas y acertijos que 
            irán apareciendo a medida que vayas avanzando.
            <br/><br/>
            3- En cada cierto tiempo se brindarán pistas.
            <br/><br/>
            4- Debes desarrollar el código en el lenguaje python.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Code;

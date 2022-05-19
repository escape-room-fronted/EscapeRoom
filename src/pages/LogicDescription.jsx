import React from "react";
import Headboard from "../components/templates/logica/Headboard";
import Items from "../components/templates/logica/Items";

const Logica = () => {
  return (
    <div className="bg-dark pt-20 min-h-screen">
      <Headboard />
      <div className="min-h-screen">
        <Items />
        <div className="text-Rigth px-10 py-4 text-light">
        <h1>Historia del Juego</h1>
        <br/>
          <p>

            Un grupo de antiguos amigos del instituto, se reunen después de bastante tiempo sin versen a través 
            de un grupo de Facebook. Al poco tiempo, todos sus móviles empiezan a hacer cosas raras. 
            Se bloquean, emiten ruidos extraños, y finalmente se apagan. Al minuto, todos los móviles se reinician a
            la vez y a todos les llega el mismo mensaje.

            "He hackeado todos sus teléfonos móviles, tengo todos sus secretos y trapos sucios en mi poder.
            Si no superan todos los acertijos y enigmas que les propongo, los publicaré en todas las redes sociales"

            Perteneces a un grupo de expertos y te has infiltrado en un instituto, te hiciste pasar por un estudiante pero ahora estás encerrado y no puedes salir,
            intenta resolver todas las enigmas que te propondrá esta misteriosa persona, intenta salir y averigua donde se esconde.
            <br/><br/>
            Una habitación cerrada y 30 minutos para escapar si consigues resolver enigmas. Deberás usar tú lógica para poder salir de la sala. 

            <br/><br/><br/>

            Reglas del juego:
            <br/><br/>

            1- Hay una habitación cerrada de la que deberás escapar y solo tienes 30 minutos.
            Si logras escapar a tiempo felicidades, nos haz desafiado y haz conseguido tu objetivo.
            Pero después de agotado el tiempo, el juego se dará por terminado.
            <br/><br/>
            2- Tu mente es tu herramienta mas poderosa!
            Utiliza tu lógica para resolver los enigmas.
            <br/><br/>
            3- Las preguntas son de selección.
            Utiliza tu lógica para escojer la respuesta correcta y salir de la habitación.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Logica;

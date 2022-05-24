import React from "react";

const CardWelcome = ({ handleViewRoom }) => {
  return (
    <div>
      <div className="flex justify-center pt-20">
        <div
          href="#"
          className="block card__animate p-8 max-w-lg bg-gray rounded-lg"
        >
          <div className="flex justify-between">
            <h5 className="font-hind text-2xl font-bold tracking-tight text-white">
              Mensaje Importante
            </h5>
          </div>
          <p className="pt-4 font-normal font-hind text-white">
            El tiempo está en tu contra. Necesitas realizar tu misión en menos
            de una hora. Tu primera misión es resolver en menos de 30 minutos
            diversas pruebas de lógica, para así desbloqear la primera misión y
            continuar con tu segunda misisón, la cual es resolver en menos de 30
            minutos una prueba de código.
            <br /> El tiempo empieza ahora, ¿Serás capaz de cumplir tu misión?
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <button onClick={() => handleViewRoom()} className="btn-dark">
          Continuar
        </button>
      </div>
    </div>
  );
};

export default CardWelcome;

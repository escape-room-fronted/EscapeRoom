import React from "react";
import avatarjuli from "../../assets/avatarju.png";
import avatarlau from "../../assets/avatarlau.png";
import avatarjuliylau from "../../assets/boths.png";

const CardAvatarWelcome = ({
  isAvatarJuli,
  isAvatarLaura,
  isAvatarJuliyLau,
  isTextOne,
  isTextTwo,
  isTextThree,
  handleViewRoom,
}) => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        {isAvatarJuli && (
          <div className="">
            <img src={avatarjuli} />
          </div>
        )}

        {isAvatarLaura && (
          <div className="">
            <img src={avatarlau} />
          </div>
        )}

        {isAvatarJuliyLau && (
          <div className="">
            <img src={avatarjuliylau} />
          </div>
        )}

        <div className="">
          <div className="pt-10">
            <div
              href="#"
              class="block card__animate p-8 max-w-lg bg-gray rounded-lg"
            >
              {isTextOne && (
                <div>
                  <h5 className="font-hind text-2xl font-bold tracking-tight text-white">
                    ¡Hola, soy Julian!
                  </h5>
                  <p className="pt-4 font-normal font-hind text-white">
                  Te acompañaré en tu proceso junto a mi amiga Laura, el cual consiste en la realización
                  de la prueba, yo desde la parte lógica y Laura desde el editor de codigo,
                  ánimo, retate a ti mismo, explora tus límites y aprende hasta
                  donde podrás llegar, nosotros creemos en ti. Dale al boton continuar e iniciemos esta aventura juntos.
                  </p>
                </div>
              )}

              {isTextTwo && (
                <div>
                  <h5 className="font-hind text-2xl font-bold tracking-tight text-white">
                    ¡Hola, soy Laura!
                  </h5>
                  <p className="pt-4 font-normal font-hind text-white">
                  Julián me comentó que eres una persona que lucha por sus sueños,
                  que avanza ante la adversidad, así que es para mí un gusto ver que llegas hasta acá,
                  aún falta la prueba del editor de código, así que vamos para allá, no te rindas,
                  dale click en continuar y avancemos juntos.
                  </p>
                </div>
              )}

              {isTextThree && (
                <div>
                  <h5 className="font-hind text-2xl font-bold tracking-tight text-white">
                    ¡Código desbloqueado!
                  </h5>
                  <p className="pt-4 font-normal font-hind text-white">
                  Que gusto ver que has llegado hasta aquí, te felicito por completar el ESCAPE ROOM, 
                  nos estaremos comunicando contigo para que puedas ver tus resultados mediante el correo electronico, 
                  asi que en cualquier momento te enviaremos un mensaje con la información y pasos a seguir.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 flex justify-end pr-10">
            <button onClick={() => handleViewRoom()} className="btn-dark z-50">
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAvatarWelcome;

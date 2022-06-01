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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit vero, officiis excepturi suscipit incidunt assumenda
                    architecto tempora temporibus corporis repellat debitis
                    exercitationem. Adipisci ea suscipit possimus molestiae ipsa
                    velit quisquam?
                  </p>
                </div>
              )}

              {isTextTwo && (
                <div>
                  <h5 className="font-hind text-2xl font-bold tracking-tight text-white">
                    ¡Hola, soy Laura!
                  </h5>
                  <p className="pt-4 font-normal font-hind text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit vero, officiis excepturi suscipit incidunt assumenda
                    architecto tempora temporibus corporis repellat debitis
                    exercitationem. Adipisci ea suscipit possimus molestiae ipsa
                    velit quisquam?
                  </p>
                </div>
              )}

              {isTextThree && (
                <div>
                  <h5 className="font-hind text-2xl font-bold tracking-tight text-white">
                    ¡Código desbloqueado!
                  </h5>
                  <p className="pt-4 font-normal font-hind text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sit vero, officiis excepturi suscipit incidunt assumenda
                    architecto tempora temporibus corporis repellat debitis
                    exercitationem. Adipisci ea suscipit possimus molestiae ipsa
                    velit quisquam?
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

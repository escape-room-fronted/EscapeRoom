import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-hero">
        <div className="grid  grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div>
            <div className="pb-2 pr-12">
              <p className="text-light">01</p>
              <p className="border-0 border-b-2 border-yellow opacity-50"></p>
            </div>
            <h2 className="mb-6 text-sm text-white hover:text-yellow font-hind font-semibold text-gray-400 uppercase">
              Ubicación
            </h2>
            <ul className="text-light font-lg font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:text-yellow">
                  Calle 90 # 12-44 Office 309, Bogotá
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="pb-2 pr-12">
              <p className="text-light">02</p>
              <p className="border-0 border-b-2 border-yellow opacity-50"></p>
            </div>
            <h2 className="mb-6 text-sm text-white hover:text-yellow font-hind font-semibold text-gray-400 uppercase">
              Enlaces útiles
            </h2>
            <ul className="text-light font-lg font-medium">
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Inicio
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Rooms
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Acerca
                </a>
              </li>
              <a href="#" className="hover:underline"></a>
              <li className="mb-4">
                <a href="#" className="hover:underline"></a>
                <a href="#" className="hover:text-yellow">
                  Contacto
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Educamás
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="pb-2 pr-12">
              <p className="text-light">03</p>
              <p className="border-0 border-b-2 border-yellow opacity-50"></p>
            </div>
            <h2 className="mb-6 text-sm text-white hover:text-yellow font-hind font-semibold text-gray-400 uppercase">
              Legal
            </h2>
            <ul className="text-light font-lg font-medium">
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Politica de privacidad
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Licencia
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Términos &amp; Condiciones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="pb-2 pr-12">
              <p className="text-light">04</p>
              <p className="border-0 border-b-2 border-yellow opacity-50"></p>
            </div>
            <h2 className="mb-6 text-sm text-white hover:text-yellow font-hind font-semibold text-gray-400 uppercase">
              Redes sociales
            </h2>
            <ul className="text-light font-lg font-medium">
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  whatsApp
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-yellow">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hover:text-yellow py-6 px-4 font-semibold text-center text-light font-hind font-lg">
          <span className="">
            © 2022 <a href="https://flowbite.com">Grupo 2</a>. All Rights
            Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

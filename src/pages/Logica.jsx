import React from "react";
import Headboard from "../components/templates/logica/Headboard";
import Items from "../components/templates/logica/Items";


const Logica = () => {
  return (
    
    <div className="bg-dark p-2 pt-20 min-h-screen">
      <Headboard />
      <div className="min-h-screen">
        <Items />
            <div className='text-Rigth px-10 py-4 text-light'>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando
                 un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de
                  textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo 
                  sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, 
                  y más recientemente con software de autoedición, 
                como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
        </div>
    </div>
  )
};



export default Logica
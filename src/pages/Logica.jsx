import React from "react";
import Headboard from "../components/templates/logica/Headboard";
import Items from "../components/templates/logica/Items";
import Footer from "../components/templates/landing/Footer";


const Logica = () => {
  return (
    
    <div className="bg-dark p-2 pt-20'">
      <Headboard />
      <Items />
        <div className='text-Rigth px-10 py-4 text-light'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis enim quasi eum tempora quae nihil ut soluta error, recusandae 
                corrupti dolorem velit aut iusto ducimus cum odit, vero fugiat.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis enim quasi eum tempora quae nihil ut soluta error, recusandae 
                corrupti dolorem velit aut iusto ducimus cum odit, vero fugiat.</p>
        </div>
        
      <Footer />
    </div>
  )
};



export default Logica
import React from 'react'
import FormLogin from '../../molecules/FormLogin'



const BannerLogin = () => {
  return (
    <div>
         <div 
      className="bg-banner bg-cover bg-no-repeat bg-center bg-blend-overlay relative flex items-center"
      style={{ minHeight: "700px" }}
    >
      <div className="absolute top-0 bg-gradient-to-t from-black to-dark opacity-50 w-full h-full"></div>
      <div className='w-full'>
      <FormLogin/>
      </div>
    </div>
    </div>
  )
}

export default BannerLogin
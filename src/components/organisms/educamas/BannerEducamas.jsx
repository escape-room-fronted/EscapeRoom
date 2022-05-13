import React from 'react'
import CardEducamas from '../../molecules/CardEducamas'

const BannerEducamas = () => {
  return (
   
    <div>
        <div className="bg-white">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                <h1 className="hover:text-yellow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center text-dark font-hind leading-7 md:leading-10">
                    EducaMás   
                </h1>
            </div>
            
            <CardEducamas/>

            
        </div>
        </div>
    </div>
    
  )
}

export default BannerEducamas
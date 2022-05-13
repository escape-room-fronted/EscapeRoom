import React from 'react'
import MapContact from '../../atoms/MapContact';
import FormTouch from '../../molecules/FormTouch';

const Touch = () => {
  return (
    <div id='contact' className='bg-dark pt-20 pb-20'>


        <div className='sm:p-2 md:p-4 lg:p-4 xl:p-4 2xl:p-4 gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>

          <MapContact/> 

            

          <FormTouch/>


        </div>


    </div>
  )
}

export default Touch
import React from 'react'
import AboutHome from '../organisms/about/AboutHome'
import Touch from '../organisms/contact/Touch'
import BannerEducamas from '../organisms/educamas/BannerEducamas'
import BannerHome from '../organisms/home/BannerHome'
import Rooms from '../organisms/rooms/Rooms'


const Landing = () => {
  return (
    <div>
     <BannerHome/>
     <Rooms/>
     <AboutHome/>
     <Touch/>
     <BannerEducamas/>
    </div>
  )
}

export default Landing
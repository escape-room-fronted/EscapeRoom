import React from 'react'
import TitleAbout from '../../atoms/TitleAbout'
import CardAbout from '../../molecules/CardAbout'

const AboutHome = () => {
  return (
    <div className='bg-dark p-2 pt-20'>

        <TitleAbout/>

        <div className='pt-20'>

        <CardAbout/>

        </div>


    </div>
  )
}

export default AboutHome
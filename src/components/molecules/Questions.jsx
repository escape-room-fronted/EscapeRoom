import React from 'react'

const Questions = ({handleViewRoom}) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 font-hind text-lg'>

        <button onClick={() => handleViewRoom()}  className='cursor-pointer card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg'>
            <a>Answer 1</a>
        </button>

        <div className='card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg'>
            <a>Answer 1</a>
        </div>

        <div className='card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg'>
            <a>Answer 1</a>
        </div>

        <div className='card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg'>
            <a>Answer 1</a>
        </div>

    </div>
  )
}

export default Questions
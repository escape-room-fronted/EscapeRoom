import React from 'react'
import LockItems from "../../molecules/LockItems";
import { FaRegClock } from "react-icons/fa";

const Items = () => {
  return (
    <div className=" flex column-2 gap-10 my-10 pl-10">
        <div className="top-20 ">
            <LockItems/>
            <h5 className="text-white my-3 relative flex items-center">Easy</h5>
        </div>

       <div className=" border-0 border-l-2 border-light pl-10">
        <span className="text-white flex gap-3 items-center text-xl">
                <FaRegClock /> 
                <span className="text-light font-medium">60</span>
            </span>
            <h5 className="text-white my-3 relative flex items-center">Minutes</h5>
       </div>

    </div>
  )
}

export default Items
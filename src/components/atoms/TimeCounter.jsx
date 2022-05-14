import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa";

const TimeCounter = () => {
  const [min, setMin] = useState(0);
  const [seg, setSeg] = useState(10);
  const [isGame, setIsGame] = useState(true);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearTimeout(intervalTime);
  }, []);

  function updateTime() {
    setSeg((prev) => {
      if (prev === 0) {
        if (prev === 0 && min === 0) setIsGame((prev) => false);
        setMin(min - 1);
        return 59;
      } else {
        return prev - 1;
      }
    });
  }

  return isGame ? (
    <div className="text-white flex items-center pt-5">
      <FaRegClock className="text-2xl mr-2 text-yellow" />
      <div className="text-2xl text-yellow">
        {min < 10 ? `0${min}` : min}:{seg < 10 ? `0${seg}` : seg}
      </div>
    </div>
  ) : (
    <div className="text-white flex items-center pt-5">
      <FaRegClock className="text-2xl mr-2 text-red-700" />
      <div className="text-2xl text-red-700 line-through">00:00</div>
    </div>
  );
};

export default TimeCounter;

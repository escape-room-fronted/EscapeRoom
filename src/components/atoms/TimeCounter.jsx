import React, { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa";
import { useAuthLogin } from "../../hooks/useAuthLogin";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const TimeCounter = () => {
  const [isGame, setIsGame] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuthLogin();
  const { auth, setAuth } = useAuth();
  const [min, setMin] = useState(auth.timecounter.minutes || 60);
  const [seg, setSeg] = useState(auth.timecounter.seg || 0);

  useEffect(() => {
    setAuth((prev) => {
      return { ...prev, timecounter: { minutes: min, seg: seg } };
    });
    window.localStorage.setItem("user", JSON.stringify(auth));
  }, [min, seg]);
  useEffect(() => {
    const intervalTime = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearTimeout(intervalTime);
  }, []);

  function updateTime() {
    setSeg((prev) => {
      if (prev === 0) {
        if (prev === 0 && min === 0) {
          setIsGame((prev) => false);
          logout();
          navigate("/");
        }
        setMin((prev) => prev - 1);
        return 59;
      } else {
        return prev - 1;
      }
    });
  }

  return isGame ? (
    <div className="text-white flex items-center pt-4">
      <FaRegClock className="text-2xl mr-2 text-yellow" />
      <div className="text-2xl text-yellow">
        {min < 10 ? `0${min}` : min}:{seg < 10 ? `0${seg}` : seg}
      </div>
    </div>
  ) : (
    <div className="text-white flex items-center pt-4">
      <FaRegClock className="text-2xl mr-2 text-red-700" />
      <div className="text-2xl text-red-700 line-through">00:00</div>
    </div>
  );
};

export default TimeCounter;

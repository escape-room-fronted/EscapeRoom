import React from "react";
import TimeCounter from "../components/atoms/TimeCounter";



const LogicRoom = () => {
  return (
    <div className="h-screen p-10 bg-dark" style={{ paddingTop: "6rem" }}>
      <div>
        <TimeCounter />
      </div>
    </div>
  );
};

export default LogicRoom;

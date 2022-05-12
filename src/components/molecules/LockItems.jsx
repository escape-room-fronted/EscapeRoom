import React from "react";
import { RiLock2Fill } from "react-icons/ri";

const LockItems = () => {
  return (
    <div className="flex gap-2">
      <RiLock2Fill className="text-yellow text-xl" />
      <RiLock2Fill className="text-yellow text-xl" />
      <RiLock2Fill className="text-yellow text-xl" />
      <RiLock2Fill className="text-light text-xl" />
      <RiLock2Fill className="text-light text-xl" />
    </div>
  );
};

export default LockItems;

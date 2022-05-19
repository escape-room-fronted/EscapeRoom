import React from "react";
import CardLogic from "../molecules/CardLogic";
import Questions from "../molecules/Questions";

const LogicPanel = () => {
  return (


          <div className=" p-4">
            <div className="">
              <div className="flex justify-center">
                <CardLogic />
              </div>
              <div className="flex justify-center pt-10">
                <Questions />
              </div>
            </div>
          </div>

  );
};

export default LogicPanel;

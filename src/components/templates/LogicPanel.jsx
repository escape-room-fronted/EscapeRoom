import React, { useState, useEffect } from "react";
import CardLogic from "../molecules/CardLogic";
import Questions from "../molecules/Questions";
import useAuth from "../../hooks/useAuth";

const LogicPanel = ({ handleViewRoom }) => {
  const [numberQuestions, setNumberQuestions] = useState(0);

  const { questions } = useAuth();

  const [dataQuestions, setDataQuestions] = useState();

  const handleNumberQuestions = () => {
    setNumberQuestions((prev) => prev + 1);
    if (numberQuestions === dataQuestions.length - 1) {
      handleViewRoom();
    }
  };

  useEffect(() => {
    setDataQuestions(questions);
    console.log("ejecutando");
  }, [questions]);

  return (
    dataQuestions && (
      <div className=" p-4">
        <div className="">
          <div className="flex justify-center">
            <CardLogic
              numberQuestions={numberQuestions}
              dataQuestions={dataQuestions[numberQuestions]}
            />
          </div>
          <div className="flex justify-center pt-10">
            <Questions
              handleViewRoom={handleViewRoom}
              handleNumberQuestions={handleNumberQuestions}
              dataQuestions={dataQuestions[numberQuestions]}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default LogicPanel;

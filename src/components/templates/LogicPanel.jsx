import React, { useState, useEffect } from "react";
import CardLogic from "../molecules/CardLogic";
import Questions from "../molecules/Questions";
import useAuth from "../../hooks/useAuth";
import ModalUserHelp from "../molecules/ModalUserHelp";

const LogicPanel = ({ handleViewRoom }) => {
  
  const { questions, numberQuestion, setNumberQuestion } = useAuth();
  const [dataQuestions, setDataQuestions] = useState();
  const [timeTips, setTimeTips] = useState(0);
  const [isUseTips, setIsUseTips] = useState(false);
  const [isUseAnswer, setIsUseAnswer] = useState(false);
  const [numberQuestions, setNumberQuestions] = useState(numberQuestion);


  const handleUseAnswer = (data) =>{
    setIsUseAnswer(data);
  }

  const handleUseTips = () => {
    setIsUseTips(true);
  };

  const handleTimeTips = () => {
    setTimeTips(0);
    setIsUseTips(false);
  };

  console.log(numberQuestion);

  const handleNumberQuestions = () => {
    setNumberQuestions((prev) => prev + 1);
    setNumberQuestion((prev) => prev + 1);
    window.localStorage.setItem("dataNumberQuestion", JSON.stringify ((numberQuestion + 1)));
    console.log(window.localStorage.getItem("dataNumberQuestion"));
    if (numberQuestions === dataQuestions.length - 1) {
      handleViewRoom();
    }
  };

  useEffect(() => {
    setDataQuestions(questions);
  }, [questions]);

  useEffect(() => {
    const inter = setInterval(() => {
      setTimeTips((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(inter);
  }, [timeTips]);

  return (
    dataQuestions && (
      <div className=" p-4">
        <ModalUserHelp handleTimeTips={handleTimeTips}
        handleNumberQuestions={handleNumberQuestions}
        handleUseAnswer={handleUseAnswer}/>

        <div className="">
          <div className="flex justify-center">
            <CardLogic
              handleUseTips={handleUseTips}
              timeTips={timeTips}
              numberQuestions={numberQuestions}
              dataQuestions={dataQuestions[numberQuestions]}
            />
          </div>
          <div className="flex justify-center pt-10">
            <Questions
              isUseTips={isUseTips}
              isUseAnswer={isUseAnswer}
              handleTimeTips={handleTimeTips}
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

import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { createAnswers } from "../../services/serviceAnswers"; 
import uniqid from 'uniqid';


const Questions = ({ isUseTips, handleNumberQuestions, dataQuestions, handleTimeTips }) => {
  
  const [dataAnswers, setDataAnswers] = useState();

  const { auth } = useAuth();

  /* console.log(auth);
  console.log(dataQuestions); */

  const sendDataAnswers = (userAnswer) =>{
    let data = {}
    data.answer = userAnswer;
    data.correct_answer = dataQuestions.correct_answer === userAnswer ? true : false;
    data.use_tip = isUseTips;
    data.use_answer = false;

    console.log(data);

    createAnswers(data, dataQuestions._id, auth.id)
    .then((res) =>{
      console.log(res)
    })
    .catch((err) =>{
      console.log(err)
    }) 
  }

  useEffect(() => {
    let data = [];
    if (dataQuestions) {
      data = dataQuestions.incorrect_answers;
      data = [...data, dataQuestions.correct_answer];
      data.sort();
      setDataAnswers(data);
    }
  }, [dataQuestions]);

  return (
    dataAnswers && (
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 font-hind text-lg">
        {dataAnswers.map((item) => (
          <button
            key={uniqid()}
            className="cursor-pointer card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg"
            onClick={() => {
              sendDataAnswers(item);
              handleNumberQuestions();
              handleTimeTips()
            }}
          >
            {item}
          </button>
        ))}
      </div>
    )
  );
};

export default Questions;

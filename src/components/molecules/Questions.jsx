import React, { useEffect, useState } from "react";
import { randomAnswer } from '../../Helpers/helpers';

const Questions = ({ handleViewRoom, dataQuestions }) => {


  const [dataAnswers, setDataAnswers] = useState();


  console.log(dataAnswers);
  useEffect(() => {
    console.log("ejecutando");
    let data = [];
    if (dataQuestions && data.length === 0) {
      let random = randomAnswer();
      data = dataQuestions.incorrect_answers;
      data = [...data, dataQuestions.correct_answer];
      data.sort();
      setDataAnswers(data);
    }
  }, []); 


  return (
    dataAnswers && (
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 font-hind text-lg">
        {/* <button
          onClick={() => handleViewRoom()}
          className="cursor-pointer card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg"
        >
          <a>Answer 1</a>
        </button> */}

        {dataAnswers.map((item) => (
          <button key={item} className="cursor-pointer card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg">
            {item}
          </button>
        ))}
      </div>
    )
  );
};

export default Questions;

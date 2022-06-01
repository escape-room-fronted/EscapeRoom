import React, { useEffect, useState } from "react";

const Questions = ({ handleNumberQuestions, dataQuestions }) => {
  const [dataAnswers, setDataAnswers] = useState();

  useEffect(() => {
    console.log("ejecutando");
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
            key={item}
            className="cursor-pointer card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg"
            onClick={() => {
              handleNumberQuestions();
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

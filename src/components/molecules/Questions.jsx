import React, { useEffect, useState } from "react";

const Questions = ({ handleViewRoom, dataQuestions }) => {
  console.log(dataQuestions);

  const [dataAnswers, setDataAnswers] = useState();

  useEffect(() => {
    let data = dataAnswers.incorrect_answers;
  }, []);
  return (
    dataQuestions && (
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 font-hind text-lg">
        {/* <button
          onClick={() => handleViewRoom()}
          className="cursor-pointer card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg"
        >
          <a>Answer 1</a>
        </button> */}

        {dataQuestions.incorrect_answers.map((item) => (
          <button className="cursor-pointer card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg">
            {item}
          </button>
        ))}
      </div>
    )
  );
};

export default Questions;

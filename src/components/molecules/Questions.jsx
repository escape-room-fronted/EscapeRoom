import React from "react";

const Questions = ({
  handleViewRoom,
  dataAnswers,
  numberQuestion,
  setNumberQuestion,
}) => {
  //   const answers = [
  //     ...dataAnswers.incorrect_answers,
  //     dataAnswers.correct_answer,
  //   ];
  return (
    dataAnswers && (
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 font-hind text-lg">
        {/* {answers.map((item) => (
          <button
            className="cursor-pointer card__animate py-4 px-6 text-white hover:text-dark bg-gray hover:bg-yellow rounded-lg"
            onClick={() => setNumberQuestion((prev) => prev + 1)}
          >
            {item}
          </button>
        ))} */}
      </div>
    )
  );
};

export default Questions;

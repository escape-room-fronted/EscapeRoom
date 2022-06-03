import React from "react";
import ModalClueUser from "./ModalClueUser";
import { FcIdea } from "react-icons/fc";

const CardLogic = ({dataQuestions}) => {
  const [showModal, setShowModal] = React.useState(false);
  
  console.log(dataQuestions);

  return dataQuestions && (
    <>
      <div className="pt-2">
        <div
          href="#"
          className="block card__animate p-8 max-w-lg bg-gray rounded-lg"
        >
          <div className="flex justify-between">
            <h5 className="font-hind text-2xl font-bold tracking-tight text-white">
              Pregunta {dataQuestions.question_number}
            </h5>
            <button type="button" onClick={() => setShowModal(true)}>
              <FcIdea className="text-2xl" />
            </button>
          </div>
          <p className="pt-4 font-normal font-hind text-white">
            {dataQuestions.question}
          </p>
        </div>
      </div>

      <ModalClueUser clue={dataQuestions.tips[0]} state={showModal} setState={setShowModal} />
    </>
  );
};

export default CardLogic;

import React, { useEffect } from "react";
import ModalClueUser from "./ModalClueUser";
import { FcIdea } from "react-icons/fc";

const CardLogic = ({
  dataQuestions,
  numberQuestions,
  timeTips,
  handleUseTips,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    if (timeTips === 10) {
      setShowModal(true);
      handleUseTips();
    }
  }, [timeTips]);

  return (
    dataQuestions && (
      <>
        <div className="pt-6">
          <div
            href="#"
            className="block card__animate p-8 max-w-lg bg-gray rounded-lg"
          >
            <div className="flex justify-between gap-10">
              <h5 className="font-hind text-2xl font-bold tracking-tight text-white">
                Pregunta {numberQuestions + 1}
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

        <ModalClueUser
          handleUseTips={handleUseTips}
          clue={dataQuestions.tips[0]}
          state={showModal}
          setState={setShowModal}
        />
      </>
    )
  );
};

export default CardLogic;

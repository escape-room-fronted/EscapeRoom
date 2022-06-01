import React, {useState, useEffect} from "react";
import CardLogic from "../molecules/CardLogic";
import Questions from "../molecules/Questions";
import useAuth from "../../hooks/useAuth";



const LogicPanel = ({handleViewRoom}) => {

  const [numberQuestions, setNumberQuestions] = useState(0);
  
  const {questions} = useAuth();

  const [dataQuestions, setDataQuestions] = useState();

  useEffect(() => {
    setDataQuestions(questions)
  }, [questions]);

  
  return dataQuestions &&  (


          <div className=" p-4">
            <div className="">
              <div className="flex justify-center">
                <CardLogic 
                dataQuestions={dataQuestions[numberQuestions]} 
                />
              </div>
              <div className="flex justify-center pt-10">
                <Questions handleViewRoom={handleViewRoom} 
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <Questions
              dataAnswers={questions[numberQuestion]}
              handleViewRoom={handleViewRoom}
              setNumberQuestion={setNumberQuestion}
              numberQuestion={numberQuestion}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default LogicPanel;

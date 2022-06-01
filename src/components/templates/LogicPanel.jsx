import React, { useEffect, useState } from "react";
import CardLogic from "../molecules/CardLogic";
import Questions from "../molecules/Questions";
import { getDataQuestions } from "../../services/serviceRooms";
import  useAuth  from "../../hooks/useAuth";

const LogicPanel = ({handleViewRoom}) => {

  const {auth, setAuth} = useAuth();
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getDataQuestions(auth.accesToken)
    .then((res)=>{
      console.log(res.data)
      setQuestions(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  }, []);


  return questions &&(


          <div className=" p-4">
            <div className="">
              <div className="flex justify-center">
                <CardLogic questions={questions[numberQuestion]}/>
              </div>
              <div className="flex justify-center pt-10">
                <Questions handleViewRoom={handleViewRoom} 
                />
              </div>
            </div>
          </div>

  );
};

export default LogicPanel;

import axios from "./axios";

const GET_ANSWERS = "answer/";
const CREATE_ANSWERS = "answer/createanswer/";

export function getDataAnswers(){
    return axios.get(GET_ANSWERS);
}

export function createAnswers ( data, idquestion, iduser) {
  return axios.post(`${CREATE_ANSWERS}${idquestion}/${iduser}`, 
  JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}


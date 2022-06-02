import axios from "./axios";

const GET_ANSWERS = "answers/";
const CREATE_ANSWERS = "answers/createanswer/";

export function getDataAnswers(){
    return axios.get(GET_ANSWERS);
}

export function createAnswers ( data, iduser, idquestion) {
  return axios.post(`${CREATE_ANSWERS}${idquestion}/${iduser}`, 
  JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}


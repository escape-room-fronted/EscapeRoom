import axios from "./axios";

const GET_ANSWERS = "answer/";
const CREATE_ANSWERS = "answer/createanswer/";

export function getDataAnswers() {
  return axios.get(GET_ANSWERS);
}

export function createAnswers(data, questionId, userId) {
  return axios.post(
    `${CREATE_ANSWERS}${questionId}/${userId}`,
    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

import axios from "./axios";

const GET_QUESTIONS = "questions/";
const DELETE_QUESTIONS = "questions/";
const CREATE_QUESTIONS = "questions/createquestion";
const UPDATE_QUESTIONS = "questions/";

export function getDataQuestions(tk) {
  return axios.get(GET_QUESTIONS, {
    headers: { "x-access-token": tk },
  });
}

export function deleteDataQuestions(tk, id) {
  return axios.delete(`${DELETE_QUESTIONS}${id}`, {
    headers: { "x-access-token": tk },
  });
}

export function createQuestions(tk, data) {
  return axios.post(CREATE_QUESTIONS, JSON.stringify(data), {
    headers: {
      "x-access-token": tk,
      "Content-Type": "application/json",},
  });
}

export function upDateQuestions(tk, data, id){
    return axios.put(`${UPDATE_QUESTIONS}${id}`, JSON.stringify(data), {
    headers:{ "x-access-token": tk, 
    "Content-Type": "application/json"},
    });
}
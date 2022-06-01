import axios from "./axios";
const GET_USERS = "users/allusers";
const GET_ADMINS = "users/alladmins";
const DELETE_USER = "users/";
const CREATE_USER = "auth/signup"; //Admin or users
const UPDATE_USER = "users/"; //Admin or users


export function getDataUsers(tk) {
  return axios.get(GET_USERS, {
    headers: { "x-access-token": tk },
  });
}

export function deleteDataUsers(tk, id) {
  return axios.delete(`${DELETE_USER}${id}`, {
    headers: { "x-access-token": tk },
  });
}

export function createUsers(tk, data) {
  return axios.post(CREATE_USER, JSON.stringify(data), {
    headers: {
      "x-access-token": tk,
      "Content-Type": "application/json",
    },
  });
}

export function updateDataUsers(tk, id, data) {
  return axios.put(`${UPDATE_USER}${id}`, JSON.stringify(data), {
    headers: {
      "x-access-token": tk,
      "Content-Type": "application/json",
    },
  });
}

export function getDataAdmins(tk) {
  return axios.get(GET_ADMINS, {
    headers: { "x-access-token": tk },
  });
}

import axios from "./axios";

const LOGIN_URL = "auth/signin";
const GET_USER = "users/getuser";

export function getUser(tk) {
  return axios.get(GET_USER, {
    headers: { "x-access-token": tk },
  });
}

export function verifyUser() {}

import axios from "axios";
const BASE_URL = "https://run-scape-room.herokuapp.com/api/";

export default axios.create({
  baseURL: BASE_URL,
});


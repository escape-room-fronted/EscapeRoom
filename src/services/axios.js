import axios from "axios";

export default axios.create({
  baseURL: "https://run-scape-room.herokuapp.com/api/",
});

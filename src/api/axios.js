import axios from "axios";

const instace = axios.create({
  //baseURL: "http://localhost:3001/api",
  baseURL: "https://api-cultura.vercel.app/api",
  withCredentials: true,
});

export default instace;

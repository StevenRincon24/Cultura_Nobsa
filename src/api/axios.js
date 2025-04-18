import axios from "axios";

const instace = axios.create({
  baseURL: "https://api-cultura.vercel.app/api",
  withCredentials: true,
});

export default instace;

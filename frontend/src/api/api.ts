import axios from "axios";

export const api = axios.create({
  baseURL: "http://ec2-44-212-4-241.compute-1.amazonaws.com:8000/",
});

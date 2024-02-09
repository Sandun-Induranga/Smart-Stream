import axios from "axios";

export const api = axios.create({
  baseURL: "http://44.201.158.17:8000/",
});

import axios from "axios";

export const api = axios.create({
  baseURL: "https://44.201.158.17:8000/",
});

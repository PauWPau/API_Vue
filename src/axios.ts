import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // aquí va tu API
  timeout: 5000, // opcional, 5s de espera
});

export default api;

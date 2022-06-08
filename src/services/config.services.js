import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
});

// donde el token será enviado al backend
service.interceptors.request.use((config) => {
  //  token en localStorage
  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    config.headers = { authorization: `Bearer ${authToken}` };
  }

  return config;
});

export default service;

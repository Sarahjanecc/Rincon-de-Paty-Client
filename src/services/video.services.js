import service from "./config.services";

const getVideosService = () => {
  return service.get("/videos");
};

export { getVideosService };

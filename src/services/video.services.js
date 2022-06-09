import service from "./config.services";

const getVideosService = () => {
  return service.get("/video");
};

const addNewVideoService = (newVideo) => {
  return service.post("/video/create", newVideo);
};

const editVideoService = (id, videos) => {
  return service.patch(`/Video/${id}`, videos);
};

const getVideoById = (id) => {
  return service.get(`/video/${id}`);
};

const deleteVideoService = (id) => {
  return service.delete(`/video/${id}`);
};

export {
  getVideosService,
  addNewVideoService,
  editVideoService,
  getVideoById,
  deleteVideoService,
};

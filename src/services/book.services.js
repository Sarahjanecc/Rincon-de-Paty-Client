import service from "./config.services";

const getAllBooksService = () => {
  return service.get("/book");
};

const addNewBooksService = (newBook) => {
  return service.post("/book", newBook);
};

const getAudioBooksDetailsService = (id) => {
  return service.get(`/book/${id}`);
};

const deleteBooksService = (id) => {
  return service.delete(`/book/${id}`);
};

const editBooksService = (id, books) => {
  return service.patch(`/book/${id}`, books);
};

export {
  getAllBooksService,
  addNewBooksService,
  getAudioBooksDetailsService,
  deleteBooksService,
  editBooksService,
};

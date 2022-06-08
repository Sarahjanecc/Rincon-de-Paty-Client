import service from "./config.services";

const getAllBooksService = () => {
  return service.get("/book");
};

const getBooksService = () => {
  return service.get("/book/libro");
};

const getAllAudioBooksService = () => {
  return service.get("/book/audio");
};

const addNewBooksService = (newBook) => {
  return service.post("/book/create", newBook);
};

const getBookById = (id) => {
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
  getAllAudioBooksService,
  addNewBooksService,
  getBookById,
  deleteBooksService,
  editBooksService,
  getBooksService,
};

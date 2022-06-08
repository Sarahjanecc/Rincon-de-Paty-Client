import service from "./config.services";

const addNewMessageService = (newMessage) => {
  return service.post("/messages", newMessage);
};

const getAllMessagesService = (allMessages) => {
  return service.get("/messages", allMessages);
};

const getMessageById = (id) => {
  return service.get(`/messages/${id}`);
};
const deleteMessageService = (id) => {
  return service.delete(`/messages/${id}`);
};

export {
  getAllMessagesService,
  addNewMessageService,
  getMessageById,
  deleteMessageService,
};

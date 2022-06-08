import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMessageById,
  deleteMessageService,
} from "../services/messages.services";
import Layout from "../components/Layout";

function MessageDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [infomration, setInformation] = useState(null);

  useEffect(() => {
    getMessageDetail(id);
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteMessageService(id);
      navigate("/admin/messages");
    } catch (error) {
      navigate("/error");
    }
  };
  const getMessageDetail = async (bookId) => {
    console.log(id);
    try {
      const response = await getMessageById(bookId);
      setInformation(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (infomration === null) {
    return <h3>... Loading</h3>;
  }
  return (
    <Layout>
      <p>{infomration.name}</p>
      <p>{infomration.message}</p>
      <button onClick={handleDelete}>Delete</button>
    </Layout>
  );
}

export default MessageDetail;

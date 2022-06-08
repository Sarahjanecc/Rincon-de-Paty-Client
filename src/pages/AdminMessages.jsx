import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { getAllMessagesService } from "../services/messages.services";

function AdminMessages() {
  const [allMessages, setAllMessages] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getAllMessages();
  }, []);

  const getAllMessages = async () => {
    try {
      const response = await getAllMessagesService();
      setAllMessages(response.data);
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  if (allMessages === null) {
    return <h3>... Loading</h3>;
  }

  return (
    <Layout>
      {allMessages !== null &&
        allMessages.map((message) => {
          return (
            <div key={message._id}>
              <Link to={`/admin/messages/${message._id}`}>{message.name}</Link>
            </div>
          );
        })}
    </Layout>
  );
}

export default AdminMessages;

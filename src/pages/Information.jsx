import React from "react";
import { useState, useContext } from "react";
import Layout from "../components/Layout";
import { AuthContext } from "../context/auth.context.js";
import { useNavigate } from "react-router-dom";
import { addNewMessageService } from "../services/messages.services";

function Information() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const information = {
        name,
        message,
        userId: user._id,
        email: user.email,
      };
      await addNewMessageService(information);
      navigate("/main");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <Layout>
      <h3>Information </h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />

        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          onChange={handleMessageChange}
          value={message}
        />
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
}

export default Information;

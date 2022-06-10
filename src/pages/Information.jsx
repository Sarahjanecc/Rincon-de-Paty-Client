import React from "react";
import { useState, useContext } from "react";
import Layout from "../components/Layout";
import { AuthContext } from "../context/auth.context.js";
import { useNavigate } from "react-router-dom";
import { addNewMessageService } from "../services/messages.services";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <div
        className="information"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <Form onSubmit={handleSubmit} style={{ width: "400px" }}>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control
            type="text"
            name="message"
            onChange={handleMessageChange}
            value={message}
          />
          <div className="d-grid mt-2">
            <Button variant="outline-primary" type="submit">
              Send
            </Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
}

export default Information;

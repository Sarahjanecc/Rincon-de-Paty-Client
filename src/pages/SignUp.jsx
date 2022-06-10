import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { signupService } from "../services/auth.services";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handlEmailChange = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    try {
      await signupService(user);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data.errorMessage);
      console.log(error.response.status);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <Layout>
      <div
        className="sign-up"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <Form onSubmit={handleSubmit} style={{ width: "400px" }}>
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />

          <Form.Label htmlFor="email">email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handlEmailChange}
          />

          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          {errorMessage !== null && <p>{errorMessage}</p>}
          <div className="d-grid mt-2">
            <Button variant="outline-primary" type="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { signupService } from "../services/auth.services";

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
      SignUp
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handlEmailChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        {errorMessage !== null && <p>{errorMessage}</p>}
        <button>Signup</button>
      </form>
    </Layout>
  );
};

export default SignUp;

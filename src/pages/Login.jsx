import React, { useState, useContext } from "react";
import Layout from "../components/Layout";

import { AuthContext } from "../context/auth.context.js";
import { loginService } from "../services/auth.services";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const { authenticateUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // esto previene el comportamiento predeterminado de un formulario
    console.log("submit");

    const user = {
      email,
      password,
    };

    try {
      const response = await loginService(user);
      localStorage.setItem("authToken", response.data.authToken);
      authenticateUser();
      navigate("/main");
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        // navigate
        navigate("/error");
      }
    }
  };
  return (
    <Layout>
      Login
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        {errorMessage !== null && <p>{errorMessage}</p>}

        <button>Login</button>
      </form>
    </Layout>
  );
};

export default Login;

import React, { useState } from "react";
import Layout from "../components/Layout";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault(); // esto previene el comportamiento predeterminado de un formulario
    console.log("submit");
  };
  return (
    <Layout>
      Login
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button>Login</button>
      </form>
    </Layout>
  );
};

export default Login;

import React, { useState } from "react";
import Layout from "../components/Layout";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlEmailChange = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault(); // esto previene el comportamiento predeterminado de un formulario
    console.log("submit");
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

        <button>Sign up</button>
      </form>
    </Layout>
  );
};

export default SignUp;

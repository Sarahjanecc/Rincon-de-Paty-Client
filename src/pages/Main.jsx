import React, { useContext } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context.js";

const Main = () => {
  const { user } = useContext(AuthContext);
  return (
    <Layout>
      <NavLink to="/audiobooks">Audiobooks</NavLink>
      <br />
      <NavLink to="/books">Books</NavLink>
      <br />
      <NavLink to="/videos">Videos</NavLink>
      <br />
      <NavLink to="/information">Information</NavLink>
      <br />
      {user.admin && <NavLink to="/admin/main">Admin</NavLink>}
    </Layout>
  );
};

export default Main;

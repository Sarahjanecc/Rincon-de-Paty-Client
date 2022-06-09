import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const MainAdmin = () => {
  return (
    <Layout>
      <NavLink to="/admin/create">Create books/audiobooks</NavLink>
      <br />
      <NavLink to="/admin/books">Books</NavLink>
      <br />
      <NavLink to="/admin/messages">Messages</NavLink>
      <br />
      <NavLink to="/video/create">Create Video</NavLink>
    </Layout>
  );
};

export default MainAdmin;

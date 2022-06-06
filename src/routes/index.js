import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "../pages/Books";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Messages from "../pages/Messages";
import NotFound from "../pages/NotFound";
import Information from "../pages/Information";
import SignUp from "../pages/SignUp";
import AdminMessages from "../pages/AdminMessages";
import AdminBooks from "../pages/AdminBooks";
import AdminCreate from "../pages/AdminCreate";
import AdminEdit from "../pages/AdminEdit";
import AudioBooks from "../pages/AudioBooks";

const AllRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* private routes */}
      <Route path="/books" element={<Books />} />
      <Route path="/books/audio" element={<AudioBooks />} />
      <Route path="/main" element={<Main />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/information" element={<Information />} />

      {/* private admin routes */}
      <Route path="/admin/messages" element={<AdminMessages />} />
      <Route path="/admin/books" element={<AdminBooks />} />
      <Route path="/admin/create" element={<AdminCreate />} />
      <Route path="/admin/edit" element={<AdminEdit />} />

      {/* error FE routes */}
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;

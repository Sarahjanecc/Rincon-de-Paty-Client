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
import IsPrivate from "../components/IsPrivate";
import IsPrivateAdmin from "../components/IsPrivateAdmin";
import Videos from "../pages/Videos";
import AudioBooksDetails from "../pages/AudioBooksDetails";
import MainAdmin from "../pages/MainAdmin";

const AllRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* private routes */}
      <Route
        path="/books"
        element={
          <IsPrivate>
            <Books />
          </IsPrivate>
        }
      />

      <Route
        path="/audiobooks"
        element={
          <IsPrivate>
            <AudioBooks />
          </IsPrivate>
        }
      />
      <Route
        path="/audiobooks/:id"
        element={
          <IsPrivate>
            <AudioBooksDetails />
          </IsPrivate>
        }
      />
      <Route
        path="/main"
        element={
          <IsPrivate>
            <Main />
          </IsPrivate>
        }
      />
      <Route
        path="/messages"
        element={
          <IsPrivate>
            <Messages />
          </IsPrivate>
        }
      />
      <Route
        path="/videos"
        element={
          <IsPrivate>
            <Videos />
          </IsPrivate>
        }
      />
      <Route
        path="/information"
        element={
          <IsPrivate>
            <Information />
          </IsPrivate>
        }
      />

      {/* private admin routes */}
      <Route
        path="/admin/main"
        element={
          <IsPrivateAdmin>
            <MainAdmin />
          </IsPrivateAdmin>
        }
      />
      <Route
        path="/admin/messages"
        element={
          <IsPrivateAdmin>
            <AdminMessages />
          </IsPrivateAdmin>
        }
      />
      <Route
        path="/admin/books"
        element={
          <IsPrivateAdmin>
            <AdminBooks />
          </IsPrivateAdmin>
        }
      />
      <Route
        path="/admin/create"
        element={
          <IsPrivateAdmin>
            <AdminCreate />
          </IsPrivateAdmin>
        }
      />
      <Route
        path="/admin/edit/:id"
        element={
          <IsPrivateAdmin>
            <AdminEdit />
          </IsPrivateAdmin>
        }
      />

      {/* error FE routes */}
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;

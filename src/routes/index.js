import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* error FE routes */}
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;

import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <Navbar />
      <div className="main">{children}</div>
      <footer className="footer">2021</footer>
    </div>
  );
};

export default Layout;

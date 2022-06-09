import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <Navbar />
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://instagram.com/rincon.de.paty?igshid=YmMyMTA2M2Y=">
          Instagram
        </a>
        <a href="https://www.facebook.com/rinconde.paty.56">Facebook</a>
      </footer>
    </div>
  );
};

export default Layout;

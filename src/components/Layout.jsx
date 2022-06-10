import React from "react";
import MainNavbar from "./Navbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <MainNavbar />
      <div className="main">{children}</div>
      <footer className="footer">
        <Navbar className="d-flex justify-content-end">
          <Nav.Link href="https://instagram.com/rincon.de.paty?igshid=YmMyMTA2M2Y=">
            Instagram
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com/rinconde.paty.56">
            Facebook
          </Nav.Link>
        </Navbar>
      </footer>
    </div>
  );
};

export default Layout;

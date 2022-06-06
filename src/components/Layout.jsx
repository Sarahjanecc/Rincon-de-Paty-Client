import React from "react";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="container">
      <nav className="header">header</nav>
      <div className="main">{children}</div>
      <footer className="footer">2021</footer>
    </div>
  );
};

export default Layout;

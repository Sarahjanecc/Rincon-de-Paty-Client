import React from "react";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <nav>header</nav>
      {children}
      <footer>2021</footer>
    </div>
  );
};

export default Layout;

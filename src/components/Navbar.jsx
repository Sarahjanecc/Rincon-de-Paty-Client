import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function MainNavbar() {
  const { isLoggedIn, user, authenticateUser } = useContext(AuthContext);

  const toggleStyles = (navInfo) => {
    return navInfo.isActive === true ? activeStyles : inActiveStyles;
  };

  const activeStyles = {
    textDecoration: "underline",
  };

  const inActiveStyles = {
    textDecoration: "none",
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  return (
    <div>
      {isLoggedIn === true ? (
        <Navbar
          class="header d-flex justify-content-between align-items-center px-2"
          bg="light"
          style={{ justifyContent: "space-between", height: "100%" }}
        >
          <Nav.Link>
            <NavLink to="/main">Main</NavLink>
          </Nav.Link>

          {user !== null && <p>Welcome: {user.name}</p>}

          <Button variant="outline-danger" onClick={handleLogout}>
            Log Out
          </Button>
        </Navbar>
      ) : (
        <Navbar
          class="header d-flex justify-content-between align-items-center px-2 h-100"
          style={{ justifyContent: "space-between", height: "100%" }}
        >
          <NavLink to="/" style={toggleStyles}>
            Home
          </NavLink>

          <NavLink to="/signup" style={toggleStyles}>
            SignUp
          </NavLink>

          <NavLink to="/login" style={toggleStyles}>
            Login
          </NavLink>
        </Navbar>
      )}
    </div>
  );
}

export default MainNavbar;

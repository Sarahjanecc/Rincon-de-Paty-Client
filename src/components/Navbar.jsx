import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Button from "react-bootstrap/Button";

function Navbar() {
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
      {user !== null && <p>Welcome: {user.name}</p>}

      {isLoggedIn === true ? (
        <nav className="header">
          <NavLink to="/main" style={toggleStyles}>
            Main
          </NavLink>
          <Button variant="outline-danger" onClick={handleLogout}>
            Log Out
          </Button>
        </nav>
      ) : (
        <nav>
          <NavLink to="/" style={toggleStyles}>
            Home
          </NavLink>

          <NavLink to="/signup" style={toggleStyles}>
            SignUp
          </NavLink>

          <NavLink to="/login" style={toggleStyles}>
            Login
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default Navbar;

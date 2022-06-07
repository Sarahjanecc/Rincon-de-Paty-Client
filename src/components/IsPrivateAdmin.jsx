import { useContext } from "react";
import { AuthContext } from "../context/auth.context.js";
import { Navigate } from "react-router-dom";

function IsPrivateAdmin(props) {
  const { isLoggedIn, user } = useContext(AuthContext);
  console.log("user", user);
  if (isLoggedIn === true && user.admin) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default IsPrivateAdmin;

import { Navigate } from "react-router-dom";

const PrivateRouteUser = ({ children }) => {
  const userData = JSON.parse(window.localStorage.getItem("user"));

  return !userData ? <Navigate to="/login" /> : children;
};

export default PrivateRouteUser;

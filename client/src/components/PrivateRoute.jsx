import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
    const userRole = user ? JSON.parse(user).role : null;

  const isAuthenticated = token !== null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;

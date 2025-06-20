import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const userRole = user ? JSON.parse(user).role : null;

  const isAuthenticated = !!token;

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(userRole)) return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
};

export default PrivateRoute;

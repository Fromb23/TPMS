import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userRole = user.role;

  const isAuthenticated = !!token;
  const currentPath = window.location.pathname;

  if (isAuthenticated && user.role === "STUDENT" && !user.hasAgreedTerms && currentPath !== "/resources/guidelines") {
    return <Navigate to="/resources/guidelines" replace />;
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(userRole)) return <Navigate to="/unauthorized" replace />;

  return children || <Outlet />;
};

export default PrivateRoute;
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userRole = user.role;

  const isAuthenticated = !!token;
  const currentPath = window.location.pathname;

  if (isAuthenticated && user.role === "STUDENT" && !user.hasAgreedTerms && currentPath !== "/resources/guidelines") {
    console.log("User has not agreed to terms, redirecting to guidelines");
    console.log("Current path:", currentPath);
    console.log("Has agreed terms:", user.hasAgreedTerms);
    return <Navigate to="/resources/guidelines" replace />;
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(userRole)) return <Navigate to="/unauthorized" replace />;

  return children || <Outlet />;
};

export default PrivateRoute;

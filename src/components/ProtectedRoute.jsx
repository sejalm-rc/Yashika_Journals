import { Navigate, Outlet } from "react-router-dom";

export const getAuthenticatedUser = () => {
  const savedUser =
    localStorage.getItem("yashikaUser") ||
    sessionStorage.getItem("yashikaUser");

  if (!savedUser) {
    return null;
  }

  try {
    return JSON.parse(savedUser);
  } catch {
    localStorage.removeItem("yashikaUser");
    sessionStorage.removeItem("yashikaUser");
    return null;
  }
};

function ProtectedRoute({ allowedRoles = [] }) {
  const user = getAuthenticatedUser();

  if (!user?.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    const redirectPath =
      user.role === "admin"
        ? "/admin/dashboard"
        : "/author/dashboard";

    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
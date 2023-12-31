import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = location.state;
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

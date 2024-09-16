import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};

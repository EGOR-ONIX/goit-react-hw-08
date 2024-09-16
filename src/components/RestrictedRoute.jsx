import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const RestrictedRoute = ({ component, redirectTo = "/contacts" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({ mustBeAuthorized, redirectTo, children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn !== mustBeAuthorized) navigate(redirectTo);
  }, [isLoggedIn, mustBeAuthorized, redirectTo, navigate]);

  if (isLoggedIn !== mustBeAuthorized) return null;

  return children;
};

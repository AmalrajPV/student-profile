import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../helpers/loginContext";
const PrivateRoute = () => {
  const auth = useAuth();
  const location = useLocation();
  return auth.user ? <Outlet /> : <Navigate to="/login" state={{path: location.pathname}}/>;
};

export default PrivateRoute;

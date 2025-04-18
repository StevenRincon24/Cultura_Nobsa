import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function RutasProtegidas() {
  const { loading, isAuthenticated, user } = useAuth();
  console.log(loading, isAuthenticated);
  if (!loading && !isAuthenticated) return <Navigate to="/login" />;
  return <Outlet />;
}

export default RutasProtegidas;

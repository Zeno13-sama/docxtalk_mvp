import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminLayout() {
  const { user } = useAuth();
  const role = user?.role;

  // ✅ Empêche la redirection tant que l'utilisateur n'est pas défini
  if (user === undefined) return <p>Chargement...</p>;

  if (!user) {
    return <Navigate to="/app/" />;
  }

  if (role !== "admin") {
    return <Navigate to="/app/profile" />;
  }

  return <Outlet />;
}


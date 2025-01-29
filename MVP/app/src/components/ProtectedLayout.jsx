import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "../axios";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedLayout() {
  const { user, setUser } = useAuth();
  const role = user?.role;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await axios.get("/user");
        if (resp.status === 200 && (!user || user.id !== resp.data.user.id)) {
          // ✅ Met à jour l'utilisateur uniquement s'il change
          setUser(resp.data.user);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur:", error);
        localStorage.removeItem("user");
        setUser(null);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [setUser, user]); // ✅ Ajout de `user` dans les dépendances pour éviter les appels inutiles

  // ✅ Empêche le rendu tant que l'utilisateur n'est pas chargé
  if (user === undefined) return <p>Chargement...</p>;

  if (!user) {
    return <Navigate to="/app/" />;
  }

  if (role === "admin") {
    return <Navigate to="/app/admin" />;
  }

  return <Outlet />;
}


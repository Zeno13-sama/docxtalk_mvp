import React, { useEffect, useState } from "react";
import axios from "../../axios"; // Remplace par le bon chemin

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Récupérer tous les utilisateurs
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/admin/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Gérer la sélection des utilisateurs
  const handleSelectUser = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  // Supprimer les utilisateurs sélectionnés
  const handleDeleteUsers = async () => {
    try {
      await axios.post("/admin/users/delete", { user_ids: selectedUsers });
      fetchUsers(); // Rafraîchir la liste
      setSelectedUsers([]); // Réinitialiser la sélection
    } catch (error) {
      console.error("Error deleting users:", error);
    }
  };

  // Bloquer les utilisateurs sélectionnés
  const handleBlockUsers = async () => {
    try {
      await axios.post("/admin/users/block", { user_ids: selectedUsers });
      fetchUsers(); // Rafraîchir la liste
      setSelectedUsers([]); // Réinitialiser la sélection
    } catch (error) {
      console.error("Error blocking users:", error);
    }
  };

  // Débloquer les utilisateurs sélectionnés
  const handleUnblockUsers = async () => {
    try {
      await axios.post("/admin/users/unblock", { user_ids: selectedUsers });
      fetchUsers(); // Rafraîchir la liste
      setSelectedUsers([]); // Réinitialiser la sélection
    } catch (error) {
      console.error("Error unblocking users:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestion des utilisateurs</h1>
      <div className="flex gap-2 mb-4">
        <button
          onClick={handleDeleteUsers}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Supprimer
        </button>
        <button
          onClick={handleBlockUsers}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Bloquer
        </button>
        <button
          onClick={handleUnblockUsers}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Débloquer
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Sélectionner</th>
              <th className="px-4 py-2 border">Nom</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Statut</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </td>
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">
                  {user.is_blocked ? (
                    <span className="text-red-500">Bloqué</span>
                  ) : (
                    <span className="text-green-500">Actif</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
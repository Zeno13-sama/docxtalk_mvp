<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    // Récupérer tous les utilisateurs
    public function getAllUsers()
    {
        // Récupérer tous les utilisateurs
        $users = User::all();

        // Retourner les utilisateurs sous format JSON
        return response()->json([
            'users' => UserResource::collection($users),
        ]);
    }

    // Supprimer un ou plusieurs utilisateurs
    public function deleteUsers(Request $request)
    {
        // Valider que les IDs sont bien présents et sous forme de tableau
        $request->validate([
            'user_ids' => 'required|array',
            'user_ids.*' => 'exists:users,id', // Vérifier que chaque ID existe dans la table users
        ]);

        // Supprimer les utilisateurs
        User::whereIn('id', $request->user_ids)->delete();

        return response()->json([
            'message' => 'Users deleted successfully',
        ]);
    }

    // Implémenter la méthode de blocage
    public function blockUsers(Request $request)
    {
        // Valider que les IDs sont bien présents et sous forme de tableau
        $request->validate([
            'user_ids' => 'required|array',
            'user_ids.*' => 'exists:users,id', // Vérifier que chaque ID existe dans la table users
        ]);

        // Bloquer les utilisateurs
        User::whereIn('id', $request->user_ids)->update(['is_blocked' => true]);

        return response()->json([
            'message' => 'Users blocked successfully',
        ]);
    }

    // Débloquer un ou plusieurs utilisateurs
    public function unblockUsers(Request $request)
    {
        // Valider que les IDs sont bien présents et sous forme de tableau
        $request->validate([
            'user_ids' => 'required|array',
            'user_ids.*' => 'exists:users,id', // Vérifier que chaque ID existe dans la table users
        ]);

        // Débloquer les utilisateurs
        User::whereIn('id', $request->user_ids)->update(['is_blocked' => false]);

        return response()->json([
            'message' => 'Users unblocked successfully',
        ]);
    }
}

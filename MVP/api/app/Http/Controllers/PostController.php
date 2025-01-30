<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Log;
use App\Models\Tag;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Pour obtenir la liste de tous les posts.
    public function index()
    {
        Log::info('Fetching all posts...');
        try {
            $posts = Post::with('tags', 'user')->get();
            Log::info('Posts retrieved successfully', ['count' => $posts->count()]);
            return response()->json($posts);
        } catch (\Exception $e) {
            Log::error('Error fetching posts', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function show($id)
    {
        Log::info("Fetching post with ID: {$id}");
        try {
            $post = Post::with('tags', 'user')->findOrFail($id);
            Log::info('Post retrieved successfully', ['post_id' => $post->id]);
            return response()->json($post);
        } catch (\Exception $e) {
            Log::error('Error fetching post', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Post not found'], 404);
        }
    }

    public function getTags()
    {
        Log::info('Fetching tags...');
        try {
            $tags = Tag::all();
            Log::info('Tags retrieved successfully', ['count' => $tags->count()]);
            return response()->json($tags);
        } catch (\Exception $e) {
            Log::error('Error fetching tags', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

    public function create()
    {
        $tags = Tag::all();
        return view('posts.create', compact('tags'));
    }


    // public function store(Request $request)
    // {
    //     $user = auth()->user();

    //     // Vérifie si l'utilisateur est un admin
    //     if (!$user || $user->role !== 'admin') {
    //         return response()->json(['message' => 'Unauthorized'], 403);
    //     }

    //     $validated = $request->validate([
    //         'title' => 'required|string|max:255',
    //         'content' => 'required|string',
    //         'image' => 'nullable|image',
    //         'tags' => 'nullable|array'
    //     ]);

    //     $imagePath = $request->hasFile('image') ? $request->file('image')->move(public_path('images'), $request->file('image')->getClientOriginalName()) : null;

    //     $post = Post::create([
    //         'title' => $validated['title'],
    //         'content' => $validated['content'],
    //         'image' => $imagePath ? 'images/' . $request->file('image')->getClientOriginalName() : null,
    //         'user_id' => $user->id,
    //     ]);

    //     if (isset($validated['tags'])) {
    //         $post->tags()->sync($validated['tags']);
    //     }

    //     return response()->json(['message' => 'Post created successfully.', 'post' => $post], 201);
    // }

     public function store(Request $request)
    {
        Log::info('Attempting to create a post', ['request_data' => $request->all()]);

        $user = auth()->user();

        if (!$user || $user->role !== 'admin') {
            Log::warning('Unauthorized post creation attempt', ['user_id' => $user ? $user->id : null]);
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string',
                'description' => 'nullable|string',
                'category' => 'nullable|string',
                'image' => 'nullable|image',
                'tags' => 'nullable|array'
            ]);

            Log::info('Validation successful', ['validated_data' => $validated]);

            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('images', 'public');
                Log::info('Image uploaded successfully', ['image_path' => $imagePath]);
            } else {
                $imagePath = null;
            }

            $post = Post::create([
                'title' => $validated['title'],
                'content' => $validated['content'],
                'description' => $validated['description'] ?? null,
                'category' => $validated['category'] ?? null,
                'image' => $imagePath,
                'user_id' => $user->id,
            ]);

            if (isset($validated['tags'])) {
                $post->tags()->sync($validated['tags']);
            }

            Log::info('Post created successfully', ['post_id' => $post->id]);

            return response()->json(['message' => 'Post created successfully.', 'post' => $post], 201);
        } catch (\Exception $e) {
            Log::error('Error creating post', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }

}

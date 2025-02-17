<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('embeddingsurl', function (Blueprint $table) {
            $table->uuid("uuid")->primary();
            $table->uuid("embeddingurl_collections_id");
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Ajout de la relation
            $table->uuid("custom_id")->nullable();
            $table->json("cmetadata");
            $table->text("document");
            $table->timestamps();
        });

        DB::statement("ALTER TABLE embeddingsurl ADD COLUMN embedding vector;");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('embeddingsurl');
    }
};

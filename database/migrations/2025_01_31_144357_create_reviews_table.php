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
        Schema::create('reviews', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique();
            $table->foreignUuid('user_id')->constrained()->onDelete('cascade');
            $table->foreignUuid('booking_id')->constrained()->onDelete('cascade');
            $table->foreignUuid('tour_id')->constrained()->onDelete('cascade');
            $table->integer('rating')->default(5);
            $table->text('comment');
            $table->boolean('is_active')->default(true);
            $table->boolean('is_highlight')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};

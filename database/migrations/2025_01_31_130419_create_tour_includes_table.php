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
        Schema::create('tour_includes', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique();
            $table->foreignUuId('tour_id')->constrained()->onDelete('cascade');
            $table->string('include_item');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour_includes');
    }
};

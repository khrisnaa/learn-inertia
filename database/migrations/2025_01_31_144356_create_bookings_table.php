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
        Schema::create('bookings', function (Blueprint $table) {
            $table->uuid('id')->primary()->unique();
            $table->foreignUuid('user_id')->constrained()->onDelete('cascade');
            $table->foreignUuid('tour_id')->constrained()->onDelete('cascade');
            $table->integer('quantity');
            $table->decimal('total_price', 10, 2);
            $table->enum('status', ['Pending', 'Confirmed', 'Canceled', 'Completed'])->default('Pending');
            $table->text('note')->nullable();
            $table->timestamp('booking_date')->nullable();
            $table->string('transfer_proof')->nullable();
            $table->text('whatsapp_url')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};

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
        Schema::create('lecturers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('full_name', 100);
            $table->string('department', 100);
            $table->uuid('zone_id');
            $table->timestamps();

            $table->foreign('id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('zone_id')->references('id')->on('zones')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lecturers');
    }
};

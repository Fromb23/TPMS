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
        Schema::create('reports', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type', 50);
            $table->uuid('student_id');
            $table->text('description');
            $table->uuid('reported_id');
            $table->enum('target_type', ['student', 'lecturer', 'admin']);
            $table->timestamps();

            $table->foreign('student_id')->references('id')->on('students')->onDelete('cascade');
            // reported_id points to different tables based on target_type; no foreign key here
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};

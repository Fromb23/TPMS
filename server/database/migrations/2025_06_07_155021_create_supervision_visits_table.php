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
        Schema::create('supervision_visits', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('lecturer_id');
            $table->uuid('student_id');
            $table->date('date');
            $table->text('feedback');
            $table->integer('score');
            $table->timestamps();

            // Foreign keys
            $table->foreign('lecturer_id')->references('id')->on('lecturers')->onDelete('cascade');
            $table->foreign('student_id')->references('id')->on('students')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('supervision_visits');
    }
};

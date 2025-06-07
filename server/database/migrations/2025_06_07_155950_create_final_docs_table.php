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
        Schema::create('final_docs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('student_id');
            $table->string('file_path', 255);
            $table->enum('type', ['report', 'logbook', 'other']);
            $table->timestamps();

            $table->foreign('student_id')->references('id')->on('students')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('final_docs');
    }
};

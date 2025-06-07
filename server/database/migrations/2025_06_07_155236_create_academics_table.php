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
         Schema::create('academics', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('lecturer_id');
            $table->string('title', 100);
            $table->text('content');
            $table->timestamps();

            $table->foreign('lecturer_id')->references('id')->on('lecturers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('academics');
    }
};

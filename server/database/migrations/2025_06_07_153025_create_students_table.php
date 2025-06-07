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
        Schema::create('students', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('full_name', 100);
            $table->uuid('school_id');
            $table->integer('year_of_study');
            $table->uuid('assigned_zone_id');
            $table->timestamps();

            $table->foreign('id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('school_id')->references('id')->on('schools');
            $table->foreign('assigned_zone_id')->references('id')->on('zones');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};

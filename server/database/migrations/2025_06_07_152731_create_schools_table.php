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
        Schema::create('schools', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->string('name', 100);
    $table->string('address', 255);
    $table->uuid('zone_id');
    $table->timestamps();

    $table->foreign('zone_id')->references('id')->on('zones');
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schools');
    }
};

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
        Schema::create('tp_applications', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('student_id');
            $table->string('school_name', 100);
            $table->string('position', 100);
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('status', ['pending', 'approved', 'rejected']);
            $table->timestamps();

            $table->foreign('student_id')->references('id')->on('students')->onDelete('cascade');
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tp_applications');
    }
};

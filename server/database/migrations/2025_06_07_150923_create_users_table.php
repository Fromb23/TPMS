<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();               // UUID primary key
            $table->string('username', 50)->unique();
            $table->string('email', 100)->unique();
            $table->string('password_hash', 255);
            $table->enum('role', ['student', 'lecturer', 'admin']);
            $table->timestamps();                         // created_at and updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}

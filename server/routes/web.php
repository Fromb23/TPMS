<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/register', [UserController::class, 'createUser']);

Route::post('/login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->put('/user/{id}', [UserController::class, 'updateUser']);

<?php 

use App\Http\Controllers\AuthController;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

// Rotas protegidas por JWT
Route::middleware(['jwt.auth'])->group(function () {
    Route::get('user', [AuthController::class, 'getUser']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::resource('transacoes', TransacaoController::class);
    Route::get('resumo', [TransacaoController::class, 'resumo']);
});


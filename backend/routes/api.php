<?php 

Route::get('/transacoes', [TransacaoController::class, 'index']);
Route::post('/transacoes', [TransacaoController::class, 'store']);
Route::get('/transacoes/{id}', [TransacaoController::class, 'show']);
Route::put('/transacoes/{id}', [TransacaoController::class, 'update']);
Route::delete('/transacoes/{id}', [TransacaoController::class, 'destroy']);
Route::get('/resumo', [TransacaoController::class, 'resumo']);

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransacaoController extends Controller
{
    public function index() {
        return Transacao::all();
    }
    
    public function store(Request $request) {
        $request->validate([
            'tipo' => 'required|in:Entrada,Saída',
            'descricao' => 'required|string',
            'valor' => 'required|numeric',
            'data' => 'required|date',
        ]);
    
        return Transacao::create($request->all());
    }
    
    public function resumo() {
        $entradas = Transacao::where('tipo', 'Entrada')->sum('valor');
        $saidas = Transacao::where('tipo', 'Saída')->sum('valor');
        $saldo = $entradas - $saidas;
    
        return response()->json([
            'total_entradas' => $entradas,
            'total_saidas' => $saidas,
            'saldo' => $saldo,
        ]);
    }
    
}

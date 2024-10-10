<?php

namespace App\Http\Controllers;

use App\Models\Transacao;
use Illuminate\Http\Request;

class TransacaoController extends Controller
{
    public function index()
    {
        return Transacao::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|in:entrada,saida',
            'description' => 'required|string',
            'amount' => 'required|numeric',
            'date' => 'required|date',
        ]);

        return Transacao::create($request->all());
    }

    public function show(Transacao $Transacao)
    {
        return $Transacao;
    }

    public function update(Request $request, Transacao $Transacao)
    {
        $request->validate([
            'type' => 'required|in:entrada,saida',
            'description' => 'required|string',
            'amount' => 'required|numeric',
            'date' => 'required|date',
        ]);

        $Transacao->update($request->all());
        return $Transacao;
    }

    public function destroy(Transacao $Transacao)
    {
        $Transacao->delete();
        return response()->json(null, 204);
    }

    public function summary()
    {
        $total_entrada = Transacao::where('type', 'entrada')->sum('amount');
        $total_saida = Transacao::where('type', 'saida')->sum('amount');
        $saldo = $total_entrada - $total_saida;

        return [
            'total_entrada' => $total_entrada,
            'total_saida' => $total_saida,
            'saldo' => $saldo,
        ];
    }
}
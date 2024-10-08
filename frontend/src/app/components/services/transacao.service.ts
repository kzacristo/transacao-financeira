// transacao.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importe o HttpClient
import { Observable } from 'rxjs';
import { Transacao } from '../../interfaces/transacoes';  // Modelo de transação

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private apiUrl = 'http://localhost:8000/api/transacoes';  // URL da API Laravel

  // Injete o HttpClient no construtor do serviço
  constructor(private http: HttpClient) { }

  // Método para listar transações
  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.apiUrl);
  }

  // Método para cadastrar uma nova transação
  createTransacao(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(this.apiUrl, transacao);
  }

  // Método para obter uma transação específica
  getTransacaoById(id: number): Observable<Transacao> {
    return this.http.get<Transacao>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar uma transação
  updateTransacao(id: number, transacao: Transacao): Observable<Transacao> {
    return this.http.put<Transacao>(`${this.apiUrl}/${id}`, transacao);
  }

  // Método para excluir uma transação
  deleteTransacao(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

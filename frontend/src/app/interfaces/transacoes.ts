import { TransacaoTipo } from "../enums/transacao-tipo.enum";

export interface Transacao {
    id?: number;
    tipo: TransacaoTipo;
    descricao: string;
    valor: number;
    data: string;
  }
  
  export interface Resumo {
    totalEntradas: number;
    totalSaidas: number;
    saldo: number;
  }
  
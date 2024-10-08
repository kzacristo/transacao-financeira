import { TransacaoCadastroComponent } from "./components/transacao-cadastro/transacao-cadastro.component";
import { TransacaoListagemComponent } from "./components/transacao-listagem/transacao-listagem.component";
import { ResumoFinanceiroComponent } from "./components/resumo-financeiro/resumo-financeiro.component";
import { Routes } from "@angular/router";

const routes: Routes = [
    { path: 'cadastro', component: TransacaoCadastroComponent },
    { path: 'listagem', component: TransacaoListagemComponent },
    { path: 'resumo', component: ResumoFinanceiroComponent },
  ];
  
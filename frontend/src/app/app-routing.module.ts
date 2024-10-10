import { TransacaoCadastroComponent } from "./components/transacao-cadastro/transacao-cadastro.component";
import { TransacaoListagemComponent } from "./components/transacao-listagem/transacao-listagem.component";
import { ResumoFinanceiroComponent } from "./components/resumo-financeiro/resumo-financeiro.component";
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para login
  { path: 'login', component: LoginComponent }, // Tela de login
  { path: 'register', component: RegisterComponent }, // Tela de cadastro
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: TransacaoCadastroComponent },
  { path: 'listagem', component: TransacaoListagemComponent },
  { path: 'resumo', component: ResumoFinanceiroComponent },

];

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica se o token de autenticação está presente
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redireciona para a tela de login se não estiver autenticado
      return false;
    }
    return true;
  }
}

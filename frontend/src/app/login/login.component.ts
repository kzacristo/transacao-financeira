import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Simular autenticação
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/dashboard']); // Redireciona para o dashboard
    } else {
      alert('Login failed');
    }
  }
}

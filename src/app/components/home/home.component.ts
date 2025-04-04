import { Component } from '@angular/core';
import { AuthService } from '../../../services/funcionario/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout(); // Limpa a autenticação
    this.router.navigate(['/login']); // Redireciona para o login
  }
}

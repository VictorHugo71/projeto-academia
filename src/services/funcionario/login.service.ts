import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/projeto-academia/banco-academia/loginFuncionario.php'; // URL para o login

  constructor(private http: HttpClient, private router: Router) {}

  // Método para fazer login
  login(email: string, senha: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, senha };

    console.log("Dados enviados para o PHP:", body);

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Salva o token no localStorage
        }
      })
    );
  }

  // Método para verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Retorna true se o token existir
  }

  // Método para logout
  logout(): void {
    localStorage.removeItem('token'); // Remove o token do localStorage
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}

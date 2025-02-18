import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  // URL do seu endpoint PHP para cadastro de funcionários
  private apiUrl = 'http://localhost/estudo_php/banco-academia/cadastrarFuncionario.php'; 

  constructor(private http: HttpClient) { }

  // Método para cadastrar funcionário
  cadastrarFuncionario(nome: string, email: string, senha: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { nome, email, senha };
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}

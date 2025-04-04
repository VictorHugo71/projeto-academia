import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostrarMembroService {
  private apiUrl = 'http://localhost/projeto-academia/banco-academia/mostrarMembros.php'; // URL do seu arquivo PHP

  constructor(private http: HttpClient) {}

  getMembroPorCpf(cpf: string): Observable<any> {
    const url = `${this.apiUrl}?action=buscar&cpf=${cpf}`;
    return this.http.get<any>(url);
  }

  excluirMembro(cpf: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { cpf }; // CPF do membro a ser excluído
    return this.http.put<any>(`${this.apiUrl}?action=excluir`, body, { headers });
  }

  atualizarMembro(membro: any): Observable<any> {
    const url = `${this.apiUrl}?action=alterar`; // Inclui o parâmetro action=alterar
    return this.http.put<any>(url, membro);
  }
  
}

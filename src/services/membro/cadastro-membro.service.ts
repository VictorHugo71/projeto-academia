import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembroCadastroService {

  //private apiUrlCad = 'http://localhost/estudo_php/banco-academia/cadastroMembro.php'; // URL do seu arquivo PHP
  private apiUrlCad = 'http://localhost/estudo_php/banco-academia/plano.php';
  constructor(private http: HttpClient) {}

  // Método para enviar os dados no modo POST
  cadastrarMembro(nome: string, endereco: string, telefone: string, email: string, cpf: string, 
    tipo_contrato: string, status_pagamento: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {nome, endereco, telefone, email, cpf, tipo_contrato, status_pagamento};

    return this.http.post<any>(this.apiUrlCad, body, { headers });
  }
}

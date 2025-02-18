// agendamento.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class buscarAgendamentoService {

  private apiUrl = 'http://localhost/estudo_php/banco-academia/buscarAgendamento.php';

  constructor(private http: HttpClient) { }
  // Método para buscar os agendamentos
  getAgendamentos(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Realiza a requisição GET para buscar os agendamentos
  }
}

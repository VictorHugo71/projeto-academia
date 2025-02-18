// agendamento.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private apiUrl = 'http://localhost/estudo_php/banco-academia/agendamento.php';

  constructor(private http: HttpClient) { }

  inserirAgendamento(agendamento: any): Observable<any> {
    return this.http.post(this.apiUrl, agendamento);
  }

}

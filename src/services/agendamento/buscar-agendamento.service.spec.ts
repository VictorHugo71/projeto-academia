import { TestBed } from '@angular/core/testing';

import { BuscarAgendamentoService } from './buscar-agendamento.service';

describe('BuscarAgendamentoService', () => {
  let service: BuscarAgendamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarAgendamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

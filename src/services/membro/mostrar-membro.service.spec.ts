import { TestBed } from '@angular/core/testing';

import { MostrarMembroService } from './mostrar-membro.service';

describe('MostrarMembroService', () => {
  let service: MostrarMembroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarMembroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

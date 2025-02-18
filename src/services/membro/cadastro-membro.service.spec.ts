import { TestBed } from '@angular/core/testing';

import { CadastroMembroService } from './cadastro-membro.service';

describe('CadastroMembroService', () => {
  let service: CadastroMembroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroMembroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

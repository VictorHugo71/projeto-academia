import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMembroComponent } from './cadastro-membro.component';

describe('CadastroMembroComponent', () => {
  let component: CadastroMembroComponent;
  let fixture: ComponentFixture<CadastroMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroMembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

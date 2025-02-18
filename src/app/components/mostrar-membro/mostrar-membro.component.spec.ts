import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMembroComponent } from './mostrar-membro.component';

describe('MostrarMembroComponent', () => {
  let component: MostrarMembroComponent;
  let fixture: ComponentFixture<MostrarMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarMembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemsMedicamentoComponent } from './edit-items-medicamento.component';

describe('EditItemsMedicamentoComponent', () => {
  let component: EditItemsMedicamentoComponent;
  let fixture: ComponentFixture<EditItemsMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItemsMedicamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemsMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

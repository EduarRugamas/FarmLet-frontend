import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicamentosComponent } from './update-medicamentos.component';

describe('UpdateMedicamentosComponent', () => {
  let component: UpdateMedicamentosComponent;
  let fixture: ComponentFixture<UpdateMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

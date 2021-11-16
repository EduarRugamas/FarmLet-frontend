import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMedicamentosComponent } from './dashboard-medicamentos.component';

describe('DashboardMedicamentosComponent', () => {
  let component: DashboardMedicamentosComponent;
  let fixture: ComponentFixture<DashboardMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

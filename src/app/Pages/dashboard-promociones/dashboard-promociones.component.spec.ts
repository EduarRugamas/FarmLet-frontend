import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPromocionesComponent } from './dashboard-promociones.component';

describe('DashboardPromocionesComponent', () => {
  let component: DashboardPromocionesComponent;
  let fixture: ComponentFixture<DashboardPromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPromocionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

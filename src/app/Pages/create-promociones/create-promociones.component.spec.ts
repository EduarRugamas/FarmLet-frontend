import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromocionesComponent } from './create-promociones.component';

describe('CreatePromocionesComponent', () => {
  let component: CreatePromocionesComponent;
  let fixture: ComponentFixture<CreatePromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePromocionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePromocionesComponent } from './update-promociones.component';

describe('UpdatePromocionesComponent', () => {
  let component: UpdatePromocionesComponent;
  let fixture: ComponentFixture<UpdatePromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePromocionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

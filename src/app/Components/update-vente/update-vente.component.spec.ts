import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVenteComponent } from './update-vente.component';

describe('UpdateVenteComponent', () => {
  let component: UpdateVenteComponent;
  let fixture: ComponentFixture<UpdateVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVenteComponent]
    });
    fixture = TestBed.createComponent(UpdateVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

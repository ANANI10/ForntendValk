import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVenteComponent } from './add-vente.component';

describe('AddVenteComponent', () => {
  let component: AddVenteComponent;
  let fixture: ComponentFixture<AddVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVenteComponent]
    });
    fixture = TestBed.createComponent(AddVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

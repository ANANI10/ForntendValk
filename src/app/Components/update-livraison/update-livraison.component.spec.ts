import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLivraisonComponent } from './update-livraison.component';

describe('UpdateLivraisonComponent', () => {
  let component: UpdateLivraisonComponent;
  let fixture: ComponentFixture<UpdateLivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLivraisonComponent]
    });
    fixture = TestBed.createComponent(UpdateLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

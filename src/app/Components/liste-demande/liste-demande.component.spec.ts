import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeComponent } from './liste-demande.component';

describe('ListeDemandeComponent', () => {
  let component: ListeDemandeComponent;
  let fixture: ComponentFixture<ListeDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDemandeComponent]
    });
    fixture = TestBed.createComponent(ListeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

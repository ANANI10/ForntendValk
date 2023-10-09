import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVenteComponent } from './liste-vente.component';

describe('ListeVenteComponent', () => {
  let component: ListeVenteComponent;
  let fixture: ComponentFixture<ListeVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeVenteComponent]
    });
    fixture = TestBed.createComponent(ListeVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

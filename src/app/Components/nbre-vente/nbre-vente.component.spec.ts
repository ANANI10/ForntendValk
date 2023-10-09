import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreVenteComponent } from './nbre-vente.component';

describe('NbreVenteComponent', () => {
  let component: NbreVenteComponent;
  let fixture: ComponentFixture<NbreVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbreVenteComponent]
    });
    fixture = TestBed.createComponent(NbreVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

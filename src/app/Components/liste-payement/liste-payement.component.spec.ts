import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePayementComponent } from './liste-payement.component';

describe('ListePayementComponent', () => {
  let component: ListePayementComponent;
  let fixture: ComponentFixture<ListePayementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePayementComponent]
    });
    fixture = TestBed.createComponent(ListePayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

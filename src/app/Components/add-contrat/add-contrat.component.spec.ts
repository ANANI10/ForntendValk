import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContratComponent } from './add-contrat.component';

describe('AddContratComponent', () => {
  let component: AddContratComponent;
  let fixture: ComponentFixture<AddContratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContratComponent]
    });
    fixture = TestBed.createComponent(AddContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

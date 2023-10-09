import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCongeComponent } from './add-conge.component';

describe('AddCongeComponent', () => {
  let component: AddCongeComponent;
  let fixture: ComponentFixture<AddCongeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCongeComponent]
    });
    fixture = TestBed.createComponent(AddCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

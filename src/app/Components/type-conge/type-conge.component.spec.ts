import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCongeComponent } from './type-conge.component';

describe('TypeCongeComponent', () => {
  let component: TypeCongeComponent;
  let fixture: ComponentFixture<TypeCongeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeCongeComponent]
    });
    fixture = TestBed.createComponent(TypeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

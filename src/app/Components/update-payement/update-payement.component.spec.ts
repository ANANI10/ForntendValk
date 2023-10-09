import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePayementComponent } from './update-payement.component';

describe('UpdatePayementComponent', () => {
  let component: UpdatePayementComponent;
  let fixture: ComponentFixture<UpdatePayementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePayementComponent]
    });
    fixture = TestBed.createComponent(UpdatePayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPwChangeComponent } from './customer-pw-change.component';

describe('CustomerPwChangeComponent', () => {
  let component: CustomerPwChangeComponent;
  let fixture: ComponentFixture<CustomerPwChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPwChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPwChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

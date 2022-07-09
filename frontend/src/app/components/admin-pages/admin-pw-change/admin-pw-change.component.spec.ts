import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPwChangeComponent } from './admin-pw-change.component';

describe('AdminPwChangeComponent', () => {
  let component: AdminPwChangeComponent;
  let fixture: ComponentFixture<AdminPwChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPwChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPwChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

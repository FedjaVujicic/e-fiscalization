import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPwChangeComponent } from './company-pw-change.component';

describe('CompanyPwChangeComponent', () => {
  let component: CompanyPwChangeComponent;
  let fixture: ComponentFixture<CompanyPwChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPwChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPwChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

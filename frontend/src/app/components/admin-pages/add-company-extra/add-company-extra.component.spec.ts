import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyExtraComponent } from './add-company-extra.component';

describe('AddCompanyExtraComponent', () => {
  let component: AddCompanyExtraComponent;
  let fixture: ComponentFixture<AddCompanyExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompanyExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

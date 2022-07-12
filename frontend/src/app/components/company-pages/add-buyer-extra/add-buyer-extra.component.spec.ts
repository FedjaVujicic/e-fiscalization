import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyerExtraComponent } from './add-buyer-extra.component';

describe('AddBuyerExtraComponent', () => {
  let component: AddBuyerExtraComponent;
  let fixture: ComponentFixture<AddBuyerExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuyerExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyerExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

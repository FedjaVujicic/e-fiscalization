import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBuyerComponent } from './confirm-buyer.component';

describe('ConfirmBuyerComponent', () => {
  let component: ConfirmBuyerComponent;
  let fixture: ComponentFixture<ConfirmBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

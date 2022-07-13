import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptPayCatererComponent } from './receipt-pay-caterer.component';

describe('ReceiptPayCatererComponent', () => {
  let component: ReceiptPayCatererComponent;
  let fixture: ComponentFixture<ReceiptPayCatererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptPayCatererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptPayCatererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptPayStoreComponent } from './receipt-pay-store.component';

describe('ReceiptPayStoreComponent', () => {
  let component: ReceiptPayStoreComponent;
  let fixture: ComponentFixture<ReceiptPayStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptPayStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptPayStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsCatererComponent } from './receipts-caterer.component';

describe('ReceiptsCatererComponent', () => {
  let component: ReceiptsCatererComponent;
  let fixture: ComponentFixture<ReceiptsCatererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptsCatererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptsCatererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

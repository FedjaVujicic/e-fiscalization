import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsStoreComponent } from './receipts-store.component';

describe('ReceiptsStoreComponent', () => {
  let component: ReceiptsStoreComponent;
  let fixture: ComponentFixture<ReceiptsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptsStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

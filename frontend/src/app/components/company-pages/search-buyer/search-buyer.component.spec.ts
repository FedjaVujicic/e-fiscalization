import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBuyerComponent } from './search-buyer.component';

describe('SearchBuyerComponent', () => {
  let component: SearchBuyerComponent;
  let fixture: ComponentFixture<SearchBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBuyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

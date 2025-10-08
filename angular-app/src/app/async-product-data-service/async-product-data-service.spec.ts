import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncProductDataService } from './async-product-data-service';

describe('AsyncProductDataService', () => {
  let component: AsyncProductDataService;
  let fixture: ComponentFixture<AsyncProductDataService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncProductDataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncProductDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

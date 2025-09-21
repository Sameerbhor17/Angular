import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRouting } from './dynamic-routing';

describe('DynamicRouting', () => {
  let component: DynamicRouting;
  let fixture: ComponentFixture<DynamicRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

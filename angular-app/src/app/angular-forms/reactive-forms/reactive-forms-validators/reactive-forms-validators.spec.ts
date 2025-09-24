import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsValidators } from './reactive-forms-validators';

describe('ReactiveFormsValidators', () => {
  let component: ReactiveFormsValidators;
  let fixture: ComponentFixture<ReactiveFormsValidators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsValidators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsValidators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

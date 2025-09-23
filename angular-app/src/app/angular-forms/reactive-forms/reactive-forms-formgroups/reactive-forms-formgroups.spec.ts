import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsFormgroups } from './reactive-forms-formgroups';

describe('ReactiveFormsFormgroups', () => {
  let component: ReactiveFormsFormgroups;
  let fixture: ComponentFixture<ReactiveFormsFormgroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsFormgroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormgroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

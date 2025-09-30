import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifeCycleHooks } from './angular-life-cycle-hooks';

describe('AngularLifeCycleHooks', () => {
  let component: AngularLifeCycleHooks;
  let fixture: ComponentFixture<AngularLifeCycleHooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularLifeCycleHooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularLifeCycleHooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

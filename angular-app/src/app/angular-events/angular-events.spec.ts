import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEvents } from './angular-events';

describe('AngularEvents', () => {
  let component: AngularEvents;
  let fixture: ComponentFixture<AngularEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

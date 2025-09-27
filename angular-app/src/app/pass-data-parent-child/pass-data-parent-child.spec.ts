import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataParentChild } from './pass-data-parent-child';

describe('PassDataParentChild', () => {
  let component: PassDataParentChild;
  let fixture: ComponentFixture<PassDataParentChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassDataParentChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDataParentChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

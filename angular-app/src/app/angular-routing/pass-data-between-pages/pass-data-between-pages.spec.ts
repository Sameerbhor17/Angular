import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataBetweenPages } from './pass-data-between-pages';

describe('PassDataBetweenPages', () => {
  let component: PassDataBetweenPages;
  let fixture: ComponentFixture<PassDataBetweenPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassDataBetweenPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDataBetweenPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

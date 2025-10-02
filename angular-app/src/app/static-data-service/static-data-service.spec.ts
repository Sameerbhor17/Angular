import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDataService } from './static-data-service';

describe('StaticDataService', () => {
  let component: StaticDataService;
  let fixture: ComponentFixture<StaticDataService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticDataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

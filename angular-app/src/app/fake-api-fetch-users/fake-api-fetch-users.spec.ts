import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeApiFetchUsers } from './fake-api-fetch-users';

describe('FakeApiFetchUsers', () => {
  let component: FakeApiFetchUsers;
  let fixture: ComponentFixture<FakeApiFetchUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeApiFetchUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeApiFetchUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

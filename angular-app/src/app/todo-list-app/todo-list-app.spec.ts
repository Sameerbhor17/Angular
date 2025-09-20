import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListApp } from './todo-list-app';

describe('TodoListApp', () => {
  let component: TodoListApp;
  let fixture: ComponentFixture<TodoListApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

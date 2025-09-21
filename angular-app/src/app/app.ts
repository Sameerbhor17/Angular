import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Counter } from './counter-app/counter-app';
import { Toggle } from './toggle/toggle';
import { AngularEvents } from './angular-events/angular-events';
import { AngularSignal } from './angular-signal/angular-signal';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { TodoListApp } from './todo-list-app/todo-list-app';
import { StructuralDirectives } from './structural-directives/structural-directives';
import { Routing } from './angular-routing/routing/routing';

@Component({
  selector: 'app-root',
  imports: [
    Counter, 
    Toggle,
    AngularEvents,
    AngularSignal,
    TwoWayBinding,
    TodoListApp,
    StructuralDirectives,
    Routing,
    RouterLink,
    RouterLinkActive,
    RouterOutlet, 
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-app');
}

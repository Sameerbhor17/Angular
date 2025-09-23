import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Counter } from './counter-app/counter-app';
import { Toggle } from './toggle/toggle';
import { AngularEvents } from './angular-events/angular-events';
import { AngularSignal } from './angular-signal/angular-signal';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { TodoListApp } from './todo-list-app/todo-list-app';
import { StructuralDirectives } from './structural-directives/structural-directives';
import { Routing } from './angular-routing/basic-routing/routing/routing';
import { DynamicRouting } from './angular-routing/dynamic-routing/dynamic-routing';
import { ReactiveForms } from './angular-forms/reactive-forms/reactive-forms';
import { ReactiveFormsFormgroups } from './angular-forms/reactive-forms/reactive-forms-formgroups/reactive-forms-formgroups';

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
    DynamicRouting,
    ReactiveForms,
    ReactiveFormsFormgroups,
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

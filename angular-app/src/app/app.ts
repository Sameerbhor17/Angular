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
import { ReactiveFormsValidators } from './angular-forms/reactive-forms/reactive-forms-validators/reactive-forms-validators';
import { TemplateDrivenForms } from './angular-forms/template-driven-forms/template-driven-forms';
import { PassDataParentChild } from './pass-data-parent-child/pass-data-parent-child';

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
    ReactiveFormsValidators,
    TemplateDrivenForms,
    PassDataParentChild,
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

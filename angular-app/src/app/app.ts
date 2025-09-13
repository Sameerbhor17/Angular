import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter-app/counter-app';
import { Toggle } from './toggle/toggle';
import { AngularEvents } from './angular-events/angular-events';
import { AngularSignal } from './angular-signal/angular-signal';

@Component({
  selector: 'app-root',
  imports: [
    Counter, 
    Toggle,
    AngularEvents,
    AngularSignal,
    RouterOutlet, 
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-app');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter-app/counter-app';
import { Toggle } from './toggle/toggle';
import { AngularEvents } from './angular-events/angular-events';

@Component({
  selector: 'app-root',
  imports: [
    Counter, 
    Toggle,
    AngularEvents,
    RouterOutlet, 
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-app');
}

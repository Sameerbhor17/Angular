import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-events',
  imports: [],
  templateUrl: './angular-events.html',
  styleUrl: './angular-events.scss'
})
export class AngularEvents {
  handleEvent(event: Event) {
    alert(event.type);
  }
}

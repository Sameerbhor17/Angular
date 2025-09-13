import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-signal',
  imports: [],
  templateUrl: './angular-signal.html',
  styleUrl: './angular-signal.scss'
})
export class AngularSignal {
  public counter = signal(0);

  signalClick(value: string) {
    if(value === 'inc') {
      this.counter.set(this.counter() + 1);
    } else if(value === 'dec') {
      this.counter.set(this.counter() - 1);
    } else {
      this.counter.set(0);
    }
  }

}

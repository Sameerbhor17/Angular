import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'toggle',
  imports: [CommonModule],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss'
})
export class Toggle {
  public display: boolean = true;
  public show: boolean = true;
  public signalindicator: string = '';

  toggle() {
    this.display = !this.display;
  }

  trafficSignal(event: string) {
    this.signalindicator = event;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'toggle',
  imports: [],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss'
})
export class Toggle {
  public display = true;

  toggle() {
    this.display = !this.display;
  }
}

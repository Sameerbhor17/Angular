import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-life-cycle-hooks',
  imports: [],
  templateUrl: './angular-life-cycle-hooks.html',
  styleUrl: './angular-life-cycle-hooks.scss'
})
export class AngularLifeCycleHooks {
  public firstHook: string = '';
  public secondHook: string = '';
  public lastHook: string = '';

  constructor() {
    this.firstHook = 'Constructor() Method';
    console.log(this.firstHook);
  }

  ngOnInit() {
    this.secondHook = 'ngOnInit() Method';
    console.log(this.secondHook);
  }

  ngOnDestroy() {
    this.lastHook = 'ngOnDestroy() Method';
    console.log(this.lastHook);
  }
}

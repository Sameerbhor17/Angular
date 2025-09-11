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

  public userList = ["Onkar", "Abhijit", "Mahesh", "Ashitosh", "Suraj"];
  public employeeDetails = [
    {name: "Samruddhi", age: 22, salary: 10000},
    {name: "Sameer", age: 23, salary: 10000},
    {name: "Pratik", age: 26, salary: 30000},
    {name: "Shivani", age: 23, salary: 15000},
    {name: "Vaibhavi", age: 22, salary: 10000},
  ]
}

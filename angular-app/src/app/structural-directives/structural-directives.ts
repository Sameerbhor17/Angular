import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.scss'
})
export class StructuralDirectives {
  public studentList: any = ['Akshay', 'Ashish', 'Harshad', 'Onkar', 'Pranay', 'Pritam', 'Rutvik', 'Smith', 'Yuvraj', 'Yuvraj', 'Sameer', 'Saurav'];
  public show: boolean = true;
  public color: string = '';

  toggleFunc(){
    this.show != this.show
  }
}

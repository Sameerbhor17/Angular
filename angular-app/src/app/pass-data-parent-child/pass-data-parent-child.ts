import { Component } from '@angular/core';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-pass-data-parent-child',
  imports: [ChildComponent],
  templateUrl: './pass-data-parent-child.html',
  styleUrl: './pass-data-parent-child.scss'
})
export class PassDataParentChild {
  public userList: string[] = ['Sameer', 'Amit', 'Suraj', 'Dhiraj'];
  public subjects: string[] = [];

  getSubjectList(val: string[]) {
    console.log(val);
    this.subjects = val;
  }
}

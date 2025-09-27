import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss'
})
export class ChildComponent {
  @Input() users : string[] = [];
  @Output() getSubjectList = new EventEmitter();

  public subjectList = ['Web Technology', 'Data Science', 'Database Management System', 'Artificial Intelligence'];

  // ngOninit() {
  //   this.getSubjectList.emit(this.subjectList);
  // }

  sendData() {
    this.getSubjectList.emit(this.subjectList);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Tasks } from './task.model'
import { Card } from '../../../shared/card/card';
import { DatePipe } from '@angular/common';

// interface Tasks {
//   id: string;
//   userId: string;
//   title: string;
//   summary: string;
//   dueDate: string;
// }

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({required: true}) task !: Tasks;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }

}

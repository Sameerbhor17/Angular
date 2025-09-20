import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-app',
  imports: [FormsModule],
  templateUrl: './todo-list-app.html',
  styleUrl: './todo-list-app.scss'
})
export class TodoListApp {
  public task = "";
  public taskList: {id: number, name: string}[] = [];

  addTask() {
    this.taskList.push({id:this.taskList.length+1, name:this.task});
    this.task = "";
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((item) => item.id != id);
  }
}

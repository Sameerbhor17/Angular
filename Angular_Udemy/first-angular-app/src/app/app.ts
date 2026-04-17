import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { User } from './components/user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './components/tasks/tasks';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  // imports: [Header, User, Tasks, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public users = DUMMY_USERS;
  // public selectedUserId: string = 'u1';
  public selectedUserId?: string;

  get selectedUser() {
    // return this.users.find((user) => user.id === this.selectedUserId)!;
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    // alert("Selected User with ID: "+id);
    this.selectedUserId = id;
  }
}import { from } from 'rxjs';


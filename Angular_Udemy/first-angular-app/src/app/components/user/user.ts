import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  // public selectedUser = DUMMY_USERS[randomIndex];
  public selectedUser = signal(DUMMY_USERS[randomIndex]);

  //getters property(not a function) in Angular
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  //User selection method
  onSelectUser() {
    // alert(this.selectedUser.name+" is selected");
    const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomUser];
    this.selectedUser.set(DUMMY_USERS[randomUser]);
  }
}

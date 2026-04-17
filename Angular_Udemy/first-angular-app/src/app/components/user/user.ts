// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { type Users } from './user.model'

// type Users = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface Users {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name !: string;
  @Input({required: true}) user !: Users;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // })
  // select = output<string>();

  // public selectedUser = DUMMY_USERS[randomIndex];
  // public selectedUser = signal(DUMMY_USERS[randomIndex]);
  // public imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  //getters property(not a function) in Angular
  get imagePath() {
    // return 'assets/users/' + this.selectedUser.avatar;
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }

  //User selection method
  // onSelectUser() {
    // alert(this.selectedUser.name+" is selected");
    // const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomUser];
    // this.selectedUser.set(DUMMY_USERS[randomUser]);
  // }

  onSelectUser() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
}

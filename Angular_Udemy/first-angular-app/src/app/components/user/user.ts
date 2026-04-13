// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name !: string;

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // })

  // public selectedUser = DUMMY_USERS[randomIndex];
  // public selectedUser = signal(DUMMY_USERS[randomIndex]);
  // public imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  //getters property(not a function) in Angular
  get imagePath() {
    // return 'assets/users/' + this.selectedUser.avatar;
    return 'assets/users/' + this.avatar;
  }

  //User selection method
  // onSelectUser() {
    // alert(this.selectedUser.name+" is selected");
    // const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomUser];
    // this.selectedUser.set(DUMMY_USERS[randomUser]);
  // }
  onSelectUser() {}
}

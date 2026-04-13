import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { User } from './components/user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public users = DUMMY_USERS;

  onSelectUser(id: string) {
    alert("Selected User with ID: "+id);
  }
}

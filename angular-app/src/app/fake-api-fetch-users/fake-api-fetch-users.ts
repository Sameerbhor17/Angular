import { Component } from '@angular/core';
import { UserData } from '../angular-services/user-data';
import { User } from '../angular-interfaces/user-interface';

@Component({
  selector: 'app-fake-api-fetch-users',
  imports: [],
  templateUrl: './fake-api-fetch-users.html',
  styleUrl: './fake-api-fetch-users.scss'
})
export class FakeApiFetchUsers {
  public userList: User[] = [];

  constructor(private userListService: UserData) {}

  ngOnInit() {
    this.userListService.getUsers().subscribe((data: User[]) => {
      this.userList = data;
      console.log(data);
    });
  }
}

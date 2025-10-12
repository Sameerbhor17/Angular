import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../angular-interfaces/user-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserData {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const userList = "http://localhost:3000/users";
    return this.http.get<User[]>(userList);
  }
}

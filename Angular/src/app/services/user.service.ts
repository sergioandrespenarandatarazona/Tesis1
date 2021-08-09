import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList: User[] = [
    new User('The', 'Admin', 'admin@admin.com', 'male', 'Admin123', 'admin', 'Colombia', 'Bogota'),
    new User('The', 'User', 'user@user.com', 'female', 'User123', 'user', 'Colombia', 'Bogota')
  ];

  constructor() { }

  public getUsers(): User[] {
    return this.usersList;
  }

  public addUser(user: User): void {
    this.usersList.push(user);
    console.log(this.usersList);
  }

  public getUserByMail(mail: string): User | null {
    for (let i = 0; i < this.usersList.length ; i++){
      if (this.usersList[i].email === mail){
        return this.usersList[i];
      }
    }
    return null;
  }
}
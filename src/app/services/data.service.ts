import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import{User}from '../models/User';
@Injectable()
export class DataService {
  users:User[];
  data: Observable<any>;
  constructor(){
    this.users = [
      {
        firstName: "John",
        lastName: "Dho",
        email: "john@gmail.com",
        address: {
          street: "5 main street",
          city: "Delhi",
          state: "DL"
        },
        registered: new Date(),
        hide: true

      },
      {
        firstName: "Brad",
        lastName: "Traverse",
        email: "brad@gmail.com",
        address: {
          street: "12 untitled street",
          city: "Califonia",
          state: "BA"
        },
        registered: new Date(),
        hide: true
      },
      {
        firstName: "Hitesh",
        lastName: "Ch",
        email: "hitesh@gmail.com",
        address: {
          street: "44 untitled",
          city: "Jaipur",
          state: "RJ"
        },
        registered: new Date(),
        hide: true
      }
    ]
  }
  getUser():Observable<User[]>{
    return of(this.users);
  }
  addUser(user:User){
        this.users.unshift(user);
  }
  getData(){
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
            setTimeout(() => {
        observer.next(2);
      }, 2000);
            setTimeout(() => {
        observer.next(3);
      }, 3000);
            setTimeout(() => {
        observer.next(4);
      }, 4000);
    })
    return this.data;
  }
}
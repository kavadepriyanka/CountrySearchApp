import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerFlag: boolean = false;
  confirmPassword: string = '';
  model: User = {
    // firstName: '',
    // lastName: '',
    // userName: '',
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit() {
  }

  // toggleFlag(): void {
  //   this.registerFlag = !this.registerFlag;
  //   console.log(this.registerFlag);
  // }

  registerUser(): void {
    let users: User[];
    console.log('register user');
    users = JSON.parse(localStorage.getItem('users')); //getting user list from localstorage
    //compare model.user with array
    //if not present add as new user
    //else display message already registered
    console.log('users', users,this.model.email);
    let isPresent = _.find(users, function(user) {
      console.log('user:',user);
      if(user.email === this.model.email) {
        return true;
      }
    });
    if(!isPresent) {
      console.log ('adding user');
      users.push(this.model);
      localStorage.setItem('users', JSON.stringify(users)); //setting user list to localstorage
    } else {
      console.log('User already registered');
    }
  }

  // resetForm(): void {
  //   this.model = {
  //     firstName: '',
  //     lastName: '',
  //     userName: '',
  //     email: '',
  //     password: ''
  //   }
//  }

}

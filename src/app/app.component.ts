import { Component } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'find my country';
  loggedIn : boolean;
  ngOnInit() {
    let users: User[] = [{
      email: 'kavadepriyanka@yahoo.com',
      password: '1234'
    }];

    console.log('creating local storage');
    localStorage.setItem('users', JSON.stringify(users));
  }
}

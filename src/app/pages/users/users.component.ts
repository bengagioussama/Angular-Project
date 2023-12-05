import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  listUsers: User[] = [
    {
      id: 1,
      username: 'Oussama',
      password: 'pwd',
      picture: '../../assets/images/cap2.jpg',
      accountCategory: 'Admin'
    },
    {
      id: 2,
      username: 'flen',
      password: 'password',
      picture: '../../assets/images/cap3.webp',
      accountCategory: 'Customer'
    },
    {
      id: 3,
      username: 'flen',
      password: 'password',
      picture: '../../assets/images/cap4.webp',
      accountCategory: 'Customer'
    },
    {
      id: 4,
      username: 'flen',
      password: 'password',
      picture: '../../assets/images/cap5.webp',
      accountCategory: 'Customer'
    },
    {
      id: 5,
      username: 'flen',
      password: 'password',
      picture: '../../assets/images/cap4.webp',
      accountCategory: 'Customer'
    },
    {
      id: 6,
      username: 'flen',
      password: 'password',
      picture: '../../assets/images/cap2.jpg',
      accountCategory: 'Customer'
    },

  ];

  deleteUser(user: User) {
    if (user.accountCategory !== 'Admin') {
      let index = this.listUsers.indexOf(user);
      this.listUsers.splice(index,1);
    }
  }
}

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
      picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      accountCategory: 'Admin'
    },
    {
      id: 2,
      username: 'flen',
      password: 'password',
      picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      accountCategory: 'Customer'
    },
    {
      id: 3,
      username: 'flen',
      password: 'password',
      picture: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      accountCategory: 'Customer'
    },
    {
      id: 4,
      username: 'flen',
      password: 'password',
      picture: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      accountCategory: 'Customer'
    },
    {
      id: 5,
      username: 'flen',
      password: 'password',
      picture: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      accountCategory: 'Customer'
    },
    {
      id: 6,
      username: 'flen',
      password: 'password',
      picture: 'https://bootdey.com/img/Content/avatar/avatar6.png',
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

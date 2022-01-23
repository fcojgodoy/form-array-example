import { Component } from '@angular/core';
import { User } from '../data/models/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  users: User[] = [
    { id: 1, name: 'Vanesa' },
    { id: 2, name: 'Gaspar' },
    { id: 3, name: 'Ignacio' },
    { id: 4, name: 'Laura' },
    { id: 5, name: 'Ramiro' }
  ];
}

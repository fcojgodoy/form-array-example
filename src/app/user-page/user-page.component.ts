import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControlStatus } from '@angular/forms';
import { User } from '../data/models/user';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements AfterViewInit {

  @ViewChild(UserFormComponent)
  userFormComponent!: UserFormComponent

  usersFormValid = true;

  users: User[] = [
    { id: 1, name: 'Vanesa' },
    { id: 2, name: 'Gaspar' },
    { id: 3, name: 'Ignacio' },
    { id: 4, name: 'Laura' },
    { id: 5, name: 'Ramiro' }
  ];

  ngAfterViewInit(): void {
    this.listenUsersFormStatusChangesAndSetProp();
  }

  listenUsersFormStatusChangesAndSetProp() {
    this.userFormComponent.usersForm.statusChanges
    .subscribe((_status: FormControlStatus) => {      
      this.usersFormValid = this.userFormComponent.usersForm.valid;
    })
  }
}

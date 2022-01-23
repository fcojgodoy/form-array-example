import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/data/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() usersData!: User[];

  usersForm: FormGroup = this.fb.group({
    users: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  get users() {
    return this.usersForm.controls['users'] as FormArray;
  }

  ngOnInit(): void {
    this.addUsersDataToForm();
  }

  addUser(user?: User) {
    const userForm = this.fb.group({
      name: [user?.name, Validators.required]
    });
    this.users.push(userForm);
  }

  addUsersDataToForm(): void {
    this.usersData.forEach(user => {
      this.addUser(user);
    });
  }
}

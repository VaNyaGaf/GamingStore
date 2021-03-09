import { Component, OnInit } from '@angular/core';
import { UserLoginModel } from '../models';

@Component({
  selector: 'gs-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public passMinLength = 8;
  public user: UserLoginModel = {
    email: '',
    password: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  public logInUser() {
    console.log(this.user);
  }

}

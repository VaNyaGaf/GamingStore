import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserRegisterModel } from '../models';

@Component({
  selector: 'gs-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public passMinLength = 8;  
  public user: UserRegisterModel = {
    userName: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  public registerUser() {
    console.log(this.user)
  }
}

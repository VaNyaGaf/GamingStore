import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';
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

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  public registerUser() {
    this._authService.register(this.user)
      .subscribe(res => console.log(res));
  }
}

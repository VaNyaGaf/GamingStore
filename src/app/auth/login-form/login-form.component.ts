import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';
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

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  public logInUser() {
    this._authService.login(this.user)
      .subscribe(res => console.log(res));
  }

}

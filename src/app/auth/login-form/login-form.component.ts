import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  public logInUser() {
    this._authService.login(this.user)
      .subscribe(_ => this._router.navigateByUrl('/games'));
  }

}

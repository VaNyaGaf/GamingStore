import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'gs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  public isLogedIn(): Observable<boolean> {
    return this._authService.isLoggedIn();
  }

  public logOut(): void {
    this._authService.logout();
    this._router.navigateByUrl('/auth/login')
  }
}

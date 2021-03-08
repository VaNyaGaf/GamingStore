import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  exports: [
    RegisterFormComponent,
    LoginFormComponent,
  ]
})
export class AuthModule { }

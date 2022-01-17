import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from '../login/login.dto';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  data: LoginDto = new LoginDto();
  passDisplayed: boolean = true;
  eyeSrc = 'assets/imgs/eye.svg';

  constructor(private _authService: AuthService,
     private _router: Router) { }

  ngOnInit(): void {
  }

  displayPass(pass: HTMLInputElement) {
    pass.type = this.passDisplayed? 'text' : 'password';
    this.eyeSrc = this.passDisplayed? 'assets/imgs/closed-eye.svg': 'assets/imgs/eye.svg';
    this.passDisplayed = !this.passDisplayed;
  }

  login() {
    this._authService
    .adminLogin(this.data)
    .subscribe(res => {
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('email', res.email);
      localStorage.setItem('id', res.id);
      localStorage.setItem('roles', res.roles.toString());
      this._router.navigate(['/dashboard']);
    });
  }

}

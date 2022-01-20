import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ROLE } from '../model/roles.enum';
import { AuthService } from '../service/auth.service';
import { LoginDto } from './login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: LoginDto = new LoginDto();
  passDisplayed: boolean = true;
  eyeSrc = 'assets/imgs/eye.svg';

  constructor(private _authService: AuthService,
    private toastr: ToastrService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  displayPass(pass: HTMLInputElement) {
    pass.type = this.passDisplayed ? 'text' : 'password';
    this.eyeSrc = this.passDisplayed ? 'assets/imgs/closed-eye.svg' : 'assets/imgs/eye.svg';
    this.passDisplayed = !this.passDisplayed;
  }

  login() {
    this._authService
      .login(this.data)
      .subscribe(res => {
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('email', res.email);
        localStorage.setItem('id', res.id);
        localStorage.setItem('roles', res.roles.toString());
        if (res.roles[0] === ROLE.USER)
          this._router.navigate(['/e/profile']);
        if (res.roles[0] === ROLE.COMPANY)
          this._router.navigate(['/c/search']);
      });
  }

}

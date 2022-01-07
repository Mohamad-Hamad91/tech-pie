import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    pass.type = this.passDisplayed? 'text' : 'password';
    this.eyeSrc = this.passDisplayed? 'assets/imgs/closed-eye.svg': 'assets/imgs/eye.svg';
    this.passDisplayed = !this.passDisplayed;
  }

  login() {
    this._authService
    .login(this.data)
    .subscribe(res => {
      localStorage.setItem('token', res.accessToken);
      this._router.navigate(['/employee/resume']);
    });
  }
 
}

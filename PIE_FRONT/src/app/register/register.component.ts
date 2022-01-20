import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ROLE } from '../model/roles.enum';
import { AuthService } from '../service/auth.service';
import { RegisterDto } from './register.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  passDisplayed: boolean = true;
  eyeSrc = 'assets/imgs/eye.svg';

  data: RegisterDto = new RegisterDto();

  constructor(private _authService: AuthService,
    private toastr: ToastrService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.data.userType = this._route.snapshot.params.userType === 'co' ? ROLE.COMPANY : ROLE.USER;
  }

  displayPass(pass: HTMLInputElement, confpass: HTMLInputElement) {
    pass.type = this.passDisplayed ? 'text' : 'password';
    confpass.type = this.passDisplayed ? 'text' : 'password';
    this.eyeSrc = this.passDisplayed ? 'assets/imgs/closed-eye.svg' : 'assets/imgs/eye.svg';
    this.passDisplayed = !this.passDisplayed;
  }

  save() {
    if (this.data.password !== this.data.confirmPassword) {
      this.toastr.error("'Passowrd' and 'confirm password' must be same!", 'ERROR!');
      return;
    }

    this._authService.register(this.data)
      .subscribe(res => {
        this._router.navigate(['/login']);
      }, er => console.log(er));
  }

}

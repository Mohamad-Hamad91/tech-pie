import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passDisplayed: boolean = true;
  eyeSrc = 'assets/imgs/eye.svg';

  constructor() { }

  ngOnInit(): void {
  }

  displayPass(pass: HTMLInputElement) {
    pass.type = this.passDisplayed? 'text' : 'password';
    this.eyeSrc = this.passDisplayed? 'assets/imgs/closed-eye.svg': 'assets/imgs/eye.svg';
    this.passDisplayed = !this.passDisplayed;
  }
 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

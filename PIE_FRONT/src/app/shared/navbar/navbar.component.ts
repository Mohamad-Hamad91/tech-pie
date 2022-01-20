import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ROLE } from 'src/app/model/roles.enum';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('collapseBtn') collapseBtn: ElementRef;
  @ViewChild('nav') nav: ElementRef;
  collapsed: boolean = true;
  isLoggedin: boolean = false;
  isCompany: boolean = false;
  isEmployee: boolean = false;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.isLoggedin = this._authService.isLoggedIn();
    this.isCompany = this._authService.getRole() === ROLE.COMPANY;
    this.isEmployee = this._authService.getRole() === ROLE.USER;
  }

  collapseNav() {
    if (this.collapsed) {
      this.nav.nativeElement.classList.add('show');
      this.collapseBtn.nativeElement.classList.remove('collapsed');
    } else {
      this.nav.nativeElement.classList.remove('show');
      this.collapseBtn.nativeElement.classList.add('collapsed');
    }
    this.collapsed = !this.collapsed;
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }

}

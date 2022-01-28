import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, PrimeIcons } from 'primeng-lts/api';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  items: MegaMenuItem[];

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Users', icon: PrimeIcons.USERS,
        routerLink: 'users'
      },
      {
        label: 'offers', icon: PrimeIcons.FILE,
        routerLink: 'offers'
      },
      {
        label: 'Settings', icon: PrimeIcons.COG,
        items: [
          [
            {
              label: 'Setting 1',
              items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
            },
            {
              label: 'Setting 2',
              items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
            },
            {
              label: 'Setting 3',
              items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
            }
          ]
        ]
      }, 
      {
        label: 'Logout', icon: PrimeIcons.SIGN_OUT,
        command: () => this.logout()
      }
    ];
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }

}

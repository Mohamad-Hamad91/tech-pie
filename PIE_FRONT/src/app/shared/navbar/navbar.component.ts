import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService, PrimeIcons } from 'primeng-lts/api';
import { ROLE } from 'src/app/model/roles.enum';
import { AuthService } from 'src/app/service/auth.service';
import { SseService } from 'src/app/service/sse.service';
import { MegaMenuItem, MenuItem } from 'primeng-lts/api';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('collapseBtn') collapseBtn: ElementRef;
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('notif') notif: ElementRef;
  notifSattus: boolean = false;
  collapsed: boolean = true;
  isLoggedin: boolean = false;
  isCompany: boolean = false;
  isEmployee: boolean = false;
  userId: string;
  notification: any[] = [];
  unseenCount: number = 0;
  items: MenuItem[] = [];
  rightMenuItems: MegaMenuItem[] = [];
  customStyle;
  ready: boolean = false;

  constructor(private _authService: AuthService, private _router: Router,
    private sseService: SseService, private _messageService: MessageService,
    private notificationService: NotificationService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.userId = this._authService.getId();
    this.isLoggedin = this._authService.isLoggedIn();
    this.isCompany = this._authService.getRole() === ROLE.COMPANY;
    this.isEmployee = this._authService.getRole() === ROLE.USER;

    this.listenToSSE();

    this.getNotifications();

  }

  listenToSSE() {
    if (!this.sseService.evtSource)
      this.sseService.init();
    this.sseService.notifications.subscribe(message => {
      this.unseenCount++;
      this.getNotifications();
      this._messageService.add({
        severity: 'info',
        detail: message,
        life: 5000
      });
      this.cdRef.detectChanges();
    });
  }

  getNotifications() {
    this.notificationService
      .getFroUser(this.userId)
      .subscribe(res => {
        this.notification = res;
        this.unseenCount = this.notification.filter(val => val.status === 'UNSEEN').length;
      });
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

  markAsRead(id: string, index: number) {
    this.notificationService
      .markAsSeen(id)
      .subscribe(res => {
        this.notification[index].status = 'SEEN';
        switch (this.notification[index].type) {
          case 'IN_OFFER':
            if (this.isEmployee) this._router.navigate(['/e/inbox']);
            if (this.isCompany) this._router.navigate(['/c/inbox']);
            break;
          case 'OUT_OFFER':
            this._router.navigate(['/c/sent-offers']);
            break;
        } // end of switch
        this.unseenCount = this.notification.filter(val => val.status === 'UNSEEN').length;
        this.notifSattus = false;
      });
  }

  // deprecated we now use bootstrap navabar not primeng
  initItems() {
    this.customStyle = {
      background: 'rgba(248, 249, 250, 0.3)', position: 'fixed', right: 0, left: 0, top: 0,
      border: 'none',
      'box-shadow': '#393939 .5 1px 10px '
    };
    this.items = [
      {
        label: 'Home', icon: PrimeIcons.HOME,
        routerLink: '/home'
      },
      {
        label: 'Search', icon: PrimeIcons.SEARCH,
        routerLink: '/c/search'
      },
      {
        label: 'Profile', icon: PrimeIcons.USER,
        routerLink: '/e/profile',
        visible: (this.isLoggedin && this.isEmployee)
      },
      {
        label: 'Profile', icon: PrimeIcons.USER,
        routerLink: '/c/profile',
        visible: (this.isLoggedin && this.isCompany)
      },
      {
        label: 'Inbox', icon: PrimeIcons.INBOX,
        routerLink: '/e/inbox',
        visible: this.isLoggedin
      },
      {
        label: 'Sent Offers', icon: PrimeIcons.SIGN_OUT,
        routerLink: '/c/sent-offers',
        visible: this.isLoggedin && this.isCompany
      },
      {
        label: 'Sent Offers', icon: PrimeIcons.SIGN_OUT,
        routerLink: '/e/sent-offers',
        visible: this.isLoggedin && this.isEmployee
      },
    ];

    this.rightMenuItems = [
      {
        label: this.notification.length + '', icon: PrimeIcons.BELL,
        // items: [this.notification.map(val => ({ label: val }))]
      },
    ];
  }

}

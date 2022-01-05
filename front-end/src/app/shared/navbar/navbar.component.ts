import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('collapseBtn') collapseBtn: ElementRef;
  @ViewChild('nav') nav: ElementRef;
  collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
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
}

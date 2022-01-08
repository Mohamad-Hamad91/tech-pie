import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:keydown', ['$event'])
  handleHotkey(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
  }

}

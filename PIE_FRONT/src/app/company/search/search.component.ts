import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('arrow') arrow: ElementRef;
  displayAdvanceSearch: boolean = false;
  @ViewChild('advancedSearch') advancedSearch: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  flipArrow() {
    this.displayAdvanceSearch = !this.displayAdvanceSearch;
    this.arrow.nativeElement.style.transform = this.displayAdvanceSearch ? 'rotate(180deg)' : 'rotate(0)';
  }

  

}

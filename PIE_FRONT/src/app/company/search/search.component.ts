import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../service/search.service';
import { QueryDto } from './search.query';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('arrow') arrow: ElementRef;
  displayAdvanceSearch: boolean = false;
  @ViewChild('advancedSearch') advancedSearch: ElementRef;

  query: QueryDto = new QueryDto();
  tempQuery: { totalExperience: number; expectedPriceMin: number; };
  data: any[] = [];

  constructor(private _searchService: SearchService, private _router: Router) { }

  ngOnInit(): void {
    this.query.pageNumber = 1;
    this.query.pageSize = 25;
    this.tempQuery = { totalExperience: null, expectedPriceMin: null };
  }

  flipArrow() {
    this.displayAdvanceSearch = !this.displayAdvanceSearch;
    this.arrow.nativeElement.style.transform = this.displayAdvanceSearch ? 'rotate(180deg)' : 'rotate(0)';
  }

  search() {
    if (this.tempQuery['totalExperience'])
      this.query.criteria.push({
        key: 'totalExperience',
        value: this.tempQuery['totalExperience'],
        operation: 'gte'
      });
    if (this.tempQuery['expectedPriceMin'])
      this.query.criteria.push({
        key: 'expectedPriceMin',
        value: this.tempQuery['expectedPriceMin'],
        operation: 'lte'
      });
    this._searchService
      .search(this.query)
      .subscribe(res => {
        this.data = res;
        this.query.criteria = [];
      });
  }

  browseResume(id) {
    this._router.navigate(['/r/v/' + id]);
  }

}

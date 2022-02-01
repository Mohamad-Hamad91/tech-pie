import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/service/constants.service';
import { SearchService } from '../service/search.service';
import { QueryDto } from './search-query.dto';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.scss']
})
export class SearchCompanyComponent implements OnInit {

  query: QueryDto = new QueryDto();
  expectResult: boolean = false;
  cities: string[];
  tempCities: string[];

  data: any[] = [];

  tempQuery: { compSize?: string; city?: string };

  @ViewChild('arrow') arrow: ElementRef;
  displayAdvanceSearch: boolean = false;
  @ViewChild('advancedSearch') advancedSearch: ElementRef;

  constructor(private _searchService: SearchService, private _router: Router,
    private _constService: ConstantsService) { }

  ngOnInit(): void {
    this.query.pageNumber = 1;
    this.query.pageSize = 25;
    this.tempQuery = { compSize: null, city: null };
  }

  flipArrow() {
    this.displayAdvanceSearch = !this.displayAdvanceSearch;
    this.arrow.nativeElement.style.transform = this.displayAdvanceSearch ? 'rotate(180deg)' : 'rotate(0)';
  }

  search() {
    if (this.tempQuery['compSize'])
      this.query.criteria.push({
        key: 'compSize',
        value: '.*' + this.tempQuery['compSize'] + '.*',
        operation: 'regex',
        ignoreCase: true
      });
    if (this.tempQuery['city'])
      this.query.criteria.push({
        key: 'city',
        value: '.*' + this.tempQuery['city'] + '.*',
        operation: 'regex',
        ignoreCase: true
      });
    this._searchService
      .search(this.query)
      .subscribe(res => {
        this.expectResult = true;
        this.data = res;
        this.query.criteria = [];
      });
  }

  browseCompany(id) {
    this._router.navigate(['/v/c/' + id]);
  }

  searchCities(event) {
    if (!this.cities) {
      this._constService.getCities().subscribe(res => {
        this.tempCities = res;
        this.cities = [...this.tempCities];
      })
    } else {
      this.cities = this.tempCities.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }

}

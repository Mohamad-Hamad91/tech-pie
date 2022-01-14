import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from 'src/app/service/constants.service';
import { Constant } from 'src/app/shared/constants/constant.model';
import { GENDER } from 'src/app/shared/constants/gender.const';
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
  expectResult: boolean = false;
  workType: string[];
  tempWorkType: string[];
  gender: Constant[] = GENDER;
  skills: string[];
  tempSkills: string[];
  cities: string[];
  tempCities: string[];

  tempQuery: { totalExperience?: number; pricePerHour?: number; workType?: any, gender?: string, skills?: any, city?: string };
  data: any[] = [];

  constructor(private _searchService: SearchService,
    private _router: Router,
    private _constService: ConstantsService) { }

  ngOnInit(): void {
    this.query.pageNumber = 1;
    this.query.pageSize = 25;
    this.tempQuery = { totalExperience: null, pricePerHour: null, workType: null, gender: null, skills: null, city: null };
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
    if (this.tempQuery['pricePerHour'])
      this.query.criteria.push({
        key: 'pricePerHour',
        value: this.tempQuery['pricePerHour'] / (3500 * 200),
        operation: 'lte'
      });
    if (this.tempQuery['workType'])
      this.query.criteria.push({
        key: 'workType',
        value: this.tempQuery['workType'],
        operation: 'in'
      });
    if (this.tempQuery['skills'] && this.tempQuery['skills'].length > 0)
      this.query.criteria.push({
        key: 'skills.value',
        value: this.tempQuery['skills'],
        operation: 'in'
      });
    if (this.tempQuery['gender'])
      this.query.criteria.push({
        key: 'gender',
        value: this.tempQuery['gender'],
        operation: 'eq'
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

  browseResume(id) {
    this._router.navigate(['/r/v/' + id]);
  }


  searchWorkType(event) {
    if (!this.workType) {
      this._constService.getWorkType().subscribe(res => {
        this.tempWorkType = res;
        this.workType = [...this.tempWorkType];
      })
    } else {
      this.workType = this.tempWorkType.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }

  searchSkills(event) {
    if (!this.skills) {
      this._constService.getSkills().subscribe(res => {
        this.tempSkills = res;
        this.skills = [...this.tempSkills];
      })
    } else {
      this.skills = this.tempSkills.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
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

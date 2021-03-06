import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { GET_LANG_VALUE } from 'src/app/shared/constants/lang-levels.enum';
import { GET_SKILL_VALUE } from 'src/app/shared/constants/skill-levels.const';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-emp-profile',
  templateUrl: './view-emp-profile.component.html',
  styleUrls: ['./view-emp-profile.component.scss']
})
export class ViewEmpProfileComponent implements OnInit {

  resumeId: string;
  byuser: boolean = false;
  data: any;
  isLoggedIn: boolean = false;

  constructor(private _dataService: DataService, private _route: ActivatedRoute,
    private _router: Router, private _authService: AuthService) { }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      this.resumeId = this._route.snapshot.params.id;
      this.byuser = this._route.snapshot.params.user?.trim() ? true : false;
      this.getData();
      this.isLoggedIn = this._authService.isLoggedIn();
    });

  }

  getData() {
    if (this.byuser) {
      this._dataService.getByUserId(this.resumeId)
        .subscribe(res => {
          this.data = res;
          this.data.skills = this.data.skills.map((val) => {
            return { ...val, expertLevelValue: GET_SKILL_VALUE(val.expertLevel) };
          });
          this.data.languages = this.data.languages.map((val) => {
            return { ...val, expertValue: GET_LANG_VALUE(val.level) };
          });
        });
    } else {
      this._dataService.getOne(this.resumeId)
        .subscribe(res => {
          this.data = res;
          this.data.skills = this.data.skills.map((val) => {
            return { ...val, expertLevelValue: GET_SKILL_VALUE(val.expertLevel) };
          });
          this.data.languages = this.data.languages.map((val) => {
            return { ...val, expertValue: GET_LANG_VALUE(val.level) };
          });
        });
    }

  }

  @HostListener('window:keydown', ['$event'])
  handleHotkey(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
  }

  offer() {
    this._router.navigate(['/c/offer/' + this.data.user]);
  }

}

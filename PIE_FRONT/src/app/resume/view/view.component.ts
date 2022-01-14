import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GET_LANG_VALUE } from 'src/app/shared/constants/lang-levels.enum';
import { GET_SKILL_VALUE } from 'src/app/shared/constants/skill-levels.const';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  resumeId: string;
  data: any;

  constructor(private _dataService: DataService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      this.resumeId = this._route.snapshot.params.id;
      this.getData()
    });

  }

  getData() {
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

  @HostListener('window:keydown', ['$event'])
  handleHotkey(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
  }

}

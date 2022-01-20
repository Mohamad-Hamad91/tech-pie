import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-comp-profile',
  templateUrl: './view-comp-profile.component.html',
  styleUrls: ['./view-comp-profile.component.scss']
})
export class ViewCompProfileComponent implements OnInit {

  data: any;
  profileId: string;

  constructor(private _dataService: DataService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.profileId = this._route.snapshot.params.id;
    });
  }

  getData() {
    this._dataService.getOneComp(this.profileId)
      .subscribe(res => this.data = res);
  }

}

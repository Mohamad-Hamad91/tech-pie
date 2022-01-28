import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROLE } from 'src/app/model/roles.enum';
import { AuthService } from 'src/app/service/auth.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-comp-profile',
  templateUrl: './view-comp-profile.component.html',
  styleUrls: ['./view-comp-profile.component.scss']
})
export class ViewCompProfileComponent implements OnInit {

  data: any;
  profileId: string;
  byUser: boolean = false;
  isLoggedIn: boolean = false;
  isEmp: boolean = false;

  constructor(private _dataService: DataService, private _route: ActivatedRoute,
    private _authService: AuthService) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.profileId = this._route.snapshot.params.id;
      this.byUser = this._route.snapshot.params.user?.trim() ? true : false;
      this.getData();
    });
    this.isLoggedIn = this._authService.isLoggedIn();
    this.isEmp = this._authService.getRole() === ROLE.USER;
  }

  getData() {
    if (this.byUser) {
      this._dataService.getByCompId(this.profileId)
        .subscribe(res => this.data = res);
    } else {
      this._dataService.getOneComp(this.profileId)
        .subscribe(res => this.data = res);
    }
  }

}

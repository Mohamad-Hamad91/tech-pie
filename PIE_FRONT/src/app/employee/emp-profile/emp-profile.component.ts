import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { AuthService } from 'src/app/service/auth.service';
import { ConstantsService } from 'src/app/service/constants.service';
import { ProfileService } from '../service/profile.service';
import { EmpProfileDto } from './emp-profile.dto';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.scss']
})
export class EmpProfileComponent implements OnInit {

  data: EmpProfileDto = new EmpProfileDto();
  id: string;

  cities: string[];
  tempCities: string[];

  nationalities: string[];
  tempNationalities: string[];

  gender: any[] = [{ value: 'Male' }, { value: 'Female' }];
  tempGender: string[] = ['Male', 'Female'];

  armyService: string[];
  tempArmyService: string[];

  workType: string[];
  tempWorkType: string[];




  constructor(private _authService: AuthService,
    private _profileService: ProfileService,
    private _constService: ConstantsService,
    private _messageService: MessageService) { }

  ngOnInit(): void {
    this.id = this._authService.getId();
    this.getData();
  }

  getData() {
    this._profileService
      .getByUserId(this.id)
      .subscribe(res => {
        this.data = res;
        this.data.birthDate = this.data.birthDate ? new Date(this.data.birthDate) : null;
      });
  }

  save() {
    this.data.user = this.id;
    if (this.data._id) {
      // update
      this._profileService
        .updateResume(this.data, this.data._id)
        .subscribe(res => this._messageService.add({
          severity: 'success',
          life: 3000,
          detail: 'Updated Successfully!'
        }));
    } else {
      // create
      this._profileService.createResume(this.data)
        .subscribe(res => {
          console.log(res);
          this.data._id = res._id;
        });
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

  searchNationalities(event) {
    if (!this.nationalities) {
      this._constService.getNationalities().subscribe(res => {
        this.tempNationalities = res;
        this.nationalities = [...this.tempNationalities];
      })
    } else {
      this.nationalities = this.tempNationalities.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }

  searchGender(event) {
    if (!this.gender) {
      this.gender = [...this.tempGender];
    } else {
      this.gender = this.tempGender.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
  }

  searchArmyService(event) {
    if (!this.armyService) {
      this._constService.getArmyStatus().subscribe(res => {
        this.tempArmyService = res;
        this.armyService = [...this.tempArmyService];
      });
    } else {
      this.armyService = this.tempArmyService.filter(val =>
        val.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
    }
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


}

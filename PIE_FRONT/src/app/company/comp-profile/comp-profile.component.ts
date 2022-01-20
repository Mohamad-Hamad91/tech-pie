import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { CompanyDto } from 'src/app/model/comp-profile.dto';
import { CompProfileService } from '../service/comp-profile.service';

@Component({
  selector: 'app-comp-profile',
  templateUrl: './comp-profile.component.html',
  styleUrls: ['./comp-profile.component.scss']
})
export class CompProfileComponent implements OnInit {

  data: CompanyDto = new CompanyDto();

  constructor(private _companyProfileService: CompProfileService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._companyProfileService
      .getMyProfile()
      .subscribe(res => this.data = res ?? new CompanyDto());
  }

  save() {
    if (this.data?._id) {
      this._companyProfileService
        .update(this.data._id, this.data)
        .subscribe(res => {
          this._messageService.add({
            severity: 'success',
            detail: 'Updated Successfully!'
          });
        });
    } else {
      debugger;
      this._companyProfileService
        .create(this.data)
        .subscribe(res => {
          this._messageService.add({
            severity: 'success',
            detail: 'Updated Successfully!'
          });
        });
    }
  }



}

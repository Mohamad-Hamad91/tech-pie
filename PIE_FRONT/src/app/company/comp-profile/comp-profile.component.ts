import { Clipboard } from '@angular/cdk/clipboard';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { CompanyDto } from 'src/app/model/comp-profile.dto';
import { AuthService } from 'src/app/service/auth.service';
import { ConstantsService } from 'src/app/service/constants.service';
import { environment } from 'src/environments/environment';
import { CompProfileService } from '../service/comp-profile.service';

@Component({
  selector: 'app-comp-profile',
  templateUrl: './comp-profile.component.html',
  styleUrls: ['./comp-profile.component.scss']
})
export class CompProfileComponent implements OnInit {

  id: string;
  frontDomain: string = environment.frontDomain;
  data: CompanyDto = new CompanyDto();
  shareDialog: boolean;
  imageSrc: string | ArrayBuffer;
  fromFrontLogo: boolean;

  cities: string[];
  tempCities: string[];


  constructor(private _companyProfileService: CompProfileService,
    private _messageService: MessageService,
    private _constService: ConstantsService,
    private _authService: AuthService,
    private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.id = this._authService.getId();
    this.getData();
  }

  getData() {
    this._companyProfileService
      .getMyProfile()
      .subscribe(res => this.data = res ?? new CompanyDto());
  }

  save() {
    this.data.user = this.id;
    let formData = new FormData();
    if (this.data.logoFile) {
      formData.append('logoFile', this.data.logoFile);
      delete this.data.logoFile;
    }
    for (let key in this.data) {
      if (typeof this.data[key] === 'object')
        formData.append(key, JSON.stringify(this.data[key]));
      else
        formData.append(key, this.data[key]);
    }
    if (this.data?._id) {
      this._companyProfileService
        .update(this.data._id, formData)
        .subscribe((event: HttpEvent<any>) => {
          switch (event.type) { //checks events
            case HttpEventType.UploadProgress: // If upload is in progress
              let progress = Math.round(event.loaded / event.total * 100); // get upload percentage
              console.log(progress);
              break;
            case HttpEventType.Response: // give final response
              console.log('User successfully added!', event.body);
          }
          this._messageService.add({
            severity: 'success',
            detail: 'Updated Successfully!'
          });
        });
    } else {
      debugger;
      this._companyProfileService
        .create(formData)
        .subscribe((event: HttpEvent<any>) => {
          switch (event.type) { //checks events
            case HttpEventType.UploadProgress: // If upload is in progress
              let progress = Math.round(event.loaded / event.total * 100); // get upload percentage
              console.log(progress);
              break;
            case HttpEventType.Response: // give final response
              console.log('User successfully added!', event.body);
          }
          this._messageService.add({
            severity: 'success',
            detail: 'Updated Successfully!'
          });
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

  onAvatarUpload(e) {
    let file = e.files[0];
    this.data.logoFile = file;
    const reader = new FileReader();
    this.fromFrontLogo = true;
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(file);
  }


  share() {
    this.shareDialog = true;
  }

  cancelShare() {
    this.shareDialog = false;
  }

  copyLink(linkInput: HTMLInputElement) {
    // linkInput.select();
    // document.execCommand('copy');
    let value = linkInput.value;
    this.clipboard.copy(value);
    // linkInput.setSelectionRange(0, 0);
    this._messageService.add({
      severity: 'info',
      detail: 'Link Copied to clipboard!'
    });
  }



}

import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { FileService } from 'src/app/service/file.service';
import { OfferService } from 'src/app/service/offer.service';
import { SseService } from 'src/app/service/sse.service';
import { OfferDto } from '../../model/offer.dto';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  compId: string;
  empId: string;
  offer: OfferDto = new OfferDto();
  sent: boolean = false;
  progress: number = 0;
  @ViewChild('progressElm') progressElm: ElementRef;

  constructor(private _offerService: OfferService, private _route: ActivatedRoute,
    private _authService: AuthService, private _messageService: MessageService,
    private sseService: SseService, private cdRef: ChangeDetectorRef,
    private _fileService: FileService) { }

  ngOnInit(): void {
    this.compId = this._authService.getId();
    this._route.params.subscribe(params => {
      this.empId = this._route.snapshot.params.id;
    });
    this.sseService.uploadEvents.subscribe(res => {
      this.progress = res;
      this.progressElm.nativeElement.style.width = +this.progress + '%';
      this.cdRef.detectChanges();
    });
  }

  sendOffer() {
    this.offer.user = this.empId;
    this.offer.employer = this.compId;
    this.offer.employerType = this._authService.getRole();
    this._offerService
      .add(this.offer)
      .subscribe(res => {
        this.sent = true;
        this._messageService.add({
          severity: 'success',
          detail: 'Offer sent!'
        });
      });
  }

  onAvatarUpload(e) {
    let file = e.files[0];
    let formData: FormData = new FormData();
    formData.append('file', file);
    this._fileService
      .upload(formData)
      .subscribe((file: any) => {
        console.log(file);
        // if (!this.offer.files) this.offer.files = [file._id];
        // else this.offer.files.push(file._id);
        switch (file.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(file.loaded / file.total * 100);
            this.progressElm.nativeElement.style.width = +this.progress + '%';
            this.cdRef.detectChanges();
            console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', file);
            if (!this.offer.files) this.offer.files = [file.body];
            else this.offer.files.push(file.body);
            setTimeout(() => {
              this.progress = 0;
              this.progressElm.nativeElement.style.width = +this.progress + '%';
              this.cdRef.detectChanges();
            }, 1500);
            break;
        } // end of switch
      });
  }

  removeFile(id: string, index: number) {
    this._fileService
      .remove(id)
      .subscribe(res => {
        this.offer.files.splice(index, 1);
      })
  }

}

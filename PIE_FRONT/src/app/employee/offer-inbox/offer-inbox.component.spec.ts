import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferInboxComponent } from './offer-inbox.component';

describe('OfferInboxComponent', () => {
  let component: OfferInboxComponent;
  let fixture: ComponentFixture<OfferInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferInboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

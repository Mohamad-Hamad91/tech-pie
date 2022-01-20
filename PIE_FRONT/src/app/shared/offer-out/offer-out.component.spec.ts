import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferOutComponent } from './offer-out.component';

describe('OfferOutComponent', () => {
  let component: OfferOutComponent;
  let fixture: ComponentFixture<OfferOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

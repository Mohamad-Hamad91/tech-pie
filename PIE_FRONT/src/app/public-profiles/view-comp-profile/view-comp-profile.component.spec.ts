import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompProfileComponent } from './view-comp-profile.component';

describe('ViewCompProfileComponent', () => {
  let component: ViewCompProfileComponent;
  let fixture: ComponentFixture<ViewCompProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

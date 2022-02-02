import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitAppsInboxComponent } from './init-apps-inbox.component';

describe('InitAppsInboxComponent', () => {
  let component: InitAppsInboxComponent;
  let fixture: ComponentFixture<InitAppsInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitAppsInboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitAppsInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

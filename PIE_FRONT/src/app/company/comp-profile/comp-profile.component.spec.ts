import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompProfileComponent } from './comp-profile.component';

describe('CompProfileComponent', () => {
  let component: CompProfileComponent;
  let fixture: ComponentFixture<CompProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

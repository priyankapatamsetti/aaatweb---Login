import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsAddComponent } from './airports-add.component';

describe('AirportsAddComponent', () => {
  let component: AirportsAddComponent;
  let fixture: ComponentFixture<AirportsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

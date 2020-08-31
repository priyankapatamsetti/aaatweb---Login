import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsEditComponent } from './airports-edit.component';

describe('AirportsEditComponent', () => {
  let component: AirportsEditComponent;
  let fixture: ComponentFixture<AirportsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

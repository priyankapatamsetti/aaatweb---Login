import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsGridComponent } from './airports-grid.component';

describe('AirportsGridComponent', () => {
  let component: AirportsGridComponent;
  let fixture: ComponentFixture<AirportsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

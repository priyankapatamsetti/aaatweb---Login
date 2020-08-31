import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesEditComponent } from './cities-edit.component';

describe('CitiesEditComponent', () => {
  let component: CitiesEditComponent;
  let fixture: ComponentFixture<CitiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

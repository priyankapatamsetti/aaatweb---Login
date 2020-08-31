import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesGridComponent } from './states-grid.component';

describe('StatesGridComponent', () => {
  let component: StatesGridComponent;
  let fixture: ComponentFixture<StatesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

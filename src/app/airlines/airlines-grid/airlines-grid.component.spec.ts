import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesGridComponent } from './airlines-grid.component';

describe('AirlinesGridComponent', () => {
  let component: AirlinesGridComponent;
  let fixture: ComponentFixture<AirlinesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

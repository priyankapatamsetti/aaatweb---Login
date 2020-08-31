import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesAddComponent } from './airlines-add.component';

describe('AirlinesAddComponent', () => {
  let component: AirlinesAddComponent;
  let fixture: ComponentFixture<AirlinesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

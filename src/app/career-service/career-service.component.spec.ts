import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerServiceComponent } from './career-service.component';

describe('CareerServiceComponent', () => {
  let component: CareerServiceComponent;
  let fixture: ComponentFixture<CareerServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

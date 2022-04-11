import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatExpansionModule} from '@angular/material/expansion';

import { ExchangeStudentsComponent } from './exchange-students.component';

describe('ExchangeStudentsComponent', () => {
  let component: ExchangeStudentsComponent;
  let fixture: ComponentFixture<ExchangeStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeStudentsComponent ],
      imports: [
        MatExpansionModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

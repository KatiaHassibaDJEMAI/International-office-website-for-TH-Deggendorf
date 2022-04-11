import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalStudentsComponent } from './international-students.component';

describe('InternationalStudentsComponent', () => {
  let component: InternationalStudentsComponent;
  let fixture: ComponentFixture<InternationalStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

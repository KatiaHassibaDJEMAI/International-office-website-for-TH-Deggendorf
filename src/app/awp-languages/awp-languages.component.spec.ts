import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwpLanguagesComponent } from './awp-languages.component';

describe('AwpLanguagesComponent', () => {
  let component: AwpLanguagesComponent;
  let fixture: ComponentFixture<AwpLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwpLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwpLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

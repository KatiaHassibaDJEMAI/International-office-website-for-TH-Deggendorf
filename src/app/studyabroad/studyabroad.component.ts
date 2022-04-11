import {Component, ViewChild, OnInit} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import courses from 'src/assets/data/courseDetails.json';

@Component({
  selector: 'app-studyabroad',
  templateUrl: './studyabroad.component.html',
  styleUrls: ['./studyabroad.component.css']
})
export class StudyabroadComponent implements OnInit {
  public coursesList:{name:string, code:string}[] = courses;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor() { }

  ngOnInit(): void {
  }

  
}

import { Component, OnInit } from '@angular/core';
import courses from 'src/assets/data/courseDetails.json';

@Component({
  selector: 'app-career-service',
  templateUrl: './career-service.component.html',
  styleUrls: ['./career-service.component.css']
})
export class CareerServiceComponent implements OnInit {
  public coursesList_int:{name:string, code:string}[] = courses;
  constructor() { }

  ngOnInit(): void {
  }

}

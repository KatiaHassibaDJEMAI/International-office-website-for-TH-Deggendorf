import { Component, OnInit } from '@angular/core';
import courses from 'src/assets/data/courseDetails.json';

@Component({
  selector: 'app-awp-languages',
  templateUrl: './awp-languages.component.html',
  styleUrls: ['./awp-languages.component.css']
})
export class AwpLanguagesComponent implements OnInit {
  public coursesList_int:{name:string, code:string}[] = courses;
  constructor() { }

  ngOnInit(): void {
  }

}

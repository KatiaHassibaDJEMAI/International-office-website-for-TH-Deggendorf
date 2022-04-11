import { Component, OnInit } from '@angular/core';
import professor from 'src/assets/data/contact.json';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  public prof:{name:string, code:string}[] = professor;
  constructor() { }

  ngOnInit(): void {
  }

}

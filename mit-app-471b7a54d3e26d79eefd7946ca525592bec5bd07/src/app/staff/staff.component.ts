import { Component, OnInit } from '@angular/core';
import staff from 'src/assets/data/contact.json';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  public prof:{name:string, code:string}[] = staff;
  constructor() { }

  ngOnInit(): void {
  }

}

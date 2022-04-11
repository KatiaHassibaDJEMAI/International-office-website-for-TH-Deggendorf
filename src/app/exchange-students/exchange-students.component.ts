import { Component, OnInit, Input, ElementRef, ViewChild, ViewChildren, QueryList } from "@angular/core";
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';
import courses from 'src/assets/data/courseDetails.json';

@Component({
  selector: 'app-exchange-students',
  templateUrl: './exchange-students.component.html',
  styleUrls: ['./exchange-students.component.css']
})
export class ExchangeStudentsComponent implements OnInit {
  
  public coursesList:{name:string, code:string}[] = courses;

@Input() icon = "arrow";
@ViewChildren("el", { read: ElementRef }) el: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }



  toggleHelper(i: number) {
    this.el.toArray()[i].nativeElement.classList.toggle("active");
    const panel = this.el.toArray()[i].nativeElement.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

}

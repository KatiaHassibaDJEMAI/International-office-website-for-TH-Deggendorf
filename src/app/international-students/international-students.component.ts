import { Component, OnInit, Input, ElementRef, ViewChild, ViewChildren, QueryList } from "@angular/core";
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';
import courses from 'src/assets/data/courseDetails.json';

@Component({
  selector: 'app-international-students',
  templateUrl: './international-students.component.html',
  styleUrls: ['./international-students.component.css']
})
export class InternationalStudentsComponent implements OnInit {

  
  public coursesList_int:{name:string, code:string}[] = courses;

@Input() icon = "arrow";
@ViewChildren("ele", { read: ElementRef }) ele: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  togglehelp(i: number) {
    this.ele.toArray()[i].nativeElement.classList.toggle("active");
    const panel_int = this.ele.toArray()[i].nativeElement.nextElementSibling;
    if (panel_int.style.maxHeight) {
      panel_int.style.maxHeight = null;
    } else {
      panel_int.style.maxHeight = panel_int.scrollHeight + "px";
    }
}

}

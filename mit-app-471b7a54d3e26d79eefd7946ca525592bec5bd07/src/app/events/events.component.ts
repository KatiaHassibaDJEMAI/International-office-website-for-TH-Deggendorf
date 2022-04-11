import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import events from 'src/assets/data/events.json';
import {EventDetails} from 'src/assets/data/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
   events =[];
 // public eventsList:{name:string, date:string}[] = events;

  constructor(
    private router: Router,
    private eventDetails: EventDetails
  ) { }

  ngOnInit() {
    this.events = this.eventDetails.getEvents();
  }

  showDetails(event) {
    this.router.navigate(["/event-details", event.eventID]);
  }

}

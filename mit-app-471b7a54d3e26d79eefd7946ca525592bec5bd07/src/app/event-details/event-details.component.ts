import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EventDetails} from 'src/assets/data/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event;

  constructor(
    private route: ActivatedRoute,
    private eventDetails: EventDetails
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.event = this.eventDetails.getEventById(params.id);
      console.log(this.event);
    });
  }

}

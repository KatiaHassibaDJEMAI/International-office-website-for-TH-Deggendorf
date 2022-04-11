import { Injectable } from '@angular/core';

@Injectable()
export class EventDetails {

  private events : {eventID: string, name: string, date: string, stime: string, etime: string, venue: string, description: string}[] = [
    {
      
    eventID:'1001',
    name : 'Wissenschaftliches Kolloquium', 
    date : '24 Jan',
    stime:'14:00', 
    etime:'15:00',
    venue: 'online | Zoom',
    description : 'Information about the Kickstart Incubator programme and the EXIST startup grant.\nThe Kickstart Incubator is a new programme for all the entrepreneurs of tomorrow. During the programme, you will not only receive extensive support from DIT’s Startup Campus experts, but also many other advantages including the chance to receive up to 7.500 EUR in funding to build your first prototype.'
  },
    {
    eventID:'1002',
    name : 'How to finance your startup idea', 
    date : '25 Jan',
    stime:'13:45', 
    etime:'14:00',
    venue: 'online | Zoom',
    description : 'The EXIST- Startup grant is a federally funded programme, that supports innovative startup ideas at universities and research institutions from an early phase onward. EXIST supports the development of the product/service idea, the preparation of a business plan, up to the company’s launch.\nThe THD Startup Campus team supports students, employees and alumni in both programmes. Together with our partners, we work to apply for these grants, securing financing options for our future entrepreneurs.'
  },
    {
      eventID:'1003',
      name : 'Online Seminar- Study Industrial Engineering in Germany  (Participating: DIT)', 
      date: '26 Jan',
      stime:'16:00', 
      etime:'17:00',
      venue: 'online | Zoom',
      description : 'Get an overview of our Bachelor Degree Course Industrial Engineering. Take the chance to speak directly with Prof. Dr. Raimund Brotsack, Program Director for Industrial Engineering at DIT.'
    }

    ]

  constructor() { }

  getEvents() {
    return this.events;
  }

  getEventById(eventID) {
    return this.events.find(e => e.eventID === eventID);
  }

}
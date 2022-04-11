import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { News } from './news.model';
import { ReadMoreNews } from './news.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';;
// import http from 'http';

// import {TopHeadlines } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: News[] = [];
  private newsUpdated = new Subject<News[]>();
  private cards =[
    {
        'id': '1',
        'title': ' Alumni work holds a treasure ',
        'image': '../assets/Dachverband_Alumni.webp',
        'description': 'Only a third of all Bavarian universities have permanent staff to handle their alumni work. While some colleges and universities ...'
    },
    {
        'id': '2',
        'title': ' Mini-battery for semi-conductor chips ',
        'image': '../assets/Silizium_Mikrobatterien.webp',
        'description': 'In microelectronics, we know that the smaller, more efficient and more mobile microchips are, the more diverse their applications...'
    },
    {
        'id': '3',
        'title': '€ 3.64 million in funding for \'med4PAN\' lighthouse',
        'image': '../assets/Projekt_med4PAN.webp',
        'description': 'Together with project partners, the district of Rottal-Inn has committed itself to improving medical care in the district of Rott...'
    },
    {
        'id': '4',
        'title': ' Premiere in Biberach ',
        'image': '../assets/Biberacher_Festspiele.webp',
        'description': 'Great honour for Deggendorf filmmakers: their short film \'Flucht\' (Escape) was presented at the beginning of November at the Bibe...'
    }
]
  private readmorenews: ReadMoreNews[] = [];
  private topheadlines = [ {
    'id': '1',
    'title': ' Kickstart for the start-up ',
    'description': 'Mohammad Abu Rezeq is the first prospective founder at the Deggendorf Institute of Technology (DIT) to receive funding for his start-up idea as an int...',
   'image': '../assets/image1.webp'
  },
  {
    'id': '2',
    'title': 'ECRI Lunch Talk – Destination Branding',
    'description': 'The European Campus Rottal-Inn (ECRI) of the Deggendorf Institute of Technology (DIT) rings in the new year with a new event format. The series called...',
    'image': '../assets/image2.webp'
  },
  {
    'id': '3',
      'title': 'DIT, Start-ups and Silicon Valley',
      'description': 'At the beginning of December, a delegation from the Deggendorf Institute of Technology (DIT) led by President Prof. Dr. Peter Sperber and Prof. Peter ...',
      'image': '../assets/Silicon_Valley.webp'
  }];

  constructor(private http: HttpClient) { }
  getNews(): Observable<News[]>{
    //this should be in the server bcs we are fetching from the server
    //now we created the observable we now need to subscribe to it from news compnent and news-details com
    //assign news array to a local variable
    return this.http.get<News[]>('http://localhost:3000/api/news')
    // .subscribe((newsData) => {
    //     this.news=newsData.news;
    //   });
  }
  getTopHeadlines() {
    return this.topheadlines;
  }
  getNewsById(id) {
    return this.cards.find(e => e.id === id);
  }
  getTopHeadlinesById(id) { 
    return this.topheadlines.find(e => e.id === id);
  }
  
  // getPostUpdateListener() {
  //   return this.newsUpdated.asObservable();
  // }
  
  // addPost(title: string, content: string) {
  //   const neww: News = {title: title, content: content};
  //   this.news.push(neww);
  //   this.newsUpdated.next([...this.news]);
  // }
}




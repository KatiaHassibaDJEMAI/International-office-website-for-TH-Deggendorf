import { Component, OnInit, EventEmitter } from '@angular/core';
import { ReadMoreNews } from './news.model';
import {TopHeadlines } from './news.model';
import {News } from './news.model';
import {NewsService } from './news.service';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



import {HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent  implements OnInit {
  messages = this.http.get<any[]>('http://localhost:3000');
  cards = [];
  //topheadlines = [];
  topheadlines: TopHeadlines[] = [];
  readmorenews: ReadMoreNews[] = [];
  news: News[] = [];
  // private news = [];

  postCreated = new EventEmitter();
  newNews = '';
 
  constructor(
    private http:HttpClient,
    private router: Router,
    private newsService: NewsService ) { 
    

  }

  // post(){
  //   this.http.post<any>('http://localhost:3000/users', {username: 'katy', password: 'katy'})
  //   .subscribe(next => console.log(next));
  // }
  // showDetails(card) {
  //   this.http.post<any>('http://localhost:3000/api/news', {})
  //   .subscribe(next => console.log(next));
  //   // this.router.navigate(["/news-details", card.id]);
  // }
  // showTopHeadlines(topheadline) {
  //   this.router.navigate(["/news-list", topheadline.id]);
  // }
 
  ngOnInit() {
    this.newsService.getNews().subscribe(
      (newsData) => {this.news =newsData ; 
        console.log(newsData)
    });
    //we have to subscribe to the observable returned from getNews method
    //assigns the data received from the observable to the local news array
    


    fetch('./assets/data/newsData.json').then(res => res.json())
      .then(json => {
        this.readmorenews = json;
      });
      fetch('./assets/data/topHeadlines.json').then(res => res.json())
      .then(json => {
        this.topheadlines = json;
      });
  }

}

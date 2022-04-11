import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  card;
  topheadline;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    /*
      When this component is initialized, get the param (cardss id)
      from the route.  Use the cards service to get the cardss details
      by cards id.
    */

        this.route.params.subscribe(params => {
        this.card = this.newsService.getNewsById(params.id);
        console.log(this.card);
      });

  }

}

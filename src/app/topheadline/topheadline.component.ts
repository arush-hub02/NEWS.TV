import { Component, OnInit } from '@angular/core';
import { NewstvService } from '../service/newstv.service';
@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrl: './topheadline.component.css',
})
export class TopheadlineComponent implements OnInit {
  constructor(private api: NewstvService) {}

  topHeadlinesData: any = [];

  ngOnInit(): void {
    this.api.newstvservice().subscribe((result) => {
      console.log(result.articles);
      // this.topHeadlinesData = result.articles;
      this.topHeadlinesData = result.articles
        .map((article: any) => article.title)
        .join(' • ');
    });
  }
}

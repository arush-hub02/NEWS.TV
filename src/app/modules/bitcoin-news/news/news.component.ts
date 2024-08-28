import { Component } from '@angular/core';
import { NewstvService } from '../../../service/newstv.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  constructor(private api: NewstvService) {}

  topHeadlinesData: any = [];

  ngOnInit(): void {
    this.api.newstvservice().subscribe((result) => {
      console.log(result.articles);
      // this.topHeadlinesData = result.articles;
      this.topHeadlinesData = result.articles;
    });
  }
}
